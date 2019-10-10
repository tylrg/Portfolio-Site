export class Project{
    title: string;
    description: string;
    date: string;
    image: string;
    link: string;
    constructor(t: string,d: string,da: string,i: string,l:string){
        this.title=t;
        this.description=d;
        this.date=da;
        this.image=i;
        this.link=l;
    }
}