import React from 'react'
import section1 from '../img/img1.png'
import section2 from '../img/img2.png'
import iconUser from '../img/iconUser.png'
import iconLocation from '../img/iconLocation.png'
import ok from '../img/ok.png'
import ok1 from '../img/ok1.png'
import plan1 from '../img/plan1Free.png'
import plan2 from '../img/plan2Standard.png'
import plan3 from '../img/plan3Premium.png'
import map from '../img/map.png'
import customer1 from '../img/customer1.png'
import customer2 from '../img/customer2.png'
import customer3 from '../img/customer3.png'
import star from '../img/star.png'
import iconLeft from '../img/iconLeft.png'
import iconRight from '../img/iconRight.png'
import redLine from '../img/redLine.png'
import sponsor1 from '../img/sponsor1.png'
import sponsor2 from '../img/sponsor2.png'
import sponsor3 from '../img/sponsor3.png'
import sponsor4 from '../img/sponsor4.png'
import sponsor5 from '../img/sponsor5.png'

function Home() {
    return (
        <div><br /><br />
            {/* Section 1 - Want anything to be easy with LaslesVPN. */}
            {/* <div id='about' className='w-[85%] m-auto flex flex-wrap '>
                <div className='w-[50%] m-auto max-[540px]:w-[80%] max-[540px]:text-center '>
                    <h1 className='text-[#0B132A] text-[50px] font-medium '>Want anything to be easy with <span className='font-bold '>LaslesVPN.</span></h1>
                    <br />
                    <p className='text-[#4F5665] font-normal text-[16px] '>
                        Provide a network for all your needs with ease and fun using <span className='font-medium '>LaslesVPN</span><br /> discover interesting features from us.
                    </p>
                    <br /><br />
                    <button className='text-[#FFFFFF] bg-[#F53838] rounded-[10px] w-[250px] h-[60px] font-bold '>Get Started</button>
                </div>
                <div className='w-[50%] max-[540px]:w-[80%] m-auto '>
                    <img src={section1} alt="section1" />
                </div>
            </div> */}
            <br /><br />
            <br /><br />
            {/* Section 2 – 90+ - Users, 30+ - Locations, 50+ - Servers */}
            <div className='w-[85%] m-auto flex justify-around '>
                {/* Users */}
                <div className='flex justify-between items-center w-[12%] max-[540px]:w-[9%] '>
                    <img src={iconUser} alt="Users" />
                    <div className='max-[540px]:ml-[10px] '>
                        <h1 className='text-[#0B132A] font-bold text-[25px] max-[540px]:text-[16px] '>90+</h1>
                        <p className='max-[540px]:text-[10px] '>Users</p>
                    </div>
                </div>
                {/* Locations */}
                <div className='flex justify-between items-center w-[12%] max-[540px]:w-[9%] '>
                    <img src={iconLocation} alt="Location" />
                    <div className='max-[540px]:ml-[10px] '>
                        <h1 className='text-[#0B132A] font-bold text-[25px] max-[540px]:text-[16px] '>30+</h1>
                        <p className='max-[540px]:text-[10px] '>Locations</p>
                    </div>
                </div>
                {/* Servers */}
                <div className='flex justify-between items-center w-[12%] max-[540px]:w-[9%] '>
                    <img src={iconUser} alt="Servers" />
                    <div className='max-[540px]:ml-[10px] '>
                        <h1 className='text-[#0B132A] font-bold text-[25px] max-[540px]:text-[16px] '>50+</h1>
                        <p className='max-[540px]:text-[10px] '>Servers</p>
                    </div>
                </div>
            </div>
            <br /><br />
            {/* Section 3 - We Provide Many Features You Can Use */}
            <div id='features' className='w-[100%] bg-[#F7F7F8] '>
                <br /><br />
                <div className='w-[85%] m-auto flex justify-between flex-wrap '>
                    {/* Left */}
                    <div className='w-[50%] max-[540px]:w-[80%] m-auto '>
                        <img src={section2} alt="section2" />
                    </div>
                    {/* Right */}
                    <div className='w-[45%] max-[540px]:w-[80%] m-auto max-[540px]:text-center '><br />
                        <h1 className='text-[#0B132A] text-[35px] font-medium '>We Provide Many <br /> Features You Can Use</h1><br />
                        <p className='text-[16px] text-[#4F5665] '>You can explore the features that we provide with fun and <br /> have their own functions each feature.</p><br />
                        <span className='flex max-[540px]:ml-[25%] '><img src={ok} alt="ok" className='mr-[8px] ' /> Powerfull online protection.</span><br />
                        <span className='flex max-[540px]:ml-[25%] '><img src={ok} alt="ok" className='mr-[8px] ' /> Internet without borders.</span><br />
                        <span className='flex max-[540px]:ml-[25%] '><img src={ok} alt="ok" className='mr-[8px] ' /> Supercharged VPN</span><br />
                        <span className='flex max-[540px]:ml-[25%] '><img src={ok} alt="ok" className='mr-[8px] ' /> No specific time limits.</span>
                    </div>
                </div>
                <br /><br /><br />
            </div>
            {/* Section 4 - Choose Your Plan */}
            <div id='pricing' className='w-[100%] bg-[#FAFAFA] '><br /><br />
                <h1 className='text-center text-[#0B132A] text-[35px] font-medium '>Choose Your Plan</h1><br />
                <p className='text-center max-[540px]:w-[70%] max-[540px]:ml-[15%] text-[#4F5665] text-[16px] '>Let's choose the package that is best for you and explore it happily and <br /> cheerfully.</p><br /><br />
                {/* Choose Your Plan */}
                <div className='w-[85%] flex flex-wrap justify-between m-auto '>
                    {/* Free Plan */}
                    <div className='w-[30%] max-[540px]:w-[60%] max-[540px]:m-auto max-[540px]:mt-[20px] py-[50px] bg-[#fff] border-[2px] border-[solid] border-[#DDDDDD] rounded-[10px] text-center '>
                        <div>
                            <div>
                                <img src={plan1} alt="plan" className='m-auto ' />
                            </div><br />
                            <h1 className='text-[#0B132A] font-medium text-[18px] '>Free Plan</h1><br />
                            <div>
                                <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />Unlimited Bandwitch</span>
                                <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />Encrypted Connection</span>
                                <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />No Traffic Logs</span>
                                <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />Works on All Devices</span>
                            </div>    
                        </div><br /><br /><br />
                        <h1 className='text-[#0B132A] font-medium text-[25px] max-[540px]:mt-[-50px] '>Free</h1><br />
                        <button className='border-[2px] text-[#F53838] font-bold py-[8px] border-[#F53838] border-[solid] rounded-[50px] w-[55%] '>Select</button>
                    </div>
                    {/* Standard Plan */}
                    <div className='w-[30%] max-[540px]:w-[60%] max-[540px]:m-auto max-[540px]:mt-[20px] py-[50px] bg-[#fff] border-[2px] border-[solid] border-[#DDDDDD] rounded-[10px] text-center '>
                        <div>
                            <div>
                                <img src={plan2} alt="plan" className='m-auto ' />
                            </div><br />
                            <h1 className='text-[#0B132A] font-medium text-[18px] '>Standard Plan</h1><br />
                            <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />Unlimited Bandwitch</span>
                            <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />Encrypted Connection</span>
                            <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />Yes Traffic Logs</span>
                            <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />Works on All Devices</span>
                            <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />Connect Anyware</span>
                        </div><br /><br />
                        <h1 className='text-[#0B132A] max-[540px]:mt-[-35px] font-medium text-[25px] '>$9<span className='text-[#4F5665] font-normal '> / mo</span></h1><br />
                        <button className='border-[2px] text-[#F53838] font-bold py-[8px] border-[#F53838] border-[solid] rounded-[50px] w-[55%] '>Select</button>
                    </div>
                    {/* Premium Plan */}
                    <div className='w-[30%] max-[540px]:w-[60%] max-[540px]:m-auto max-[540px]:mt-[20px] py-[50px] bg-[#fff] border-[2px] border-[solid] border-[#F53838] rounded-[10px] text-center '>
                        <div>
                            <div>
                                <img src={plan3} alt="plan" className='m-auto ' />
                            </div><br />
                            <h1 className='text-[#0B132A] font-medium text-[18px] '>Premium Plan</h1><br />
                            <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />Unlimited Bandwitch</span>
                            <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />Encrypted Connection</span>
                            <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />Yes Traffic Logs</span>
                            <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />Works on All Devices</span>
                            <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />Connect Anyware</span>
                            <span className='flex justify-start items-center w-[65%] max-[540px]:text-[10px] max-[540px]:text-left m-auto leading-[30px] '><img src={ok1} alt="ok" className='mr-[10px] ' />Get New Features</span>
                        </div><br />
                        <h1 className='text-[#0B132A]  font-medium text-[25px] '>$12<span className='text-[#4F5665] font-normal '> / mo</span></h1><br />
                        <button className='border-[2px] font-bold py-[8px] border-[#F53838] border-[solid] rounded-[50px] w-[55%] bg-[#F53838] text-white '>Select</button>
                    </div>
                </div>
            </div>
            <br /><br />
            <br /><br />
            {/* Section 5 -Huge Global Network of Fast VPN */}
            <div id='testimonials' className='text-center '>
                <h1 className='text-[#0B132A] max-[540px]:text-[25px] text-[35px] font-bold '>Huge Global Network <br /> of Fast VPN</h1><br />
                <p className='text-[#4F5665] max-[540px]:w-[70%] max-[540px]:text-[12px] max-[540px]:m-auto '>See <span className='font-medium '>LaslesVPN</span> everywhere to make it easier for you when you move <br /> locations.</p><br /><br />
                <img src={map} alt="map" className='m-auto w-[80%] ' />
            </div>
            <br /><br />
            {/* Section 6 - Sponsors */}
            <div className='flex flex-wrap items-center justify-between w-[85%] m-auto '>
                <img src={sponsor1} alt="sponsors" className='w-[17%] max-[540px]:w-[40%] max-[540px]:ml-[7.5%] ' />
                <img src={sponsor2} alt="sponsors" className='w-[17%] max-[540px]:w-[40%] max-[540px]:mr-[7.5%] ' />
                <img src={sponsor3} alt="sponsors" className='w-[17%] max-[540px]:w-[40%] max-[540px]:mr-[7.5%] ' />
                <img src={sponsor4} alt="sponsors" className='w-[17%] max-[540px]:w-[40%] max-[540px]:ml-[7.5%] ' />
                <img src={sponsor5} alt="sponsors" className='w-[17%] max-[540px]:w-[40%] max-[540px]:ml-[30%] ' />
            </div>
            <br /><br />
            {/* Section 7 - Trusted by Thousands of Happy Customer */}
            <div className='w-[92.5%] ml-auto '>
                <h1 className='text-[#0B132A] max-[540px]:text-[25px] text-[35px] font-bold text-center '>Trusted by Thousands of <br /> Happy Customer</h1><br />
                <p className='text-[#4F5665] max-[540px]:text-[14px] max-[540px]:w-[86%] max-[540px]:m-auto text-center '>These are the stories of our customers who have joined us with great <br />
                    pleasure when using this crazy feature.</p><br /><br />
                {/* Coments */}
                <div className='flex flex-wrap justify-between '>
                    {/* Coment 1 */}
                    <div className='w-[30%] max-[540px]:w-[70%] max-[540px]:m-auto p-[20px] border-[2px] border-[#F53838] border-[solid] rounded-[10px] '>
                        <div className='flex justify-between '>
                            <div className='flex items-center '>
                                <img src={customer1} alt="coment" />
                                <div className='ml-[10px] '>
                                    <h1 className='font-bold text-[#0B132A] text-[18px] leading-[30px] '>Viezh Robert</h1>
                                    <p className='text-[#4F5665] text-[14px] '>Warsaw, Poland</p>
                                </div>
                            </div>
                            <div className='flex items-center '>
                                4.5 <img src={star} alt="star" />
                            </div>
                        </div><br />
                        <p className='text-[#0B132A] leading-[30px] font-medium '>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
                    </div>
                    {/* Coment 2 */}
                    <div className='w-[30%] max-[540px]:w-[70%] max-[540px]:m-auto max-[540px]:mt-[50px] p-[20px] border-[2px] border-[#DDDDDD] border-[solid] rounded-[10px] '>
                        <div className='flex justify-between '>
                            <div className='flex items-center '>
                                <img src={customer2} alt="coment" />
                                <div className='ml-[10px] '>
                                    <h1 className='font-bold text-[#0B132A] text-[18px] leading-[30px] '>Yessica Christy</h1>
                                    <p className='text-[#4F5665] text-[14px] '>Shanxi, China</p>
                                </div>
                            </div>
                            <div className='flex items-center '>
                                4.5 <img src={star} alt="star" />
                            </div>
                        </div><br />
                        <p className='text-[#0B132A] leading-[30px] font-medium '>“I like it because I like to travel far and still can connect with high speed.”.</p>
                    </div>
                    {/* Coment 3 */}
                    <div className='w-[30%] max-[540px]:w-[70%] max-[540px]:m-auto max-[540px]:mt-[50px] p-[20px] rounded-r-none border-r-transparent border-[2px] border-[#DDDDDD] border-[solid] rounded-[10px] '>
                        <div className='flex justify-between '>
                            <div className='flex items-center '>
                                <img src={customer3} alt="coment" />
                                <div className='ml-[10px] '>
                                    <h1 className='font-bold text-[#0B132A] text-[18px] leading-[30px] '>Kim Young Jou</h1>
                                    <p className='text-[#4F5665] text-[14px] '>Seoul, South Korea</p>
                                </div>
                            </div>
                            <div className='flex items-center '>
                                4.5 <img src={star} alt="star" />
                            </div>
                        </div><br />
                        <p className='text-[#0B132A] leading-[30px] font-medium '>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
                    </div>
                </div>
            </div>
            <div className='mt-[50px] max-[540px]:hidden w-[85%] m-auto flex justify-between items-center '>
                <img src={redLine} alt="redLine" />
                <div className='flex items-center '>
                    <img src={iconLeft} alt="iconLeft" />
                    <img src={iconRight} alt="iconRight" className='pt-[7px] mb-[-20px] ' />
                </div>
            </div>
            {/* Section 8 - Subscribe Now for Get Special Features! */}
            <div id='help' className='w-[85%] max-[540px]:mt-[-50px] h-[35vh] max-[540px]:h-[25vh] bg-[white] border-solid border-[.1px] border-[#d7dbe1] m-auto flex justify-between items-center rounded-[10px] relative top-[100px] px-[50px] mt-[-100px] '>
                <div>
                    <h1 className='text-[#0B132A] max-[540px]:text-[16px] max-[540px]:leading-[25px] leading-[45px] text-[35px] font-bold '>Subscribe Now for <br /> Get Special Features!</h1>
                    <p className='text-[#4F5665] leading-[40px] max-[540px]:leading-[20px] max-[540px]:text-[12px] '>Let's subscribe with us and find the fun.</p>
                </div>
                <button className='bg-[#F53838] max-[540px]:w-[100px] max-[540px]:text-[10px] max-[540px]:py-[7px] 
                w-[250px] text-white rounded-[10px] font-bold py-[15px] '>Subscribe Now</button>
            </div>
            {/* Section 9 - empty Div */}
            <div className='bg-[#F8F8F8] h-[25vh] '></div>
        </div>
    )
}

export default Home