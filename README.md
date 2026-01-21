# Vietnamese Cuisine Website

This is a modern React + Node.js full-stack web application for a Vietnamese cuisine website.

## 📁 Project Structure

```
vietnamese-cuisine/
│
├── 📄 server.js                    # Express server entry point
├── 📄 package.json                 # Backend dependencies
├── 📄 .env                         # Environment variables
├── 📄 .gitignore                   # Git ignore rules
├── 📄 README.md                    # Project documentation
│
└── 📂 client/                      # React Frontend Application
    ├── 📂 public/                  # Static public files
    │   ├── 📄 index.html           # HTML entry point
    │   └── 📂 images/              # Static images (logo, etc.)
    │
    ├── 📂 src/                     # React source code
    │   ├── 📂 components/          # Reusable components
    │   │   ├── Header.js           # Header component with logo & search
    │   │   ├── Header.css          # Header styles
    │   │   ├── Navigation.js       # Navigation menu component
    │   │   └── Navigation.css      # Navigation styles
    │   │
    │   ├── 📂 pages/               # Page components
    │   │   ├── Home.js             # Home page
    │   │   ├── Home.css            # Home styles
    │   │   ├── About.js            # About page
    │   │   ├── Services.js         # Services page
    │   │   ├── Menu.js             # Menu page
    │   │   ├── Events.js           # Events page
    │   │   ├── Contact.js          # Contact page with form
    │   │   └── Contact.css         # Contact styles
    │   │
    │   ├── 📄 App.js               # Main App component with routing
    │   ├── 📄 App.css              # App global styles
    │   ├── 📄 index.js             # React entry point
    │   ├── 📄 index.css            # Global styles
    │   └── 📄 reportWebVitals.js   # Performance metrics
    │
    └── 📄 package.json             # Frontend dependencies

```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Navigate to project directory:**

```bash
cd project-directory
```

2. **Install backend dependencies:**

```bash
npm install
```

3. **Install frontend dependencies:**

```bash
cd client
npm install
cd ..
```

## 🏃 Running the Application

### Development Mode (Recommended)

**Terminal 1 - Start Backend Server:**

```bash
npm run dev
```

Backend will run on: `http://localhost:3001`

**Terminal 2 - Start Frontend:**

```bash
npm run client
```

Frontend will run on: `http://localhost:3000`

### Production Mode

Build React app:

```bash
npm run build
```

Start server:

```bash
npm start
```

Application available on: `http://localhost:3001`

## 📡 API Endpoints

| Method | Endpoint      | Description         |
| ------ | ------------- | ------------------- |
| GET    | `/api/health` | Check server status |
| GET    | `/api/menu`   | Get menu items      |

## ✨ Features

- 🎨 **Modern UI Design** - Clean and minimalist interface
- 🏠 **Header Component** - Logo, search functionality
- 📋 **Navigation Menu** - Smooth hover effects with underline animation
- 📄 **Multi-page Layout** - Home, About, Services, Menu, Events, Contact
- 📧 **Contact Form** - Fully functional contact form
- 📱 **Responsive Design** - Works on desktop and mobile
- 🔗 **Client-Server Integration** - API communication
- 🎯 **React Router** - Page navigation

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library
- **React Router DOM 6** - Client-side routing
- **CSS3** - Styling

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing

## 📦 Dependencies

### Backend (package.json)

```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "dotenv": "^16.0.3"
}
```

### Frontend (client/package.json)

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.11.0",
  "axios": "^1.4.0"
}
```

## 🔧 Configuration

### Environment Variables (.env)

```
PORT=3001
NODE_ENV=development
REACT_APP_API_URL=http://localhost:3001
```

## 📝 Available Scripts

### Backend

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend (cd client)

- `npm start` - Start React development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🎨 Styling

The project uses **CSS3** with:

- Flexbox for layouts
- Smooth transitions and animations
- Responsive media queries
- Consistent color scheme (#333, #666, #fff, #fafafa)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px max-width container
- **Tablet**: 768px and below adjustments
- **Mobile**: Full width with appropriate padding

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

ISC

## 👤 Author

Created for Vietnamese Cuisine Website

---

**Last Updated:** January 21, 2026

- **Frontend**: React 18, React Router DOM, CSS3
- **Backend**: Node.js, Express.js
- **Build Tool**: Create React App

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
NODE_ENV=development
REACT_APP_API_URL=http://localhost:5000
```

## License

ISC
