import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pactivity',
  templateUrl: './pactivity.component.html',
  styleUrls: ['./pactivity.component.css']
})
export class PactivityComponent implements OnInit {

  constructor(private obj:HttpClient) { }
  id:string;
  ngOnInit() {
    this.id=localStorage.getItem("id");
    this.getactivity();
  }
  showemp:boolean=true;
  hideshow(status:string)
  {
    if(status=="new")
    {
      this.showemp=false;
    }else if(status=="list")
    {
      this.showemp=true;
      this.getactivity();
    }
  }
  activitylist:any[]=[];
  getactivity()
  {
    var url="https://sbic.in/app/dashboard/getactivity";
    var input={
      "schoolid":this.id
    };
    this.obj.post(url,input).subscribe(response=>{
      this.activitylist=response as string[];
    })
  }

  name:string;
  fromdate:string;
  todate:number;
  details:string;
  head:number;
  msg:string;
  saveactivity()
  {
    var url="https://sbic.in/app/dashboard/saveactivity";
    var input={
      "name":this.name,
      "email":this.fromdate,
      "mobile":this.todate,
      "dept":this.details,
      "salary":this.head,
      "schoolid":this.id
    };
    this.obj.post(url,input).subscribe(response=>{
      this.getactivity(); // To reload list
      this.showemp=true; // Hide input and show list
      this.name="";
      this.fromdate="";
      this.todate=0;
      this.details="";
      this.head=0;
      this.msg="Record Saved Successfully";
    })
  }

  color:any[]=[
    "primary",
    "danger",
    "info",
    "warning",
    "success",
    "default"
  ];

}
