import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoitureListComponent } from './voiture-list/voiture-list.component';
import { VoitureDetailsComponent } from './voiture-details/voiture-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'voiture-list', pathMatch: 'full' },
  { path: 'voiture-list', component: VoitureListComponent },
  { path: 'voiture-details/:id', component: VoitureDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
