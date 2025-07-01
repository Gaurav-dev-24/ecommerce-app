# 🛒 E-Commerce App

A fully functional and modern e-commerce web application built using the MERN stack. Users can browse products, add items to cart, sign up, place orders, and track order status. Admins can manage products and monitor order updates in real-time.

---

## 🔥 Features

- 🧑‍💻 User Authentication (Login / Signup)
- 📦 Product Listings with Filters
- 🛒 Add to Cart & Checkout
- 💳 Online Payment Integration (Razorpay)
- 📬 Real-Time Order Status (Order Placed → Delivered)
- 🧑‍🔧 Admin Dashboard (Product & Order Management)
- 🌐 Responsive UI (Mobile + Desktop)

---

## 🧰 Tech Stack

| Frontend         | Backend          | Database   | Payments     |
|------------------|------------------|------------|--------------|
| React.js         | Node.js + Express| MongoDB    | Razorpay API ,Stripe API   |
                                                     

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

---

### 📁 1. Clone the Repository

```bash
git clone https://github.com/Gaurav-dev-24/ecommerce-app.git
cd ecommerce-app
```
### ⚙️ 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```
### ⚙️ 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```
### 🔑 4. Setup Environment Variables


PORT=4000
MONGO_URL=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

### ▶️ 5. Run the Project

Run Frontend : 
``` bash
npm run dev

```

Run Backend : 
```bash
npm run server
```

Run Admin Panel: 
```bash
npm run dev
```

## 🧑‍🔧 Admin Access
Admin panel is accessible from a specific route and protected via admin credentials. Features include:

Add/Delete Products

Update Order Status

View All Orders


## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## ✨ Author
Gaurav Jangid

📧 jangidgaurav244@gmail.com








