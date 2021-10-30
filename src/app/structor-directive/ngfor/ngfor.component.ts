import { Component, OnInit } from '@angular/core';
interface UserElement {
  name: string;
  age: number;
}

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss'],
})
export class NgforComponent implements OnInit {
  listUser: UserElement[] = [
    {
      name: 'Nguyen',
      age: 18,
    },
    {
      name: 'Tung',
      age: 21,
    },
    {
      name: 'Dat',
      age: 20,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
