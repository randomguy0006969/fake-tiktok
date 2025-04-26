import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="w-25 h-25"> {/* ⬅️ size control */}
        <DotLottieReact
          src="https://lottie.host/c462fef7-75fb-406e-95f4-f5a6209e52df/nAtwxJtWw4.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Loader;
