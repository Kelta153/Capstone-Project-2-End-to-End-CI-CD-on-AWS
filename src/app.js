const express = require("express");

const startTime = new Date().toISOString();

const app = express();

// Home route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>AWS CI/CD Capstone</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f4f4f4;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }

        .card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,.15);
          width: 500px;
        }

        h1 {
          color: #232f3e;
          margin-top: 0;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin: 10px 0;
          font-size: 18px;
        }

        .success {
          color: green;
          font-weight: bold;
          margin-top: 20px;
        }
      </style>
    </head>

    <body>
      <div class="card">
        <h1>AWS CI/CD Capstone Project-V2</h1>

        <p><strong>Application Started:</strong> ${startTime}</p>

        <p>This application is deployed using an AWS CI/CD pipeline.</p>

        <ul>
          <li>GitHub ✓</li>
          <li>CodePipeline ✓</li>
          <li>CodePipeline-manual-approval ✓</li>
          <li>CodeBuild ✓</li>
          <li>Amazon ECR ✓</li>
          <li>Amazon ECS (Fargate) ✓</li>
          <li>Application Load Balancer ✓</li>
          <li>SNS & CloudWatch Configuration ✓</li>
        </ul>

        <p class="success">
          Application deployed successfully!
        </p>
      </div>
    </body>
    </html>
  `);
});

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Application is healthy",
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    application: "AWS CI/CD Capstone",
    version: "1.0.0",
    runtime: "Node.js",
    environment: process.env.NODE_ENV || "development",
  });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

module.exports = app;
