# Use an official Python runtime as a base image
FROM python:3.12.4-slim

# Set the working directory in the container
WORKDIR /app

# Copy all local files to the container
COPY . /app

# Install required packages
RUN pip install --no-cache-dir -r requirements.txt

# Run the service screener script with all command line arguments givne in docker run
ENTRYPOINT ["python", "main.py"]
# CMD ["--help"]
