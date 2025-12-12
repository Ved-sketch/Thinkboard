import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import RateLimitedUI from '../Components/RateLimitedUI';

const HomePage = () => {
    const [isRateLimited,setRateLimited] = useState(false);
  return (
    <div className='min-h-screen'>
        <Navbar/>

        {isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage