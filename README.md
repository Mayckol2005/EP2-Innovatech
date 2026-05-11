# Innovatech Chile - Gestión de Microservicios EP2

### Infraestructura DevOps: Contenerización, Cloud y Automatización

---

## 📋 Información General

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

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Infraestructura** | AWS EC2 (Ubuntu Server) |
| **Orquestación** | Docker & Docker Compose |
| **CI/CD** | GitHub Actions & Docker Hub |
| **Backend 1** | Java - Spring Boot (Ventas) |
| **Backend 2** | Java - Spring Boot (Despachos) |
| **Frontend** | React + Vite |
| **Base de Datos** | MySQL / PostgreSQL |

---
## Arquitectura de Microservicios (IE7)

La solución se divide en tres componentes principales, cada uno aislado en su propio contenedor pero comunicados mediante una red interna de Docker:

* **`front_despacho`**: Interfaz de usuario servida mediante Nginx optimizado.
* **`back-Ventas_SpringBoot`**: Microservicio encargado de la lógica comercial.
* **`back-Despachos_SpringBoot`**: Microservicio para la gestión logística.
* **Persistencia**: Base de datos gestionada mediante volúmenes para asegurar que los datos no se pierdan al reiniciar contenedores.

---

## Contenerización (IE2 & IE6)

Se han implementado Dockerfiles optimizados para cada servicio, destacando las siguientes prácticas:

1.  **Multi-stage Builds**: Separamos la construcción del artefacto (Maven/Node) de la imagen final de ejecución para reducir el peso y mejorar la seguridad.
2.  **Seguridad**: Configuración de usuarios no-root para la ejecución de procesos dentro del contenedor.
3.  **Orquestación**: Uso de un archivo `docker-compose.yml` centralizado para gestionar variables de entorno, redes y dependencias entre servicios.

---
