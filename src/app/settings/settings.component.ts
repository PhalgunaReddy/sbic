import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private obj:HttpClient) { }

   id:string;
  ngOnInit() {
	this.id = localStorage.getItem("id");
	  this.getclass();
  }

  classlist:any[]=[];
 getclass()
  {
	  var url ="https://sbic.in/app/dashboard/getclass";
	  var input = {"schoolid":this.id};
	  this.obj.post(url,input).subscribe(
	    response=>{
			this.classlist=response as string[];
		});
  }
  
  section:any[]=[];
  classname:string;
  newclassname:string;
  classfee:number;
  newsecname:string;
  classid:string;
  getsection(classid:string, classname:string)
  {
	   this.section = [];
	   this.classid = classid;
	   this.classname = classname;
	   var url ="https://sbic.in/app/dashboard/getsection";
	   var input = {"schoolid":this.id, "classid":classid};
	   this.obj.post(url,input).subscribe(
	    response=>{
			this.section=response as string[];
		});
  }
  classmsg:string;
  saveclass()
  {
	   var url ="https://sbic.in/app/dashboard/saveclass";
	   var input = {"schoolid":this.id, "classname":this.newclassname, "classfee":this.classfee};
	   this.obj.post(url,input).subscribe(
	    response=>{
			this.classmsg = "Save Successfully !";
			this.newclassname="";
			this.classfee=0;
			this.getclass();
		});
  }
  
  
  secmsg:string;
  savesection()
  {
	   var url ="https://sbic.in/app/dashboard/savesection";
	   var input = {"classid":this.classid, "secname":this.newsecname};
	   this.obj.post(url,input).subscribe(
	    response=>{
			this.classmsg = "Save Successfully !";
			this.newsecname="";
			this.getsection(this.classid,this.classname);
		});
  }

}
