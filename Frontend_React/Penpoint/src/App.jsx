import { useState } from 'react'
import Penpoint from './assets/penpoint.png'

function App() {

  return (
    /*
    <div className="min-h-screen p-10 box-border w-screen h-screen flex items-center justify-center">
      <div className="border-white border-4 md:border-8 w-full h-full box-border px-4 sm:px-10 md:px-40 border-radius" style={{borderRadius: '50px'}}>
        <div className="flex flex-row justify-around items-center text-white crimson-text-semibold text-xl sm:text-2xl md:text-3xl p-8">
          <div>About</div>
          <div>Login</div>
          <div>Sign Up</div>
        </div>

        <div className="p-4 flex items-center justify-around lg:text-left text-center md:gap-80 lg:flex-row pt-10" >
          <div className='flex flex-col justify-center items-center pt-20 '>
            <div className='chonburi-regular text-5xl sm:text-6xl md:text-9xl text-white text-wrap'>Welcome to Penpoint</div>
            <button className='crimson-text-bold text-white h-fit w-fit mt-6 md:mt-12 ' style={{background: '#1E3E69'}}><div className='px-4 py-1 text-lg lg:text-2xl'>Get Started</div></button>
          </div>
          <img src={Penpoint} alt="Penpoint Logo" className="hidden lg:flex" />
        </div>
      </div>
    </div>
*/
<>
  <div className="min-h-screen p-10 box-border w-screen h-screen flex flex-col items-center justify-center">
    <div className="border-white border-4 md:border-8 w-full h-full box-border px-4 sm:px-10 md:px-40 border-radius" style={{borderRadius: '50px'}}>
      <div className="flex flex-row justify-around items-center text-white crimson-text-semibold text-xl sm:text-2xl md:text-3xl p-8">
          <div>About</div>
          <div>Login</div>
          <div>Sign Up</div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-around text-center lg:text-left gap-10 md:gap-32">
        <div className="flex flex-col items-center lg:items-start text-adjust ">
          <h1 className="chonburi-regular text-white my-5 ">
            Welcome to Penpoint
          </h1>
          <button 
            className="crimson-text-bold text-white px-6 py-2 mt-6 md:mt-12 rounded-md shadow-lg"
            style={{backgroundColor:'#1E3E69', fontSize:'22px', border:'3px solid #fff'}}
          >
            Get Started
          </button>
        </div>
        <img src={Penpoint} alt="Penpoint Logo" className="hidden lg:block max-w-xs self-center tablet-size" />
      </div>        
    </div>
  </div>
</>
  )
}
 
export default App
 