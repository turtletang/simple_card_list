# Simple Card List Application

This is a full-stack application that displays a list of products in card format. Each product has a name, description, price, and image. Users can delete individual products. The application is responsive and fetches all product data from a backend API.

---

## 🛠 Tech Stack

- **Frontend**: React, Material UI, Axios
- **Backend**: Node.js, Express.js

---

## 🚀 How to Run the Project

### 1. Clone this repository

---

### 2. Start the Backend

```bash
cd backend
npm install
node index.js
```

This will start the backend server at:

```
http://localhost:5001
```

It provides the following endpoints:

- `GET /api/products` – fetch all products
- `DELETE /api/products/:id` – delete a product by ID

---

### 3. Start the Frontend

Open a second terminal window:

```bash
cd frontend
npm install
npm start
```

This will launch the frontend at:

```
http://localhost:3000
```

---

## ✅ Features

- Product cards show image, name, price, and description
- Each card includes a delete icon button in the top corner
- Clicking delete removes the product from both frontend and backend
- Product list is dynamically fetched from backend (no hardcoded data)
- Fully responsive layout across different screen sizes

---

## 🔁 Notes

- Product data is stored in memory in the backend
- To reset the product list, restart the backend server

