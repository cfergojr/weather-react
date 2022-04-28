import React from 'react';
const api = {
  key: "b62b6d744e6e51bc3b3d277c154c62dc",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app night">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
