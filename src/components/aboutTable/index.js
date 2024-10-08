function AboutTable ({data}) {
    return (
        data.map((item, index) => {
            return (
                <div key={index} className="my-8 grid grid-cols-2 w-[80%]">
                <div className="px-2 border-l border-zinc-700">
                    <h1 className="mb-2 font-semibold text-2xl">{item.title}</h1>
                </div>
                    <div>
                        <ol>
                            {item.listItems.map((listItem, index) => {
                                return (
                                    <li key={index} className="mb-3">
                                        <h2 className="font-medium text-lg">{listItem.name}</h2>
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