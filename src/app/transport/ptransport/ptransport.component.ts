import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ptransport',
  templateUrl: './ptransport.component.html',
  styleUrls: ['./ptransport.component.css']
})
export class PtransportComponent implements OnInit {

  constructor(private obj:HttpClient) { }
  id:string;
  ngOnInit() {
	  this.id = localStorage.getItem("id");
	  this.gettransport();
  }
  
  msg:string;
  serverdata;
  tnumber:string;
  troot:string;
  tsize:string;
  tdname:string;
  tdmobile:string;
  save()
  {	
	
		var url ="https://sbic.in/app/dashboard/savetransport";
		var input = {
                  "schoolid":this.id,
                  "vannumber":this.tnumber,
                  "rootname":this.troot,
                  "type":this.tsize,
                  "drivermobile":this.tdmobile,
                  "drivername":this.tdname
                };
		this.obj.post(url,input).subscribe(
	    response=>{
			this.serverdata = response as string[];
			this.msg = this.serverdata.status;
			this.gettransport();
			  this.tnumber="";
			  this.troot="";
			  this.tsize = "";
			  this.tdname ="";
			  this.tdmobile="";
		});
	
  }
  
  transport:any[]=[];
  searchkey:string;
  gettransport()
  {
	  var url ="https://sbic.in/app/dashboard/gettransport";
	  var input = {"schoolid":this.id};
	  this.obj.post(url,input).subscribe(
	    response=>{
			this.transport=response as string[];
		});
  }
  
  rootname:string;
  tid:string;
  rootmaster:any[]=[];
  getrootmaster(tid:string,rootname:string)
  {
	  this.rootname = rootname;
	  this.rootmsg="";
	  this.tid = tid;
	  var url ="https://sbic.in/app/dashboard/getrootmaster";
	  var input = {"tid":tid, "schoolid":""};
	  this.obj.post(url,input).subscribe(
	    response=>{
			this.rootmaster=response as string[];
		});
  }
  
  rname:string;
  cost:string;
  froml:string;
  to:string;
  rootmsg:string;
  saveroot()
  {
	  var url ="https://sbic.in/app/dashboard/saverootmaster";
	  var input = {
					"tid":this.tid,
					"rname":this.rname,
					"cost":this.cost,
					"froml":this.froml,
					"schoolid":this.id,
					"to":this.to
				  };
	  this.obj.post(url,input).subscribe(
	    response=>{
			this.serverdata = response as string[];
			this.rootmsg = this.serverdata.status;
			this.getrootmaster(this.tid,this.rootname);
			this.rname="";
			this.cost="";
			this.froml="";
			this.to="";
		});
  }

}
