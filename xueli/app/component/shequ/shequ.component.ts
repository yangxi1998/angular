import { Component, OnInit } from '@angular/core';
/*import { ActivatedRoute } from '@angular/router';*/
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private http:HttpClient) { }
  id:number;
  list2;
  list3;
  arr:string[]=['<<','1','2','3','4','5','6','7','>>'];
  ngOnInit() {
    this.http.get('/api/lists2').subscribe((data)=>{
      this.list2=data;
      console.log(this.list2);
    });
    this.http.get('/api/lists3').subscribe((data)=>{
      this.list3=data;
      console.log(this.list3);
    });
  }

}
