import { ReactElement } from "react"

export type NavLinks = {
    name: string
    href: string
    icon?: ReactElement
}

export type teamMembers = {
    name: string
    id: number
    documentId : string
    role: string
    imageUrl: {
        url: string
        width: number
        height: number
    }
}

export type blogs = {
    title: string
    id: number
    documentId: string
    author: string
    url: string
    datePosted: string
    category: string
    length: string
    content: blogContent
    authorImage: {
        width: number
        height: number
    }[]
    imageUrl: {
        width: number
        height: number
        url: string
    }[]
}

export type blogContent = {
    id: number
    subTitle: string
    description: string
    imageUrl: {}[]
}

export type userContact = {
    name: string
    email: string
    subject: string
    message: string
}

export type userTerms = {
    id: number
    title: string
    desc: string
}


