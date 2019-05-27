import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ThemeExhibitionComponent} from './theme-exhibition/theme-exhibition.component';
import {PublishPhotosComponent} from './publish-photos/publish-photos.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'exhibition', component: ThemeExhibitionComponent},
  {path: 'publish', component: PublishPhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
