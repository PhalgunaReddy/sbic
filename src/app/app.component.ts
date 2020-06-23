import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	userlogin:boolean = false;
	userid:string;
  constructor(){
		
  } 
	 
  ngOnInit() {
		this.userid = localStorage.getItem("id");
	 if( (this.userid!=null) && (this.userid !=""))
	 {
      this.userlogin = true;
	 }

  }
  
 
  
  
} //class end here
