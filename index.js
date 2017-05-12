window.onload = function() {
    

    //make the divs
    function makeDays() { 
        //loop through and create 9 divs with ids
        for (var i = 0; i<=30; i++) {  
            var divDay = document.createElement('div');     
            divDay.setAttribute('id', 'col'+i);
            //styles
            divDay.style.width = "100px";
            divDay.style.height = "100px";
            divDay.style.border = "1px solid #000000";
            //text in div (date)
            divDay.innerHTML = i+1;

            //add divs as child of body tag
            document.getElementById('body').appendChild(divDay);
        };

    };

    
    
    //init functions
    makeDays();
}; //window load end


    