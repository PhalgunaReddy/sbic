import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from './../../common.service';
@Component({
  selector: 'app-newadmission',
  templateUrl: './newadmission.component.html',
  styleUrls: ['./newadmission.component.css']
})
export class NewadmissionComponent implements OnInit {
  
  registerForm: FormGroup;
  submitted = false;
  year:any[]=[];
  month:any[]=[];
  day:any[]=[];
  id:string;
  constructor(private obj:HttpClient,private formBuilder: FormBuilder, private sobj:CommonService) { 
  this.id = localStorage.getItem("id");
  this.msg = localStorage.getItem("msg");
  setInterval(() => {
	  this.msg = "";
	  localStorage.setItem("msg", "");
	}, 20000);
  }
  
  
  ngOnInit() {
	  
    this.getclass();
    this.year=this.sobj.year;
    this.month = this.sobj.month;
    this.day = this.sobj.day;
    
	  this.registerForm = this.formBuilder.group({
      sname: ['', Validators.required],
      classid: ['', Validators.required],
	  fname: ['', Validators.required],
	  mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
	  session: ['', Validators.required],
      section: ['',],
      oldschool: ['', ],
      mname: ['', ],
      adhar: ['', ],
      focc: ['', ],
      religion: ['', ],
      caste: ['', ],
      address: ['', Validators.required],
      idproof: ['', ],
      schoolid: ['',],
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
	  aday: ['', Validators.required],
      amonth: ['', Validators.required],
      ayear: ['', Validators.required]
  });
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
  msg:string;
  serverdata;
  save()
  {	
	 this.submitted = true;
     if (this.registerForm.invalid) {
         return;
     }else{
		var url ="https://sbic.in/app/dashboard/register";
		var input = JSON.stringify(this.registerForm.value);
		this.obj.post(url,input).subscribe(
	    response=>{
			this.serverdata = response as string[];
			localStorage.setItem("msg", this.serverdata.status);
			this.msg = this.serverdata.status;
			//this.registerForm.reset();
			window.location.reload();
		});
	 }
  }

}
