import { Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { Item } from '../prices/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {
  @Input() item:Item;
  @Output() priceChange = new EventEmitter()
  @Input() resetSubj:Subject<void>
  private resetSubs:Subscription
  public action:string ='remove'
  public opacity:number = 1


  constructor() { }

  ngOnInit(): void {
    //for when a new category is switched to
    this.resetSubs = this.resetSubj.subscribe(()=>{
      this.turnOn()
    })
  }

  ngOnDestroy(): void {
    this.resetSubs.unsubscribe()
  }




  toggle(){
    //add or remove the item from the package
    if(this.action == 'add'){
      //adding to package
      this.action = 'remove'
      this.opacity = 1
      this.priceChange.emit(this.item.cost)
    }else {
      //removing from package
      this.action = 'add'
      this.opacity = 0.3
      this.priceChange.emit(-this.item.cost)
    }
  }

  turnOn(){
    //toggles on the item
    this.action = 'remove'
    this.opacity = 1
    this.priceChange.emit(this.item.cost)
    console.log(this.item.cost)

  }

  hovered(){
    if(this.action == 'add'){
      this.opacity = 0.8
    }else {
      this.opacity = 0.5
    }
  }

  hoveredExit(){
    if(this.action == 'add'){
      this.opacity = 0.3
    }else {
      this.opacity = 1
    }
  }


}
