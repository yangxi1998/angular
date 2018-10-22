import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  arr:string[]=['<<','1','2','3','4','5','6','7','>>'];
  constructor(private http:HttpClient) { }
  courses;
  ngOnInit() {
    this.http.get('/api/courses3').subscribe(data=>{
      this.courses=data;
  });
  }

}
