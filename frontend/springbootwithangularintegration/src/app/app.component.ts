import { Component,Inject } from '@angular/core';
import { Mobile } from './mobile';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  mobiles:Mobile[]=[];
  mob:Mobile=new Mobile(0,"0","0");
  msg:string="";
  constructor(@Inject(HttpClient) private http:HttpClient){}


   getMobiles()
   {
    this.http.get<Mobile[]>("http://localhost:8080/mobiles",
    {responseType:'json'}).subscribe(data=>this.mobiles=data)
   }
   addMobile()
   {
    this.http.post("http://localhost:8080/mobiles/addnewmobile",this.mob,
    {responseType:"text"}).subscribe(data=>{this.msg=data});
   
   }




}
