import { Component, OnInit } from '@angular/core';
import { Project } from '../classes/project';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  p: Array<Project>;

  constructor() { }

  ngOnInit() {
    
  }

}
