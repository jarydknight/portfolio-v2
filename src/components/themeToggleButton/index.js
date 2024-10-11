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
        <Popover className="relative my-8 mx-4 justify-self-end md:justify-self-center self-center">
            <PopoverButton className="flex hover:text-purple-500/75">
                <p>Settings</p>
                <Cog6ToothIcon className="size-6 ml-2" />
            </PopoverButton>
            <PopoverPanel  className="absolute left-0 backdrop-blur-lg p-2 my-2 rounded-xl mt-2">
                {
                    themeOptions.map((item, index) => {
                        return (
                            <CloseButton key={index} as="button" onClick={() => setTheme(item.name.toLowerCase())} className="flex my-2 hover:text-purple-500/75">
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