# PathFinder — Kubernetes Deployment

This project is a **three-tier web application** (presentation, application, data) packaged as containers and **deployed on Kubernetes**. Images are built and pushed to **GitHub Container Registry (GHCR)** on every push to `main`, and the pipeline updates the image tags in the Kubernetes manifests.

The stack is split into a React frontend, a Node.js API, and a MongoDB database. Separating these layers improves **scalability, maintainability, and security**.

---

## Home Page

<img src="client/src/assets/home.png">

---

## Architecture

```
User → Ingress (NGINX) → Frontend Service → Frontend pods
                        → Backend Service  → Backend pods → MongoDB
```

### Layers

**1. Presentation (frontend)**  
React SPA served over HTTP (container port 80).

**2. Application (backend)**  
Express API (container port 3000); traffic under `/api` is routed to the backend via Ingress.

**3. Data**  
MongoDB, accessed by the backend using credentials from a Kubernetes `Secret`.

---

## Tech Stack

| Layer            | Technology                                      |
| ---------------- | ----------------------------------------------- |
| Frontend         | React, Vite, Tailwind CSS                       |
| Backend          | Node.js, Express, Mongoose                      |
| Database         | MongoDB                                         |
| Containers       | Docker (multi-arch: `linux/amd64`, `linux/arm64`) |
| Registry         | GHCR (`ghcr.io/codebyafroj/frontend`, `.../backend`) |
| Orchestration    | Kubernetes                                      |
| Ingress          | NGINX Ingress Controller                        |
| CI/CD            | GitHub Actions (`.github/workflows/ci-cd.yml`)  |

---

## Project Structure

```
three-tier-application
├── client/                    # React (Vite) frontend + Dockerfile
├── server/                    # Express API + Dockerfile
├── kubernetes/                # Deployment manifests
│   ├── frontend-deployment.yaml
│   ├── backend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── backend-service.yaml
│   ├── ingress.yaml
│   └── sealed-secret.yaml     # optional; use if you adopt Sealed Secrets
├── .github/workflows/
│   └── ci-cd.yml              # test, build/push images, bump K8s image tags
└── README.md
```

---

## Prerequisites

**Local development**

- Node.js 20+
- npm
- Git
- MongoDB (local or remote URI)

**Kubernetes cluster**

- `kubectl` configured for your cluster
- [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/deploy/) installed (`ingressClassName: nginx`)
- Ability to create `Secret` objects (for the database and registry pull, if the cluster cannot pull public GHCR images anonymously)

---

## Local Development

### 1. Clone the repository

```
git clone https://github.com/CodeByAfroj/three-tier-application.git
cd three-tier-application
```

### 2. Backend

Create `server/.env` with at least `MONGO_URI` (and any other variables your server expects). Then:

```
cd server
npm ci
npm start
```

The API listens on `PORT` from the environment, or **3000** by default (matching the Kubernetes Service and container port).

### 3. Frontend

```
cd client
npm ci
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`). Point the client at your API base URL if it differs from the default in `client` config.

---

## Kubernetes Deployment

### 1. Secrets the cluster must have

Before applying workloads:

1. **`db-secret`** — keys expected by the backend (for example `MONGO_URI` and any other env vars loaded via `envFrom`). The backend deployment references:

   ```yaml
   envFrom:
     - secretRef:
         name: db-secret
   ```

2. **`github-container-registry`** — `docker-registry` type secret so nodes can pull private images from GHCR, if your images require authentication. The deployments reference:

   ```yaml
   imagePullSecrets:
     - name: github-container-registry
   ```

Create these with `kubectl create secret ...` or your preferred secret manager (for example [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) if you use `kubernetes/sealed-secret.yaml`).

### 2. Apply manifests

From the repository root:

```
kubectl apply -f kubernetes/frontend-service.yaml
kubectl apply -f kubernetes/backend-service.yaml
kubectl apply -f kubernetes/frontend-deployment.yaml
kubectl apply -f kubernetes/backend-deployment.yaml
kubectl apply -f kubernetes/ingress.yaml
```

Adjust **image tags** in the deployment YAML files if you are not using the tags committed by CI (they track the Git SHA of the last successful build).

### 3. Ingress and DNS

The sample Ingress uses host **`app.myapp.local`**. Either:

- Add that hostname to DNS pointing at your ingress load balancer IP, or  
- For local clusters, add a line to `/etc/hosts` mapping `app.myapp.local` to the ingress address.

Routing (NGINX Ingress annotations):

- **`/api`** → `backend-service:3000`
- **`/`** → `frontend-service:80`

---

## CI/CD (summary)

On push to `main`, GitHub Actions:

1. Runs `npm ci` in `client` and `server`.
2. Builds multi-arch Docker images and pushes `ghcr.io/codebyafroj/frontend:<sha>` and `ghcr.io/codebyafroj/backend:<sha>`.
3. Updates `kubernetes/frontend-deployment.yaml` and `kubernetes/backend-deployment.yaml` with the new tags and commits the change.

Your cluster still needs to **apply** or **sync** those manifests (manually, GitOps, or another CD step) depending on how you operate Kubernetes.

---

## Useful Commands

| Task              | Command                          |
| ----------------- | -------------------------------- |
| Apply all YAML    | `kubectl apply -f kubernetes/`   |
| Pods status       | `kubectl get pods -l app=frontend` (or `app=backend`) |
| Ingress address   | `kubectl get ingress`            |
| Backend logs      | `kubectl logs -l app=backend --tail=100` |

---

## Learning Outcomes

By working with this project you can practice:

- Three-tier architecture and service boundaries
- Container images and a container registry
- Kubernetes Deployments, Services, and Ingress
- Separating configuration from images using Secrets
- Basic CI/CD with GitHub Actions

---

## Future Improvements

- GitOps (Argo CD / Flux) to reconcile manifests automatically
- Managed MongoDB or an in-cluster database with backups
- TLS certificates on Ingress (cert-manager)
- Monitoring and alerting (for example Prometheus and Grafana)

---

## Author

**Afroj Mulani**  
GitHub: https://github.com/CodeByAfroj  
Email: [mulaniafroj6@gmail.com](mailto:mulaniafroj6@gmail.com)

---

## License

This project is open-source and available under the **MIT License**.
