import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  album$: Object;

  constructor( private photos: DataService, private route: ActivatedRoute) {
      this.route.params.subscribe(params => this.album$ = params.id)
  }

  ngOnInit() {
    this.photos.getPhotosByAlbumId(this.album$).subscribe(
      photos => this.album$ = photos
    )
  }

}
