import { Profile } from "../models/profile.js";

export async function fetchProfile() {
    const response = await fetch('./data/profile.json');
    if (!response.ok) {
        throw new Error(`Unable to load profile.json: ${response.status}`);
    }
    const data = await response.json();

    return new Profile(
        data.name,
        data.title,
        data.age,
        data.address,
        data.bio,
        data.skills,
        data.phone,
        data.email,
        data.github,
        data.linkedin
    );
}

fetchProfile()

export async function fetchProject(){
    try{
    const response = await fetch('./data/projects.json')
    const data = await response.json()
    return data
    }catch(error){
        throw new Error('Unable to load',error)
    }
}


export default {
    fetchProfile,
    fetchProject
}

