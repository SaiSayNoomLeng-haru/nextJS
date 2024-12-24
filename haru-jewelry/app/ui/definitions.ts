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
    author: string
    datePosted: string
    category: string
    length: string
    contents: string[]
}

export type userContact = {
    name: string
    email: string
    subject: string
    message: string
}
