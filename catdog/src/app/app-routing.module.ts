import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { ShowcatsComponent } from './showcats/showcats.component';



const routes: Routes = [
  { path: 'dungeon',component: CatsComponent, children: [
    { path: ':catname', component: ShowcatsComponent },
    ]  },
  { path: 'castle',component: DogsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
