# Three Tier Application Deployment using Docker Compose

This project demonstrates the deployment of a **Three-Tier Web Application** using **Docker and Docker Compose**.
The application is containerized and divided into three layers: **Frontend, Backend, and Database**.

Three-tier architecture separates the application into independent layers which improves **scalability, maintainability, and security**.

---

# Architecture

```
User → Frontend → Backend API → Database
```

### Layers

**1️⃣ Presentation Layer (Frontend)**
Handles the user interface and user interaction.

**2️⃣ Application Layer (Backend)**
Processes requests, handles business logic, and communicates with the database.

**3️⃣ Data Layer (Database)**
Stores and retrieves application data.

---

# Tech Stack

| Layer            | Technology              |
| ---------------- | ----------------------- |
| Frontend         | HTML / CSS / JavaScript |
| Backend          | Node.js / Express       |
| Database         | MySQL                   |
| Containerization | Docker                  |
| Orchestration    | Docker Compose          |

---

# Project Structure

```
three-tier-application
│
├── frontend/          # Frontend application
│   └── Dockerfile
│
├── backend/           # Backend API
│   └── Dockerfile
│
├── database/          # Database configuration
│
├── docker-compose.yml # Docker Compose configuration
│
└── README.md
```

---

# Prerequisites

Before running this project ensure you have installed:

* Docker
* Docker Compose
* Git

Check installation:

```
docker --version
docker-compose --version
git --version
```

---

# Installation & Setup

## 1️⃣ Clone the repository

```
git clone https://github.com/CodeByAfroj/three-tier-application.git
cd three-tier-application
```

---

## 2️⃣ Build and start the containers

```
docker-compose up --build
```

This command will:

* Build frontend container
* Build backend container
* Pull database image
* Start all services

---

## 3️⃣ Run containers in background (optional)

```
docker-compose up -d
```

---

# Access the Application

After running the containers:

Frontend

```
http://localhost:3000
```

Backend API

```
http://localhost:5000
```

Database

```
localhost:3306
```

---

# Docker Services

Docker Compose manages the following services:

| Service  | Description     |
| -------- | --------------- |
| frontend | User interface  |
| backend  | Application API |
| database | MySQL database  |

All services communicate internally through Docker networking.

---

# Useful Commands

Stop containers

```
docker-compose down
```

View running containers

```
docker ps
```

View logs

```
docker-compose logs
```

Rebuild containers

```
docker-compose up --build
```

---

# Learning Outcomes

By building this project you will learn:

* Three Tier Architecture
* Docker containerization
* Multi-container applications using Docker Compose
* Backend and database connectivity
* Basic DevOps deployment practices

---

# Future Improvements

Possible improvements for this project:

* Kubernetes deployment
* CI/CD using GitHub Actions
* Cloud deployment (AWS / GCP / Azure)
* Monitoring with Prometheus and Grafana
* Load balancing with Nginx

---

# Author

**Afroj Mulani**
GitHub: https://github.com/CodeByAfroj
Email: [mulaniafroj6@gmail.com](mailto:mulaniafroj6@gmail.com)

---

# License

This project is open-source and available under the **MIT License**.
