import Link from "next/link";
import navOptions from "../../../data/navOptions.json"

function Footer () {
    return (
        <div className="grid md:flex place-content-center justify-around h-24 w-full bg-zinc-100 dark:bg-zinc-800 font-black dark:font-white items-center">
            <div className="flex justify-around md:gap-x-12">
                {
                    navOptions.map((item, index) => {
                        return (
                            <Link key={index} href={item.href} className="text-sm text-zinc-400">
                                <p className="hover:text-purple-500/75 text-center">{item.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
            <div>
                <p className="text-sm text-zinc-400 text-center">&#169; 2024 Jaryd Knight. All rights reserved.</p>
            </div>
        </div>
    )
};

export default Footer;