"use client"

import { Popover, PopoverButton, PopoverPanel, CloseButton } from "@headlessui/react";
import { SunIcon, MoonIcon, ComputerDesktopIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import React from "react";

function ThemeToggleButton () {
    const {systemTheme, theme, setTheme } = useTheme();

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

    const currentTheme = theme === "system" ? systemTheme : theme;
    return (
        <Popover className="my-8 mx-4 justify-self-end md:justify-self-center self-center">
            <PopoverButton className="flex">
                <p>Settings</p>
                <Cog6ToothIcon className="size-6 ml-2" />
            </PopoverButton>
            <PopoverPanel anchor="bottom" className="absolute backdrop-blur-lg p-2 rounded-xl mt-2">
                {
                    themeOptions.map((item, index) => {
                        return (
                            <CloseButton key={index} as="button" onClick={() => setTheme(item.name.toLowerCase())} className="flex my-2">
                                {item.icon}
                                <p>{item.name}</p>
                            </CloseButton>
                        )
                    })
                }
            </PopoverPanel>
        </Popover>
    )
};

export default ThemeToggleButton;