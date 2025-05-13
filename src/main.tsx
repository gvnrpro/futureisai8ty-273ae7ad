
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './css/hero.css'
import './css/loading.css'
import './css/button.css'
import './css/services.css'
import './css/process.css'
import './css/cta.css'
import './css/case-studies.css'

// Preload key assets to improve initial load experience
const preloadAssets = () => {
  // Preload logo
  const logoPreload = document.createElement('link');
  logoPreload.rel = 'preload';
  logoPreload.as = 'image';
  logoPreload.href = '/lovable-uploads/0babdf62-476a-4abe-ae58-912ad729fd2f.png';
  document.head.appendChild(logoPreload);
  
  // Add more preloads for critical assets if needed
};

// Execute preload
preloadAssets();

// Mount app
createRoot(document.getElementById("root")!).render(<App />);
