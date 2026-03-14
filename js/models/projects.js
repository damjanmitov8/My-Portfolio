import {fetchProject}  from "../services/apiService.js"

export class Projects {
    constructor(){
        this.projects = ['']
    }
    async loadProjects(){
         this.projects = await fetchProject()
    }
}

