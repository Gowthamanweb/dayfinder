var d=0, m, y, mc, yc;
var sum=0, q, r=0,i=0,sum1=0;
function find()
{
    d = document.getElementById("date").value;
    y = document.getElementById("year").value; 
    var a,b = y,c = 0;
    var i = 1;
	  while(i<=2) {
           a = Math.floor(b%10);
		   b = Math.floor(b/10);
		   c = c * 10 + a;
		   i++;
	  }
	   i = 1;
       a = 0;
	  while(i<=2) {
 		   a = Math.floor(c%10);
           c = Math.floor(c/10);
		   r = r*10+a;
		   i++;
	  }
    var dd = d/2;
        dd = dd*2;
	    sum1 = dd+ r;

        q = Math.floor(r/4);


        m = document.getElementById("month").value;


    var mo = m;
    
    
    if(mo == 1 || mo =="january" || mo == "JANUARY" || mo == "January"){
        mc = 1;
    }
    else if( mo == 2 || mo =="february" || mo =="FEBRUARY" || mo == "February"){
        mc = 4;
    }
    else if( mo == 3 || mo == "march" || mo =="MARCH" || mo == "March"){
        mc = 4;        
    }
    else if( mo == 4 || mo =="april" || mo =="APRIL" || mo == "April"){
        mc = 0;        
    }
    else if( mo == 5 || mo =="may" || mo =="MAY" || mo == "May"){
        mc = 2;        
    }
    else if( mo == 6 || mo=="june" || mo =="JUNE" || mo == "June"){
        mc = 5;        
    }
    else if( mo == 7 || mo =="july" || mo=="JULY" || mo == "July"){
        mc = 0;        
    }
    else if( mo == 8 || mo == "august" || mo == "AUGUST" || mo == "August"){
        mc = 3;        
    }
    else if( mo == 9 || mo == "september" || mo == "SEPTEMBER" || mo == "September"){
        mc = 6;        
    }
    else if( mo == 10 || mo == "october" || mo == "OCTOBER" || mo == "October"){
        mc = 1;        
    }
    else if( mo == 11 || mo == "november" || mo == "NOVEMBER" || mo == "November" ){
        mc = 4;        
    }
    else if( mo == 12 || mo == "december" || mo == "DECEMBER" || mo == "December"){
        mc = 6;        
    }
    else {
        window.alert("Enter the month correctly");
    }

    
	  if (1500 <= y && y <= 1599) {
		   yc = 0;
	  }
	  else if(1600 <= y && y <= 1699) {
		   yc = 6;
	  }
	  else if(1700 <= y && y <= 1799) {
		   yc =4;
	  }
	  else if(1800 <= y && y <= 1899) {
		   yc = 2;
	  }
	  else if(1900 <= y && y <= 1999) {
		  var yc = 0;
	  }
	  else if(2000 <= y && y <= 2099) {
		   yc = 6;
	  }
	  else if(2100 <= y && y <= 2199) {
		   yc = 4;
	  }
	  else if(2200 <= y && y <= 2299) {
		   yc = 2;
	  }
	  else if(2300 <= y && y <= 2399) {
		   yc = 0;
	  }
	  else {
		  window.alert("enter the year within a limit");
	  }

	   sum = sum1 + q + mc + yc;
    

	  

    var result =Math.floor(sum%7);
	  switch(result) {
	  case 0:
		  window.alert("It is a Saturday");
		  break;
	  case 1:
		  window.alert("It is a Sunday");
		  break;
	  case 2:
		  window.alert("It is a Monday");
		  break;
	  case 3:
		  window.alert("It is a Tuesday");
		  break;
	  case 4:
		  window.alert("It is a Wednesday");
		  break;
	  case 5:
		  window.alert("It is a Thursday");
		  break;
	  case 6:
		  window.alert("It is a Friday");
		  break;
	  default:
		  window.alert("Something went wrong");
		  
	  }
	
}
