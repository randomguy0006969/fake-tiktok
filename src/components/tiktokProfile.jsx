import { useState , useEffect,useRef} from 'react';
import { MoreHorizontal, Plus, Home, ShoppingBag, MessageCircle, User, Lock, Repeat, QrCode, Settings, Wallet,ChevronDown } from 'lucide-react';
import BalancePage from './balance';
import { useNavigate } from 'react-router-dom';
import { RiShareForwardLine, RiHome4Line, RiMessageLine } from "react-icons/ri";
import { LuFootprints } from "react-icons/lu";
import { PiHandbag } from "react-icons/pi";
import { FaUser, FaEyeSlash,FaRegHeart  } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { RiBookmarkLine, RiEyeLine } from "react-icons/ri";
import { FiLock } from "react-icons/fi";
import { BiRepost } from "react-icons/bi";
import ThrowbackIcon from './sliders';
import { RiUserStarLine } from "react-icons/ri";



// Settings Popup Component defined inline
const SettingsPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  if (!isOpen) return null;

const openMobileDashboard = () => {
  navigate('/balance')
};
const tosetData = () => {
  navigate('set-data')
}

  return (

    <div 
  className="fixed inset-0 bg-black/70 bg-opacity-50 z-50 flex items-end justify-center" 
  onClick={onClose}
>
  <div 
    className="bg-white w-full sm:max-w-md rounded-t-xl p-4 h-55" 
    onClick={(e) => e.stopPropagation()}
  >
    <div className="space-y-6">
      <div className="flex items-center h-12 rounded-t-xl border border-gray-200" onClick={tosetData}>
        <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
        <span className="text-lg">TikTok Studio</span>
      </div>

      {/* Make the whole Balance clickable */}
      <div 
        className="flex items-center justify-between cursor-pointer h-12 border border-gray-200"
        onClick={openMobileDashboard} // call your function
      >
        <div className="flex items-center">
          <Wallet className="w-5 h-5 mr-3" />
          <span className="text-lg">Balance</span>
        </div>
        <span className="text-gray-500">{localStorage.getItem('balance')} US$</span>
      </div>

      <div className="flex items-center h-12  border border-gray-200">
        <QrCode className="w-5 h-5 mr-3" />
        <span className="text-lg">My QR code</span>
      </div>

      <div className="flex items-center h-12 border border-gray-200">
        <Settings className="w-5 h-5 mr-3" />
        <span className="text-lg">Settings and privacy</span>
      </div>
    </div> 
  </div>
</div>

);
};

