import { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, Copy, ChevronRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SiNewbalance } from 'react-icons/si';
import { TiTick } from "react-icons/ti";

export default function TransactionDetails() {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [arrivalDateTime, setArrivalDateTime] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const navigate=useNavigate();
  
  useEffect(() => {
    // Generate current date and time in format MM/DD/YYYY hh:mm:ss AM/PM
    const now = new Date();
    const formattedDateTime = formatDateTime(now);
    setCurrentDateTime(formattedDateTime);
    // Set arrival time to 24 hours later
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setArrivalDateTime(formatDateTime(tomorrow));
    
    // Generate random transaction ID
    setTransactionId(generateTransactionId());
    savetransaction()
  }, [currentDateTime]);
  
  const formatDateTime = (date) => {
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    }) + ' ' + date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };
  
  const generateTransactionId = () => {
    const numbers = Math.floor(Math.random() * 10000000000000000000).toString().padStart(20, '0');
    const suffix = Math.floor(Math.random() * 9000 + 1000) + '-' + 
                  String.fromCharCode(65 + Math.floor(Math.random() * 26));
    return numbers + suffix;
  };
  const [searchParams] = useSearchParams();
  const savetransaction = () => {
    const dateTime = currentDateTime;
    const transferredAmount = amount;
    if (dateTime && transferredAmount){
    const newEntry = [dateTime, transferredAmount]; // array of [datetime, amount]
  
    // Get existing history or start with empty array
    const existingHistory = JSON.parse(localStorage.getItem('transferhistory')) || [];
  
    // Add the new transaction
    existingHistory.unshift(newEntry);
  
    // Save back to localStorage
    localStorage.setItem('transferhistory', JSON.stringify(existingHistory));
  }
  };
  
  const amount = parseFloat(searchParams.get('amount'));
  const username = searchParams.get('username');  
  const changeBalance = ()=>{
    const cBalance=localStorage.getItem('balance')
    const cleanBalance= cBalance.replace(/,/g, "");
     let newbalance=cleanBalance-amount
     let transferred=parseFloat(localStorage.getItem('transferred'))+amount
    localStorage.setItem('balance',newbalance)
    localStorage.setItem('transferred',transferred)

  }
  changeBalance()

  
  const handleCopyTransactionId = () => {
    navigator.clipboard.writeText(transactionId)
      .then(() => alert('Transaction ID copied to clipboard'))
      .catch(err => console.error('Failed to copy: ', err));
  };
  const goBack = () => {
    navigate('/transfer')
  };

  return (
    <div className='bg-gray-100'>
      <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200 h-15">
      <ArrowLeft size={24} onClick={goBack} />
        <div className="text-2xl font-medium text-gray-900 ">Transaction details</div>
        <div></div>
      </div>
      <br />
    <div className="flex flex-col h-screen justify-start items-center bg-gray-100">
      {/* Header */}
      {/* Main Content */}
      <div className="flex-1 p-4 flex flex-col gap-4">
        {/* Transaction Summary Card */}
        <div className="bg-white rounded-lg p-6 flex flex-col justify-center items-center h-30">
          <div className="text-lg font-medium text-gray-800 mb-2">Tranfer To TikTok</div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold mr-1">USD</span>
            <span className="text-4xl font-bold">{amount}</span>
          </div>
        </div>

        {/* Transaction Details Card */}
        <div className=" flex flex-col justify-center items-center bg-white rounded-lg p-2 w-98">
          <div className="flex justify-between items-center py-3 border-b border-gray-100 h-12 w-90">
            <div className="text-gray-500">Status</div>
            <div className="flex items-center">
              <div className='rounded-full bg-green-500'>
               <TiTick className='text-white'/>
              </div>
              <span className="font-medium">Completed</span>
            </div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100 h-12  w-90">
            <div className="text-gray-500">Payment to</div>
            <div className="font-medium">{username}</div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100 h-12  w-90">
            <div className="text-gray-500">Tranfer time</div>
            <div className="font-medium text-right">{currentDateTime}</div>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-gray-100 h-12  w-90">
            <div className="text-gray-500">Arrival time</div>
            <div className="font-medium text-right">{arrivalDateTime}</div>
          </div>

          <div className="flex justify-between items-center py-3 h-12  w-90">
            <div className="text-gray-500">Transaction ID</div>
            <div className="flex items-center">
              <div className="font-medium mr-1 text-right overflow-hidden text-ellipsis">{transactionId}</div>
              <button onClick={handleCopyTransactionId}>
                <Copy size={16} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-4">
          <button className="flex items-center justify-center w-full py-4 text-gray-500">
            <span className="mr-2">Need help?</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}