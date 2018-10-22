import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-component02',
  templateUrl: './component02.component.html',
  styleUrls: ['./component02.component.css']
})
export class Component02Component implements OnInit {

  constructor() { }
  @Input() arr;
  @Input() arr1;
  @Output() fun1Index=new EventEmitter();
  fun1(i){
    this.fun1Index.emit(i);
  }
  @Output() fun2Index=new EventEmitter();
  fun2(i){
    this.fun2Index.emit(i);
  }
  @Output() delIndex=new EventEmitter();
  del(i){
    this.delIndex.emit(i);
  }
  @Output() del1Index=new EventEmitter();
  del1(i){
    this.del1Index.emit(i);
  }
  //arr;
  ngOnInit() {
   // this.arr=this.share.data;
  }

}
