import { motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/icons/logo.png";
import { links } from "../../constants/links";
import {
    menuItemVariants,
    menuItemsVariants,
    menuVariants,
} from "../../constants/variants";
import Path from "../path/path";

interface NavBarProps {}

const NavBar = (props: NavBarProps) => {
    const [open, toggleOpen] = useCycle<boolean>(false, true);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 z-20 flex w-full items-center justify-center font-rubik ${
                scrolled ? "bg-black" : "bg-transparent"
            }`}
        >
            {/* <div className={`sticky top-0 z-30 bg-white font-rubik`}> */}
            <div className="relative flex h-[60px] items-center justify-around gap-5 p-[1rem] px-0">
                <div className="ml-5 flex h-[40px] justify-center pl-5">
                    <img src={logo} alt="logo" />
                </div>

                <div className="mr-10 hidden py-1 md:flex">
                    <ul className="justify-between md:flex">
                        {links.map((link) => {
                            return (
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    key={link.id}
                                >
                                    <HashLink
                                        smooth
                                        to={link.link}
                                        key={link.id}
                                        className={`mx-3 my-1.5 uppercase ${
                                            active === link.name
                                                ? "text-[#EAA79C]"
                                                : "text-white"
                                        }`}
                                        onClick={() => setActive(link.name)}
                                    >
                                        {link.name}
                                    </HashLink>
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>

                <motion.div
                    animate={open ? "open" : "closed"}
                    onClick={() => toggleOpen()}
                    className="mr-4 flex md:hidden"
                >
                    <button>
                        <svg width="23" height="23" viewBox="0 0 23 23">
                            <Path
                                variants={{
                                    closed: { d: "M 2 2.5 L 20 2.5" },
                                    open: { d: "M 3 16.5 L 17 2.5" },
                                }}
                            />
                            <Path
                                d="M 2 9.423 L 20 9.423"
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 },
                                }}
                                transition={{ duration: 0.1 }}
                            />
                            <Path
                                variants={{
                                    closed: { d: "M 2 16.346 L 20 16.346" },
                                    open: { d: "M 3 2.5 L 17 16.346" },
                                }}
                            />
                        </svg>
                    </button>
                </motion.div>
            </div>

            <motion.nav
                variants={menuVariants}
                initial={false}
                animate={open ? "opened" : "closed"}
                className="fixed flex h-[60vh] w-full items-center justify-center bg-pink-700 px-10 md:hidden"
            >
                <motion.ul
                    variants={menuItemsVariants}
                    initial={false}
                    animate={open ? "open" : "closed"}
                    className="mt-[50px] flex w-full list-none flex-col items-center justify-center gap-3 bg-orange-400"
                >
                    {links.map((link) => {
                        return (
                            <motion.li
                                key={link.id}
                                variants={menuItemVariants}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="mx-3 block w-full rounded-md p-1 text-center uppercase hover:bg-blue-500"
                            >
                                <HashLink
                                    smooth
                                    to={link.link}
                                    key={link.id}
                                    className={`mx-3 my-1.5 uppercase ${
                                        active === link.name
                                            ? "text-[#EAA79C]"
                                            : "text-white"
                                    }`}
                                    onClick={() => setActive(link.name)}
                                >
                                    {link.name}
                                </HashLink>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </motion.nav>
        </div>
    );
};

export default NavBar;
