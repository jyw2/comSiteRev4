import { Component, OnInit, Output,Input,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  //generic class for a dropdown

  @Input() public list:string[] = [ 'option1','option2','option3']
  //filled on initiation
  public selection:string = this.list[0];
  @Output() public optionClicked:EventEmitter<number> = new EventEmitter()
  public isOpen:boolean = false
  private map:{[key:string]:number} = {}

  constructor() { }

  ngOnInit(): void {
    // pair name with index
    let index = 0
    for(let name of this.list){
      console.log(name)
      this.map[name as string] = index
      index++
    }
    this.selection = this.list[0]
    console.log(this.map)
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
      //emit index of option, should be paired with receiver's array
      this.selection = name
      this.optionClicked.emit(this.map[name])
      console.log('emitted' + this.map[name])
    }

    this.toggle()
  }


}
