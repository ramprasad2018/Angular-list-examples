import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-line-list',
  templateUrl: './multi-line-list.component.html',
  styleUrls: ['./multi-line-list.component.css']
})
export class MultiLineListComponent implements OnInit {

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