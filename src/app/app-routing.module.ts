import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { UserAlbumComponent } from './user-album/user-album.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {
    path: '',
    component:UsersComponent
  },
  {
    path: 'posts',
    component:PostsComponent
  },
  {
    path: 'details/:id',
    component:DetailsComponent
  },
  {
    path: 'user-albums/:id',
    component:UserAlbumComponent
  },
  {
    path: 'album/:id',
    component:PhotosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
