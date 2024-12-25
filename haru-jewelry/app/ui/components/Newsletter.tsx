import clsx from "clsx";
import { italiana } from "../fonts";
import { addNewsletterList } from "@/app/query/route";
import Button from "./Button";

export default function Newsletter(){
    // classes and styles
    const newsletterContainerClass = clsx(
        'flex flex-col gap-3 justify-center items-center newsletter-bg p-[3rem] text-center'
    )
    
    const inputContainer = clsx(
        'flex gap-2'
    )
    
    const labelClass = clsx(
        'after:content-["*"] after:text-custom-dark-orange'
    )
    
    const inputClass = clsx(
        'border outline-none border-custom-dark-blue indent-4 bg-transparent rounded-sm py-2',
    )

    return(
        <div className={newsletterContainerClass}>
            <p className="text-custom-dark-orange">Our Newsletter</p>
            <p className={`${italiana.className} text-fs-500 md:text-fs-600 capitalize`}>subscribe to our newsletter to get updates to our latest collection</p>

            <form action={addNewsletterList} className="flex gap-2">
                <div className={inputContainer}>
                    <input 
                        type="email" 
                        name="email"
                        id="email"
                        autoComplete="off"
                        className={inputClass}
                        required />
                </div>

                <Button className="bg-custom-dark-blue text-white">Subscribe</Button>
            </form>
        </div>
    )
}