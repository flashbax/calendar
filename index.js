window.onload = function() {

"use strict";

var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 


//create divs with IDs
var divMonth = document.createElement('div');
divMonth.setAttribute('id', 'month');
divMonth.innerHTML = monthName[0]; //Month Name
document.getElementById('body').appendChild(divMonth);
    

    (function numOfDays() { 
        monthName[0] = 30; //Number
    })();
    

    //make the div for days
    (function makeCal() { 

        //loop through and create 9 divs with ids
        for (var i = 0; i<=monthName[0]; i++) {  
            var divDay = document.createElement('div');     
            divDay.setAttribute('id', 'col'+i);
            //styles
            divDay.style.width = "100px";
            divDay.style.height = "100px";
            divDay.style.border = "1px solid #000000";
            //text in div (date)
            divDay.innerHTML = i+1;
            divDay.style.float = "left";
            

            if (i % 7 === 0) {
                divDay.style.float = "left"; 
                divDay.style.clear = "both";
            };

            //add divs as child of body tag
            document.getElementById('body').appendChild(divDay);
        };

    })();

    //make button style
    (function buttonNext() { 

        var button = document.createElement('button'); 
        button.setAttribute('id', 'next'); 
        
        document.getElementById('body').appendChild(button); 
        var elem = document.getElementById('next');
        elem.style.width = '100px';
        elem.style.height = '20px';
        elem.innerText = 'Next';
        elem.style.display = 'block';
        elem.style.clear = 'both';
 
    })();

    

   
}; //window load end


    