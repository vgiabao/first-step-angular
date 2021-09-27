import { Component, OnInit  } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  query: string;
  artists: object;
  currentArtist: object;
  showArtist(event, item) {
    this.query = item.name;
    item.highlight = !item.highlight
    this.currentArtist= item

  }
  ngOnInit() {
                console.log('change route')

        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    } 
  
  constructor(private http: HttpClient) {
    this.query = '';
    this.artists = [];
    
  }
  ngOnInit(): void{
    console.log('init')
    this.http.get<Object>('../assets/data.json').subscribe(
      data => { 
        this.artists = data;
      }
    )
  }
}
