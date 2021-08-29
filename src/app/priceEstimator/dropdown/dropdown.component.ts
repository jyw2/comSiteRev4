import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';
import { Category } from '../prices/category.model';



@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  //generic class for a dropdown


  //Communication vars
  @Input() public items:{name:string,price:number}[] |
  {name:string, ratio:number}[] | Category[] // main options as objects
  @Input() public prompt:string = 'Click to select' // sub text on the top of dropdown
  @Output() public optionClicked:EventEmitter<{name:string,price:number} |
  {name:string, ratio:number} | Category> = new EventEmitter() // sends info to parent components when an option selected

  // Hold dropdown option Info
  public list:string[] = [] // name only version of items array
  private map:{[key:string]:number} = {} // maps a value to it's associated index in items
  public selection:string = this.list[0]; //currently selected option
  public isOpen:boolean = false // helps toggle()

  ngOnInit(): void {
    // pair name with index
    this.copyNames(this.items)
    let index = 0
    for(let name of this.list){
      this.map[name as string] = index
      index++
    }
    this.selection = this.list[0]
  }

  copyNames(mainArray:{name:string,price:number}[] |
    {name:string, ratio:number}[] | Category[]){
    //create the name only copy of the array
    let index = 0
    for (let item of mainArray){
      if( 'article' in item){
        this.list[index] = item.article + ' '+ item.name
      }else{
        this.list[index] = item.name
      }
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
