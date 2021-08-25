import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery-menu',
  templateUrl: './gallery-menu.component.html',
  styleUrls: ['./gallery-menu.component.css']
})
export class GalleryMenuComponent implements OnInit {

  private filters: string[] = []
  //stores tags to send to API to get images
  //Could be replaced with a set but I only have a few elements
  //so Runtime is ok.

  public filterData:{name:string, tag:string}[] = [];
  public apiCall = new EventEmitter<{}>()



  constructor( private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.filterData.push(
      {name: 'ILLUSTRATION', tag: 'illustration' },
      {name: 'CHARACTER SHEETS', tag: 'charSheet' },
      {name: 'SPLASH ARTS', tag: 'splashArt' },
      {name: 'WALLPAPERS', tag: 'wallpaper' },
      {name: 'MOVING WP', tag: 'movingWallpaper' }
    )
  }

  editFilters(filterData:any){
    //adds or removes a tag from the filters to send to the API

    if(filterData.isSelected){
      //add a filter
      this.filters.push(filterData.tag)
    }else{
      //remove a filter
      const index = this.filters.indexOf(filterData.tag)
      this.filters.splice(index)
    }

    //call API here
    //switch out the /a fro demo site
    this.httpClient.get('protojops.com/api/a').subscribe(()=>{

    })


  }

}
