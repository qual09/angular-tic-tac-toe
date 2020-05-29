import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() value: 'X' | 'O';
  @Input() winner: true | false;

  constructor() { }

  ngOnInit() {
  }

}