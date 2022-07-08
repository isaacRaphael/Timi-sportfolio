import React from 'react'

const Homepage = ({ handlePageChange }) => {
  return (
    <main className='w-full'>
    <section className='flex flex-col text-center  w-[55%] 2xl:w-[60%] mx-auto py-24 md:w-[80%]'>
        <div className='w-full flex justify-center mb-6'>
            <img className='rounded-full shadow-2xl' src="./ppic.png" alt="profile-img" />
        </div>
        <h1 className='text-[24px] font-semibold sm:text-[20px]'>Hi there ✌, I'm Timilehin</h1>
        <h1 className='text-[40px] font-bold px-5 leading-tight mb-5 sm:text-[25px] sm:mt-2'>I design digital products with a patented approach to user experience design.</h1>
        <p className='text-[16px] px-5 text-[#333333] sm:text-[14px]'>I am a Digital Product Designer, UX Researcher and a Product Thinker. I enjoy solving complex problem with creative thinking and I try to connect the dots between user needs and business goals. It is safe to say that I enjoy crafting awesome digital experiences.</p>
        <div className='mt-8'>
            <button 
            onClick={() => handlePageChange("contact")}
            className='bg-black text-white w-[185px] h-[56px] rounded-md sm:w-[148px] sm:h-[44.8px] sm:text-sm'>Contact Me</button>
        </div>
    </section>
    <section className='flex flex-col text-center  w-[55%] 2xl:w-[60%] mx-auto lg:w-[80%]' >
        <div>
            <h1 className='text-[24px] font-bold text-left md:text-center'>PROJECTS</h1>
            <p className='text-left md:text-center text-[16px]'>Here are some of the projects I have worked on and I'm glad to share them with you 😁.</p>
            <div className='mt-10 grid grid-cols-2 gap-8 md:grid-cols-1 place-items-center'>
                {/* VBANK PROJECT */}
                <div className='flex flex-col h-[560px] w-[417px] rounded-lg xl:h-[448px] xl:w-[333.6px]'>
                    <img src="./vbank.png" alt="" className='h-1/2 w-full object-center' />
                    <div className='w-full h-1/2 bg-[#FFEDF8] flex flex-col justify-between py-4'>
                        <div className='px-8 text-left'>
                            <h1 className='text-[24px] xl:text-[16px]'><span className='font-semibold'>Vbank</span>- Mobile App. Redesign</h1>
                            <p className='mt-2 text-[16px] text-[#4d4d4d] xl:text-[14px]'>Redesigning the user onboarding experience and dashboard of the mobile Application.</p>
                        </div>
                        <a href='https://medium.com/@adepojutimilehin7/redesigning-the-onboarding-process-and-homepage-of-vbank-mobile-application-a-case-study-c380cd13e0f' className='px-8 py-12 text-left flex'>
                            <h1 className='text-[16px] font-semibold xl:text-[14px]'>View Case study</h1>
                            <img className='ml-4' src="./chevron.png" alt="button" /> 
                        </a>
                    </div>
                </div>
                {/* FATB */}
                <div className='flex flex-col h-[560px] w-[417px] rounded-lg xl:h-[448px] xl:w-[333.6px]'>
                    <img src="./fatb.png" alt="" className='h-1/2 w-full object-center' />
                    <div className='w-full h-1/2 bg-[#EBEBFF] flex flex-col justify-between py-4'>
                        <div className='px-8 text-left'>
                            <h1 className='text-[24px] xl:text-[16px]'><span className='font-semibold'>TBA</span>- Examination Portal</h1>
                            <p className='mt-2 text-[16px] text-[#4d4d4d]  xl:text-[14px]'>Designing an examination portal for recruiting aspiring tech talents across Africa.</p>
                        </div>
                        <a href='https://medium.com/@adepojutimilehin7/fellowship-at-the-bulb-africa-examination-portal-a-case-study-6462ed68943b' className='px-8 py-12 text-left flex'>
                            <h1 className='text-[16px] font-semibold  xl:text-[14px]'>View Case study</h1>
                            <img className='ml-4' src="./chevron.png" alt="button" />

                        </a>
                    </div>
                </div>
                {/* OKRIKA */}
                <div className='flex flex-col h-[560px] w-[417px] rounded-lg xl:h-[448px] xl:w-[333.6px]'>
                    <img src="./petme.png" alt="" className='h-1/2 w-full object-center' />
                    <div className='w-full h-1/2 bg-[#EBF5FF] flex flex-col justify-between py-4'>
                        <div className='px-8 text-left'>
                            <h1 className='text-[24px] xl:text-[16px]'><span className='font-semibold'>Pet Me</span>-  An online petshop.</h1>
                            <p className='mt-2 text-[16px] text-[#4d4d4d] xl:text-[14px]'>A market place that connects pet owners to premium pet products and services.</p>
                        </div>
                        <a href='https://medium.com/@adepojutimilehin7/petme-a-market-place-where-merchants-go-to-list-their-product-or-services-for-sale-85afe13a732a' className='px-8 py-12 text-left flex'>
                            <h1 className='text-[16px] font-semibold xl:text-[14px]'>View Case study</h1>
                            <img className='ml-4' src="./chevron.png" alt="button" />

                        </a>
                    </div>
                </div>
                {/* {KK} */}
                <div className='flex flex-col h-[560px] w-[417px] rounded-lg xl:h-[448px] xl:w-[333.6px]'>
                    <img src="./okrika.png" alt="" className='h-1/2 w-full object-center' />
                    <div className='w-full h-1/2 bg-[#EBFFFA] flex flex-col justify-between py-4'>
                        <div className='px-8 text-left'>
                            <h1 className='text-[24px] xl:text-[16px]'><span className='font-semibold'>Okirika</span>- Mobile Thrift App.</h1>
                            <p className='mt-2 text-[16px] text-[#4d4d4d] xl:text-[14px]'>Helping users shop for quality thrift wears from the comfort of their homes.</p>
                        </div>
                        <div className='px-8 py-12 text-left flex'>
                            <h1 className='text-[16px] font-semibold xl:text-[14px]'>Coming Soon</h1>
                            <img className='ml-4' src="./chevron.png" alt="button" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
  )
}

export default Homepage