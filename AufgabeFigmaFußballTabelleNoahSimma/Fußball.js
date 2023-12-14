function loadTable(){
    fetch("https://api.openligadb.de/getbltable/bl1/2023").
    then((res) =>res.json().then((result) => {
        insertTable(result);
    })
    );
}


function insertTable(data){
    
    console.log("data",data);
   
    const element = document.getElementById("maintable");
   

    let output = '';
    data.forEach(team => {
         output += '<div id="table" class="flex p-4 gap-9">'
        
      
        output +='<div>' +"points:  "+team.points+  '</div>'
        output +='<div>' + team.teamName+ '</div>'
        
        output +='<div><img width="40px" src="' + team.teamIconUrl + '"/></div>'
        output += '</div>';
    });
    
        element.innerHTML = output;
       
    
}

const data= loadTable();