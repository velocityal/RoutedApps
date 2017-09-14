import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { EntryComponent } from './entry/entry.component';


const appRoutes Routes=[
{path: '', component: HomeComponent}, //route route
{path: 'entry', component: EntryComponent},
{path: 'menu', component: DisplayComponent},
],

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayComponent,
    EntryComponent
  ],
  imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes),
	FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
