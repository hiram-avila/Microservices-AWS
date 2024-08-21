# Microservices Application on AWS

Este proyecto es una aplicación basada en microservicios desplegada en AWS, utilizando Docker y AWS Fargate. La aplicación consta de tres microservicios: `users`, `products`, y `payments`.

## Tecnologías Utilizadas

![AWS Fargate](https://img.shields.io/badge/AWS_Fargate-FF9900?style=for-the-badge&logo=amazon-ecs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Amazon ECS](https://img.shields.io/badge/Amazon_ECS-FF9900?style=for-the-badge&logo=amazon-ecs&logoColor=white)
![Amazon S3](https://img.shields.io/badge/Amazon_S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## Arquitectura

![image](https://github.com/user-attachments/assets/498a28a6-fb35-466f-bf4c-ae00b94a9f81)


- **Amazon API Gateway**: Para gestionar y exponer las API REST.
- **AWS Fargate**: Para ejecutar los contenedores Docker de los microservicios sin necesidad de gestionar servidores.
- **Docker**: Para contenerizar los microservicios, asegurando un entorno consistente en desarrollo y producción.
- **Amazon ECS**: Para orquestar la ejecución de contenedores en la nube.
- **Amazon S3**: Para almacenar recursos estáticos y archivos generados por la aplicación.
- **Amazon CloudFront**: CDN para servir contenido estático de manera rápida y segura a nivel global.
- **CI/CD**: Integración y despliegue continuo utilizando GitHub Actions.

## Repositorio Frontend
[Repositorio Frontend](https://github.com/hiram-avila/S3-AWS-e-commerce)

## Características

- **Autenticación**: Implementada en los microservicios y gestionada a través de Amazon API Gateway.
- **Gestión de Productos**: Endpoints para operaciones CRUD de productos.
- **Escalabilidad**: Desplegado en AWS, con capacidad de escalar según la demanda.

## Instalación y Despliegue

### Prerrequisitos

- Node.js
- Docker
- AWS CLI configurado
- Una cuenta de AWS con permisos para Fargate, S3, API Gateway, y ECS.

### Configuración Local

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/microservices-app.git
    cd microservices-app
    ```

2. Instalar dependencias para cada microservicio:
    ```bash
    cd users
    npm install
    cd ../products
    npm install
    cd ../payments
    npm install
    ```

3. Crear un archivo `.env` para cada microservicio con las variables de entorno necesarias:
    ```plaintext
    # .env para users
    DB_URI=<tu-conexion-a-la-base-de-datos>
    PORT=3000
    ```

4. Construir y correr los contenedores Docker localmente:
    ```bash
    docker build -t users-service ./users
    docker build -t products-service ./products
    docker build -t payments-service ./payments

    docker run -d -p 3000:3000 --name users-service users-service
    docker run -d -p 3001:3001 --name products-service products-service
    docker run -d -p 3002:3002 --name payments-service payments-service
    ```

### Despliegue en AWS

1. **AWS Fargate**: Crear un cluster ECS y configurar tareas para cada microservicio.
2. **Docker en Fargate**: Configurar los servicios en Fargate para ejecutar los contenedores Docker.
3. **API Gateway**: Configurar Amazon API Gateway para enrutar las solicitudes a los microservicios correctos.
4. **CloudFront y S3**: Desplegar la aplicación frontend en S3 y usar CloudFront para distribución global.

## Uso

### Endpoints

- **Users Service**: `/api/users`
- **Products Service**: `/api/products`
- **Payments Service**: `/api/payments`

## License

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
