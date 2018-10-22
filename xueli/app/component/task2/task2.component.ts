import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  constructor(private http:HttpClient) { }
 task1;
  ngOnInit() {
    this.http.get('/api/tasks1').subscribe((data)=>{
      this.task1=data;
    });
  }

}
