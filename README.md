# TEK2 Week 04 Example

A minimal Spring Boot application used as a reference for the [TEK2 deployment tutorial](https://github.com/tgrundtvig/TEK2-Student/blob/main/week-04-vms-linux-server/tutorials/own-project-azure.md).

## What's in here

- **Spring Boot 3.3.0** backend with a single REST endpoint (`/api/messages`)
- **Static frontend** (HTML/CSS/JS) served by Spring Boot from `src/main/resources/static/`
- **MySQL** database
- **Dockerfile** for production (multi-stage build)
- **Dockerfile.build** for local development (JDK 21 + Maven 3.9.12)
- **docker-compose.yml** for local development
- **docker-compose.prod.yml** for production deployment
- **GitHub Actions workflow** for CI/CD

## Quick start

1. Clone this repo
2. Create a `.env` file in the project root:
   ```
   DB_PASSWORD=root
   ```
3. Run:
   ```bash
   docker compose up --build
   ```
4. Open http://localhost:8080

## Build without Java installed

```bash
docker compose run --rm build mvn clean package
```

## Project structure

```
├── pom.xml                          ← Spring Boot project
├── Dockerfile                       ← Production image (multi-stage)
├── Dockerfile.build                 ← Dev build environment
├── docker-compose.yml               ← Local development
├── docker-compose.prod.yml          ← Production deployment
├── .github/workflows/ci.yml         ← CI/CD pipeline
├── .env                             ← Database password (git-ignored)
├── .gitignore
└── src/main/
    ├── java/com/example/demo/
    │   ├── DemoApplication.java     ← Main class
    │   ├── Message.java             ← JPA entity
    │   ├── MessageRepository.java   ← Database access
    │   └── MessageController.java   ← REST API
    └── resources/
        ├── application.properties   ← Database config
        └── static/
            ├── index.html           ← Frontend page
            ├── style.css
            └── script.js
```
