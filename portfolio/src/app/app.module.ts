import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { ProjectCardComponent } from './project-card/project-card.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
		MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
		MatSidenavModule,
    MatToolbarModule,
		AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
