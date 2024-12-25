import clsx from "clsx"
import Image from "next/image"
import { blogs } from "../definitions"

export default function BlogCard({url, altText, datePosted, title, className = ''} : blogs | any){

    const blogCardClass = clsx(
        'flex flex-col gap-2 p-2', className
    )
    return(
        <div className={blogCardClass}>
            <div className="relative p-4">
                <img 
                    src={`${url}`}
                    alt={`${altText} photo`}
                    width={500}
                    height={400}
                    className="relative"
                    />
                <p className="absolute bottom-[2rem] bg-custom-dark-blue text-white left-0 px-5 py-2">{datePosted}</p>
            </div>

            <div className="flex flex-col gap-2 max-w-[500px]">
                <p className="font-semibold text-fs-500 capitalize">{title}</p>
                <p className="text-fs-300 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus harum unde amet blanditiis deserunt eius porro cumque vero veniam numquam?...</p>
                <p className="text-fs-300 underline underline-offset-2 text-custom-dark-orange">Read More</p>
            </div>
            
        </div>
    )
}