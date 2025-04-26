import { useState } from 'react';
import { ArrowLeft, HelpCircle, User } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function TransferUI() {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
    const navigate = useNavigate();
        const goBack = () => {
          navigate('/live-reward')
        };

        const totransactionDetail = ()=> {
          navigate(`/transaction-detail?amount=${amount}&username=${email}`);
        }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    updateButtonState(e.target.value, amount);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    updateButtonState(email, e.target.value);
  };

  const updateButtonState = (emailValue, amountValue) => {
    setIsButtonActive(emailValue.length > 0 && amountValue.length > 0);
  };
  

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 h-15">
      <ArrowLeft size={24} onClick={goBack} />
        <div className="text-xl font-semibold text-gray-900">Tranfer</div>
        <HelpCircle size={24} className="text-gray-700" />
      </div>

      {/* Main Content - Centered vertically */}
      <div className="flex-1 flex flex-col justify-around items-center  p-4 shadow-lg">
        <div className="bg-white rounded-lg shadow p-5 mb-4 w-90">
          <div className="flex justify-between items-center  h-15 w-90" >
            <div className="text-lg font-medium text-gray-800 w-40">Tranfer amount</div>
            <button className="text-[#FE2A53] font-medium w-20">Manage</button>
          </div>

          {/* Email/Username Field - Increased height */}
          <div className="flex justify-around items-center bg-gray-100 rounded-lg p-4 mb-6 h-15 w-90">
            {/* <User size={24} className="text-gray-400 mr-3" /> */}
            <div>
            <FontAwesomeIcon icon={faCircleUser} style={{ color: 'gray', fontSize: '40px' }}/>
            </div>
            <div>
            <input
              type="text"
              placeholder="Email or username"
              className="bg-transparent w-full outline-none text-gray-700 text-lg"
              value={email || ""} 
              onChange={handleEmailChange}
            />
            </div>
            <div></div>
          </div>
          <br />

          {/* Currency Section with Amount Input - Increased height */}
          <div className="flex items-center justify-between mb-4 bg-gray-100 rounded-lg p-4 h-15">
            <div className="flex justify-around items-center flex-1">
              <span className="text-2xl font-bold mr-3">USD</span>
              {" "}
              <div className="flex">
                <input
                  type="text"
                  placeholder={`Available today: ${localStorage.getItem('balance')}`}
                  className="bg-transparent w-full outline-none text-gray-700 text-lg"
                  value={amount || ""}
                  onChange={handleAmountChange}
                />
              </div>
            </div>
            <button className="text-[#FE2A53] font-medium ml-2 w-10">All</button>
          </div>

          <div className="border-t border-gray-200 my-4"></div>

          {/* Estimated Amount Section */}
          <div className="mb-2 py-2">
            <div className="text-gray-600 mb-1">Estimated amount you receive</div>
            <div className="text-xl font-medium">-</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-92 p-4 mt-auto">
        <div className="text-sm text-gray-500 mb-4 text-start">
          TikTok Terms of Service and Privacy Policy. Payment transactions are processed by PIPO. PIPO Privacy Policy
        </div>
        
        <button 
          className={`w-full h-10 text-2xl py-4 text-center rounded-md ${
            isButtonActive ? 'bg-[#FE2A53] text-white' : 'bg-gray-200 text-gray-400'
          }`}
          disabled={!isButtonActive}
        onClick={totransactionDetail}>
          Tranfer
        </button>
      </div>
      </div>
    </div>
  );
}