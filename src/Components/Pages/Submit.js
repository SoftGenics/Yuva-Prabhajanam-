import React from 'react'
import { Link } from 'react-router-dom'
const Submit = () => {
  return (
      <>
    <div className='d-flex justify-content-center'>
        <img src='/images/sucess-transparent.gif' alt='success' />
    </div>
    <h1 className='text-center'>Joined Successfully</h1>
    <div className='d-flex justify-content-center'>
        <a href='https://api.whatsapp.com/send?text=https://yuvaprabhanjanam.com/'><img src='images/whatsapp.png' alt='icon' style={{width:'300px'}} /></a>
    </div>
    <div className='d-flex justify-content-center'>
        <Link to="/"><img src='images/back.png' alt='icon' style={{width:'300px'}} /></Link>
    </div>
    </>
  )
}

export default Submit