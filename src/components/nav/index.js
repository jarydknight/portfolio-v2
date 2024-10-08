"use client"

import { Popover, PopoverButton, PopoverPanel, CloseButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ThemeToggleButton from "../themeToggleButton";
import { useEffect, useState } from "react";

// Site nav bar
function Nav () {

    const navOptions = [
        {
            name: "Home",
            href:"/"
        },
        {
            name: "About",
            href:"/about"
        },
        {
            name: "Projects",
            href:"/projects"
        },
        {
            name: "Experience",
            href: "/experience"
        }
    ];

    const [navOpen, setNavOpen] = useState(false);
    useEffect(() => {
        if (navOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
        return () => {
            if (!navOpen) {
                return document.body.classList.remove("overflow-hidden")
            }
        }
        }, [navOpen])

    return (
        <div className="grid grid-cols-2 md:grid-cols-7 justify-between md:justify-items-center px-4 bg-zinc-50/50 dark:bg-black">
            {/* Nav bar in mobile view */}
            <Popover as="div" className="group md:hidden h-16 my-8 md:col-start-1 md:col-span-3 justify-items-center">
                <PopoverButton className="absolute p-2 justify-self-center z-10" as="button" onClick={()=>setNavOpen(!navOpen)}>
                    <Bars3Icon className="h-10 w-10 group-data-[open]:hidden"/>
                    <XMarkIcon className="h-10 w-10 hidden group-data-[open]:block" />
                </PopoverButton>
                <PopoverPanel className="fixed inset-0 justify-center backdrop-blur-lg z-0 pt-16">
                    {
                        navOptions.map((item, index) => {
                            return (
                                <div key={index} className="my-8">
                                    <CloseButton as={Link} href={item.href} onClick={()=>setNavOpen(false)} className="text-center text-3xl text-black dark:text-zinc-50">
                                            <p>{item.name}</p>
                                    </CloseButton>
                                </div>
                            )
                        })
                    }
                </PopoverPanel>
            </Popover>

            {/* Nav bar in desktop view */}
            <div className="hidden md:block h-16 w-full my-8 col-start-2 col-span-5 justify-items-center rounded-full shadow-3xl shadow-zinc-800 ring-1 ring-zinc-800/5 content-center bg-zinc-50 dark:bg-zinc-800">
                <div className="w-content flex justify-around">
                {
                    navOptions.map((item, index) => {
                        return (
                            <div key={index}>
                                <Link href={item.href} className="text-center text-3xl text-black dark:text-zinc-50">
                                    <p>{item.name}</p>
                                </Link>
                            </div>
                        )
                    })
                }
                </div>
            </div>

            {/*Settings popover to select theme*/}
            <ThemeToggleButton />
        </div>
           
    )
};

export default Nav;