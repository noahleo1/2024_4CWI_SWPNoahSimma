function loadMatches(){
    fetch("https://api.openligadb.de/getmatchdata/bl1/2023/1").
    then((res) =>res.json().then((result) => {
        insertMatches1(result);
    })
    );
}


function insertMatches1(data){
    
    console.log(data);
   
    const element= document.getElementById("matches1");
   
    console.log("data",data);
   
    
   

    let output = '';
    data.forEach(match  =>  {
         output += '<div class="Matches1" id="matches">'
        
          
          output +='<div class="Item"><img width="45px" src="' + match.team1.teamIconUrl + '"/>'+ match.matchResults[1].pointsTeam1 +  ' ---   VS ---   ' +  match.matchResults[1].pointsTeam2+           '<img width="45px" src="' + match.team2.teamIconUrl + '"/></div>'
        

        
    });

    element.innerHTML = output;
}

    

 loadMatches();
 