import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {HomeComponent} from "./home/home.component";
import { ProjectViewComponent } from './project-view/project-view.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutViewComponent } from './about-view/about-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', pathMatch: 'prefix',redirectTo: 'projects' },
      { path: 'projects', component: ProjectViewComponent },
      { path: 'about', component: AboutViewComponent },
      { path: 'contact', component: ContactViewComponent }
    ]},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
