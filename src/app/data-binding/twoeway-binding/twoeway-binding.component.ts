import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoeway-binding',
  templateUrl: './twoeway-binding.component.html',
  styleUrls: ['./twoeway-binding.component.scss']
})
export class TwoewayBindingComponent implements OnInit {
  username:string="Nguyen";
  constructor() { }

  ngOnInit(): void {
  }

}
