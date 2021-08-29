import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaQueriesService } from '../mediaQueries.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  //Semi generic navBar component

  //Responsive design vars
  public smallScreen:boolean = false;
  public screenSizeSub:Subscription = new Subscription;
  public screenSize:number = 0;

  // Collapsed navBar vars
  public open:boolean = true;
  public icon:string = '../assets/hamburger.png';

  constructor(private mQs: MediaQueriesService) { }

  ngOnInit(): void {
    //gets screen size information
    this.screenSizeSub = this.mQs.getQueries().subscribe((num)=>{
      if(num> 0){
        this.open = false
        this.icon = '../assets/hamburger.png'
      }else{
        this.open = true
      }
      this.screenSize = num;

    })

    this.mQs.manualCheck()// manually triggers check once

  }

  toggle(){
    //open or close the navBar
    if (this.open){
      this.icon = '../assets/hamburger.png'
      this.open = false
    }else {
      this.icon = '../assets/x.png'
      this.open = true
    }
  }

  ngOnDestroy() : void{
    this.screenSizeSub.unsubscribe()
  }



}
