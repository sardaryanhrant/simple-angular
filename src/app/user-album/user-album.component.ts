import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-album',
  templateUrl: './user-album.component.html',
  styleUrls: ['./user-album.component.scss']
})
export class UserAlbumComponent implements OnInit {

  userAlbums$: Object; 

  constructor(private albums: DataService,  private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.userAlbums$ = params.id)
   }


  ngOnInit() {
    this.albums.getUserAlbum(this.userAlbums$).subscribe(
      albums => this.userAlbums$ = albums
    )
  }

}
