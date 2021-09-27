import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  inputs: ['artist']
})
export class ArtistDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('current artist ')
  }

}
