import { Component, OnInit } from '@angular/core';
import { Project } from '../classes/project';




@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit{

  projectList = [
  { "title": "Taco", "description": "lorem ipsum taco bell taco", "date": "December 20th, 2019", "image": "none", "link": "www.google.com" },
  { "title": "Taco", "description": "lorem ipsum taco bell taco", "date": "December 20th, 2019", "image": "none", "link": "www.google.com" },
  { "title": "Taco", "description": "lorem ipsum taco bell taco", "date": "December 20th, 2019", "image": "none", "link": "www.google.com" },
  ]; 
  //favorite: this.projectList[0];
  

  constructor() { }

  ngOnInit() {
  }

  fuck(){
    console.log(this.projectList);
  }

}
