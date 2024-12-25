'use client'

import clsx from "clsx"
import PageTitle from "../ui/components/PageTitle"
import BlogCard from "../ui/components/BlogCard"
import { getBlogPosts } from "../query/route"
import { blogs } from "../ui/definitions";
import Link from "next/link";
import { useState, useEffect } from "react"
import LoadingSpinner from "../ui/components/LoadingSpinner"


export default function Blogs(){
    const [ blogs, setBlogs ] = useState<blogs[]>([]);
    const [ loading, setLoading ] = useState<boolean>(false);

    useEffect(() => {
        async function loadBlogs(){
            try {
                setLoading(true);
                const data = await getBlogPosts();
                setBlogs(data)
            } catch (error) {
                console.error('Error getting blog posts')
                if(error instanceof Error){
                    return error.message
                }
            }
            finally{
                setLoading(false)
            }
        }

        loadBlogs();
    }, [])

    if(loading){
        return(
            <LoadingSpinner />
        )
    }

    // classes and styles
    const blogPageClass = clsx(
        'grid custom-container gap-5'
    )
    return(
       <section className={blogPageClass}>
        <PageTitle destination="Blogs" />

        <div className="grid md:grid-cols-[1fr_300px] gap-5">
            <div className="flex flex-col gap-2">
                { blogs.length > 0 ? 
                    blogs.map((blog : blogs | any) => (
                        <Link 
                            key={blog.documentId}
                            href={`/blogs/${blog.documentId}`}>
                            <BlogCard
                                url={`http://127.0.0.1:1337${blog.imageUrl.url}`}
                                altText={blog.title}
                                datePosted={blog.datePosted}
                                title={blog.title}
                            />
                        </Link>
                )) : <LoadingSpinner />
                }
            </div>
        </div>   

       </section>
    )
}