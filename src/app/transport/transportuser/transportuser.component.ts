import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../common.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-transportuser',
  templateUrl: './transportuser.component.html',
  styleUrls: ['./transportuser.component.css']
})
export class TransportuserComponent implements OnInit {
   year:any[]=[];
  month:any[]=[];
  day:any[]=[];
  searchkey:string;
  p:number=1;
  id:string;
  constructor(private obj:HttpClient,private sobj:CommonService) { }

  ngOnInit() {
	  this.id = localStorage.getItem("id");
    this.year=this.sobj.year;
    this.month = this.sobj.month;
    this.getclass();
	this.getrootmaster();
	this.search(null,null,null,null);
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
  totalfee:number=0;
  search(y:string=null, c:string=null, sec:string=null, rootmasterid:number)
  {
	   this.student=[];
	   this.showloder=true;
	   this.showtable = true;
	   var url ="https://sbic.in/app/dashboard/gettransportuser";
	   var input = {"schoolid":this.id, "year":y, "month":"", "classid":c, "sectionid":sec,"rootid":rootmasterid};
	   this.obj.post(url,input).subscribe(
	    response=>{
			this.student=response as string[];
			this.totalfee=0;
			this.gettotal();
			this.showloder=false;
			if(this.student.length>0)
			{
				this.showtable = false;
			}else{
				this.showtable = true;
			}
		});
  }
  
  gettotal()
  {
	  for(var i=0; i<this.student.length; i++)
	  {
		  var a = this.student[i].tolfee;
		  this.totalfee = this.totalfee + parseInt(a);
	  }
  }
  
  rootmaster:any[]=[];
  getrootmaster()
  {
	  var url ="https://sbic.in/app/dashboard/getrootmaster";
	  //var url ="http://localhost/codeapp/dashboard/getrootmaster";
	  var input = {"tid":"", "schoolid":this.id};
	  this.obj.post(url,input).subscribe(
	    response=>{
			this.rootmaster=response as string[];
		});
  }

}
