import Link from "next/link";
import { getTermsAndCondition } from "../query/route"
import { userTerms } from "../ui/definitions";
import clsx from "clsx";
import { LuDot } from "react-icons/lu";

export default async function TermsCondition(){
    const terms = await getTermsAndCondition();
    const titles = terms[0].titles;

    // classes and styles
    const linkClass = clsx(
        'text-custom-dark-green hover:text-custom-dark-orange'
    )
    return(
        <section className="custom-container space-y-10">
           <div>
            <p className="font-semibold">Haru Jewelry's Users' Terms and Condition</p>
            <p className="text-fs-300 font-semibold">Effective as of {new Date().toLocaleDateString()}</p>
           </div>

            <div className="flex flex-col gap-2">
                <p className="font-semibold">Table of Contents</p>
                {titles
                    .map((title : userTerms) => (
                        <Link 
                            key={title.id}
                            href={`#${title.id.toString()}`}
                            className={linkClass}>
                            <LuDot className="inline" /> {title.title}
                        </Link>
                    ))
                }
            </div>

            <div className="flex flex-col gap-10">
                {titles.
                    map((title: userTerms) => (
                        <div 
                            key={title.id}
                            id={title.id.toString()}>
                            <p className="font-semibold">{title.title}</p>
                            <p className="text-fs-300">{title.desc}</p>
                        </div>
                    ))
                }
            </div>

            <Link href='/' className="text-custom-dark-blue underline underline-offset-2">Go Back to Home Page</Link>
        </section>
    )
}