import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';
import { Category } from '../prices/category.model';



@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  //generic class for a dropdown
  @Input() public items:{name:string,price:number}[] |
  {name:string, ratio:number}[] | Category[]

  @Output() public optionClicked:EventEmitter<{name:string,price:number} |
  {name:string, ratio:number} | Category> = new EventEmitter()

  public list:string[] = [ 'option1','option2','option3']
  //filled on initiation
  public selection:string = this.list[0];
  public isOpen:boolean = false
  private map:{[key:string]:number} = {}

  constructor() { }

  ngOnInit(): void {
    // pair name with index

    this.copyNames(this.items)
    let index = 0
    for(let name of this.list){
      console.log(name)
      this.map[name as string] = index
      index++
    }
    this.selection = this.list[0]
    console.log(this.map)
  }

  copyNames(mainArray:{name:string,price:number}[] |
    {name:string, ratio:number}[] | Category[]){
    //create the name only copy of the array
    let index = 0
    for (let item of mainArray){
      this.list[index] = item.name
      index++
    }
  }

  toggle(){
    //dropdown opened
    this.isOpen = !this.isOpen
  }

  optionSelect(name:string){
    //option clicked event fired

    if (this.selection == name){
      //do nothing if already selected
    }else{
      //emit option, should be paired with receiver's array
      this.selection = name
      this.optionClicked.emit(this.items[this.map[name]])

    }

    this.toggle()
  }


}
