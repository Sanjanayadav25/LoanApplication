# 🏦 Multi-Step Loan Application Form


A full-stack **MERN Loan Application Management System** that allows users to apply for loans through a secure multi-step application process. The application includes real-time address autocomplete, document upload, identity verification, digital signature capture, loan eligibility calculation, backend API integration, and automated end-to-end testing using Cypress.

---

## 🔗 Project Links

- **GitHub Repository:** https://github.com/Sanjanayadav25/LoanApplication
- **Frontend Demo:** https://loan-application-lemon.vercel.app
- **Backend API:** https://loanapplication-qsdw.onrender.com

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
git clone  https://github.com/Sanjanayadav25/LoanApplication
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
npx nodemon server.js
```



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
VITE_API_URL=https://loanapplication-qsdw.onrender.com
```

---

## Backend

```
MONGO_URI=<your_mongodb_connection_string>
PORT=5000
```

---

# 📸 Screenshots

> Add screenshots of:

<img width="1366" height="683" alt="personalinfo" src="https://github.com/user-attachments/assets/d1e4513f-1f6f-439f-8c79-a05635152513" />
<img width="1366" height="662" alt="addressinfo" src="https://github.com/user-attachments/assets/bf75a17d-5054-4b73-a3e5-79da11c13389" />
<img width="1366" height="677" alt="loaninfo" src="https://github.com/user-attachments/assets/15e0f383-f2b7-4a81-877c-f02a9208c2c8" />
<img width="1366" height="677" alt="employmentinfo" src="https://github.com/user-attachments/assets/3d6d18ab-588b-4467-8570-fe38ff75d036" />
<img width="1366" height="693" alt="documents" src="https://github.com/user-attachments/assets/421a4ffc-db2e-44da-8c46-1ad9cfbbaf11" />
<img width="1366" height="670" alt="verification" src="https://github.com/user-attachments/assets/84c84579-b7d3-413f-af1c-37a7bd3dd5ad" />
<img width="1366" height="665" alt="signature" src="https://github.com/user-attachments/assets/f3d2ad94-dac7-425c-a01f-05b0da53cae6" />
<img width="1366" height="685" alt="review" src="https://github.com/user-attachments/assets/e1b279fc-792e-4076-aa37-e9c7f2f0241f" />
<img width="1366" height="637" alt="success" src="https://github.com/user-attachments/assets/a0d0ebe1-f6bf-482f-95e0-cf0597a8d5a8" />

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
