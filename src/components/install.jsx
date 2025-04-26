import React, { useEffect, useState } from 'react';

const InstallPage = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if the app is already installed (running in standalone mode)
    const checkStandaloneMode = () => {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        setIsStandalone(true);  // If the app is in standalone mode, it's already installed
      } else {
        setIsStandalone(false);  // App is not installed yet
      }
    };

    // Initial check when the component mounts
    checkStandaloneMode();

    // Listen for the 'beforeinstallprompt' event and store the event to trigger the install prompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Prevent the default browser install prompt
      setDeferredPrompt(e); // Store the event
      setIsInstallable(true); // Set the app as installable
    };

    // Listen to the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen to changes in display mode to detect installation
    window.addEventListener('appinstalled', checkStandaloneMode);

    // Clean up event listeners
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', checkStandaloneMode);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the install prompt to the user
      deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
        })
        .catch((error) => {
          console.error('Install prompt failed:', error);
        });
    }
  };

  // If the app is already installed (in standalone mode)
  if (isStandalone) {
    return (
      <div>
        <h1>App Installed</h1>
        <p>Your app is already installed as a PWA!</p>
      </div>
    );
  }

  // If the app is not installed and is installable
  return (
    <div>
      <p> Please install it to continue using the app.</p>

      {isInstallable && (
        <button
        onClick={handleInstallClick}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
      >
        Install App
      </button> // Show the button only if PWA is installable
      )}

      {!isInstallable && <p>Your browser doesn't support installing this.</p>}
    </div>
  );
};

export default InstallPage;
