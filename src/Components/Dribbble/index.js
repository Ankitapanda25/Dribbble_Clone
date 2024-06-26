
// import './style.css';
import { CiSearch } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import { HiOutlineMenuAlt2 } from "react-icons/hi";

function Index() {

    return (
        <>
            <div className="  bg-neutral-50">
                <nav className="p-6">
                    <ul className="flex flex-wrap items-center font-bold text-sm ">
                        {/* <li> <HiOutlineMenuAlt2 /></li> */}
                        <li className="ml-5">Find designers</li>
                        <li className=" ml-10">Inspiration</li>
                        <li className=" ml-10">Courses</li>
                        <li className=" ml-10">Jobs</li>
                        <li className=" ml-10">Go Pro</li>
                        <li className=' ml-32 font-serif italic font-bold text-3xl '> Dribbble</li>
                        <li className=" ml-48"><CiSearch /></li>
                        <li ><input type="text" className="px-6 py-3 rounded-full text-base font-normal" placeholder='Search... ' /></li>
                        <li className=' ml-6 px-1 py-3 cursor-pointer '> Log in</li>
                        <li className='ml-6 px-6 py-4 rounded-full bg-slate-900 text-white cursor-pointer'>Sign Up</li>
                    </ul>
                </nav>
            </div>

            <div className="text-center py-20 bg-neutral-50">
                <button className='bg-yellow-200 justify-center items-center cursor-pointer text-black text-base font-serif py-2 px-3 rounded-full font-bold '>Over 3 million ready-to-work creatives!</button>
                <p className='mt-10 text-center text-7xl font-serif font-medium text-slate-900'>The world’s destination <br /> for design</p>
                <p className='mt-10 text-center text-xl font-semibold text-slate-900 ' >Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
                <button type="button" className=' bg-slate-900 hover:bg-zinc-700 justify-center items-center cursor-pointer mt-8 text-white text-sm font-bold py-4 px-5 mb-10 rounded-full'>Get Started</button>
            </div>

            {/* 
            <div className="grid gap-5 grid-cols-5 grid-rows-1  scroll-auto scroll-ml-3 pl-9 pr-8">
                <div > <img className="scroll-ml-3 snap-start rounded-3xl" src="https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=546x680&vertical=center" alt="Digital" /> <div className=" -mt-20 ml-5 text-white  font-bold text-sm"><p>Victa Wille <br /> Digital Designer</p></div> <div className="button"><button>Mobile</button><button>UI</button><button>Web</button></div></div>
                <div><img className="scroll-ml-3 snap-start rounded-3xl" src="https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=546x680&vertical=center" alt="Brand illustrator" /> <div className=" -mt-20 ml-5 text-white  font-bold text-sm"><p>Lilla Bardenova <br /> Brand + Illustrator</p> </div><div className="button"><button>Brand</button><button>Illustrator</button><button>Web</button></div></div>
                <div ><img className="scroll-ml-3 snap-start rounded-3xl" src="https://cdn.dribbble.com/uploads/47176/original/9b22cd83bde1809976bec0722d1f8923.jpeg?1685645213&format=webp&resize=546x680&vertical=center" alt="" /><div className=" -mt-20 ml-5 text-white  font-bold text-sm"><p>Elif Kamesoglu <br /> Brand Designer</p></div> <div className="button"><button>Brand</button><button>Illustration</button><button>Web</button></div></div>

                <div ><img className="scroll-ml-3 snap-start rounded-3xl" src="https://cdn.dribbble.com/uploads/47177/original/3986915be548424a5d36657f2b034ead.jpeg?1685645250&format=webp&resize=546x680&vertical=center" alt="" /> <div className=" -mt-20 ml-5 text-white  font-bold text-sm"><p>Chris Owens <br /> Creative Director</p></div> <div className=" text-white text-xs font-bold "><button className="  border  border-stone-600 rounded-2xl px-2 py-1 mx-6 ">Illustration</button> <button className=" ml-3">Mobile</button><button>UI</button></div></div>
                
                <div ><img className="scroll-ml-3 snap-start rounded-3xl" src="https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize=546x680&vertical=center" alt="" /><div className=" -mt-20 ml-5 text-white  font-bold text-sm"><p>Aurelien Salomon <br /> Design Director</p></div> <div className="button"><button>Mobile</button><button>Product</button><button>UX</button></div></div>
                <div className="slide_6"><img src="https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=546x680&vertical=center" alt="" /> <div className=" -mt-20 ml-5 text-white  font-bold text-sm"><p>Andrea Jelic<br /> Digital Designer </p></div> <div className="button"><button>Brand</button><button>UI</button><button>Web</button></div></div>
                    <div className="slide_7"><img src="https://cdn.dribbble.com/uploads/47171/original/daniele-buffa-3.png?1689174763&format=webp&resize=546x680&vertical=center" alt="" /> <div className=" -mt-20 ml-5 text-white  font-bold text-sm"><p>Daniele Buffa<br /> Principal Designer </p> </div><div className="button"><button>Animation</button><button>UI</button><button>Visual</button></div></div>
                    <div className="slide_8"><img src="https://cdn.dribbble.com/uploads/47178/original/mercedes-bazan.png?1689174566&f" alt="" /> <div className=" -mt-20 ml-5 text-white  font-bold text-sm"> <p> Mercedes Bazan<br /> Illustrator </p> </div> <div className="button"><button>Graphic Design</button><button>Illustration</button></div></div>
                    <div className="slide_9"><img src="https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=546x680&vertical=center" alt="" /> <div className=" -mt-20 ml-5 text-white  font-bold text-sm"><p>Vladimir Gruev<br /> Digital Designer </p> </div><div className="button"><button>Brand</button><button>Design</button></div></div>
            </div> */}
            <div className="mt-10 text-center text-5xl mb-12">
                <p>Explore inspiring designs</p>
            </div>


            <div className="grid gap-10 grid-cols-4 grid-rows-3 pl-9 pr-9 sm:grid grid-col-1 grid-row-1 ">
                <div className=" cursor-pointer"><img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14342048/file/original-1a577dc8d56bf320aa5e736d8b31cf27.jpg?resize=640x480&vertical=center" /><div className="left"> Kendick kid </div></div>
                <div className=" cursor-pointer"><img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14119496/file/original-1a8526185b04c93196f1c6b7944ca502.jpg?crop=463x5-2057x1201&format=webp&resize=400x300&vertical=center" /></div>
                <div className=" cursor-pointer"><img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14382749/file/original-1c385d44118200b626300d2f7980bb23.jpg?resize=640x480&vertical=center" /> <div className="left"> DKNG </div></div>
                <div className=" cursor-pointer" ><img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14361559/file/original-02e8353f423d56cb7d92f6996f3395fd.png?crop=22x17-1950x1463&resize=640x480&vertical=center" /> <div className="left">Patswerk</div></div>
                <div className=" cursor-pointer" ><img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14375211/file/original-6cba8f6f246217afe79eec7b79b474f3.jpg?crop=0x274-1080x1084&resize=640x480&vertical=center" /></div>
                <div className=" cursor-pointer" ><img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14331481/file/original-8e27256831c71af8d3152b1fe556a061.png?crop=36x339-1211x1220&resize=640x480&vertical=center" /> </div>
                <div className=" cursor-pointer" ><img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14407020/file/original-9fe125524f020f9c5c56d6556e192200.jpg?resize=640x480&vertical=center" /></div>
                <div className=" cursor-pointer" ><img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14219474/file/original-49e8b2c5f5af96caaaf14a6eda2d8acc.jpg?format=webp&resize=400x300&vertical=center" /></div>
                <div className=" cursor-pointer" ><img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14400837/file/original-9791d578f23d5829077a1cd6ddcd5b4d.jpg?resize=640x480&vertical=center" /></div>
                <div className=" cursor-pointer" ><img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14270970/file/original-f3d79ae86c66ba6ca681f8bba8b91bab.jpg?resize=640x480&vertical=center" /> <div className="left"> Jordan Wilson </div>    </div>
                <div className=" cursor-pointer" > <img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14380442/file/original-f2e57767210607a2f5f5c489f2ba4b48.jpg?resize=640x480&vertical=center" /> <div className="left">Brad Hansen</div></div>
                <div className=" cursor-pointer" ><img className=" rounded-lg" src="https://cdn.dribbble.com/userupload/14376485/file/original-e0b9c4ebf93a0510d6244722db8e1cb0.jpg?crop=0x0-1600x1200&resize=640x480&vertical=center" /><div className="left"> Armin pro </div></div>
            </div>
            <div className=" text-center">
                <button className=" border-2 border-black rounded-full py-4 px-5  font-semibold  mb-36 mt-16 hover:text-neutral-500 ">Browse more inspiration</button>
            </div>


            <div className=" bg-yellow-200 pb-28  pt-24">

                <p className='mt-10 text-center text-7xl bg-yellow-200' >Find your next <br />designer today</p>
                <p className='mt-10 text-center text-xl bg-yellow-200'>The world's leading brands use Dribbble to hire creative talent. <br />Browse millions of top-rated portfolios to find your perfect <br /> creative match  </p>
                <div className=" text-center  bg-yellow-200 ">
                    <button className='bg-black justify-center items-center cursor-pointer text-white text-sm font-bold py-4 px-5 rounded-full mt-10'> Get started now</button>
                    <button className='bg-white justify-center items-center cursor-pointer text-black text-sm font-bold py-4 px-5 rounded-full mt-10 ml-2'>Learn about hiring</button>
                </div>
                <h1 className="mt-10 text-center text-xl  bg-yellow-200">Are you a designer? <u className=' bg-yellow-200'> Join Dribble</u></h1>
            </div>

            <div div className="finish">

                <div className="slider">
                    <ul>
                        <div className="slider_1"><img src="https://cdn.dribbble.com/userupload/14277203/file/original-72588b73f18f42fb1ae6df2e75c4de77.jpg?crop=0x0-6667x5000&format=webp&resize=400x300&vertical=center" alt="Branding" /><div className="bottomleft">Branding</div></div>
                        <div className="slider_2"><img src="https://cdn.dribbble.com/userupload/14318662/file/original-223096717f98f1d651c887403af49deb.jpg?format=webp&resize=400x300&vertical=center" alt="Web Design" /><div className="bottomleft">Web Design</div></div>
                        <div className="slider_3"><img src="https://cdn.dribbble.com/userupload/14361559/file/original-02e8353f423d56cb7d92f6996f3395fd.png?crop=22x17-1950x1463&resize=640x480&vertical=center" alt="Product Design" /><div className="bottomleft">Product Design</div></div>
                        <div className="slider_4"><img src="https://cdn.dribbble.com/userupload/14326659/file/original-8e893049fb05d4fd84b385f2aa2f176a.jpg?format=webp&resize=400x300&vertical=center" alt="Typography" /><div className="bottomleft">Typography</div></div>
                        <div className="slider_5"><img src="https://cdn.dribbble.com/userupload/14056579/file/original-b9c2a3706b2380bd3a6a85b15146efa0.jpg?crop=216x0-4736x3389&format=webp&resize=400x300&vertical=center" alt="mobile" /><div className="bottomleft">mobile</div></div>
                        <div className="slider_6"><img src="https://cdn.dribbble.com/userupload/14342083/file/original-bbebe1d2685e71e983e802d5cc771fc8.jpg?crop=0x0-3201x2401&format=webp&resize=400x300&vertical=center" alt="illustration" /><div className="bottomleft">illustration</div></div>
                        <div className="slider_7"><img src="https://cdn.dribbble.com/userupload/14132601/file/original-ccd26d8bdf6e8342deca59c8a0593c1c.png?resize=640x480&vertical=center" alt=" print" /><div className="bottomleft">print</div></div>
                        <div className="slider_8"><img src="https://cdn.dribbble.com/userupload/14226566/file/still-5fd132c04a991b2569a263bb84f74f77.png?format=webp&resize=400x300&vertical=center" alt="Animation" /><div className="bottomleft">Animation</div></div>
                    </ul>
                </div>

                <ul class="flex flex-wrap items-center mt-3 text-sm font-bold">
                    <button type="button" className='italic  font-bold text-2xl ml-32' > Dribbble</button>
                    <li class="cursor-pointer ml-12">For designers</li>
                    <li class="cursor-pointer ml-12"> Hire talent</li>
                    <li class="cursor-pointer ml-12">inspiration</li>
                    <li class="cursor-pointer ml-12">Advertising</li>
                    <li class="cursor-pointer ml-12">Blog</li>
                    <li class="cursor-pointer ml-12">About</li>
                    <li class="cursor-pointer ml-12">Careers</li>
                    <li class="cursor-pointer ml-12">Support</li>

                    <ul className=" ml-20 flex flex-wrap items-center ">
                        <a className="m-2 text-xl" href="http://twitter.com/dribbble"><FaTwitter /></a>
                        <a className="m-2 text-xl" href="http://facebook.com/dribbble"><FaFacebook /></a>
                        <a className="m-2 text-xl" href="http://instagram.com/dribbble"><FaInstagram /></a>
                        <a className="m-2 text-xl" href="http://www.pinterest.com/dribbble/"><FaPinterest /></a>
                    </ul>

                </ul>



                <div className="flex flex-wrap items-center mt-20 text-sm mb-16">

                    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 font-semibold">
                        <li className=" ml-32">@2024 Dribbble</li>
                        <li className="ml-10">Terms</li>
                        <li className="ml-10">Privacy</li>
                        <li className="ml-10">Cookies</li>
                    </ul>


                    <ul className="flex flex-wrap items-center mt-3 text-sm  text-gray-500 font-semibold">
                        <li className=" ml-72">Jobs</li>
                        <li className="ml-10">Designers</li>
                        <li className="ml-10">Freelancers</li>
                        <li className="ml-10">Tags</li>
                        <li className="ml-10">Places</li>
                        <li className="ml-10">Resources</li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Index;