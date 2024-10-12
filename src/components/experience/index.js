import experienceData from "../../../data/experience.json";

function ExperienceSection () {
    return (
        <div className="grid h-fit xl:h-auto order-3 p-4 text-xl bg-zinc-100 text-black dark:text-white dark:bg-zinc-800 rounded-xl">
            <h2 className="font-semibold text-xl mb-4">Experience</h2>

        {
            experienceData.map((category) => { 
                return (
                    category.items.map((item, index) => {
                        return (
                            <div key={index} className="grid my-2 h-fit">
                                <div className="flex items-center">
                                {
                                    category.category === "work" ?  <i className="fa-solid fa-briefcase"></i> : <i className="fa-solid fa-graduation-cap"></i>
                                }
                                <h3 className="text-lg font-medium ml-2">{item.name}</h3>
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        <p className="text-sm text-zinc-400">{item.info}</p>
                                        <p className="text-sm text-zinc-400 pl-4">{item.date}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fa-solid fa-location-dot mr-2 text-sm text-zinc-400"></i>
                                        <p className="text-sm text-zinc-400">{item.location}</p>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })
                )
            })
        }
        </div>
    )
};

export default ExperienceSection;