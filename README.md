# 📦 sub-tracker – Subscription Tracker API

'sub-tracker' is a Node.js-based RESTful API that allows users to manage their personal subscriptions efficiently. Each user can create and track multiple subscriptions, with features like automated renewal reminders, secure authentication, and rate-limited access for enhanced security.

---

## Features

- **JWT-based Authentication & Authorization**
- **Rate Limiting & Security** via [Arcjet](https://arcjet.com/)
- **Subscription Management**: Create subscriptions with automated end-date calculation
- **Automated Email Alerts**: Reminders sent before subscription renewal
- **Global Error Handling**
- **Modular Middleware Architecture**


---
## **Additional Features**
- **Upstash for Workflows**:
- Used to automate the process of sending renewal reminder emails.
- Workflow logic is executed to ensure timely notifications for subscription renewals.
- **Nodemailer for Email Notifications**:
- Automated emails are sent 7, 5, 2, and 1 day(s) before the renewal date of subscriptions.
- Sends customizable emails based on subscription details to keep users informed about upcoming
renewals.
---


## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (jsonwebtoken)**
- **Arcjet** (API protection and rate limiting)
- **Nodemailer** (or similar, for automated emails)
- **dotenv**, **bcryptjs**, **cookie-parser**, **morgan**

---

## API Endpoints

| Endpoint             | Method | Description                           | Auth Required |
|----------------------|--------|---------------------------------------|--------------- |
| `/api/auth/register` | POST   | Register new user                     | ❌             |
| `/api/auth/login`    | POST   | Login and receive JWT                 | ❌             |
| `/api/user`          | GET    | Get authenticated user info           | ✅ Bearer token|
| `/api/subscription`  | POST   | Create a new subscription             | ✅ Bearer token|
| `/api/subscription`  | GET    | List subscriptions for a user         | ✅             |

> ⚙️ End date is auto-calculated based on frequency if not provided.
> 📧 Email reminders are sent automatically before renewals.

---

## ⚙️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/sub-tracker.git
cd sub-tracker
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory according to the .env.example file


4. **Run the app**

```bash
npm run dev
```
---

## Middleware & Error Handling

- All protected routes use a JWT authorization middleware
- Arcjet middleware is applied to rate-limit and inspect API requests
- Centralized error handler returns consistent error responses

  

