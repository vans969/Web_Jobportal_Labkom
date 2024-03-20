import React from 'react'
import logo from "../../asset/LOGO.png"

function Navbar() {
  return (
    <div className='h-20 flex items-center w-full text-white'>
        <img src={logo} alt="Logo" className="h-20 w-auto mr-2" style={{ marginLeft: '100px', marginTop: '20px', }}/>
        <div className='text-3xl pl-5 font-bold'>Labkom Maroon.</div>

    </div>
  )
}

export default Navbar