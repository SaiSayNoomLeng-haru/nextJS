import { getBlogDetail, getBlogPosts } from "@/app/query/route"
import Banner from "@/app/ui/components/Banner";
import PageTitle from "@/app/ui/components/PageTitle";
import { blogContent, blogs } from "@/app/ui/definitions";
import clsx from "clsx"
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

export default async function BlogDetail({params} : { params: { id : string }}){
    const documentId = await params;
    const id = documentId.id
    const blog = await getBlogDetail(id);
    const relatedBlogs = await getBlogPosts();

    const {
        title,
        author,
        category,
        datePosted,
        content,
        authorImage,
        imageUrl,
        length
    } = blog || {}   

    // classes and styles
    const blogDetailPageClass = clsx(
        'custom-container space-y-10'
    )

    const mainContent = clsx(
        'grid md:grid-cols-[auto_1fr_200px] gap-5'
    )
    return(
        <section className={blogDetailPageClass}>
            <PageTitle destination="Blog Detail" />

            <div className="flex flex-col gap-2 items-center justify-center">
                <img 
                    src={`http://127.0.0.1:1337${imageUrl.url}`} 
                    alt='a girl hiding her face with her left hand to show the rings on her finger'
                    aria-label="a girl hiding her face with her left hand to show the rings on her finger"
                    className="max-w-[80%] mx-auto rounded-sm"/>
                
                <p className="font-semibold text-fs-500 capitalize">{title} <span className="bg-custom-dark-blue px-3 py-2 text-fs-400 text-white">{category}</span></p>

                <div className="flex gap-3">
                    <img 
                        src={`http://127.0.0.1:1337${authorImage[0].formats.thumbnail.url}`} 
                        alt={`${author}'s photo`}
                        className="max-w-[50px] aspect-square rounded-full" 
                        aria-label={`${author}'s photo`}/>

                    <div className="text-fs-300">
                        <p className="font-semibold">Written by {author}</p>
                        <p className="text-fs-300">{datePosted} | {length} read</p>
                    </div>
                </div>
           </div>

           <div className={mainContent}>
                <div className="flex md:flex-col gap-3 items-end col-start-1">
                    <p className="uppercase text-gray-600">Share</p>
                    <Link href=''><FaFacebook /></Link>
                    <Link href=''><FaInstagram /></Link>
                    <Link href=''><FaLinkedin /></Link>
                </div>

                <div className="flex flex-col gap-5 text-justify !text-gray-500">
                    <p className="first-letter:text-fs-700 first-letter:text-custom-dark-blue first-letter:float-left first-letter:font-bold first-letter:mr-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptates nam atque ut, nobis nostrum assumenda veritatis doloremque maiores sapiente asperiores dignissimos cupiditate id, omnis libero laboriosam, deserunt recusandae. Consequuntur, maxime. Voluptatibus quo officiis placeat corrupti saepe error veniam incidunt quibusdam sed sit molestiae, quos, expedita magnam, quia obcaecati fuga.</p>

                    {content.map((item: blogContent) => (
                        <div 
                        id={item.id.toString()} 
                        key={item.id}
                        className="flex flex-col gap-3">
                            <p className="text-black font-semibold capitalize">{item.subTitle}</p>
                            <p>{item.description}</p>
                            <div className="flex overflow-x-scroll  gap-3">
                            { item.imageUrl.length > 0 ?
                                item.imageUrl.map((img : any) => (
                                        <img
                                            src={`http://127.0.0.1:1337${img.formats.small.url}`}
                                            alt={`${title}'s related image`}
                                            className="rounded-sm w-[200px]"
                                            key={img.id}
                                        />
                                    ))
                                    : null
                                }
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex flex-col items-start gap-2">
                        <p className="font-bold text-custom-dark-green underline underline-offset-2">Main topic in this article</p>
                        <p className="bg-custom-dark-blue text-white text-fs-300 px-3 py-1">{category}</p>
                    </div>
                    <p className="font-semibold hidden md:block  text-custom-dark-green underline underline-offset-2">Table of Content</p>
                    {content.map((item : blogContent) => (
                        <Link
                            key={item.id}
                            href={`#${item.id}`}
                            className="hidden md:block">
                                <p className="text-fs-300 capitalize text-gray-600 hover:text-custom-dark-blue"><LuDot className="inline"/> {item.subTitle}</p>
                        </Link>
                    ))}

                    <div className="relative">
                        <img
                            src='/assets/images/blog.jpg'
                            alt='a model posing for jewelry showcase'
                            className="relative"
                        />
                        <Link
                            href='/catalog'
                            className="absolute bottom-[1em] left-[50%] translate-x-[-50%] md:left-14 md:translate-x-0 bg-custom-dark-blue py-1 px-2 text-white">
                                Shop Now
                        </Link>
                    </div>
                </div>
           </div>

           <div className="space-y-10">
                <p className="text-center font-semibold text-fs-500 text-custom-dark-orange">Related Blogs</p>
                <div className="flex overflow-x-scroll gap-4">
                    { relatedBlogs.length > 0 ? 
                            relatedBlogs.map((blog : blogs | any) => (
                                <Link 
                                    key={blog.documentId}
                                    href={`/blogs/${blog.documentId}`}
                                    className="min-w-[200px]">
                                    <div className="flex flex-col gap-2">
                                        <img 
                                            src={`http://127.0.0.1:1337${blog.imageUrl.url}`} 
                                            alt={`${blog.title} photo`}
                                            className="h-[150px]" />
                                        <div>
                                            <p className="text-fs-300">{blog.title}</p>
                                            <p className="text-fs-200 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores exercitationem numquam, non labore provident magnam....</p>
                                            <p className="text-fs-300 underline underline-offset-2 text-custom-dark-orange">Read More</p>
                                        </div>
                                    </div>
                                </Link>
                        )) : null
                        }
                </div>
           </div>

           <Banner />
        </section>
    )
}