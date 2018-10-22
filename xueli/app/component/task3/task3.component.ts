import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  constructor(private http:HttpClient) { }
 task2;
  ngOnInit() {
    this.http.get('/api/tasks2').subscribe((data)=>{
      this.task2=data;
    });
  }

}
