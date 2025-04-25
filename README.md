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
|----------------------|--------|---------------------------------------|----------------|
| `/api/auth/register` | POST   | Register new user                     | ❌             |
| `/api/auth/login`    | POST   | Login and receive JWT                 | ❌             |
| `/api/user`          | GET    | Get authenticated user info           | ✅ Bearer token |
| `/api/subscription`  | POST   | Create a new subscription             | ✅              |
| `/api/subscription`  | GET    | List subscriptions for a user         | ✅              |

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

Create a `.env` file in the root directory:

```env
PORT=5500
NODE_ENV=development
DB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/
JWT_SECRET=yourSecretKey
JWT_EXPIRES_IN=1d
ARCJET_KEY=yourArcjetKey
ARCJET_ENV=development
```

4. **Run the app**

```bash
npm run dev
```

---

## Testing

_Tests coming soon_ — currently tested via HTTPie for endpoint validation.

---

## Middleware & Error Handling

- All protected routes use a JWT authorization middleware
- Arcjet middleware is applied to rate-limit and inspect API requests
- Centralized error handler returns consistent error responses

