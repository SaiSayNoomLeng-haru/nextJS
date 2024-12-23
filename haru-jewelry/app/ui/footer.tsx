import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"


export default function Footer(){

    // classes and styles
    const footerClass = clsx(
        'grid gap-4 place-items-center p-5 text-fs-300 text-center',
        'md:text-left md:grid-cols-5 md:place-items-start'
    )

    const linkClass = clsx(
        'text-gray-500 hover:text-black'
    )

    const linkHolder = clsx(
        'flex flex-col gap-1'
    )
    return(
        <footer className={footerClass}>
            <div className="flex flex-col gap-1">
                <Link 
                    href='/'>
                        <Image 
                            width={200}
                            height={200}
                            src='/assets/images/logo-blue.png'
                            alt='Haru Jewelry Logo'
                            aria-label="Haru Jewlery Logo"
                            priority
                            className="max-w-[50px] md:max-w-[80px] mx-auto"/>
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                        Jewelry
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                        Special Collection
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                        Best prices
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                        Men's
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                        Women's
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                        Our Benefits
                </Link>
            </div>

            <div className={linkHolder}>
                <p className="font-semibold text-fs-400">Catalog</p>

                <Link 
                    className={linkClass}
                    href=''>
                       Rings
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                       Earrings
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                        Pendants
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                       Bracelets
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                        Collection
                </Link>
            </div>

            <div className={linkHolder}>
                <p className="font-semibold text-fs-400">About Us</p>

                <Link 
                    className={linkClass}
                    href=''>
                       Requisites
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                       Shop's Address
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                        Vacancies
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                       Public Offers
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                        Jewlery Production
                </Link>
            </div>

            <div className={linkHolder}>
                <p className="font-semibold text-fs-400">Service</p>

                <Link 
                    className={linkClass}
                    href=''>
                       What about my Order?
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                       Payment and Delivery
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                        Privacy Policy
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                       Personal data processing and protection policy
                </Link>

                <Link 
                    className={linkClass}
                    href=''>
                        User agreement
                </Link>

                
                <Link 
                    className={linkClass}
                    href=''>
                       Loyalty program
                </Link>

                
                <Link 
                    className={linkClass}
                    href=''>
                       Terms of Purchase of a gift certificate
                </Link>
            </div>

            <div className={linkHolder}>
                <p className="font-semibold text-fs-400">Contacts</p>
                <p>+1 (000) 500 - 1990</p>
                <p>example@mail.com</p>
            </div>

            <div className="flex flex-col gap-2 md:flex-row md:justify-between md:col-span-full p-2 md:w-full">
                <div>
                    <p>1996 - {new Date().getFullYear()} &copy; Haru Jewelry. All Rights Reserved</p>
                </div>

                <div className="flex justify-center items-center gap-2">
                    <a href="https://www.facebook.com">
                        <FaFacebook />
                    </a>

                    <a href="https://www.instagram.com">
                        <FaInstagram />
                    </a>

                    <a href="https://www.x.com">
                        <FaTwitter />
                    </a>
                    
                    <a href="https://www.yoututbe.com">
                        <FaYoutube />
                    </a>

                    <a href="https://www.linkedin.com">
                        <FaLinkedin />
                    </a>
                </div>
            </div>

        </footer>
    )
}