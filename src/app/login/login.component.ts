import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private obj:HttpClient) { }

  ngOnInit() {
  }
  serverRes;
  msg:string;
  username:string;
  pass:string;
  error:boolean=false;
  gologin()
  {
    this.error=true;
     if((this.username=="") || (this.username==undefined) || (this.pass=="") || (this.pass==undefined))
     {
       this.msg = "Please enter login details !";
     }else{
	  //new 
	  this.msg = "Please Wait Processing ...";
	  var url = "https://sbic.in/usercheck.php";
	  var input = {
					"email": this.username,
					"pass": this.pass
				  }
	this.obj.post(url, input).subscribe(
		response=>{
			this.serverRes = response as string[];
			if(this.serverRes.schoolid==""){
				this.msg = "Invalid Or Not Exists !";	
			}else{
				this.msg = "Welcome , Redirecting...";
				localStorage.setItem("name", this.serverRes.name);
				localStorage.setItem("id", this.serverRes.schoolid);
				window.location.href="#/dashboard";
				window.location.reload();
			}
		});	
	  
     }
  }

}
