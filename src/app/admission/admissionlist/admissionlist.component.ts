import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../common.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admissionlist',
  templateUrl: './admissionlist.component.html',
  styleUrls: ['./admissionlist.component.css']
})
export class AdmissionlistComponent implements OnInit {
  year:any[]=[];
  month:any[]=[];
  day:any[]=[];
  searchkey:string;
  p:number=1;
  constructor(private obj:HttpClient,private sobj:CommonService) { }

 id:string;
  ngOnInit() {
	this.id = localStorage.getItem("id");
    this.year=this.sobj.year;
    this.month = this.sobj.month;
    this.day = this.sobj.day;
    this.getclass();
  }

  classlist:any[]=[];
  section:any[]=[];
  getclass()
  {
	  var url ="https://sbic.in/app/dashboard/getclass";
	  var input = {"schoolid":this.id};
	  this.obj.post(url,input).subscribe(
	    response=>{
			this.classlist=response as string[];
		});
  }
  
  getsection(classid:string)
  {
	   var url ="https://sbic.in/app/dashboard/getsection";
	   var input = {"schoolid":this.id, "classid":classid};
	   this.obj.post(url,input).subscribe(
	    response=>{
			this.section=response as string[];
		});
  }

  student:any[]=[];
  showloder:boolean=false;
  showtable:boolean=true;
  search(y:string=null, c:string=null, sec:string=null)
  {
	   this.student=[];
	   this.showloder=true;
	   this.showtable = true;
	   var url ="https://sbic.in/app/dashboard/getstudent";
	   var input = {"schoolid":this.id, "year":y, "month":"", "classid":c, "sectionid":sec,"studentid":"", "mobile":""};
	   this.obj.post(url,input).subscribe(
	    response=>{
			this.student=response as string[];
			this.showloder=false;
			if(this.student.length>0)
			{
				this.showtable = false;
			}else{
				this.showtable = true;
			}
		});
  }
}
