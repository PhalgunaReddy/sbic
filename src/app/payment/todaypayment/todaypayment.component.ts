import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-todaypayment',
  templateUrl: './todaypayment.component.html',
  styleUrls: ['./todaypayment.component.css']
})
export class TodaypaymentComponent implements OnInit {

  constructor(private obj:HttpClient) { }
  id:string;
  ngOnInit() {
	  this.id = localStorage.getItem("id");
	 this.todaypayment();
  }
  searchkey:string;
  p:number=1;
  paymentlist:any[]=[];
  totalfee:number=0;
  todaypayment()
  {
	  var url ="https://sbic.in/app/dashboard/gettodaypayment";
	  var input = {"schoolid":this.id};
	  this.obj.post(url,input).subscribe(
	    response=>{
			this.paymentlist=response as string[];
			this.gettotal();
		});
  }
  
  gettotal()
  {
	  for(var i=0; i<this.paymentlist.length; i++)
	  {
		  var a = this.paymentlist[i].tolfee;
		  this.totalfee = this.totalfee + parseInt(a);
	  }
  }

}
