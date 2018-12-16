import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

// import { MessageService } from '../services/message.service'

@Component({
  selector: 'alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {

  content = 'you have been warned';
  hideContent = true;
  severity = 423;
  
  constructor() {}

  ngOnInit() {
  }

  toggle (){
    this.hideContent = !this.hideContent;
  }

  toggleAsync (){
    timer(500).subscribe( () => {
      this.toggle();
    })
  }
}
