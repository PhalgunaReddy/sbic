import { Component, OnInit } from '@angular/core';
import {CommonService} from './../../common.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pfinance',
  templateUrl: './pfinance.component.html',
  styleUrls: ['./pfinance.component.css']
})
export class PfinanceComponent implements OnInit {

  constructor(private obj:CommonService,private httpobj:HttpClient) { }
  year:any[]=[];
  class:any[]=[];
  type:any[]=[];
  id:string;
  ngOnInit() {
    this.id=localStorage.getItem("id");
    this.year=this.obj.year;
    this.type=this.obj.type;
    this.getclass();
  }

  getclass()
  {
	  var url ="https://sbic.in/app/dashboard/getclass";
	  var input = {"schoolid":this.id};
	  this.httpobj.post(url,input).subscribe(
	    response=>{
			this.class=response as string[];
		});
  }
  datalist:any[]=[];
  search(year:string,classtype:string,type:string)
  {
    var input={
      "schoolid":this.id,
      "year":year,
      "classid":classtype,
      "type":type
    }
    var url="https://sbic.in/app/dashboard/getfinance";
    this.httpobj.post(url,input).subscribe(response=>{
      this.datalist=response as string[];
      this.total=0; // so that old value will be replaced
      this.gettotal();
    });
  }
  total:number=0;
  gettotal()
  {
    for(var i=0;i<this.datalist.length;i++)
    {
      this.total=this.total+parseInt(this.datalist[i].tolfee);
    }
  }
}
