function Contact () {
    const contactMethods = [
        {
            name: "LinkedIn",
            icon: <i className="fa-brands fa-linkedin text-3xl pr-4"></i>,
            description: "Connect on LinkedIn",
            link:""
        },
        {
            name: "GitHub",
            icon: <i className="fa-brands fa-github text-3xl pr-4"></i>,
            description: "Follow me on GitHub",
            link:""
        },
        {
            name: "Instagram",
            icon: <i className="fa-brands fa-instagram text-3xl pr-4"></i>,
            description: "Follow me on Instagram",
            link:""
        },
        {
            name: "Email",
            icon: <i className="fa-regular fa-envelope text-3xl pr-4"></i>,
            description: "Email me at jarydknightdev@gmail.com",
            link:""
        }
    ]

    return (
        <div className="grid p-4 order-4">
            {
                contactMethods.map((item, index) => {
                    return (
                        <div key={index} className="flex p-2">
                            {item.icon}
                            <p className="text-lg font-bold">{item.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Contact;