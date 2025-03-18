# School Management System

A comprehensive **School Management System** built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project provides separate dashboards for different user roles, including:

- **Admin**
- **Teacher**
- **Student**
- **Parent**

Each role has distinct features and functionalities tailored to their needs.

---

## 🔗 Live Demo

[Click here to view the live project](#) _(https://school-managment-client.vercel.app)_

---

## 🚀 Features

### Admin Dashboard

- Manage all users (students, teachers, parents).
- Assign roles and permissions.
- View detailed school reports.

### Teacher Dashboard

- Manage student grades and attendance.
- Share assignments and resources.
- Communicate with students and parents.

### Student Dashboard

- View grades, assignments, and attendance.
- Submit assignments online.
- Communicate with teachers.

### Parent Dashboard

- Monitor child’s academic performance and attendance.
- Communicate with teachers.
- Access school announcements.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **State Management**: Redux

---

## 📂 Project Setup

### Prerequisites

- Node.js installed
- MongoDB set up locally or using a cloud service (e.g., MongoDB Atlas)

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-repo-url.git
   cd school-management-system
   ```

2. **Install dependencies**

   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `backend` folder and add the following:

   ```env
   PORT=5000
   MONGO_URI=your-mongo-db-uri
   JWT_SECRET=your-secret-key
   ```

4. **Start the development servers**

   ```bash
   # Backend
   cd backend
   npm run dev

   # Frontend
   cd ../frontend
   npm start
   ```

---

## 🔐 Default User Credentials

### Admin

- **Email**: `yeasin@gmail.com`
- **Password**: `111111`

### Teacher

- **Email**: `rakib@gmail.com`
- **Password**: `111111`

### Student

- **Email**: `jihad@gmail.com`
- **Password**: `111111`

### Parent

- **Email**: `jakir@gmail.com`
- **Password**: `111111`

---

## 📸 Screenshots

### Admin Dashboard

![Admin Dashboard](#) _(Replace with your screenshot)_

### Teacher Dashboard

![Teacher Dashboard](#) _(Replace with your screenshot)_

### Student Dashboard

![Student Dashboard](#) _(Replace with your screenshot)_

### Parent Dashboard

![Parent Dashboard](#) _(Replace with your screenshot)_

---

## 🛡️ Security Features

- Role-based access control.
- Encrypted passwords using bcrypt.
- Secure authentication with JWT.

---

## 🧑‍💻 Developer Notes

- Ensure MongoDB is running before starting the backend.
- Frontend is hosted on `http://localhost:3000` and backend on `http://localhost:5000` during development.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 💬 Contact

For any inquiries or support, please email: **yeasinmiah1272001@gmail.com**.
