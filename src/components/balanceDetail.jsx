import React from 'react';
import { ArrowLeft, ChevronRight, Info, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BalanceDetailsPage() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/balance')
  };
  const toliveReward = () => {
    navigate('/live-reward')
  };
  
  return (
    <div className="bg-black/15 min-h-screen text-white font-sans max-w-md mx-auto">
      {/* Header */}
      <div className='bg-black/80 h-50'>
      <br />
      <div className="flex items-center justify-center relative py-10 px-4">
        <button 
          onClick={goBack} 
          className="absolute left-4 focus:outline-none"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">Balance</h1>
      </div>
      
    <div className="px-4 pb-6 pt-2 text-center">
    <div className="flex items-center justify-center gap-1 text-gray-400 mb-2 -mt-6">
        <span>Estimated amount</span>
        <Info className="w-4 h-4" />
    </div>
    <div className="text-4xl font-bold">USD{localStorage.getItem('balance')}</div>
    </div>
    </div>
<div className=' relative -top-15 flex justify-center items-center'>
<div className="flex flex-col  justify-center items-center gap-4 px-4 w-98">
  {/* Live Rewards Card */}
  <div className="flex flex-col justify-center w-102 items-center bg-white rounded-xl overflow-hidden text-black w-full h-36" onClick={toliveReward}>
    <div className="p-4 flex justify-around items-center border-grey w-full">
      <div className="flex items-center">
        <h2 className="text-lg font-semibold">LIVE rewards</h2>
      </div>    
      <div className="flex items-center">
        <span className="mr-2 font-semibold">USD{localStorage.getItem('balance')}</span>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </div>
<div className="flex justify-around items-center text-gray-500 w-full pb-4">
  <span className="text-sm flex items-center">
    Accumulated Diamonds:&nbsp;
    <img src="/yellow-diamond.png" alt="Diamond" className="w-4 h-4 mx-1" />&nbsp;
    <span className="text-grey-500 text-sm">{localStorage.getItem('availableRewards')}</span>
  </span>
  <div></div>
</div>
  </div>

  {/* Earn More Rewards Card */}

<div className="bg-white flex justify-center items-center rounded-xl overflow-hidden text-black w-full h-36">
  <div className="flex justify-between items-center border-grey w-[80%]"> {/* add width */}
    <div className="flex flex-col items-start flex-1 pl-8"> {/* move all texts slightly right */}
      <h2 className="text-lg font-bold text-left w-full">Earn more rewards</h2>
      <p className="text-gray-500 text-sm text-left w-full">
        Check out the Monetization Center for exciting opportunities and programs.
      </p>
      <div className="mt-2 w-full">
        <span className="text-[#FE2A53] font-medium flex items-center">
          Explore
          <ChevronRight className="w-4 h-4 ml-1" />
        </span>
      </div>
    </div>

    <div className="ml-8 relative"> {/* more left margin to push Dollar sign */}
      <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center relative">
        <DollarSign className="w-8 h-8 text-white" />
        {/* Decorative crosses */}
        <div className="absolute -top-3 -right-1">
          <div className="w-6 h-1 bg-yellow-400 transform -rotate-45"></div>
        </div>
        <div className="absolute -top-1 -right-3">
          <div className="w-6 h-1 bg-yellow-400 transform -rotate-45"></div>
        </div>
        <div className="absolute -bottom-3 -right-1">
          <div className="w-6 h-1 bg-yellow-400 transform rotate-45"></div>
        </div>
        <div className="absolute -bottom-1 -right-3">
          <div className="w-6 h-1 bg-yellow-400 transform rotate-45"></div>
        </div>
      </div>
    </div>
  </div>
</div>



</div>
</div>





    </div>
  );
}