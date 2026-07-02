# 🏦 Multi-Step Loan Application Form


A full-stack **MERN Loan Application Management System** that allows users to apply for loans through a secure multi-step application process. The application includes real-time address autocomplete, document upload, identity verification, digital signature capture, loan eligibility calculation, backend API integration, and automated end-to-end testing using Cypress.

---

## 📌 Project Overview

This application simulates the complete workflow of a real-world loan application process.

Users can:

- Fill personal and address details
- Apply for different loan types
- Enter employment information
- Upload required documents
- Complete PAN & Aadhaar verification
- Capture an electronic signature
- Review their application
- Submit the application to the backend
- Receive a unique application ID after successful submission

The project is designed to demonstrate both **frontend** and **backend** development skills along with **testing automation**.

---

# ✨ Features

## 👤 Personal Information

- Full Name
- Email Validation
- Phone Number Validation
- React Hook Form validation

---

## 📍 Address Information

- OpenStreetMap (Nominatim) Address Autocomplete
- Auto-fill:
  - City
  - State
  - Pincode
- Manual Address Line 2

---

## 💰 Loan Information

Supports multiple loan types:

- Personal Loan
- Home Loan
- Business Loan

Dynamic fields appear based on selected loan type.

---

## 💼 Employment Information

Supports:

- Salaried
- Self Employed

Captures:

- Company Name
- Job Title
- Monthly Income
- Years of Experience

---

## 📄 Document Upload

Users can upload:

- PAN Card
- Aadhaar Card
- Salary Slip

Features:

- Image Compression
- File Size Validation
- File Type Validation
- Image Preview
- Upload Status

---

## ✅ Verification Module

Simulated verification process for:

- PAN Verification
- Aadhaar Verification

Continue button remains disabled until both verifications are completed.

---

## ✍️ E-Signature

Users can:

- Draw signature
- Clear signature
- Save signature

Signature is stored as Base64 and displayed during review.

---

## 📋 Review Page

Displays complete application summary:

- Personal Details
- Address
- Loan Information
- Employment Details
- Uploaded Documents
- Signature Preview
- Loan Eligibility Status

---

## 🎉 Success Page

After successful submission:

- Generates unique Loan Application ID
- Displays confirmation message
- Print Summary option
- Apply Again option

---

# 🧠 Loan Eligibility Logic

Loan eligibility is calculated using:

```
Monthly Income × 20 >= Requested Loan Amount
```

Eligible applicants receive:

```
✔ Eligible for Loan
```

Otherwise:

```
✖ Requested loan amount is high compared to income
```

---

# ⚙️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Hook Form
- Axios
- React Signature Canvas
- Browser Image Compression

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Testing

- Cypress

---

# 📂 Project Structure

```
LoanApplication/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── .env
│   └── server.js
│
├── cypress/
│   ├── e2e/
│   └── fixtures/
│
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── .env
├── package.json
└── vite.config.js
```

---

# 🛡️ Form Validation

Implemented validation using **React Hook Form**.

Examples include:

- Required Fields
- Email Format Validation
- Phone Number Validation
- Pincode Validation
- Required Document Upload
- Empty Signature Validation

---

# 📄 Document Validation

Supported Formats

- JPG
- JPEG
- PNG
- PDF

Validation

- Maximum Size: 2 MB
- Image Compression
- Preview before submission

---

# 🌍 Address Autocomplete

Integrated with:

**OpenStreetMap Nominatim API**

Features:

- Live search
- Suggestions
- Automatic city detection
- Automatic state detection
- Automatic pincode detection

---

# 🧪 End-to-End Testing (Cypress)

The project includes complete **Cypress E2E Testing** covering the entire application workflow.

## Automated Test Flow

✔ Personal Information

✔ Address Autocomplete

✔ Loan Information

✔ Employment Information

✔ Document Upload

✔ PAN Verification

✔ Aadhaar Verification

✔ Digital Signature

✔ Review Page Validation

✔ Backend API Submission

✔ Success Page Validation

---

# 📡 API

### Submit Loan Application

```
POST /api/applications/apply
```

Stores loan application data into MongoDB.

---

# 🚀 Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Install Frontend

```bash
npm install
```

---

## Install Backend

```bash
cd backend
npm install
```

---

# ▶️ Run Frontend

```bash
npm run dev
```

---

# ▶️ Run Backend

```bash
npm run server
```

or

```bash
npm start
```

(depending on your backend configuration)

---

# 🧪 Run Cypress

Open Cypress

```bash
npx cypress open
```

Run Headless

```bash
npx cypress run
```

---

# 🌱 Environment Variables

## Frontend

```
VITE_API_URL=<Backend API URL>
```

---

## Backend

```
MONGO_URI=<MongoDB Connection String>

PORT=5000
```

---

# 📸 Screenshots

> Add screenshots of:

- Personal Information
- Address Page
- Loan Information
- Employment Information
- Document Upload
- Verification
- Signature
- Review
- Success Page

---

# 🎯 Future Improvements

- JWT Authentication
- Admin Dashboard
- Loan Approval Workflow
- Email Notifications
- SMS OTP Verification
- Cloud Storage for Documents
- Payment Gateway Integration
- Real-time Application Status Tracking

---

# 👩‍💻 Developed By

**Sanjana Yadav**

GitHub:
https://github.com/Sanjanayadav25

---

# ⭐ If you like this project

Give this repository a ⭐ on GitHub.