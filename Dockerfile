# Use the official PostgreSQL image from Docker Hub
FROM postgres:latest

# Set environment variables
ENV POSTGRES_DB=pg_mastery
ENV POSTGRES_USER=dennis
ENV POSTGRES_PASSWORD=roger_that

# Copy initialization scripts
COPY src/init.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432
