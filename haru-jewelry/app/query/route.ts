import { userContact } from "../ui/definitions";

// get team members
export async function getTeamMember(){
    const baseUrl = `http://127.0.0.1:1337/api/teams?populate=imageUrl`

    try {
        const resp = await fetch(baseUrl);
        if(!resp){
            throw new Error ( `Cannot Fetch Team Members`)
        }
        const members = await resp.json();
        return members.data;
    } catch (error) {
        if(error instanceof Error){
            return error.message
        }
    }
}

// get blog posts
export async function getBlogPosts(){
    const baseUrl = `http://127.0.0.1:1337/api/blogs?populate=*`

    try{
        const resp = await fetch(baseUrl);
        if(!resp.ok){
            throw{
                message: 'Cannot get blog posts',
                status: resp.status,
                statusText: resp.statusText
            }
        }
        const blogs = await resp.json();
        return blogs.data;
    }
    catch(error){
        if(error instanceof Error){
            return error.message
        }
    }
}

// get blog detail
export async function getBlogDetail(id: string){
    const baseUrl = `http://127.0.0.1:1337/api/blogs/${id}?populate[0]=authorImage&populate[1]=imageUrl&populate[2]=content&populate[3]=content.imageUrl`;

    try{
        const resp = await fetch(baseUrl);
        if(!resp.ok){
            throw{
                message: `The post you are trying to get can't be reached`,
                status: resp.status,
                statusText: resp.statusText
            }
        }
        const blog = await resp.json();
        return blog.data;
    }
    catch(error){
        if(error instanceof Error){
            return error.message
        }
    }
}

// add user's contact information
export async function addUserContact( formData : FormData){
    const baseUrl = `http://127.0.0.1:1337/api/user-contacts`

    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    try {
        const resp = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify( { data : {name, email, subject, message} }),
        })
        const newUser = await resp.json();
    } catch (error) {
        if(error instanceof Error){
           return error.message
        }
    }
}

// add newsletter list
export async function addNewsletterList(formData: FormData){
    const baseUrl = `http://127.0.0.1:1337/api/newsletter-lists`;
    const email = formData.get('email');

    try {
        const resp = await fetch(baseUrl, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({data: {email}})
        })
        const newEmail = await resp.json()
        return newEmail
    } catch (error) {
        if(error instanceof Error){
            return error.message
        }
    }
}

// get user terms
export async function getTermsAndCondition(){
    const baseUrl = `http://127.0.0.1:1337/api/terms-and-conditions?populate=*`

    try {
        const resp = await fetch(baseUrl);
        if(!resp.ok){
            throw{
                message: 'Cannot Get User Terms',
                status: resp.status,
                statusText: resp.statusText
            }
        }
        const terms = await resp.json();
        return terms.data
    } catch (error) {
        if(error instanceof Error){
            console.log(error.name)
            return error.message;
        }
    }
}

