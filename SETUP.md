# Quick Start Guide

## Complete Setup Instructions

### Step 1: Install Dependencies

**Backend:**

```bash
cd backend
npm install
```

**Frontend:**

```bash
cd frontend
npm install
```

### Step 2: Start the Servers

**Terminal 1 - Backend Server:**

```bash
cd backend
npm start
```

Expected output:

```
Server is running on port 5000
```

**Terminal 2 - Frontend Application (keep Terminal 1 running):**

```bash
cd frontend
npm start
```

Expected output:

```
Compiled successfully!
You can now view login-app-frontend in the browser.
  Local:            http://localhost:3000
```

### Step 3: Access the Application

Open your browser and navigate to:

```
http://localhost:3000
```

### Step 4: Test Login

**Valid Credentials:**

- Username: `admin`
- Password: `admin`

**Expected Result:** Redirects to Welcome page

**Invalid Credentials:**

- Username: `test`
- Password: `wrong`

**Expected Result:** Shows error message "Invalid credentials"

## Features to Test

✅ **Login Success:**

- Enter admin/admin
- Should redirect to /welcome page
- Username should be pre-filled on next login

✅ **Login Error:**

- Try any other credentials
- Should show error message

✅ **Remember Username:**

- After successful login, click Logout
- Return to login page
- Username field should be pre-filled

✅ **Error Handling:**

- Stop backend server
- Try to login
- Should show connection error message

✅ **Form Validation:**

- Try submitting empty form
- Should require both fields

## API Testing (Optional)

You can test the backend API using cURL or Postman:

**Success:**

```bash
curl -X POST http://localhost:5000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin"}'
```

**Failure:**

```bash
curl -X POST http://localhost:5000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"test","password":"wrong"}'
```

## Stopping the Servers

To stop the servers, press `Ctrl + C` in each terminal.

## Common Issues

### Issue: Cannot connect to backend

**Solution:**

- Verify backend is running on port 5000
- Check if port 5000 is already in use
- Try changing PORT in .env file

### Issue: Node modules not found

**Solution:**

```bash
cd backend
npm install
cd ../frontend
npm install
```

### Issue: Port 3000 already in use

**Solution:**

```bash
# Set a different port for React
set PORT=3001
npm start
```

## Project Structure

```
Login application/
├── backend/
│   ├── server.js          # API server
│   ├── package.json       # Dependencies
│   ├── .env               # Environment config
│   └── node_modules/
├── frontend/
│   ├── public/
│   │   └── index.html     # Main HTML
│   ├── src/
│   │   ├── App.js         # Main component
│   │   ├── App.css        # Styles
│   │   ├── Login.js       # Login component
│   │   ├── Welcome.js     # Welcome component
│   │   ├── index.js       # Entry point
│   │   └── index.css      # Base styles
│   ├── package.json       # Dependencies
│   └── node_modules/
├── README.md              # Full documentation
├── SETUP.md               # This file
└── .gitignore            # Git ignore rules
```

## Next Steps

### For Development:

- Modify styles in App.css
- Add new routes in App.js
- Enhance Login.js with more features

### For Production:

- Add HTTPS support
- Implement password hashing (bcrypt)
- Add JWT tokens
- Set up a real database
- Deploy to Heroku, Vercel, or similar

## Additional Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [React Router v6](https://reactrouter.com)
- [Axios Documentation](https://axios-http.com)

---

**Version:** 1.0.0  
**Last Updated:** March 2026
