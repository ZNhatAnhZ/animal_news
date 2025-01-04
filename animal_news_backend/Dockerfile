FROM maven:latest AS builder
COPY pom.xml pom.xml
COPY src src
RUN mvn -B package --file ./pom.xml

FROM openjdk:21
EXPOSE 8080
COPY --from=builder target/animal_news-0.0.1-SNAPSHOT.jar animal_news-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/animal_news-0.0.1-SNAPSHOT.jar"]