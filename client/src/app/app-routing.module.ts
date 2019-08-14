import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicEditComponent } from './music-edit/music-edit.component';
import { OktaAuthGuard } from '@okta/okta-angular';

const routes: Routes = [
  {
    path: 'music-list',
    component: MusicListComponent,
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'music-add',
    component: MusicEditComponent,
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'music-edit/:id',
    component: MusicEditComponent,
    canActivate: [OktaAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
