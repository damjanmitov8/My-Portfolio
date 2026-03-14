
import {fetchProfile} from "./services/apiService.js";
import { rendersProfileHome,rendersProfileAbout,rendersProfileSkills } from "./utils/renders.js";

async function homeProfile() {
    try {
        const home = await fetchProfile();
        rendersProfileHome(home);
    } catch (err) {
        console.error('profile load failed', err);
    }
}

homeProfile();

async function aboutProfile(){
    try{
        const about = await fetchProfile()
        rendersProfileAbout(about)
    } catch(err){
        console.error('profile load failed',err)
    }
}

aboutProfile()

async function skillsProfile(){
    try{
        const skills = await fetchProfile()
        rendersProfileSkills(skills)
    }catch(err){
        console.log('profile load failed',err)
    }
}

skillsProfile()
