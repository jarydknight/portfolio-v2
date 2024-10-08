"use client"

import { CloseButton, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import AboutSdeSection from "@/components/aboutSDESection";
import AboutPersonSection from "@/components/aboutPersonSection";


function About () {
    const menuItems = [
        {
            name: "The Software Developer",
            component: <AboutSdeSection />
        },
        {
            name: "The Person",
            component: <AboutPersonSection />
        }
    ];

    const [selectedItem, setSelectedItem] = useState(0);
console.log(selectedItem)
    return (
        <div className="grid p-8 justify-start bg-zinc-50/50 dark:bg-black">
            <h1 className="text-6xl font-bold mb-4">Learn about Jaryd:</h1>
            <Popover as="div" className="mb-4">
                <PopoverButton className=" flex items-center p-4 rounded-xl size-fit shadow-3xl shadow-zinc-800 bg-white/90 dark:bg-zinc-800 ring-1 ring-zinc-800/5">
                    <h2 className="text-4xl font-bold text-start">{menuItems[selectedItem].name}</h2>
                    <ChevronDownIcon className="size-12 ml-4"/>
                </PopoverButton>
                <PopoverPanel anchor="bottom" className="w-auto rounded-3xl p-4 py-8 backdrop-blur-lg">
                    {
                        menuItems.map((item, index) => {
                            return (
                                <CloseButton onClick={()=>{setSelectedItem(index)}} key={index} className="hover:cursor-pointer size-full">
                                    <p className="text-2xl pb-2">{item.name}</p>
                                </CloseButton>
                            )
                        })
                    }
                </PopoverPanel>
            </Popover>

            {
                menuItems[selectedItem].component
            }
        </div>
    )
};

export default About;