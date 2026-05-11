# Innovatech Chile - Gestión de Microservicios EP2

### Infraestructura DevOps: Contenerización, Cloud y Automatización

---

## Información General

| Campo             | Detalles                           |
| ----------------- | ---------------------------------- |
| **Proyecto** | Innovatech Chile - Solución Logística |
| **Asignatura** | Introducción a Herramientas DevOps |
| **Sección** | 001D                       |
| **Docente** | José Campos                        |
| **Integrantes** | Mayckol Mardones & Martín Baza   |
| **Fecha de Entrega** | 11 de Mayo, 2026                |

---

## Introducción
Este proyecto implementa una arquitectura de microservicios robusta para **Innovatech Chile**, diseñada bajo la metodología DevOps. La solución abarca desde el desarrollo contenerizado con Docker hasta el despliegue automatizado (CI/CD) en la nube de AWS.

El objetivo principal es garantizar que cada cambio en el código se despliegue de forma segura, rápida y sin intervención manual, cumpliendo con los estándares de escalabilidad exigidos.

---

## Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Infraestructura** | AWS EC2 (Amazon Linux) |
| **Orquestación** | Docker & Docker Compose |
| **CI/CD** | GitHub Actions & Docker Hub |
| **Backend 1** | Java - Spring Boot (Ventas) |
| **Backend 2** | Java - Spring Boot (Despachos) |
| **Frontend** | React + Vite |
| **Base de Datos** | MySQL / PostgreSQL |

---
# Arquitectura del Sistema

La arquitectura del proyecto se encuentra dividida en tres componentes principales:

## Frontend

Aplicación web encargada de la interacción con el usuario.

### Características

- Interfaz responsive
- Comunicación con APIs REST
- Despliegue mediante Nginx
- Contenerización independiente

---

## Backend de Ventas

Microservicio encargado de la lógica de ventas.

### Funcionalidades

- Gestión de productos
- Gestión de ventas
- API REST
- Conexión a base de datos MySQL

---

## Backend de Despachos

Microservicio encargado de la gestión logística y despachos.

### Funcionalidades

- Administración de despachos
- Gestión de estados de entrega
- API REST independiente
- Comunicación mediante Docker Network

---

# Contenerización 🐳

Cada componente del sistema fue contenerizado utilizando Docker.

## Frontend

Ubicación:

```bash
/front_despacho
```

### Tecnologías utilizadas

- Node.js
- HTML/CSS/JS
- Nginx

### Características implementadas

- Multi-stage build
- Optimización de imagen
- Exposición mediante puerto HTTP

---

## Backend Ventas

Ubicación:

```bash
/back-Ventas_SpringBoot
```

### Características

- Maven build
- Aplicación Spring Boot
- Empaquetado `.jar`
- Puerto expuesto para API REST

---

## Backend Despachos

Ubicación:

```bash
/back-Despachos_SpringBoot
```

### Características

- Arquitectura REST
- Maven
- Ejecución independiente
- Comunicación interna mediante Docker

---

# Orquestación con Docker Compose

La infraestructura completa fue orquestada utilizando Docker Compose.

## Servicios implementados

| Servicio | Función | Puerto |
|----------|----------|---------|
| `frontend` | Interfaz cliente | 8080 |
| `backend-ventas` | API ventas | 8082 |
| `backend-despachos` | API despachos | 8081 |
| `mysql-db` | Base de datos | 3306 |

## Características implementadas

- Redes internas entre contenedores
- Persistencia mediante volúmenes
- Comunicación entre microservicios
- Inicialización automática de servicios

---

# Pipeline CI/CD ⚙️

Se implementó un pipeline automatizado utilizando GitHub Actions.

## Flujo de Automatización

1. Push a rama principal
2. Build automático de contenedores
3. Verificación de servicios
4. Despliegue en servidor cloud
5. Actualización automática de contenedores

## Características implementadas

- Automatización de despliegues
- Uso de GitHub Secrets
- Integración con Docker
- Pipeline centralizado

---
# Infraestructura Cloud ☁️

La aplicación fue desplegada utilizando una instancia EC2 en AWS.

## Componentes utilizados

- EC2
- Security Groups
- Docker Engine
- Docker Compose
- Linux Server

## Seguridad

Se configuraron reglas de acceso para:

- HTTP
- SSH
- Comunicación interna entre servicios

---

# Estructura del Proyecto

```bash
EP2-Innovatech/
│
├── front_despacho/
│
├── back-Ventas_SpringBoot/
│
├── back-Despachos_SpringBoot/
│
├── docker-compose.yml
│
└── .github/workflows/
```

---

# Ejecución del Proyecto

## Clonar repositorio

```bash
git clone https://github.com/Mayckol2005/EP2-Innovatech.git
```

## Levantar servicios

```bash
docker compose up --build
```

## Ver contenedores activos

```bash
docker ps
```

---

# Evidencias

## Frontend en ejecución

```bash
IP_PUBLICA:8080
```

## APIs Backend

### Backend Ventas

```bash
http://localhost:8081
```

### Backend Despachos

```bash
http://localhost:8080
```

# Resultados Obtenidos

El proyecto permitió implementar exitosamente:

- Arquitectura basada en microservicios
- Despliegue cloud
- Contenerización completa
- Integración continua
- Automatización de despliegues
- Separación de responsabilidades
- Comunicación entre servicios

---

# Conclusión

Este proyecto permitió aplicar herramientas modernas de desarrollo e infraestructura utilizando metodologías DevOps.

La integración de tecnologías como Docker, Spring Boot y GitHub Actions permitió construir una solución modular, automatizada y preparada para futuros entornos productivos.

Además, la arquitectura implementada facilita futuras mejoras, escalabilidad y mantenimiento del sistema.

---
