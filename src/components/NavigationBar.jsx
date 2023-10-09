import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logoWhite, menu, close } from '../assets';

const NavigationBar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            scrollTop > 100 ? setScrolled(true): setScrolled(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return(
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary": "bg-transparent"}`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
            <Link
				to='/portfolio/'
				className='flex items-center gap-2'
				onClick={() => {
					setActive("");
					window.scrollTo(0, 0);
				}}>
					<img src={logoWhite} alt='logo' className='w-16 h-16 pb-2 object-contain' />
					<p className='text-white text-[20px] font-bold   inline-block'>
						S3R43o3 
					</p>
				</Link>

				<ul className={`${styles.paddingX} list-none hidden sm:flex flex-row gap-5`}>
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`${
								active === nav.title ? "text-[#00eeff]" : "text-white"
							} hover:text-[#00eeff] text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
					<img
						src={toggle ? close : menu}
						alt='menu'
						className='w-[28px] h-[28px] object-contain '
						onClick={() => setToggle(!toggle)}
					/>

					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
							{navLinks.map((nav) => (
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ${
										active === nav.title ? "text-[#00eeff]" : "text-white"
									} hover:text-[#00eeff]`}
									onClick={() => {
										setToggle(!toggle);
										setActive(nav.title);
									}}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>

            </div>
        </nav>

    )
}
export default NavigationBar;