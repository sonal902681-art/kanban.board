# 🗂️ MERN Kanban Board – Task Management Web Application

A full-stack collaborative Kanban board built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This application enables multiple users to efficiently manage and track tasks across different stages like **To Do**, **In Progress**, and **Done**, with real-time updates.

---

## 🚀 Features

* 👥 Multi-user collaborative task management
* 📌 Task organization using Kanban workflow (To Do, In Progress, Done)
* 🔄 Real-time updates using Socket.io (no page reload required)
* 🌐 RESTful API built with Node.js and Express
* ☁️ Cloud database integration using MongoDB Atlas
* 🔗 Seamless frontend-backend communication via Axios

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Socket.io
* CORS
* Dotenv

---

## 📁 Project Structure

kanban-app/
│
├── server/
│   ├── routes/
│   ├── models/
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone -- https://github.com/sonal902681-art/kanban.board
cd kanban-app
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add:

```
PORT=8000
MONGO_URL=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

---

### 3️⃣ Setup Frontend

```bash
cd ../client
npm install
npm start
```

Frontend will run on:
👉 http://localhost:3000

---

## 📌 API Test

**Endpoint:**

```
GET http://localhost:8000/
```

**Response:**

```
API is running...
```

---

## 📚 Learning Outcomes

* Built a complete full-stack application using the MERN stack
* Designed and implemented RESTful APIs
* Integrated MongoDB Atlas for cloud data storage
* Enabled real-time communication using Socket.io
* Developed a collaborative task management system

---

## 🙋‍♀️ Author

**Sonal Singh**

---

## 📄 License

This project is open-source and available under the **MIT License**.
