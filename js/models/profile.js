export class Profile {
    constructor(name,title,age,address,bio,skills,phone,email,github,linkedin){
        this.name = name
        this.title = title
        this.age = age
        this.address = address
        this.bio = bio
        this.skills = skills
        this.phone = phone
        this.email = email
        this.github = github
        this.linkedin = linkedin
    }
    getName(){
        return this.name
    }
    getFullName(){
        return `I am ${this.name} !`
    }
    getAge(){
        return this.age
    }
    getAddress(){
        return this.address
    }
    getEmail(){
        return this.email
    }
    getPhone(){
        return this.phone
    }
    getBio(){
        return this.bio
    }
}