import React from 'react'

const Contact = () => {
  return (
    <section className='w-full '>
        <div className='w-[55%] 2xl:w-[60%] mx-auto md:w-[80%]'>
            <div className='w-[60%] md:w-[100%] flex flex-col justify-start mt-[200px] md:mt-[60px] px-10 sm:px-5 mb-10'>
                <h1 className='text-[24px] font-semibold mb-5'>Can I get to know you too? 😊</h1>
                <p className='mb-4'>If you would love to talk to me about product design, a project, my style of fashion, 
                    football (Manchester United) basically 😁, or buy me peppered turkey, you can shoot 
                    me an email <br />or reach out to me via my social media handles.</p>
                <div className='flex justify-start items-center sm:flex-col'>
                    <h1 className='font-semibold'>adepojutimilehin7@gmail.com</h1>
                    <img src="./mailico.png" alt="icon" className='sm:mt-2 w-[40%]' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact