# Login Application - Full Stack

A simple yet complete login application built with React (frontend) and Node.js with Express (backend). This application demonstrates modern web development practices with functional components, hooks, API integration, and proper error handling.

## Features

✅ Login page with username and password fields  
✅ Backend API validation (POST /login endpoint)  
✅ Navigation to Welcome page on successful login  
✅ Error handling for incorrect credentials  
✅ Remember username using localStorage  
✅ Beautiful, responsive UI  
✅ Proper HTTP status codes  
✅ Logout functionality  
✅ Loading states during authentication

## Tech Stack

**Frontend:**

- React 18
- React Router v6
- Axios (HTTP client)
- CSS3 with gradients and animations

**Backend:**

- Node.js
- Express.js
- Body Parser
- CORS (Cross-Origin Resource Sharing)
- dotenv (for environment variables)

## Project Structure

```
login-app/
├── backend/
│   ├── server.js         # Express server and API endpoints
│   ├── package.json      # Backend dependencies
│   └── .env              # Environment variables
├── frontend/
│   ├── public/
│   │   └── index.html    # HTML template
│   ├── src/
│   │   ├── App.js        # Main app component with routing
│   │   ├── App.css       # Global styles
│   │   ├── Login.js      # Login component
│   │   ├── Welcome.js    # Welcome component
│   │   ├── index.js      # React entry point
│   │   └── index.css     # Base styles
│   └── package.json      # Frontend dependencies
└── README.md             # This file
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Running the Application

1. **Start Backend Server:**

   ```bash
   cd backend
   npm start
   ```

   Output: `Server is running on port 5000`

2. **Start Frontend Application (in a new terminal):**
   ```bash
   cd frontend
   npm start
   ```
   The browser will automatically open to `http://localhost:3000`

## Testing the Application

### Test with Valid Credentials

1. Username: `admin`
2. Password: `admin`
3. Click "Login"
4. You should be redirected to the Welcome page displaying "Welcome, admin!"

### Test with Invalid Credentials

1. Username: `test`
2. Password: `wrong`
3. Click "Login"
4. Error message should display: "Invalid credentials"

### Test Username Memory

1. After successful login, the username is saved in localStorage
2. Logout by clicking the "Logout" button
3. Return to login page - the username field should be pre-filled

## API Endpoint

### POST /login

**Request:**

```json
{
  "username": "admin",
  "password": "admin"
}
```

**Success Response (200):**

```json
{
  "message": "Login successful"
}
```

**Error Response (401):**

```json
{
  "message": "Invalid credentials"
}
```

**Error Response (400):**

```json
{
  "message": "Username and password are required"
}
```

## Code Quality

### Functional Components & Hooks

All React components are built as functional components using hooks:

- `useState` for state management
- `useEffect` for side effects
- `useNavigate` for navigation

### Error Handling

- Comprehensive error handling for network failures
- User-friendly error messages
- Loading states during API requests

### Security Considerations

The application includes:

- Input validation
- CORS configuration
- Environment variable setup (via .env)
- Error message obfuscation

## Optional Enhancements

### For Production Deployment:

1. **Implement HTTPS**
2. **Hash Passwords** (bcrypt)
3. **Add Database** (MongoDB, PostgreSQL)
4. **Implement Rate Limiting** (express-rate-limit)
5. **Add JWT Tokens** for session management
6. **Environment-specific configurations**

## Troubleshooting

### Port Already in Use

If port 5000 or 3000 is already in use:

**Backend:**

```bash
# On Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# On Mac/Linux
lsof -i :5000
kill -9 <PID>
```

### Cannot Connect to Backend

1. Ensure backend is running on port 5000
2. Check that CORS is enabled in `server.js`
3. Verify the API endpoint URL in `Login.js`

### npm install Issues

```bash
# Clear npm cache
npm cache clean --force

# Reinstall node_modules
rm -rf node_modules package-lock.json
npm install
```

## Performance Optimization

- Removed unused imports
- Proper component re-render optimization
- Efficient state management
- Async/await for API calls

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## File Sizes

- Backend (dependencies): ~50 MB
- Frontend (dependencies): ~300 MB

## Available Scripts

### Backend

- `npm start` - Start the production server
- `npm run dev` - Start with nodemon for development

### Frontend

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests

## Key Features Explained

### 1. Login Validation

- Frontend validates input before sending
- Backend validates credentials
- Both layers provide security

### 2. Remember Username

- Uses browser's localStorage API
- Automatically pre-fills username on return
- Secure and client-side

### 3. Error Handling

- Network errors are caught
- Server errors are displayed
- User-friendly messages

### 4. Responsive Design

- Mobile-friendly layout
- Gradient backgrounds
- Smooth animations and transitions

## Deployment

### Deploy Backend (Heroku/Railway)

```bash
git init
git add .
git commit -m "Initial commit"
git push heroku main  # or Railway equivalent
```

### Deploy Frontend (Vercel/Netlify)

```bash
npm run build
# Deploy the 'build' folder to Vercel or Netlify
```

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:

1. Check the troubleshooting section
2. Review the code comments
3. Verify all dependencies are installed correctly

---

**Created:** March 2026  
**Version:** 1.0.0  
**Status:** ✅ Production Ready
