import React from "react";


function CompIcon(props) {
  return (
    <div className="flex flex-col items-center">
      <div className="">
        <span className={"block w-9 h-9 rounded-full "+props.color}></span>
      </div>
      <div>{props.title}</div>
    </div>
  )
}
function Request() {
  return (
    <div className="flex justify-center">
      <div className="card flex flex-col sw mt-10">

        <div className="flex w-full realtive ">
          <div className="p-10 relative ">
            <div className=" -translate-y-[70%] w-full h-full">
              <img className='w-32 ' alt='front' src={require('../assets/logo512.png')} />
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center gap-5">
            <h3>Investigative Request</h3>
            <div className="flex gap-4 items-center">
              <CompIcon color='bg-blue-500' title='Requested' />
              <hr className="hr w-16   bg-blue-500" />
              <CompIcon color='bg-orange-500' title='Sampled' />
              <hr className="hr w-16 bg-green-500" />
              <CompIcon color='bg-green-500' title='Recieved' />
            </div>
          </div>

          <div><input type='button' value='print' /></div>
        </div>
        
        <div className="flex justify-center py-4">
          <div className="flex-1 items-center flex flex-col">
            <div>
              <small>first name</small>
              <h3>Jhon Doe</h3>
            </div>
          </div>
          <div className="flex-1 items-center flex flex-col">
            <div>
              <small>phone number</small>
              <h3>0913412342</h3>
            </div>
          </div>
          <div className="flex-1 items-center flex flex-col">
            <div>
              <small>Labratory</small>
              <h3>Boston Dinamics Lab</h3>
            </div>
          </div>
          <div className="flex-1 items-center flex flex-col">
            <div>
              <small>Request Date</small>
              <h3>09/22/2022</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Request;