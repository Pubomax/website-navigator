import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Create the root and render the app
createRoot(document.getElementById("root")!).render(<App />);

// Register service worker for offline capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(error => {
        console.error('ServiceWorker registration failed: ', error);
      });
  });
}
