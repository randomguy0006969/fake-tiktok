import React from 'react';
import { ArrowLeft, ChevronLeft ,ChevronRight, Gift, Shield, CreditCard, ArrowRight,User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TbDeviceTvFilled } from "react-icons/tb";
import { ImFileText } from "react-icons/im";
import { AiOutlineSwap } from "react-icons/ai";
export default function BalancePage() {
    const navigate = useNavigate();
  const goBack = () => {
    navigate('/')
  };
  const toBalanceDetail = () => {
    navigate('/balance-detail')
  };
  const shortenName = (name) => {
  const firstPart = name.slice(0, 3); // First 3 characters
  const lastThree = name.slice(-3);
  return `${firstPart}...${lastThree}'s balance`;
  }
  return (
    // <div className="bg-gray-100 min-h-screen text-gray-900 font-sans max-w-md mx-auto">
    <div className="flex-col justify-center items-center m-0 p-0 bg-gray-100 min-h-screen text-gray-900 font-sans w-full max-w-md mx-auto leading-tight">

      {/* Header */}
      <div className="flex justify-around items-center p-4 h-12">
        <button 
          onClick={goBack} 
          className="focus:outline-none"
          aria-label="Go back"
        >
          <ChevronLeft size={26}/>
        </button>
        <div className='w-80'></div>
        <div className="flex items-center h-6 w-16">
          <AiOutlineSwap className='h-5 w-5 scale-x-[-1]' />
          <span className="font-semibold mr-1 text-lg"> USD</span>
        </div>
      </div>

      {/* User Balance Header */}
      <div className="px-4 pb-3">
        <div className="flex justify-around gap-7 items-center">
          <h1 className="text-3xl font-bold">{shortenName(localStorage.getItem('name'))}</h1>
          <div className=''>
          <Shield className="relative -left-21 top-3 w-7 h-7 text-green-600 fill-current" />
          <User className="relative right-19.5 bottom-2 w-4 h-4 text-white fill-current" />
          </div>
        </div>
      </div>
      <br />

      {/* Coins Card */}
      <div className='flex justify-center items-center w-full'>
      <div className="flex-col justify-center w-102 items-start mx-4 bg-black/89 rounded-xl overflow-hidden">
      <br />
      <div className='flex justify-around'>
      <div className="text-gray-400 text-md mb-1">Estimated balance</div>
      <div className='w-55'></div>
      </div>
      <div className="flex-col justify-around p-4 h-20"  onClick={toBalanceDetail}>
          <div className="flex justify-around items-center">
          <p className=" font-bold text-white leading-tight"><span className='text-xs'>USD </span><span className='text-xl'>{localStorage.getItem('balance')}</span></p>
            <div className='w-38'></div>
            <div className="flex items-center text-gray-400">
              <span className="text-xl">View</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
      </div>

      <div className="flex justify-around items-center border-t border-gray-700 p-4 h-20" onClick={toBalanceDetail}>
          <div className="flex justify-around items-center">

            <div className='flex flex-col justify-around items-start'>
            <p className="text-gray-400 text-sm leading-tight">Coins</p>
            <div className="flex items-center">
            <div className=" w-6 h-6 rounded-full overflow-hidden mr-2 object-cover">
              <img src="/coin.png" alt="" className="object-cover" />
            </div>

              <span className="text-2xl font-bold text-white">{localStorage.getItem('availableRewards')}</span>
            </div>
            </div>
            <div className='w-40'></div>
            <div className="flex items-center text-gray-400">
              <span className="text-sm">Get Coins</span>
              <ChevronRight className="w-4 h-4" />
            </div>


          </div>
      </div>
      </div>
      </div>


<br />


      {/* First Recharge Package */}
      <div className='flex justify-center items-center'>
      <div className="mx-4 mt-4 bg-white rounded-xl p-4 w-102">
        <div className="flex justify-around items-center h-30">
          <div className='flex flex-col'>
            <p className="font-semibold text-base">First recharge package</p>
            <p className="text-gray-400 text-sm">Get Gifts and bonus Coins</p>
            <div className="flex items-center mt-1 text-[#FE2A53]">
              <span className="font-medium text-sm">Get</span>
              <ArrowRight className="w-3 h-3 ml-1" />
            </div>
          </div>
          <div className='w-40'></div>
          <div className="bg-[#FE2A53] rounded-full w-12 h-12 flex items-center justify-center">
            <Gift className="w-6 h-6 text-white " />
          </div>
        </div>
      </div>
      </div>

      {/* Monetization */}
      <div className="mx-4 mt-4">
        <div className="flex justify-around items-center mb-2 h-15">
          <p className="font-bold text-xl">Monetization</p>
          <div className='w-30'></div>
          <div className="flex items-center text-gray-500 text-sm">
            <span>View more</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        <div className="flex justify-evenly item-center h-20 w-full">
  {/* LIVE rewards section */}

  <div className="bg-white rounded-xl p-4 flex items-center justify-around w-50">
    <div className='flex flex-col'>
    <div className="bg rounded-lg p-2 mb-2 h-8 flex items-center space-x-2"> {/* Added space-x-2 for horizontal spacing between icon and text */}
      <TbDeviceTvFilled size={28} color="#6B7280" />
      <span className="relative right-5 text-white">S</span>
    </div>
    <span className="text-center text-md">LIVE rewards</span>
    </div>
  <div className='w-20'></div>
  </div>

  {/* Campaigns section */}
  <div className="bg-white rounded-xl p-4 flex  items-center justify-around w-50">
  <div className='flex flex-col'>
    <div className="rounded-lg p-2 mb-2">
      <Shield className="h-7 text-gray-500" />
    </div>
    <span className="ml-4 text-center text-md">Campaigns</span> {/* Added ml-4 to give a left margin to the text */}
  </div>
  <div className='w-20'></div>
  </div>
</div>

      </div>

      {/* Services */}
      <div className="flex flex-col items-center justify-center mx-4 mt-4 mb-6">
        <div className='flex justify-around'>
        <p className="font-bold text-xl mb-2">Services</p>
        <div className='w-75'></div>
        </div>
        
        <div className="w-104 bg-white rounded-xl overflow-hidden">
          <div className="flex justify-around items-center p-4 border-b border-gray-100 h-20">
            <div className="flex items-center">
              <div className="bg-gray-100 rounded p-1 mr-3">
              <ImFileText color='grey' size={16}/>
              </div>
              <span className="text-base">&nbsp;Transactions</span>
            </div>
            <div className='w-46'></div>
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </div>
          
          <div className="flex justify-around items-center p-4 h-20">
            <div className="flex items-center w-50">
              <div className="items-center rounded p-1 mr-3">
              <Shield className="relative top-2 w-7 h-7 text-gray-400 fill-current" />
              <User className="relative -top-3 left-1.5 w-4 h-4 text-white fill-current" />
              </div>
              <span className="text-base">Identity verification</span>
            </div>
            <div className='w-18'></div>
            <div className="flex items-center">
              <span className="text-green-300 text-sm mr-2 bg-gray-100 rounded-md">Verified</span>
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}