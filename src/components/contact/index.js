import { Button } from "@headlessui/react";

function Contact () {
    const contactMethods = [
        {
            name: "LinkedIn",
            icon: <i className="fa-brands fa-linkedin text-3xl"></i>,
            description: "Connect on LinkedIn",
            link:""
        },
        {
            name: "GitHub",
            icon: <i className="fa-brands fa-github text-3xl"></i>,
            description: "Follow me on GitHub",
            link:""
        },
        {
            name: "Instagram",
            icon: <i className="fa-brands fa-instagram text-3xl"></i>,
            description: "Follow me on Instagram",
            link:""
        },
        {
            name: "Email",
            icon: <i className="fa-regular fa-envelope text-3xl"></i>,
            description: "Email me at jarydknightdev@gmail.com",
            link:""
        }
    ]

    return (
        <div className="grid h-fit xl:h-auto p-4 order-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            {
                contactMethods.map((item, index) => {
                    return (
                        <Button key={index} className="flex mb-6 hover:text-purple-500/75">
                            {item.icon}
                            <p className="text-lg font-medium ml-4">{item.description}</p>
                        </Button>
                    )
                })
            }
        </div>
    )
};

export default Contact;