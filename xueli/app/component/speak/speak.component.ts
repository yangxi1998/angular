import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speak',
  templateUrl: './speak.component.html',
  styleUrls: ['./speak.component.css']
})
export class SpeakComponent implements OnInit {

  constructor() { }
  arr:number[]=[12,13,14,15,16,17,18,19,20,21];
  ngOnInit() {
    console.log(this.arr);
  }

}
