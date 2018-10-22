import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})

export class CoursedetailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  courseId:number;
   course;
   list;
   list1;
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('/api/courses3/'+this.courseId).subscribe((data)=>{
      this.course=data;
      //console.log(this.course);
    });
    
    this.http.get('/api/lists/'+this.courseId).subscribe((data)=>{
      this.list=data;
      console.log(this.list);
    });
    this.http.get('/api/lists1/'+this.courseId).subscribe((data)=>{
      this.list1=data;
      console.log(this.list1);
    });
  }
  


}
