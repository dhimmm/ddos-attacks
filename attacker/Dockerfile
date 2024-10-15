
# Dockerfile for Attacker container
FROM node:16

WORKDIR /app
COPY scripts/ /app/scripts/

# Install dependencies if necessary (e.g., request module)
RUN npm install

# Run an interactive shell to launch the attacks
CMD ["bash"]
