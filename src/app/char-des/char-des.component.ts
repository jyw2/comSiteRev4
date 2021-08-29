import { Component, OnInit } from '@angular/core';
import { fadeInTriggerNormal, fadeInTriggerDelay, fadeInTriggerDelay2} from '../fadeIn.animation';

@Component({
  selector: 'app-char-des',
  templateUrl: './char-des.component.html',
  styleUrls: ['./char-des.component.css'],
  animations: [ fadeInTriggerNormal, fadeInTriggerDelay, fadeInTriggerDelay2 ]
})
export class CharDesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
