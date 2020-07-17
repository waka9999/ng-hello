import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from "rxjs/operators";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ng-hello';
  result:string="";
  url:string="/api/hello/data";
  
  constructor(private http:HttpClient){
  }

  getData():void{
    this.http.get<any>(this.url).pipe(take(1)).subscribe(data=>{
      console.log(data);
      this.result=JSON.stringify(data);
    })
  }
}