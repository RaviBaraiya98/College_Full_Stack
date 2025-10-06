import { useState } from 'react';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          &#9776;
        </button>
        {isSidebarOpen && (
          <div className="menu">
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is the main content of the webpage.</p>
      </div>
    </div>
  );
}

export default App;
