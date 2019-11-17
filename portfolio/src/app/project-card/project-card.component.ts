import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../classes/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit { 

  @Input()
  title:string ="";
  @Input()
  description: string = "";
  @Input()
  date: string = "";
  @Input()
  image: string = "";
  @Input()
  link: string = "";

  constructor() { }
  ngOnInit() {
  }
}