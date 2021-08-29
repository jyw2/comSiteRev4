import { Component, OnInit } from '@angular/core';
import { fadeInTriggerDelay, fadeInTriggerDelay2, fadeInTriggerNormal } from '../fadeIn.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [ fadeInTriggerNormal,fadeInTriggerDelay,fadeInTriggerDelay2]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
