import clsx from "clsx";
import PageTitle from "../ui/PageTitle";
import Image from "next/image";
import { italiana, meow } from "../ui/fonts";
import { AiTwotoneGold } from "react-icons/ai";
import { IoDiamond } from "react-icons/io5";

export default function AboutUs() {


    // classes and styles
    const aboutUsClass = clsx("custom-container p-5 space-y-5");
    return (
        <section className={aboutUsClass}>
            <PageTitle destination="About Us" />

            <div className="grid gap-3 md:grid-cols-[max-content_minmax(min-content,_1fr)]">
                <div>
                    <Image
                        src='/assets/images/about-us-3.jpg'
                        width={300}
                        height={500}
                        alt="A girl with gold necklace"
                        priority
                        className="place-self-center"
                    />
                </div>

                <div>
                    <div className="flex gap-2 justify-center items-center">
                        <div className="flex-0">
                            <h1 className="text-fs-500 text-custom-dark-orange font-semibold">About Us</h1>

                            <p className={`font-bold text-fs-600 ${italiana.className}`}>
                                The Art and Soul Behind Our Story
                            </p>
                        </div>
                        <Image
                            src='/assets/images/about-us-2.jpg'
                            width={120}
                            height={300}
                            alt="A girl looking at the camera"
                            priority
                            className="flex-1 min-w-[120px] max-w-full"
                        />
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid id est molestias voluptatem. Ipsum numquam laborum repellat quasi fuga voluptates?</p>

                    <p className={`${meow.className} font-bold text-fs-700`}>Haru</p>

                    <p>Haru | Founder & Designer</p>
                    
                </div>
            </div>

            <div className="flex flex-col md:flex-row">
              
                <div className="flex flex-col gap-5 p-5 bg-custom-gray">
                    <p className="text-custom-dark-orange uppercase">Our Product Quality</p>

                    <p className={`${italiana.className} text-fs-500 capitalize`}>the most exquisite and luxurious designer jewelry </p>

                    <p className="text-fs-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum unde deserunt, at facere molestias distinctio esse quas tenetur necessitatibus soluta.</p>

                    <div className="flex gap-5 flex-col md:flex-row">
                       <div className="space-y-3 text-center md:text-left">
                            <AiTwotoneGold 
                                className="text-fs-700 mx-auto md:m-0" />
                            <p className="font-semibold">Gold Purity</p>
                            <p className="text-fs-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, magni!
                            </p>
                       </div>

                       <div className="space-y-3 text-center md:text-left">
                            <IoDiamond 
                                className="text-fs-700 mx-auto md:m-0" />
                            <p className="font-semibold">Certified Diamond</p>
                            <p className="text-fs-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, asperiores.</p>
                       </div>
                    </div>

                </div>

                <Image
                    src='/assets/images/about-us-1.jpg'
                    width={500}
                    height={700}
                    alt="A girl with necklace"
                    priority
                />
            </div>

            <div>
                
            </div>

        </section>
    );
}
