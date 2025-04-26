import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TikTokProfile from './components/tiktokProfile'
import BalancePage from './components/balance'
import BalanceDetailsPage from './components/balanceDetail'
import LiveRewardsPage from './components/liveRewards'
import TransferUI from './components/transfer'
import TransactionDetails from './components/transactionDetails'
import SocialMetricsForm from './components/setData'
import PWARequired from './components/pwaRequired.'
import InstallPage from './components/install'
import ThrowbackFiltersIcon from './components/sliders'
function App() {
  useEffect(() => {
    const existing = localStorage.getItem('username');
    const existingname = localStorage.getItem('name');
    const transferredamount = localStorage.getItem('transferred')
    const transferredhistory = localStorage.getItem('transferhistory')
    const currentBalance= localStorage.getItem('balance')
    const defaultfontsize= localStorage.getItem('fontsize')
    if (!existing) {
      localStorage.setItem('username', '@mysterygiftmanofficial');
    }
    if (!existingname) {
      localStorage.setItem('name', 'Mystery Gift Man');
    }
    if (!transferredamount || isNaN(transferredamount)) {
      localStorage.setItem('transferred', 0);
    }
    if (!transferredhistory) {
      localStorage.setItem('transferhistory', '0');
    }
    if (!defaultfontsize){
      localStorage.setItem('fontsize',16);
      document.documentElement.style.fontSize = `${16}px`;
    }
  }, []);
  return (
    <Router>
      {/* <PWARequired /> */}
      <Routes>
        <Route path="/" element={<TikTokProfile />} />
        <Route path="/balance" element={<BalancePage/>} />
        <Route path="/balance-detail" element={<BalanceDetailsPage/>} />
        <Route path="/live-reward" element={<LiveRewardsPage/>} />
        <Route path="/transfer" element={<TransferUI/>} />
        <Route path="/transaction-detail" element={<TransactionDetails />} />
        <Route path="/set-data" element={<SocialMetricsForm/>} />
        <Route path="/install" element={<InstallPage />} />
        <Route path="/test" element={<ThrowbackFiltersIcon />} />

      </Routes>
    </Router>
  )
}

export default App
