import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PWARequired = () => {
  const [isPWA, setIsPWA] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the app is running in standalone mode (PWA)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsPWA(true);
    } else {
      setIsPWA(false);
      navigate('/install'); // Navigate to /install page if not PWA
    }
  }, [navigate]);  // Include navigate in the dependency array to ensure it updates correctly

  if (!isPWA) {
    return <div>This website can be installed as a  App.</div>;
  }

  return null;  // No message if it's installed as a PWA
};

export default PWARequired;
