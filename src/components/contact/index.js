import { Button } from "@headlessui/react";
import Link from "next/link";

function Contact () {
    const contactMethods = [
        {
            name: "LinkedIn",
            icon: <i className="fa-brands fa-linkedin text-3xl"></i>,
            description: "Connect on LinkedIn",
            link:"https://linkedin.com/in/jaryd-k"
        },
        {
            name: "GitHub",
            icon: <i className="fa-brands fa-github text-3xl"></i>,
            description: "Follow me on GitHub",
            link:"https://github.com/jarydknight"
        },
        {
            name: "Instagram",
            icon: <i className="fa-brands fa-instagram text-3xl"></i>,
            description: "Follow me on Instagram",
            link:"https://instagram.com/jarydknight"
        },
        {
            name: "Email",
            icon: <i className="fa-regular fa-envelope text-3xl"></i>,
            description: "Email me at jarydknightdev@gmail.com",
            link:"mailto:jarydknightdev@gmail.com"
        }
    ]

    return (
        <div className="grid h-fit xl:h-auto p-4 order-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            {
                contactMethods.map((item, index) => {
                    return (
                        <Link key={index} href={item.link} target="blank" className="flex mb-6 hover:text-purple-500/75">
                            {item.icon}
                            <p className="text-lg font-medium ml-4">{item.description}</p>
                        </Link>
                    )
                })
            }
        </div>
    )
};

export default Contact;