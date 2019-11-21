export class employeemodel{
    name:string;
    eid:string;
    role:string;
    togglerole:boolean;
    constructor(name:string,eid:string,role:string,roletoggle:boolean){
        this.name=name;
        this.eid=eid;
        this.role=role;
        this.togglerole=roletoggle
    }
}