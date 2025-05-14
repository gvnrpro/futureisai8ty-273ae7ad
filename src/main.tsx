
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
  const assets = [
    // Logo - critical asset
    '/lovable-uploads/0babdf62-476a-4abe-ae58-912ad729fd2f.png',
    // Add other critical assets here
  ];
  
  // Preload images
  assets.forEach(asset => {
    if (asset.match(/\.(jpe?g|png|gif|svg|webp)$/i)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = asset;
      document.head.appendChild(link);
    }
  });
  
  // Set viewport for mobile optimization
  const viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover';
    document.head.appendChild(meta);
  }
};

// Execute preload
preloadAssets();

// Set up and mount app with error boundary
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = createRoot(rootElement);

// Mount app with error handling
root.render(<App />);
