import { Component, OnInit } from '@angular/core';
import { Project } from '../classes/project';




@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit{

  // projectList = [
  // { "title": "Otto", "description": "lorem ipsum taco bell taco", "date": "December 20th, 2019", "image": "none", "link": "www.google.com" },
  // { "title": "Personal Website", "description": "lorem ipsum taco bell taco", "date": "December 20th, 2019", "image": "none", "link": "www.google.com" },
  // { "title": "Project Mayo", "description": "lorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell taco", "date": "December 20th, 2019", "image": "none", "link": "www.google.com" },
  // ]; 

  projectList = [
  { "title": "Project Mayo", "description": "lorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell taco", "date": "December 20th, 2019", "image": "none", "link": "www.google.com" },
  { "title": "Project Mayo", "description": "lorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell taco", "date": "December 20th, 2019", "image": "none", "link": "www.google.com" },
  { "title": "Project Mayo", "description": "lorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell taco", "date": "December 20th, 2019", "image": "none", "link": "www.google.com" },
  { "title": "Project Mayo", "description": "lorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell tacolorem ipsum taco bell taco", "date": "December 20th, 2019", "image": "none", "link": "www.google.com" }
  ];

  constructor() { }

  ngOnInit() {
  }

  fuck(){
    console.log(this.projectList);
  }

}
