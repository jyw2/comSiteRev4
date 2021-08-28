import { Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { Item } from '../prices/item.model';


@Component({
  selector: 'app-illust-component',
  templateUrl: './illust-component.component.html',
  styleUrls: ['./illust-component.component.css']
})
export class IllustComponent implements OnInit {
  @Output() priceChange = new EventEmitter()
  @Input() resetSubj:Subject<void>
  private resetSubs:Subscription
  public action:string ='remove'
  public opacity:number = 1

  public source:string
  public name:string
  private cost:number = 0
  private bgItems:{name:string, price:number}[] = []
  public bgOptions = []
  private figuresItems:{name:string, price:number}[] = []
  public figureOptions = []
  private shotItems:{name:string, price:number}[] = []
  public shotOptions = []




  constructor() { }

  ngOnInit(): void {
    //for when a new category is switched to
    this.resetSubs = this.resetSubj.subscribe(()=>{
      this.turnOn()
    })

    //create items
    //set pricing here!
    this.bgItems = [
      {name:'none', price:0},
      {name: 'simple', price:5},
      {name:'complex', price:50}
    ]
    this.figureOptions = [
      {name: '1', price:0}
    ]
    this.shotOptions = [
      {name:'portrait', price: 40: 'torso', name: 'full figure'}
    ]

    //create name arrays
  }

  copyNames(mainArray:{name:string, price:number}[],copy:string[]){
    //create the name only copy of the array
    let index = 0
    for (let item of mainArray){
      copy[index] = item.name
      index++
    }
  }

  ngOnDestroy(): void {
    this.resetSubs.unsubscribe()
  }


  setBg(index:number){

  }

  toggle(){
    //add or remove the item from the package
    if(this.action == 'add'){
      //adding to package
      this.action = 'remove'
      this.opacity = 1
      this.priceChange.emit(this.cost)
    }else {
      //removing from package
      this.action = 'add'
      this.opacity = 0.3
      this.priceChange.emit(-this.cost)
    }
  }

  turnOn(){
    //toggles on the item
    this.action = 'remove'
    this.opacity = 1

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

