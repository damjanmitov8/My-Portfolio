export function rendersProfileHome(profile) {
  const nameEl = document.getElementById("name");
  const bioEl = document.getElementById("bio");

  nameEl.textContent = profile.getFullName();
  bioEl.textContent = profile.getBio();
}

export function rendersProfileAbout(profile) {
  let about = {
    aboutHeader: document.getElementById("about-header"),
    aboutBio: document.getElementById("about-bio"),
    aboutName: document.getElementById("about-name"),
    aboutAge: document.getElementById("about-age"),
    aboutAddress: document.getElementById("about-address"),
    aboutPhone: document.getElementById("about-phone"),
    aboutEmail: document.getElementById("about-email"),
  };
  about.aboutHeader.innerHTML ='I am <span style = color:red>Web Developer</span>';
  about.aboutBio.textContent ="I am a passionate Web Developer who loves creating clean, interactive, and user-friendly web experiences. I enjoy turning ideas into functional websites and applications using modern technologies like HTML, CSS, and JavaScript. I am always eager to learn new tools and frameworks to improve my skills and build projects that make a difference.";
  about.aboutName.innerHTML =`<b>Name:</b> ${profile.getName()}`
  about.aboutAge.innerHTML =`<b>Age:</b> ${profile.getAge()}`
  about.aboutAddress.innerHTML =`<b>Address:</b> ${profile.getAddress()}`
  about.aboutPhone.innerHTML = `<b>Phone:</b> ${profile.getPhone()}`;
  about.aboutEmail.innerHTML = `<b>Email:</b> ${profile.getEmail()}`;

}

export function rendersProfileSkills(profile){
    let javaScript = document.getElementById('javascript')
    let html = document.getElementById('html')
    let css = document.getElementById('css')
    let git = document.getElementById('git')

    javaScript.textContent = profile.skills[2]
    html.textContent = profile.skills[0]
    css.textContent = profile.skills[1]
    git.textContent = profile.skills[3]
}

// // Projects 
import  {Projects}  from "../models/projects.js";

let projectInstance = new Projects()
await projectInstance.loadProjects()

function setUpAllCards(){
let projectCards = document.querySelectorAll('.project-card')

projectCards.forEach((card,i) => {
        let title = card.querySelector('h3')
        let desc = card.querySelector('p')
        let project = projectInstance.projects[i]

        card.addEventListener('mouseenter', function(){
            title.textContent = project.title
            desc.textContent = project.description
        })
        card.addEventListener('mouseleave', function(){
            title.textContent = ''
            desc.textContent = ''
        })
        card.addEventListener('click', function(){
            window.open(project.live , '_blank')
        })
        
    })
}
setUpAllCards()

