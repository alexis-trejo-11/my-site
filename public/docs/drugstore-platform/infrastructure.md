# Deployment & Infrastructure

The platform runs on **AWS EKS** with full infrastructure-as-code via Terraform.

## Stack

| Component | Technology |
|-----------|-----------|
| Container runtime | Docker + Amazon EKS |
| Container registry | Amazon ECR |
| Database | Amazon RDS (MySQL 8) |
| Secrets | AWS Secrets Manager |
| Message broker | Amazon MSK (Kafka) |
| Object storage | Amazon S3 |
| Notifications | Amazon SNS |
| IaC | Terraform |
| CI/CD | GitHub Actions |

## Kubernetes Setup

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: drugstore-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: drugstore-api
  template:
    spec:
      containers:
        - name: api
          image: ecr.aws/drugstore-platform:latest
          ports:
            - containerPort: 8080
          env:
            - name: DB_URL
              valueFrom:
                secretKeyRef:
                  name: drugstore-secrets
                  key: db-url
```

## CI/CD Pipeline

```
Push → GitHub Actions
  ├── Unit tests (JUnit 5)
  ├── Integration tests (Testcontainers)
  ├── Build Docker image
  ├── Push to ECR
  └── kubectl rollout restart deployment/drugstore-api
```

## Environments

| Environment | URL | Notes |
|-------------|-----|-------|
| Development | localhost:8080 | Docker Compose |
| Staging | staging-api.drugstore.local | Mirrors production |
| Production | api.drugstore.alexis-trejo.com | EKS, multi-AZ |
