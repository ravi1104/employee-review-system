# Employee Review System

This application allows employees to submit feedback regarding each other's performance. It includes functionalities for admins to manage employees, performance reviews, and for employees to provide feedback.

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Video Demonstration](#video-demonstration)
- [GitHub Repository](#github-repository)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Employee Review System facilitates the management of employee feedback and performance reviews. It offers an admin interface for managing employees, reviews, and assigning participants for reviews. Employees can view pending reviews and submit feedback.

## Tech Stack

- Node.js
- Express.js
- MongoDB (or your preferred database)
- (Include any other relevant technologies/frameworks used)

## Features

### Admin View

- Add/remove/update/view employees
- Add/update/view performance reviews
- Assign employees to participate in another employee's performance review

### Employee View

- List of performance reviews requiring feedback
- Submit feedback

### Authentication

- Single login for admin and employees
- Employee registration (admin privileges required)

## Folder Structure

employee-review-system/  
│  
├── public/  
│   ├── css/  
│   └── js/  
│  
├── views/  
│   ├── partials/  
│   └── (EJS templates or your chosen view engine)  
│  
├── routes/  
│   └── (Express routes)  
│  
├── controllers/  
│   └── (Controllers handling app logic)  
│  
├── repositories/  
│   ├── employeeRepository.js  
│   └── reviewRepository.js  
│  
├── models/  
│   ├── Employee.js  
│   └── Review.js  
│  
└── config/  
    └── db.js  



- **public/**: Contains CSS and JS files for styling and client-side scripts.
- **views/**: Contains templates for rendering views.
- **routes/**: Defines Express routes for different functionalities.
- **controllers/**: Includes controllers for handling app logic.
- **repositories/**: Manages interactions with the database.
- **models/**: Contains data models representing employees, reviews, and other relevant entities.
- **config/**: Includes the database configuration setup.

## Installation

1. Clone the repository:
   ```bash
   https://github.com/ravi1104/employee-review-system.git

Video Demonstration
Include a link to the video demonstrating the functionalities of your application.
[ Youtuve Video link](www.google.com)
