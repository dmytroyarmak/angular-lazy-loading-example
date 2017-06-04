import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'users',
    loadChildren: 'app/users/users.module#UsersModule'
  },
  {
    path: 'photos',
    loadChildren: 'app/photos/photos.module#PhotosModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
