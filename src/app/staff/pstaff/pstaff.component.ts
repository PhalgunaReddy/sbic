import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pstaff',
  templateUrl: './pstaff.component.html',
  styleUrls: ['./pstaff.component.css']
})
export class PstaffComponent implements OnInit {

  constructor(private obj:HttpClient) { }
  id:string;
  ngOnInit() {
    this.id=localStorage.getItem("id");
    this.getemp();
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
    }
  }
  emplist:any[]=[];
  getemp()
  {
    var url="https://sbic.in/app/dashboard/getemp";
    var input={
      "schoolid":this.id
    };
    this.obj.post(url,input).subscribe(response=>{
      this.emplist=response as string[];
    })
  }

  name:string;
  email:string;
  mobile:number;
  dept:string;
  salary:number;
  doj:string;
  msg:string;
  saveemp()
  {
    var url="https://sbic.in/app/dashboard/saveemp";
    var input={
      "name":this.name,
      "email":this.email,
      "mobile":this.mobile,
      "dept":this.dept,
      "salary":this.salary,
      "doj":this.doj,
      "schoolid":this.id
    };
    this.obj.post(url,input).subscribe(response=>{
      this.getemp(); // To reload list
      this.showemp=true; // Hide input and show list
      this.name="";
      this.email="";
      this.mobile=0;
      this.dept="";
      this.salary=0;
      this.doj="";
      this.msg="Record Saved Successfully";
    })
  }

}
