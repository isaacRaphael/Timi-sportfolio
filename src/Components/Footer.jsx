import React from 'react'

const Footer = () => {
  return (
    <footer className='  pt-[200px] sm:pt-[100px]'>
        <div className='w-full flex justify-center items-center'>
            <a className='mx-4' href="https://www.linkedin.com/in/adepojutimilehin/"><img src="./linkedIn.png" alt="" /></a>
            <a className='mx-4' href="https://twitter.com/officialtimi_bq"><img src="./twitter.png" alt="" /></a>
            <a className='mx-4' href="https://www.facebook.com/profile.php?id=100008234348667"><img src="./instagram.png" alt="" /></a>
            <a className='mx-4' href="https://www.instagram.com/blaq_timi/"><img src="./facebook.png" alt="" /></a>
        </div>
        <p className='text-center my-4 text-[#666666]'>adepojutimilehin7@gmail.com</p>
        
            <hr />
            
            <div className='py-5 w-full text-center text-[16px] sm:text-[14px] sm:px-4'> &copy; 2022 Timilehin Adepoju Adewunmi. All rights reserved.</div>
    </footer>
  )
}

export default Footer