import React from "react";


function TestContainer(props) {
  return (
    <div className="card relative my-7">
      <span className="absolute top-[-13px] bg-gray-300 px-4 rounded-md block ">{props.name}</span>
      <div className="flex justify-between ">
        <div className="flex flex-col flex-1 justify-center ">
          <h3>{props.title}</h3>
          <p className="text-gray-600">
            {props.description}
          </p>
        </div>
        <div className="vl"></div>
        <div className="flex flex-1 items-center">
          {props.children}
        </div>
      </div>
    </div>
  )
}
function Tests() {
  return (
    <div className="flex justify-center py-5 gap-4">
      <div className="sw">
        <TestContainer name='Test#1' title='Blood Cholestrol Test' description='some description'>
          LDL: <h3>120 mg/dL</h3>
        </TestContainer>
        <TestContainer name='Test#2' title='Blguyvgugt' description='somfdyftfyion'>
          Sugar Level: <h3>120 mg/dL</h3>
        </TestContainer>
        <TestContainer name='Test#3' title='zxcvhj sdfghjk' description='sometydftf hubh hbuhbu ption'>
          Giardia: <h3>120 mg/dL</h3>
        </TestContainer>
        <TestContainer name='Test#4' title='Blood Cholestrol Test' description='some description'>
          PH Level: <h3>4.3</h3>
        </TestContainer>
      </div>
    </div>
  )
}

export default Tests;