import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../common.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ppayment',
  templateUrl: './ppayment.component.html',
  styleUrls: ['./ppayment.component.css']
})
export class PpaymentComponent implements OnInit {
  year:any[]=[];
  month:any[]=[];
  paymonth:any[]=[];
  day:any[]=[];
  searchkey:string;
  p:number=1;
  btnshow:boolean=false;
  constructor(private obj:HttpClient,private sobj:CommonService) { 

  }
  
   id:string;
  ngOnInit() {
	  this.id = localStorage.getItem("id");
    this.year=this.sobj.year;
    this.month = this.sobj.month;
    
    this.day = this.sobj.day;
    this.getclass();
	this.getrootmaster();
	this.getallstudent();
  }

  classlist:any[]=[];
  section:any[]=[];
  getclass()
  {
	  var url ="https://sbic.in/app/dashboard/getclass";
	  //var url ="http://localhost/codeapp/dashboard/getclass";
	  var input = {"schoolid":this.id};
	  this.obj.post(url,input).subscribe(
	    response=>{
			this.classlist=response as string[];
		});
  }
  
  allstudent:any[]=[];
  getallstudent()
  {
	  var url ="https://sbic.in/app/dashboard/getallstudent";
	  var input = {"schoolid":this.id};
	  this.obj.post(url,input).subscribe(
	    response=>{
			this.allstudent=response as string[];
		});
  }
  
  getsection(classid:string)
  {
	   var url ="https://sbic.in/app/dashboard/getsection";
	   //var url ="http://localhost/codeapp/dashboard/getsection";
	   var input = {"schoolid":this.id, "classid":classid};
	   this.obj.post(url,input).subscribe(
	    response=>{
			this.section=response as string[];
		});
  }

  student:any[]=[];
  showloder:boolean=false;
  showtable:boolean=true;
  mobile:string=null;
  studentid:string=null;
  search(y:string=null, m:string=null, c:string=null, sec:string=null,due:string=null)
  {
	   this.allmobile="";
	   this.student=[];
	   this.showloder=true;
	   this.showtable = true;
	   var url ="https://sbic.in/app/dashboard/getstudent";
	   //var url ="http://localhost/codeapp/dashboard/getstudent";
	   var input = {"schoolid":this.id, "year":y, "month":m, "classid":c, "sectionid":sec, "studentid":this.studentid, "mobile":this.mobile, "duests":due};
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
  payname:string;
  payid:string;
  payyear:string;
  classfee:number=0;
  feeformonth:number=0;
  totschoolfee:number=0;
  totaltcost:number=0;
  payableAmount:number=0;
  transportMonth:number=0;
  transportRoot:number = 0;
  mobile1:string;
  messages:any[]=[];
  oldpaysts:boolean=false;
  transportpaysts:boolean=false;
  oldtransportpay:any[]=[];
  setpay(studentid ,studentname, year, classfee,mobile)
  {
	 this.oldpaysts=false;
	 this.transportpaysts=false;
	 this.paymonth=[];
	 this.messages=[];
	 this.paymsg="";
	 this.payid="";
	 this.totaltcost=0;
	 this.transportMonth=0;
	 this.transportRoot=0;
	 this.totschoolfee=0;
	 this.selectedmonth=[];
	 this.payableAmount=0;
	 this.selectedmonth = [];
	 
	 this.payname = studentname;
	 this.payid = studentid;
	 this.payyear = year;
	 this.classfee=classfee;
	 this.mobile1=mobile;
	    var input = {
					"studentid":this.payid,
					"schoolid":this.id,
					"year":this.payyear
				  };
		var url ="https://sbic.in/app/dashboard/getoldpay";
	    this.obj.post(url,input).subscribe(response=>{
				this.messages = response as string[];
				if(this.messages.length>0)
				{
					this.oldpaysts=true;
				}
				this.paymonth = this.sobj.paymonth;
				this.paymonth = this.arr_diff(this.messages, this.paymonth);
				});
				
		var url ="https://sbic.in/app/dashboard/getoldtransportpay";
	    this.obj.post(url,input).subscribe(response=>{
				this.oldtransportpay = response as string[];
				if(this.oldtransportpay.length>0)
				{
					this.transportpaysts=true;
				}
				});		
				
				
				
  }
  
    selectedmonth = [];
   

  // check if the item are selected
  checked(item){
    if(this.selectedmonth.indexOf(item) != -1){
      return true;
    }
  }
  
  // when checkbox change, add/remove the item from the array
  onChange(checked, item){
    if(checked){
    this.selectedmonth.push(item);
    } else {
      this.selectedmonth.splice(this.selectedmonth.indexOf(item), 1)
    }
	this.totschoolfee = this.selectedmonth.length * this.classfee;
	this.payableAmount = this.totschoolfee + this.totaltcost;
	if(this.selectedmonth.length>0){
		this.btnshow = true;
	}else{
		this.btnshow = false;
	}
  }
  
  
  gettcost(tindex:number,formonth:number)
  {
	  this.transportMonth = formonth;
	  this.transportRoot = this.rootmaster[tindex].rootid;
	  this.totaltcost = this.rootmaster[tindex].cost * formonth;
	  this.payableAmount = this.totschoolfee + this.totaltcost;

	  if(this.transportMonth>=1){
		this.btnshow = true;
	}else{
		this.btnshow = false;
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
  
  
  paymsg:string;
  payfee()
  {
	  var input = {
					"studentid":this.payid,
					"rootid":this.transportRoot,
					"transportmonth":this.transportMonth,
					"totaltcost":this.totaltcost,
					"schoolfeemonth":this.selectedmonth,
					"totalschoolfee":this.totschoolfee,
					"totalamount":this.payableAmount,
					"year":this.payyear,
					"schoolid":this.id,
					"mobile":this.mobile1
				  };
		var url ="https://sbic.in/app/dashboard/savepayment";
		//var url ="http://localhost/codeapp/dashboard/savepayment";
	   this.obj.post(url,input).subscribe(
	    response=>{
			this.paymsg = "Payment Successfully !";
			this.payid="";
			 this.totaltcost=0;
			 this.transportMonth=0;
			 this.transportRoot=0;
			 this.totschoolfee=0;
			 this.selectedmonth=[];
			 this.payableAmount=0;
			 this.selectedmonth = [];
		});
  }
  
  allmobile:string="";
  sts:boolean=true;
  isShow = true;
  toggleDisplay()
  {
	  this.isShow = !this.isShow;
	 this.allmobile="";
	 for(var i=0; i<this.student.length; i++)
	 {
		 this.allmobile = this.allmobile + this.student[i].mobile + " , ";
	 }		 
  }
  
  arr_diff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}

}
