'use client'

import clsx from "clsx"
import PageTitle from "../ui/components/PageTitle"
import { addUserContact } from "../query/route"
import Image from "next/image"
import Link from "next/link"
import Button from "../ui/components/Button"
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci"
import Banner from "../ui/components/Banner"
import Map from "../ui/Map"



export default function ContactUs(){

    // classes and styles
    const contactUsPageClass = clsx('custom-container space-y-10')

    const formClass = clsx(
        'grid gap-5 md:grid-cols-2'
    )

    const inputContainer = clsx(
        'flex flex-col gap-2'
    )

    const labelClass = clsx(
        'after:content-["*"] after:text-custom-dark-orange'
    )

    const inputClass = clsx(
        'border outline-none border-custom-accent indent-4 bg-transparent rounded-sm py-2',
        'focus:border-custom-dark-blue'
    )

    return(
       <section className={contactUsPageClass}>
            <PageTitle destination="Contact Us" />

            <div className="grid gap-3 md:grid-cols-2">
                <form action={addUserContact} className={formClass}>
                    <p className="text-fs-500 font-semibold md:col-span-full text-custom-dark-orange">Get In Touch</p>
                    <p className="md:col-span-full">We value your privacy, we will keep your information confidential. Read our <Link href='/terms-conditions' className="underline decoration-custom-dark-blue text-custom-dark-blue underline-offset-4">User's Terms & Conditions</Link></p>

                    <div className={inputContainer}>
                        <label htmlFor="name" className={labelClass}>Your Name</label>
                        <input 
                            type="text" 
                            name="name"
                            id="name"
                            autoComplete="off"
                            className={inputClass}
                            required />
                    </div>

                    <div className={inputContainer}>
                        <label htmlFor="email" className={labelClass}>Email</label>
                        <input 
                            type="email" 
                            name="email"
                            id="email"
                            autoComplete="off"
                            className={inputClass}
                            required />
                    </div>

                    <div className={`${inputContainer} md:col-span-full`}>
                        <label htmlFor="subject" className={labelClass}>Subject</label>
                        <input 
                            type="text" 
                            name="subject"
                            id="subject"
                            autoComplete="off"
                            className={inputClass}
                            required />
                    </div>

                    <div className={`${inputContainer} md:col-span-full`}>
                        <label htmlFor="message" className={labelClass}>Subject</label>
                        <textarea 
                            name="message" 
                            id="message"
                            autoComplete="off"
                            className={inputClass}
                            required>
                            
                        </textarea>
                    </div>

                    <Button className="bg-custom-dark-blue text-white">Send Us a Message</Button>
                </form>
                
                <div className="place-self-center border-4 p-3 border-custom-accent">
                    <Image
                        src='/assets/images/contact-us.jpg'
                        alt='cropped jewelry model photo'
                        width={300}
                        height={300}
                        
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-3 grid-rows-1 gap-3 ">
                <div className="flex flex-col justify-center items-center p-5 bg-custom-accent">
                    <CiLocationOn className="text-fs-600"/>
                    <p className="text-fs-300">85202 Preston Rd.</p>
                    <p className="text-fs-300">Inglewood, Maine 98380</p>
                </div>

                <div className="flex flex-col justify-center items-center p-5 bg-custom-accent">
                    <CiPhone className="text-fs-600"/>
                    <p className="text-fs-300">+1 (234) 567-8910</p>
                </div>

                <div className="flex flex-col justify-center items-center p-5 bg-custom-accent">
                    <CiMail className="text-fs-600"/>
                    <p className="text-fs-300">example@mail.com</p>
                </div>
            </div>

            <Banner />


       </section>
    )
}