// Main TikTok Profile Component
export default function TikTokProfile() {
  const [activeTab, setActiveTab] = useState('videos');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);
  const [username, setUsername] = useState('');
  const [viewsList, setViewsList] = useState([]);

  useEffect(() => {
    const storedLikes = localStorage.getItem('vlikes');
    const allowedUsernames = ['@mysterygiftmanofficial', '@john', '@admin', '@tester'];
    const storedUsername = localStorage.getItem('username');
    if (allowedUsernames.includes(storedUsername)) {
      setUsername(storedUsername);
    }
    else{
      setUsername("@mysterygiftmanofficial")
    }
    if (storedLikes) {
      try {
        const parsedViews = JSON.parse(storedLikes);
        setViewsList(parsedViews);
      } catch (error) {
        console.error('Error parsing vlikes from localStorage', error);
      }
    }
  }, []);
  const videos = [
    "/video.mp4",
    "/video.mp4",
    "/video.mp4",
    "/video.mp4",
    "/video.mp4",
    "/video.mp4",
  ];

  const videoRefs = useRef([]);

  const handleVideoClick = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement.paused) {
      videoElement.play(); // Play the video if it is paused
    } else {
      videoElement.pause(); // Pause the video if it is already playing
    }
  };
  
  return (
    <div className="flex flex-col bg-white min-h-screen max-w-md mx-auto">
      {/* Top navigation */}
      <div className="flex justify-between items-center p-4 h-15">
        <div className="flex justify-between items-center">
          <User className="w-8 h-8 mr-2" />
          <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
            P
          </div>
        </div>
        <div className="flex items-center justify-between w-28">
          <div className="mr-4">
          <LuFootprints size={28} />
          </div>
          <div className="mr-4">
          <RiShareForwardLine size={28}/>
          </div>
          <button onClick={openSettings}>
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Profile info */}
      <div className="flex flex-col items-center p-4 h-80 leading-tight">
        <div className="relative leading-tight">
        <div className="relative z-6 text-gray-700 bg-white border border-gray-100 rounded-sm text-sm mx-auto shadow-md leading-tight">Thought<br></br>s?</div>
          <div className="w-25 h-25 bg-black rounded-full flex items-center justify-center overflow-hidden">
            {/* <div className="w-full h-full bg-black rounded-full"></div> */}
            <img src="/profile.jpg" alt="" />
          </div>
          <div className="absolute bottom-0 right-0 bg-cyan-400 border-3 border-white rounded-full w-7 h-7 flex items-center justify-center text-white">
            <Plus className="w-5 h-5" />
          </div>
        </div>
        <br />
        <div className="mt-1 leading-tight h-15">
          <h1 className="text-xl font-semibold flex items-center">
            {localStorage.getItem('name')}
            <ChevronDown className="relative top-0.5 right-0.5 w-4 h-4 ml-1" />
          </h1>
          <p className="text-gray-500 text-sm">{username}</p>
          <button className="relative -top-11.5 -right-30 bg-gray-100 text-black px-6 py-1 rounded-xl w-11 h-7 text-sm">Edit</button>
        </div>

        <div className="flex justify-around mt-1 space-x-8 w-full leading-tight">
          <div></div>
          <div></div>
          <div className="text-center">
            <p className="font-bold">{localStorage.getItem('following')}</p>
            <p className="text-xs text-gray-500">Following</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{localStorage.getItem('followers')}</p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{localStorage.getItem('likes')}</p>
            <p className="text-xs text-gray-500">Likes</p>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="w-full text-center mt-4 text-sm text-gray-600">
        <p className='h-5'>{JSON.parse(localStorage.getItem('bio'))?.[0]}</p>
        <p className='h-5'>{JSON.parse(localStorage.getItem('bio'))?.[1]}</p>
          <p className="flex items-center justify-center h-6"><span>{JSON.parse(localStorage.getItem('bio'))?.[2]}</span> </p>
          <div className="flex items-center justify-center mt-1">
          <RiUserStarLine className='text-black' size={15} />
            <p className='font-bold text-gray-800 text-md'>TikTok Studio</p>
          </div>
        </div>
      </div>
      <br />

      {/* Content tabs */}
      <div className="mt-5 border-b border-gray-200">
        <div className="flex justify-around h-7">
          <div className="flex">
          <button 
            className={`px-4 py-2 ${activeTab === 'videos' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            <ThrowbackIcon/>
          </button>
          <div className="relative top-2 left-1 text-black text-xs">▼</div>
          </div>
          <button 
            className={`px-4 py-2 ${activeTab === 'locked' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('locked')}
          >
            <FiLock size={24} className="text-gray-500"/>
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'liked' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('liked')}
          >
            <Repeat className="w-6 h-6 mx-auto transform rotate-90 text-gray-500" />
          </button>
          <div className="flex w-6">
          <button 
            className={`px-4 py-2 ${activeTab === 'bookmarked' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('bookmarked')}
          >
            <div className="flex justify-center items-center gap-2">
              <RiBookmarkLine size={24} className="text-gray-500"/>          
            </div>
          </button>
          <div className="relative top-1.5 right-3.5 text-xs rounded-ful flex items-center justify-center">
              <FaEyeSlash size={12} className="text-gray-500"/>
              </div>
          </div>
          <div className="flex w-6">
          <button 
            className={`px-4 py-2 text-gray-500 ${activeTab === 'saved' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('saved')}
          >
              <FaRegHeart size={24} />
          </button>
          <div className="relative top-1.5 right-3.5 text-xs rounded-ful flex items-center justify-center">
              <FaEyeSlash size={12} className="text-gray-500"/>
              </div>
              </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 p-1">
    {/* {viewsList.map((views, index) => (
      <div key={index} className="relative aspect-[9/16]">
        <img
          src={thumbnails[index]}
          alt={`Video ${index + 1}`}
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute bottom-2 left-2 flex items-center text-white text-xs bg-black/60 px-1 py-0.5 rounded">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          {views}
        </div>
      </div>
    ))} */}
    {/* {viewsList.map((views, index) => (
  <div key={index} className="relative aspect-[9/16]">
    <video
      src={videos[index]} // Assuming `videos` is an array of video file paths or URLs
      alt={`Video ${index + 1}`}
      className="w-full h-full object-cover rounded"
      controls
    />
    <div className="absolute bottom-2 left-2 flex items-center text-white text-xs bg-black/60 px-1 py-0.5 rounded">
      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
      {views}
    </div>
  </div>
))} */}


{viewsList.map((views, index) => (
        <div key={index} className="relative aspect-[9/16]">
          <video
            ref={(el) => (videoRefs.current[index] = el)} // Set the ref for each video
            src={videos[index]} // Assuming `videos` is an array of video file paths or URLs
            alt={`Video ${index + 1}`}
            className="w-full h-full object-cover rounded"
            onClick={() => handleVideoClick(index)} // Handle play/pause on click
          />
          <div className="absolute bottom-2 left-2 flex items-center text-white text-xs bg-black/60 px-1 py-0.5 rounded">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            {views}
          </div>
        </div>
      ))}




  </div>



      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 max-w-md mx-auto h-15">
        <button className="flex flex-col items-center px-3 py-1">
        <RiHome4Line size={28} className="text-gray-500" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center px-3 py-1">
        <PiHandbag size={28}  className="text-gray-500"/>
          <span className="text-xs mt-1">Shop</span>
        </button>
        <button className="flex flex-col items-center px-3 py-1">
          <img src="/create.png" alt="" className=' -top-2 w-15' />
        </button>
        <button className="flex flex-col items-center px-3 py-1 relative">
          {/* <MessageCircle className="w-6 h-6" /> */}
          <RiMessageLine size={28} className="text-gray-500"/>
          <div className="absolute top-0 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            5
          </div>
          <span className="text-xs mt-1">Inbox</span>
        </button>
        <button className="flex flex-col items-center px-3 py-1">
        <FaUser size={28} />

          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
      
      {/* Settings Popup (rendered inline) */}
      <SettingsPopup isOpen={isSettingsOpen} onClose={closeSettings} />
    </div>
  );
}