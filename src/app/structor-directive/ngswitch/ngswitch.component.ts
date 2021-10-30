import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss'],
})
export class NgswitchComponent implements OnInit {
  color: string = 'blue';
  constructor() {}

  ngOnInit(): void {}
  changeColor(value: string) {
    // console.log(value);
    this.color = value;
  }
}
