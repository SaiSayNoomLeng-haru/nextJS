import clsx from "clsx"
import PageTitle from "../ui/components/PageTitle"


export default function Blogs(){

    // classes and styles
    const blogPageClass = clsx(
        'grid'
    )
    return(
       <section>
            <PageTitle destination="Blogs" />
           
       </section>
    )
}