import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dad',
  templateUrl: './dad.component.html',
  styleUrls: ['./dad.component.css']
})
export class DadComponent implements OnInit {
  color='blue';
  constructor() { }

  ngOnInit(): void {
  }
  treatson(message)
  {
    this.color=message;
  }
}
