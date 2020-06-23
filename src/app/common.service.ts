import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  
  constructor() {
   
  }
  type=["School","Transport","Activity","Exam","Other"];

  year=[2020,2019,2018,2017,2016,
                2015,2014,2013,2012,2011,
                2010,2009,2008,2007,2006,
                2005,2004,2003,2002,2001
              ];
  
  month=["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  paymonth=["April","May","June","July","August","September","October","November","December","January","February","March"];
  
  day = Array(31).fill(1).map((x,i)=>i);
  
  
}
