# Chat App

A React-based chat application built with Firebase.

## Prerequisites

- **Node.js** (Latest LTS version recommended)  
- **npm** or **yarn** package manager  

## Installation

1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd chat-web-app
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

## Dependencies

### Main Dependencies
- `react`: ^18.3.1  
- `react-dom`: ^18.3.1  
- `firebase`: ^11.0.2  
- `@reduxjs/toolkit`: ^2.3.0  
- `react-redux`: ^9.1.2  
- `styled-components`: ^6.1.13  
- `react-icons`: ^5.3.0  
- `react-modal`: ^3.16.1  
- `react-toastify`: ^10.0.6  

### Development Dependencies
- `vite`: ^5.4.10  
- `cypress`: ^13.15.2  
- `eslint`: ^9.13.0  
- `jest`: ^29.7.0  

### Development
To run the application in development mode:  
```bash
npm run dev
```
The application will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

### Build
To create a production build:  
```bash
npm run build
```

### Preview Production Build
To preview the production build locally:  
```bash
npm run preview
```

### Linting
To run ESLint checks:  
```bash
npm run lint
```

### Testing

#### End-to-End Tests (Cypress)
To open Cypress Test Runner:  
```bash
npx cypress open
```

## Firebase Configuration

1. Create a `.env` file in the root directory.
2. Add your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_DATABASE_URL=your_database_url
   ```

## Troubleshooting

If you encounter any issues:  
1. Make sure all dependencies are installed:  
   ```bash
   npm install
   ```
2. Clear npm cache:  
   ```bash
   npm cache clean --force
   ```
3. Delete `node_modules` and reinstall:  
   ```bash
   rm -rf node_modules
   npm install
   ```
4. Ensure you have the correct Node.js version installed.

## Additional Notes

- The project uses **Vite** as the build tool.  
- **ESLint** is configured for code quality.  
- **Firebase** is used for backend services.  
- **Redux Toolkit** is used for state management.  
- **Styled Components** is used for styling.

---

### Instructions for Panel Members

1. Install all dependencies with correct versions.  
2. Run the development server.  
3. Run the test suites (Cypress).  
4. Build the project for production.  
5. Understand the project structure.  
6. Set up Firebase configuration.

---
