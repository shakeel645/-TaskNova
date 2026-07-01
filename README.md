# 🚀 TaskNova – Smart Task Management System

## 📖 Project Overview

TaskNova is a modern Full Stack Smart Task Management System developed using **Python (Flask), HTML5, CSS3, JavaScript, SQLite, and SQLAlchemy**. The application helps users efficiently organize, manage, and track their daily tasks through a modern and responsive web interface.

The system provides task creation, updating, deletion, task completion tracking, productivity monitoring, search functionality, filtering options, and a beautiful dashboard inspired by modern SaaS applications.

---

# 🎯 Project Objective

The objective of TaskNova is to provide an easy-to-use task management platform that improves productivity by allowing users to organize, prioritize, and monitor their daily tasks efficiently.

---

# ✨ Key Features

## 📋 Task Management

- ➕ Add New Tasks
- ✏️ Edit Existing Tasks
- 🗑 Delete Tasks
- ✅ Mark Tasks as Completed
- 🔄 Update Task Information

---

## 📊 Dashboard

- 📌 Total Tasks Counter
- ✅ Completed Tasks Counter
- ⏳ Pending Tasks Counter
- 📈 Productivity Progress Bar

---

## 🔍 Search & Filter

- 🔍 Search Tasks Instantly
- 📋 View All Tasks
- ✅ View Completed Tasks
- ⏳ View Pending Tasks

---

## 🎨 User Interface

- 💎 Modern Glassmorphism Design
- 🌙 Dark Mode
- 📱 Responsive Design
- ✨ Smooth Animations
- 🎯 Interactive Dashboard
- 🚀 Modern SaaS Inspired UI

---

## 💾 Database Features

- SQLite Database
- SQLAlchemy ORM
- Persistent Data Storage
- Full CRUD Operations

---

# 🛠 Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend

- Python
- Flask

## Database

- SQLite
- SQLAlchemy

## Tools

- Visual Studio Code
- Git
- GitHub

---

# 📂 Project Architecture

```text
Frontend (HTML + CSS + JavaScript)
            │
            ▼
Flask Backend
            │
            ▼
REST API
            │
            ▼
SQLAlchemy ORM
            │
            ▼
SQLite Database
```

---

# 📁 Folder Structure

```text
TaskNova/
│
├── backend/
│   ├── app.py
│   ├── database.db
│   ├── requirements.txt
│   │
│   ├── models/
│   │   ├── __init__.py
│   │   └── task.py
│   │
│   ├── templates/
│   │   └── index.html
│   │
│   └── static/
│       ├── css/
│       │   └── style.css
│       ├── js/
│       │   └── script.js
│       └── images/
│
└── README.md
```

---

# 🔄 System Workflow

```text
User Opens Application
          │
          ▼
Enter Task Details
          │
          ▼
Click Add Task
          │
          ▼
JavaScript Sends Request
          │
          ▼
Flask REST API
          │
          ▼
SQLite Database
          │
          ▼
Updated Task List Displayed
          │
          ▼
User Can Edit, Delete, Complete,
Search and Filter Tasks
```

---

# 📊 Project Modules

### 🏠 Home Dashboard

- Hero Section
- Task Statistics
- Productivity Tracker

### ➕ Task Management

- Add Task
- Update Task
- Delete Task
- Complete Task

### 📈 Productivity

- Progress Bar
- Completed Percentage
- Pending Tasks

### 🔍 Search & Filter

- Search Tasks
- Filter by Status

### 💾 Database

- Store Tasks
- Update Records
- Delete Records
- Retrieve Data

---

# 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tasks` | Fetch All Tasks |
| POST | `/api/tasks` | Add New Task |
| PUT | `/api/tasks/<id>` | Update Task |
| DELETE | `/api/tasks/<id>` | Delete Task |

---

# 💻 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/TaskNova.git
```

## Navigate to Backend

```bash
cd TaskNova/backend
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run Application

```bash
python app.py
```

## Open Browser

```text
http://127.0.0.1:5000
```

---

# 📈 Skills Demonstrated

- Python Programming
- Flask Framework
- REST API Development
- SQLAlchemy ORM
- SQLite Database
- CRUD Operations
- HTML5
- CSS3
- JavaScript
- Responsive Web Design
- Git & GitHub

---

# 🚀 Future Enhancements

- 🔐 User Authentication
- 👤 User Profile
- 📅 Calendar Integration
- 🔔 Email Notifications
- 📂 Task Categories
- 📊 Analytics Dashboard
- 📤 Export Tasks to PDF/CSV
- 📥 Import Tasks
- ☁ Cloud Deployment

---

# 📄 License

This project is developed for educational, learning, and portfolio purposes.

---

# 👨‍💻 Developer

**Shaik Shakeel**

🎓 B.Tech – Computer Science & Engineering (IoT)

💻 Python Full Stack Developer

🌐 Passionate about Full Stack Development, Python, AI, and Modern Web Technologies.

---

## ⭐ If you like this project, don't forget to Star this repository.

Made with ❤️ using Python, Flask, HTML, CSS, JavaScript, and SQLite.