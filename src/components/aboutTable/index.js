function AboutTable ({data}) {
    return (
        data.map((item, index) => {
            return (
                <div key={index} className="my-8 grid grid-cols-2 lg:grid-cols-8 lg:w-[80%]">
                    <div className="px-2 border-l border-zinc-800 dark:border-zinc-400 lg:col-span-3">
                        <h2 className="mb-2 font-semibold text-lg">{item.title}</h2>
                    </div>
                    <div className="lg:col-span-5">
                        <ol className="space-y-8">
                            {item.listItems.map((listItem, index) => {
                                return (
                                    <li key={index} className="mb-3">
                                        <h3 className="font-semibold text-md tracking-tight">{listItem.name}</h3>
                                        {listItem.description ? <p className="text-zinc-400 text-sm">{listItem.description}</p> : <></>}
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                </div>
            )
        })
    )
};

export default AboutTable;