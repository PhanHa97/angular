import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss'],
})
export class NgifComponent implements OnInit {
  status: boolean = true;
  isLogin: boolean = false;
  constructor() {}
  ngOnInit(): void {}
  toggle() {
    this.status = !this.status;
  }
  logout(){
    this.isLogin=false;
  }
  login(){
this.isLogin=true;
  }
}
