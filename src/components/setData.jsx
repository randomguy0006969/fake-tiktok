import { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, Copy, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function SocialMetricsForm() {
  const [availableRewards, setAvailableRewards] = useState('');
  const [balance,setBalance] = useState('');
  const [following, setFollowing] = useState('');
  const [followers, setFollowers] = useState('');
  const [likes, setLikes] = useState('');
  const [vlikes, setVlikes] = useState('');
  const [showSavedData, setShowSavedData] = useState(false);
  const [username, setUsername] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputNameValue, setInputNameValue] = useState('');
  const [bioText, setBioText] = useState('');
  const [lines,setLines] = useState('')
  const [name,setName]= useState('');
  const navigate=useNavigate();
  
  const allowedUsernames = ['@mysterygiftmanofficial', '@john', '@admin', '@tester'];

  const handleUsernameChange = (e) => {
    const input = e.target.value;
    setInputValue(input);
    if (allowedUsernames.includes(input)) {
      setUsername(input);
    }
  };
  const handleNameChange = (e) => {
    const nameInput = e.target.value;
    setInputNameValue(nameInput);
    if (allowedUsernames.includes(localStorage.getItem('username'))) {
      setName(nameInput);
    }
  };
  const handleBioChange = (e) => {
    const value = e.target.value;
    setBioText(value);

    // Split by line breaks and filter out empty lines
    const lines = value.split('\n').map(line => line.trim()).filter(line => line !== '');
    setLines(lines)
    // Save to localStorage
  };
  // Load data from localStorage on component mount
  useEffect(() => {
    const storedAvailableRewards = localStorage.getItem('availableRewards');
    const storedBalance = localStorage.getItem("balance")
    const storedFollowing = localStorage.getItem('following');
    const storedFollowers = localStorage.getItem('followers');
    const storedLikes = localStorage.getItem('likes');
    const storedVlikes = localStorage.getItem('vlikes');
    const storedUsername = localStorage.getItem('username');
    const savedBio = JSON.parse(localStorage.getItem('bio'));
    const storedName = localStorage.getItem('name')

    if (storedAvailableRewards) setAvailableRewards(storedAvailableRewards);
    if (storedBalance) setBalance(storedBalance);
    if (storedFollowing) setFollowing(storedFollowing);
    if (storedFollowers) setFollowers(storedFollowers);
    if (storedLikes) setLikes(storedLikes);
    if (storedUsername) setUsername(storedUsername);
    if (savedBio) setBioText(savedBio.join('\n'))
    if (storedName)setName(storedName)
    if (storedVlikes) {
      try {
        const parsedVlikes = JSON.parse(storedVlikes);
        setVlikes(parsedVlikes.join(','));
      } catch (e) {
        console.error("Error parsing vlikes from localStorage", e);
      }
    }

    // Show saved data if any data exists
    if (storedAvailableRewards || balance|| storedFollowing || storedFollowers || storedLikes || storedVlikes || storedUsername || savedBio || storedName) {
      setShowSavedData(true);
    }
  }, []);

  const goBack = () => {
    navigate('/')
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Process vlikes string into array
    const vlikesArray = vlikes.split(',').map(item => item.trim());
    
    // Save each item individually to localStorage
    localStorage.setItem('availableRewards', availableRewards);
    localStorage.setItem('balance', balance);
    localStorage.setItem('following', following);
    localStorage.setItem('followers', followers);
    localStorage.setItem('likes', likes);
    localStorage.setItem('vlikes', JSON.stringify(vlikesArray));
    localStorage.setItem('username', username);
    localStorage.setItem('bio', JSON.stringify(lines))
    localStorage.setItem('name',name)
    
    setShowSavedData(true);
  };

  const clearData = () => {
    // Remove each item individually from localStorage
    localStorage.removeItem('availableRewards');
    localStorage.removeItem('following');
    localStorage.removeItem('followers');
    localStorage.removeItem('likes');
    localStorage.removeItem('vlikes');
    localStorage.removeItem('balance');
    localStorage.removeItem('username');
    localStorage.removeItem('bio');
    localStorage.removeItem('name')
    localStorage.removeItem('transferhistory')
    localStorage.removeItem('transferred')
    localStorage.removeItem('username')
    
    // Reset state
    setAvailableRewards('');
    setFollowing('');
    setFollowers('');
    setLikes('');
    setVlikes('');
    setBalance('');
    setUsername('');
    setName('')
    setBioText('')
    setShowSavedData(false);
  };


  const defaultFontSize = 16;

  const [selectedSize, setSelectedSize] = useState(() => {
    const saved = localStorage.getItem('fontSize');
    return saved ? parseInt(saved, 10) : defaultFontSize;
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${selectedSize}px`;
    localStorage.setItem('fontSize', selectedSize);
  }, [selectedSize]);

  const sizes = [12,13, 14, 15, 16, 17,18];

  return (
    <>
    <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200 h-15">
      <ArrowLeft size={24} onClick={goBack} />
        <div className="text-2xl font-medium text-gray-900 ">Transaction details</div>
        <div></div>
      </div>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">

        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="availableRewards" className="block text-sm font-medium text-gray-700">Available Rewards</label>
            <input
              type="text"
              id="availableRewards"
              value={availableRewards || ""}
              onChange={(e) => setAvailableRewards(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border h-10"
              placeholder="Enter available rewards"
            />
          </div>
          <div>
            <label htmlFor="balance" className="block text-sm font-medium text-gray-700">Balance</label>
            <input
              type="text"
              id="balance"
              value={balance || ""}
              onChange={(e) => setBalance(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border  h-10"
              placeholder="Enter Balance"
            />
          </div>
          
          <div>
            <label htmlFor="following" className="block text-sm font-medium text-gray-700">Following</label>
            <input
              type="text"
              id="following"
              value={following || ""}
              onChange={(e) => setFollowing(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border  h-10"
              placeholder="Enter following count"
            />
          </div>
          
          <div>
            <label htmlFor="followers" className="block text-sm font-medium text-gray-700">Followers</label>
            <input
              type="text"
              id="followers"
              value={followers || ""}
              onChange={(e) => setFollowers(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border  h-10"
              placeholder="Enter followers count"
            />
          </div>
          
          <div>
            <label htmlFor="likes" className="block text-sm font-medium text-gray-700">Likes</label>
            <input
              type="text"
              id="likes"
              value={likes || ""}
              onChange={(e) => setLikes(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border  h-10"
              placeholder="Enter likes count"
            />
          </div>
          
          <div>
            <label htmlFor="vlikes" className="block text-sm font-medium text-gray-700">VLikes</label>
            <input
              type="text"
              id="vlikes"
              value={vlikes || ""}
              onChange={(e) => setVlikes(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border  h-10"
              placeholder="Enter comma-separated values (e.g. 155.5k,1k,2m)"
            />
          </div>
          <br />
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={inputNameValue || ""}
              onChange={(e) =>handleNameChange(e)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border  h-10"
              placeholder="Enter Name"
            />
          </div>
          <br />
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={inputValue || ""}
              onChange={(e) =>handleUsernameChange(e)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border  h-10"
              placeholder="Enter a valid username"
            />
          </div>
          <br />
          <div>
      <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
      <textarea
        id="bio"
        rows="5"
        value={bioText}
        onChange={handleBioChange}
        placeholder="Enter your bio. Each line will be saved as a separate item. Enter three lines"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
      ></textarea>
    </div>
          <br />
          <div>
            <h2>Select Font Size</h2>
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  margin: '5px',
                  padding: '10px 20px',
                  backgroundColor: selectedSize === size ? '#4CAF50' : '#eee',
                  color: selectedSize === size ? 'white' : 'black',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                }}
              >
                {size}
              </button>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-3xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  h-15"
            >
              Save
            </button>
          </div>
        </form>
        
        {showSavedData && (
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Saved Data</h2>
              <button 
                onClick={clearData}
                className="text-sm bg-red-500 rounded-md text-white hover:text-white"
              >
                Clear Data
              </button>
            </div>
            <div className="bg-gray-50 rounded p-3 text-sm">
              <p><span className="font-semibold">Available Rewards:</span> {availableRewards}</p>
              <p><span className="font-semibold">VLikes:</span> {vlikes}</p>
              <p><span className="font-semibold">Following:</span> {following}</p>
              <p><span className="font-semibold">Followers:</span> {followers}</p>
              <p><span className="font-semibold">Likes:</span> {likes}</p>
              <p><span className="font-semibold">VLikes:</span> {vlikes}</p>
              <p><span className="font-semibold">Name</span> {name}</p>
              <p><span className="font-semibold">Username</span> {username}</p>
              <p><span className="font-semibold">VLikes:</span> {vlikes}</p>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}