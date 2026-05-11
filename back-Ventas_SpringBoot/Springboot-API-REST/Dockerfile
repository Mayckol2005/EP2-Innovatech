# Etapa 1: Build (Construcción con dependencias cacheadas)
FROM maven:3.8.5-openjdk-17-slim AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

# Etapa 2: Producción (Usuario no root 'spring' por seguridad)
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
RUN groupadd -r spring && useradd -r -g spring spring
USER spring:spring
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "app.jar"]