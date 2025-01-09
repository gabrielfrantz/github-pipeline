FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy application files
COPY app.js ./

# Expose port 5000
EXPOSE 5000

# Command to run the application
CMD ["node", "app.js"]