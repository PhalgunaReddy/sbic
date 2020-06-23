import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pexam',
  templateUrl: './pexam.component.html',
  styleUrls: ['./pexam.component.css']
})
export class PexamComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  id:string;
  ngOnInit() {
    this.id=localStorage.getItem("id");
    this.getclass();
    this.getexam();
  }

  classid:string;
  type:string;
  fromdate:string;
  fee:number;
  class:any[]=[];
  getclass()
  {
    var url="https://sbic.in/app/dashboard/getclass";
    var input={"schoolid":this.id};
    this.obj.post(url,input).subscribe(response=>{
      this.class=response as string[];
    })
  }
  examlist:any[]=[];
  getexam()
  {
    var url="https://sbic.in/app/dashboard/getexam";
    var input={"schoolid":this.id};
    this.obj.post(url,input).subscribe(response=>{
      this.examlist=response as string[];
    })
  }
  save()
  {
    var url="https://sbic.in/app/dashboard/saveexam";
    var input={
      "schoolid":this.id,
      "classid":this.classid,
      "type":this.type,
      "fee":this.fee,
      "fromdate":this.fromdate
    };
    this.obj.post(url,input).subscribe(response=>{
      this.classid="";
      this.fee=0;
      this.fromdate="";
      this.type="";
      this.getexam(); // To Reload the Exam List.
    })
  }
}
