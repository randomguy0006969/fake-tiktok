import React from 'react';
import { ArrowLeft, MoreHorizontal, Heart, Info, ChevronRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';
import { MdDiamond } from 'react-icons/md';

const LiveRewardsPage = () => {
  const [monthDate,setMonthDate]=useState('')
  const [history, setHistory] = useState([]);
    const navigate = useNavigate();
    const goBack = () => {
      navigate('/balance-detail')
    };
    const totransfer= () => {
      navigate('/transfer')
    };

    useEffect(()=> {
      const date = new Date();
      const options = { month: 'short', year: 'numeric' };
      const formattedDate = date.toLocaleString('en-US', options);
      const stored = JSON.parse(localStorage.getItem('transferhistory')) || [];
      setHistory(stored);
      setMonthDate(formattedDate)
  },[])
  return (
    <div className="flex flex-col items-center  bg-gray-50 min-h-screen w-full max-w-md mx-auto font-sans">
  {/* Header */}
  <div className="flex items-center justify-around gap-5 p-6 h-15 w-full"> {/* Increased padding */}
    <ArrowLeft size={24} onClick={goBack} />
    <div></div>
    <h1 className="text-2xl font-bold">LIVE rewards</h1> 
    {/* Increased font size */}
    <div></div>
    <MoreHorizontal size={24} />
  </div>

  <div className="flex flex-col justify-center bg-white rounded-lg mx-4 p-6  w-98"> {/* Increased padding */}
    {/* Identity Verified Message */}
    <div className=" rounded-md p-4 mb-6 flex shadow-sm justify-around items-start h-15 w-100% leading-tight"> {/* Increased padding and margin */}
      <div className='flex flex-col items-start'>
        <h3 className="font-bold text-gray-900 text-lg">Identity verified</h3> {/* Increased font size */}
        <p className="text-gray-500 text-sm">Your identity is verified. You can continue with transactions.</p>
      </div>
      <span className="text-gray-400 text-lg">&times;</span>
    </div>
    {/* Accumulated Diamonds */}
    <div className="flex justify-center items-center shadow-sm gap-2 text-gray-500 mb-8 py-3 h-15"> {/* Increased margin and padding */}
      <span className="text-lg">Accumulate Diamonds:</span> {/* Increased font size */}
      {/* <Heart className="text-amber-400 fill-amber-400" size={18} /> Increased size of icon */}
      <img src="/yellow-diamond.png" alt="Diamond" className="w-5 h-5 mx-1" />
      <span className="text-lg">{localStorage.getItem('availableRewards')}</span> {/* Increased font size */}
      <Info size={18} className="ml-2 text-gray-400" />
    </div>

    {/* Available Rewards */}
    <div className="mb-8"> {/* Increased margin bottom */}
        <div className='flex flex-col justify-center items-center h-40'>
      <h3 className="text-center font-semibold text-gray-700 text-lg mb-4">Available rewards</h3> {/* Increased font size */}
      <p className="text-center text-5xl font-bold mb-6">USD{localStorage.getItem('balance')}</p> {/* Increased font size */}
      <br />

      {/* Action Buttons */}
      <div className='flex justify-center items-center w-full h-20'>
      <div className="flex gap-6 mb-6 justify-center">
        <button className="flex-1 bg-gray-100 py-4 rounded-md font-large text-gray-800 text-2xl h-13 w-50">
          Withdraw
        </button>
        <button className="flex-1 bg-[#FE2A53] py-4 rounded-md font-large text-white text-2xl" onClick={totransfer}>
          Transfer
        </button>
      </div>
      </div>
      </div>
      
      {/* Withdrawal Limit */}
      <div className="flex flex-col justify-center items-start mb-3 h-15"> {/* Increased margin bottom */}
        <div className='flex justify-around items-center w-full'>
        <p className="text-gray-500 text-sm">Daily withdrawal limit (Remain/Total)</p> {/* Increased font size */}
        <div></div>
        <span className="text-gray-500 float-right text-sm">$100/$100</span> 
        </div>
        <div className='flex justify-around w-80'>
        <p className="text-pink-500 text-sm flex items-center text-lg">
        How to increase withdrawal limit? <ChevronRight size={16} />
      </p>
      <span></span>
      </div>
     </div>
      
    </div>
    <br />

    {/* Transactions */}
    <div className="flex flex-col justify-center items-start border-t border-gray-100 pt-6 h-18"> {/* Increased padding top */}
    <div className='flex justify-around items-center w-30'>
      <h3 className="font-semibold text-gray-800 mb-6 text-lg">Transactions</h3> {/* Increased font size */}

    </div>
      <div className="flex justify-around items-center text-gray-500 w-full">
        <div className="flex items-center">
          <span className="text-lg">{monthDate}</span> {/* Increased font size */}
          <ChevronDown size={16} />
        </div>
        <div>
          <span className="text-lg">In: USD{localStorage.getItem('balance')}</span> {/* Increased font size */}
          <span className="ml-2 text-lg">Out: USD{localStorage.getItem("transferred")}</span> {/* Increased font size */}
        </div>
      </div>
    </div>


            {history.map(([dateTime, amount], index) => (
        <div className="flex flex-col justify-center items-start border-t border-gray-100 pt-6">
          <div className='flex justify-around items-center w-40'>
      <h3 className="font-semibold text-gray-800 mb-6 text-lg">Transfer To Tiktok</h3> {/* Increased font size */}
    </div>      
        <div key={index} className="flex justify-center items-center text-gray-500 w-full mb-3">
          <div className='flex justify-around items-center w-full px-4'>
            <div className="flex items-center">
              <span className="text-lg">{dateTime}</span>
            </div>
            <div>
              <span className="ml-2 text-lg">Out: USD{amount}</span>
            </div>
          </div>
        </div>
      </div>  
      ))}

  </div>
</div>

  );
};

export default LiveRewardsPage;