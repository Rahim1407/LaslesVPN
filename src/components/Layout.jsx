import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../img/Logo.png'
// import iconUser from '../img/iconUser.png'
// import iconLocation from '../img/iconLocation.png'
import iconSocial1c from '../img/iconSocial1c.png'
import iconSocial2c from '../img/iconSocial2c.png'
import iconSocial3c from '../img/iconSocial3c.png'

function Layout() {
    return (
        <div>
            {/* Header */}
            <header className='flex justify-between items-center w-[85%] m-auto h-[15vh] '>
                {/* div 1 */}
                <div className='w-[20%] max-[540px]:w-[15%] '>
                    <img src={logo} alt="logo" />
                </div>
                {/* div 2 */}
                <div className='w-[50%] flex justify-evenly text-[#4F5665] max-[540px]:w-[50%] '>
                    <a href="#about" className='hover:border-b-[1px] hover:border-b-[black] max-[540px]:text-[.7em] hover:border-b-[solid] '>Rahim Shokirov</a>
                    <a href="#features" className='hover:border-b-[1px] hover:border-b-[black] max-[540px]:text-[.7em] hover:border-b-[solid] '>Features</a>
                    <a href="#pricing" className='hover:border-b-[1px] hover:border-b-[black] max-[540px]:text-[.7em] hover:border-b-[solid] '>Pricing</a>
                    <a href="#testimonials" className='hover:border-b-[1px] hover:border-b-[black] max-[540px]:text-[.7em] hover:border-b-[solid] '>Testimonials</a>
                    <a href="#help" className='hover:border-b-[1px] hover:border-b-[black] max-[540px]:text-[.7em] hover:border-b-[solid] '>Help</a>
                </div>
                {/* div 3 */}
                <div className='w-[30%] flex justify-evenly max-[540px]:text-[10px] '>
                    <button className='text-[#0B132A] font-medium '>Sign In</button>
                    <button className='text-[#F53855] font-medium border-[#F53855] border-[1px] border-[solid] 
                    rounded-[50px] w-[150px] py-[10px] max-[540px]:w-[50px] max-[540px]:py-[5px] '>Sign Up</button>
                </div>
            </header>
            {/* Home */}
            <Outlet />
            {/* Footer */}
            <footer className='bg-[#F8F8F8] w-[100%] '>
                <div className='w-[85%] m-auto flex flex-wrap justify-between py-[30px] '>
                    {/* div 1 */}
                    <div className='max-[540px]:w-[40%] '>
                        <img src={logo} alt="logo" /><br />
                        <h1 className='text-[#4F5665] font-semibold '>LaslesVPN <span className='font-normal '>is a private virtual network that
                        <br />has unique features and has high security.</span></h1><br />
                        {/* Social Icon */}
                        <div className='w-[50%] flex justify-evenly '>
                            <img src={iconSocial1c} alt="iconFacebook" className='w-[33%] cursor-pointer ' />
                            <img src={iconSocial2c} alt="iconTwitter" className='w-[33%] cursor-pointer ' />
                            <img src={iconSocial3c} alt="iconInstagram" className='w-[33%] cursor-pointer ' />
                        </div><br />
                        <p className='text-[#AFB5C0] leading-[30px] '>©2020Lasles <span className='font-semibold ml-[-4px] '>VPN</span></p>
                    </div>
                    {/* div 2 */}
                    <div className='max-[540px]:w-[40%] '>
                        <h1 className='text-[#0B132A] font-medium text-[18px] '>Product</h1><br />
                        <a href="##" className='text-[#4F5665] leading-[30px] hover:text-[black] '>Download </a><br />
                        <a href="##" className='text-[#4F5665] leading-[30px] hover:text-[black] '>Pricing </a><br />
                        <a href="##" className='text-[#4F5665] leading-[30px] hover:text-[black] '>Locations </a><br />
                        <a href="##" className='text-[#4F5665] leading-[30px] hover:text-[black] '>Server </a><br />
                        <a href="##" className='text-[#4F5665] leading-[30px] hover:text-[black] '>Countries </a><br />
                        <a href="##" className='text-[#4F5665] leading-[30px] hover:text-[black] '>Blog </a>
                    </div>
                    {/* div 3 */}
                    <div className='max-[540px]:w-[40%] '>
                        <h1 className='text-[#0B132A] font-medium text-[18px] '>Engage</h1><br />
                        <a href="##" className='text-[#4F5665] leading-[30px] hover:text-[black] '>LaslesVPN ?  </a><br />
                        <a href="##" className='text-[#4F5665] leading-[30px] hover:text-[black] '>FAQ </a><br />
                        <a href="##" className='text-[#4F5665] leading-[30px] hover:text-[black] '>Tutorials </a><br />
                        <a href="##" className='text-[#4F5665] leading-[30px] hover:text-[black] '>About Us </a><br />
                        <a href="##" className='text-[#4F5665] leading-[30px] hover:text-[black] '>Privacy Policy </a><br />
                        <a href="##" className='text-[#4F5665] leading-[30px] hover:text-[black] '>Terms of Service </a>
                    </div>
                    {/* div 4 */}
                    <div className='max-[540px]:w-[40%] '>
                        <h1 className='text-[#0B132A] font-medium text-[18px] '>Earn Money</h1><br />
                        <a href="##" className='text-[#4F5665] leading-[30px] hover:text-[black] '>Affiliate </a><br />
                        <a href="##" className='text-[#4F5665] leading-[30px] hover:text-[black] '>Become Partner </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout