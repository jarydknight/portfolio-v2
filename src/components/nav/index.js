import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
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
            <div className="hidden md:block h-16 w-full my-8 col-start-2 col-span-3 justify-items-center rounded-full bg-zinc-200 dark:bg-zinc-800 content-center">
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
            <MoonIcon className="h-10 w-10 my-8 mx-4 justify-self-end md:justify-self-center self-center"/>
        </div>
           
    )
};

export default Nav;