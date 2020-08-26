import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() dataparent ='blue';
  favcolor='green';
  @Output () senddatatofather = new EventEmitter();
  constructor() { }

  ngOnInit(): void
  {
  }
  changecolor()
  {
  this.senddatatofather.emit('green');
  }
}
