# Define la imagen base con Java 17
FROM openjdk:17-jdk

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo JAR de la aplicación al contenedor
COPY target/proyecto-vilches-0.0.1-SNAPSHOT.jar app.jar

# Define el comando de inicio de la aplicación
CMD ["java", "-jar", "app.jar"]
