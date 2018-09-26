import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //不用再在app.moudle配置,如果provide和Usename相同，直接用此句，不用再在app.moudle配置，如果不同，需要在app.moudle配置
})
export class LogService {
  log(msg){
    console.log(msg);
  }
  constructor() { }
}
