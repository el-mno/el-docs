---
sidebar_position: 1
---

# AWS Lambda vs. AWS Fargate

Closer look into Amazon Web Services serverless solutions: Lambda and Fargate

### Overview
**AWS Lambda** and **AWS Fargate** are both serverless computing solutions offered by Amazon Web Services (AWS) that serve distinct advantages depending on your use case. Let's take a closer look as to where and when each of the services shine.

## Key Attributes

#### AWS Lambda
* 15 minute limitation for processes (cannot be altered within AWS)
* Concurrency limit for all functions in a region: 1000 (can be changed by AWS)

#### AWS Fargate
* Containerized jobs: Docker Containers + Elastic Container Service