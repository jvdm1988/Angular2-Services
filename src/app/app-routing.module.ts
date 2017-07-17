import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { JokesComponent } from "./jokes/jokes.component";


// we set all paths to point to AppComponent
const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: "jokes",
    component: JokesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
