import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-with-icons',
  templateUrl: './list-with-icons.component.html',
  styleUrls: ['./list-with-icons.component.css']
})
export class ListWithIconsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  messages = [
    {
      from: 'Employee 1',
      subject: 'Message Subject 1',
      content: 'Message Content 1'
    },
    {
      from: 'Employee 2',
      subject: 'Message Subject 2',
      content: 'Message Content 2'
    },
  ]
}