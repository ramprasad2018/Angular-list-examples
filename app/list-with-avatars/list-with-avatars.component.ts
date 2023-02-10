import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-with-avatars',
  templateUrl: './list-with-avatars.component.html',
  styleUrls: ['./list-with-avatars.component.css']
})
export class ListWithAvatarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  messages = [
    {
      from: 'Entity 1',
      subject: 'Message Subject 1',
      content: 'Message Content 1'
    },
    {
      from: 'Entity 2',
      subject: 'Message Subject 2',
      content: 'Message Content 2'
    },
  ]
}