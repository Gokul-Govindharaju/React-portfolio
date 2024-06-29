import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useState,useEffect } from 'react'
// function AppWithLoader() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a network request
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000); // Adjust the time as needed
//   }, []);

//   if (isLoading) {
//     return <Loader />;
//   } else {
//     return <App />;
//   }
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
