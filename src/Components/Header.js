import React from "react";

function Header() {
  return (
    <div>
      <div className="flex justify-center p-4 ">
        <div className="w-full px-10 flex  items-center">
          <h2>Lab Connect</h2>
          <div className="flex justify-center flex-1 ">
            <div className='flex gap-4 justify-center text-center'>
              <a href='/dashboard' classname='w-24'>Dashboard</a>
              <a href='/dashboard' className="w-24 ">Order Test</a>
              <a href='/dashboard' className="w-24 active">Results</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="rounded-full bg-blue w-5 h-5">
              <img src={require('../assets/logo512.png')} alt="profile" className='w-5 h-5 rounded' />
            </div>
            <p className="px-2">Dr. Gashaw</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;