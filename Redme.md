# Three Tier Application Deployment using Docker Compose

This project demonstrates the deployment of a **Three-Tier Web Application** using **Docker and Docker Compose**.  
The application is containerized and divided into three layers: **Frontend, Backend, and Database**.

Three-tier architecture separates the application into independent layers which improves scalability, maintainability, and security. :contentReference[oaicite:0]{index=0}

---

# Architecture
  User → Frontend → Backend API → Database
### Layers

1️⃣ **Presentation Layer (Frontend)**  
Handles the user interface and user interaction.

2️⃣ **Application Layer (Backend)**  
Processes requests, handles business logic, and communicates with the database.

3️⃣ **Data Layer (Database)**  
Stores and retrieves application data.

---

# Tech Stack

| Layer | Technology |
|------|-------------|
| Frontend | HTML / CSS / JavaScript |
| Backend | Node.js / Express |
| Database | MySQL |
| Containerization | Docker |
| Orchestration | Docker Compose |

---

# Project Structure
three-tier-application
│
├── frontend
│   └── UI (HTML / React)
│
├── backend
│   └── API server (Node / Java / Python)
│
├── database
│   └── MongoDB / MySQL
│
├── docker-compose.yml
├── Dockerfile


---

# Prerequisites

Before running this project ensure you have installed:

- Docker
- Docker Compose
- Git

---

# Installation & Setup


## 1 Clone the repository





## Author
**CodeByAfroj**  
*Date: 2026-02-27*  
*Contact: <mulaniafroj6@gmail.com>*  

