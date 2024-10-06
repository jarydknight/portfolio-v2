import { Popover, PopoverButton, PopoverPanel, CloseButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SunIcon, MoonIcon, ComputerDesktopIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
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
            name: "Tech",
            href:"/Tech"
        }
    ];

    const themeOptions = [
        {
            name: "Light",
            icon: <SunIcon className="size-6 mr-4"/>
        },
        {
            name: "Dark",
            icon: <MoonIcon className="size-6 mr-4"/>
        },
        {
            name: "System",
            icon: <ComputerDesktopIcon className="size-6 mr-4"/>
        }
    ];

    return (
        <div className="grid grid-cols-5 justify-items-center">
            {/* Nav bar in mobile view */}
            <Popover as="div" className="md:hidden h-16 my-8 col-start-2 col-span-3 justify-items-center">
                <PopoverButton className="p-2 justify-self-center">
                    <Bars3Icon className="h-10 w-10"/>
                </PopoverButton>
                <PopoverPanel className="absolute left-0 right-0 h-dvh justify-center backdrop-blur-md">
                    {
                        navOptions.map((item, index) => {
                            return (
                                <div key={index} className="my-8">
                                    <Link href={item.href} className="text-center text-3xl">
                                        <p>{item.name}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </PopoverPanel>
            </Popover>

            {/* Nav bar in desktop view */}
            <div className="hidden md:block h-16 w-full my-8 col-start-2 col-span-3 justify-items-center rounded-full shadow-3xl shadow-zinc-800 bg-white/90 dark:bg-zinc-800 ring-1 ring-zinc-800/5 content-center">
                <div className="w-content flex justify-around">
                {
                    navOptions.map((item, index) => {
                        return (
                            <div key={index}>
                                <Link href={item.href} className="text-center text-3xl">
                                    <p>{item.name}</p>
                                </Link>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            {/* <MoonIcon className="h-7 w-7 my-8 mx-4 justify-self-end md:justify-self-center self-center"/> */}
            <Popover className="my-8 mx-4 justify-self-end md:justify-self-center self-center">
                <PopoverButton className="flex">
                    <p>Settings</p>
                    <Cog6ToothIcon className="size-6 ml-2" />
                </PopoverButton>
                <PopoverPanel anchor="bottom">
                    {
                        themeOptions.map((item, index) => {
                            return (
                                <CloseButton key={index} className="flex my-2">
                                    {item.icon}
                                    <p>{item.name}</p>
                                </CloseButton>
                            )
                        })
                    }
                </PopoverPanel>
            </Popover>
        </div>
           
    )
};

export default Nav;