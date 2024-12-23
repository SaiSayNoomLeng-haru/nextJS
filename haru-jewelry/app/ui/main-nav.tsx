'use client'

import clsx from "clsx"
import { NavLinks } from "./definitions"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci"

export default function MainNav(){
    const pathname = usePathname();
    const [ isNavOpen, setIsNavOpen ] = useState<Boolean>(false);

    const links: NavLinks[] = [
        { name: 'home', href: '/'},
        { name: 'catalog', href: '/catalog'},
        { name: 'about us', href: '/about-us'},
        { name: 'contact us', href: '/contact-us'},
        { name: 'blogs', href: '/blogs'},
        { name: 'wishlist', href: '/wishlist', icon: <CiHeart />},
        { name: 'sign in', href: '/sign-in', icon: <CiUser />},
        { name: 'FAQ', href: '/faq'}
    ]

    
    const userLinks: NavLinks[] = [
        { name: 'wishlist', href: '/wishlist', icon: <CiHeart />},
        { name: 'cart', href: '/cart', icon: <CiShoppingCart />},
        { name: 'sign in', href: '/sign-in', icon: <CiUser />}
    ]
    
    const hiddenLinks = [ 'wishlist', 'sign in'];

    // classes and styles
    const headerClass = clsx(
        'flex justify-center md:justify-between items-center custom-container text-fs-300'
    )

    const mainNavClass = clsx(
        'flex gap-2 capitalize fixed left-0 right-[30vw] flex-col top-[2rem] bottom-[60vh] py-10 px-3 items-end bg-custom-accent translate-x-[-100%]  transition duration-300',
        'md:static md:translate-x-0 md:flex-row md:bg-transparent',
        { 'translate-x-0' : isNavOpen}
    )

    return(
        <header className={headerClass}>
            <Link
                href='/'
                scroll={true}
                className="order-2 md:order-none ml-auto md:ml-0">
                <Image 
                    width={100}
                    height={100}
                    src='/assets/images/logo-blue.png'
                    alt='Haru Jewlery Logo'
                    />
            </Link>

            <button
                // aria-expanded={isNavOpen}
                // aria-label={isNavOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                onClick={() => setIsNavOpen(prevOn => !prevOn)}
                className="md:hidden order-1 sticky left-[1rem] z-10 text-fs-500">
                    {isNavOpen ? 
                        <IoMdClose /> :
                        <RxHamburgerMenu />
                    }
            </button>

            <nav 
                className={mainNavClass}
                role="navigation">     
                {links
                    .map(link => (
                        <Link
                            key={link.name}
                            scroll={true}
                            href={link.href}
                            onClick={() => setIsNavOpen(prevOn => !prevOn)}
                            className={clsx(
                                {
                                    'font-semibold border-b border-custom-dark-blue' : pathname === link.href,
                                    'md:hidden' : hiddenLinks.includes(link.name)
                                }
                            )}
                           >
                            {link.icon ? link.icon : link.name}
                        </Link>
                    ))
                }
            </nav>

            <div className="flex gap-3 text-fs-400 order-2 md:order-none ml-auto md:ml-0">
                {userLinks
                    .map(link => (
                        <Link
                            key={link.name}
                            scroll={true}
                            href={link.href}
                            onClick={() => setIsNavOpen(prevOn => !prevOn)}
                            className={clsx(
                                {
                                    'hidden' : hiddenLinks.includes(link.name),
                                    'md:block': hiddenLinks.includes(link.name)
                                }
                            )}>
                                {link.icon ? link.icon : link.name}
                        </Link>
                    ))

                }
            </div>
        </header>
    )
}