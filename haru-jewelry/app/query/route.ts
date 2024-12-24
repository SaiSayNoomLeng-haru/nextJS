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

// add user's contact information

export async function addUserContact( formData : FormData){
    const baseUrl = `http://127.0.0.1:1337/api/user-contacts`

    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    console.log(name, email, subject, message)

    try {
        const resp = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify( { data : {name, email, subject, message} }),
        })
        const newUser = await resp.json();
        console.log('successful', newUser)
    } catch (error) {
        if(error instanceof Error){
            console.error(error.message);
        }
    }
}