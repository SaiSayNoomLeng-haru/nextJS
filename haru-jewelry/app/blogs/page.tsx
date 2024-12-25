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
    const popularCategory = [
        'necklace',
        'gold jewelry',
        'diamond jewelry',
        'earrings',
        'diamond rings'
    ]   

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

        <div className="grid md:grid-cols-[1fr_200px] gap-5">
            <div className="flex flex-col gap-2 md:col-start-2">
                <div>
                    <p className="border-l-2 border-custom-dark-blue pl-2">Search</p>

                </div>

                <div className="flex flex-col gap-2">
                    <p className="border-l-2 border-custom-dark-blue pl-2">Popular Category</p>
                    {popularCategory.map((category: string, index: number) => (
                        <p 
                            key={index}
                            className="bg-custom-accent pl-2 capitalize round-sm">
                            {category}
                        </p>
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

            <div className="grid md:grid-cols-[repeat(2,_1fr)] gap-2 md:col-start-1 md:row-start-1">
                { blogs.length > 0 ? 
                    blogs.map((blog : blogs | any) => (
                        <Link 
                            key={blog.documentId}
                            href={`/blogs/${blog.documentId}`}
                            className="h-full">
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