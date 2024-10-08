import Image from "next/image";
import profilePic from "../../../public/images/lewis.jpg";
import Contact from "../contact/index";

function HeroSection () {
    return (
        <div className="grid md:grid-cols-2 md:grid-rows-2 p-8 bg-zinc-50/50 dark:bg-black">
            
                <div className="order-2 md:order-1 row-span-2">
                    <h1 className="text-5xl py-2 px-4">Hi, I am Jaryd Knight. </h1>
                    <h2 className="text-3xl px-4 mb-8">I am a Software Developer in Toronto.</h2>
                    <p className="p-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius pharetra commodo. Suspendisse vulputate tincidunt tortor sed porttitor. Sed at enim at nisl ornare gravida. Ut ut arcu scelerisque mauris eleifend condimentum. Nulla euismod, ipsum nec posuere consequat, enim turpis tempus purus, sit amet facilisis nunc erat et velit. Praesent rhoncus non dolor ut mattis. Suspendisse ac volutpat ligula. In a tortor quam. Sed lobortis tincidunt mi, id pharetra turpis eleifend sed. Donec commodo purus sed tellus dictum, sed egestas risus scelerisque. Praesent sodales lorem ipsum, nec scelerisque diam facilisis et. Mauris sagittis at velit ut tempor. Sed at congue.
                    </p>
                </div>

                <Image src={profilePic} alt="Profile Pic" height={500} width={500} className="rounded-3xl p-4 order-1 md:order-2 justify-self-center md:justify-self-start"/>
                <Contact />
        </div>
    )
};

export default HeroSection;