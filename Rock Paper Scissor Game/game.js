var player1=[];
var player2=[];
var player1result=[];
var player2result=[];
function butt1(name){
    player1.push(name)
}
function butt2(name){
    player2.push(name)
}
function playagain(){
    player1=[]
    player2=[]
    document.getElementById("player1").innerHTML=""
    document.getElementById("player2").innerHTML=""
}
function checkresult(){
    var pl1turns=player1.length;
    var pl2turns=player2.length;
    if(player1.length===0){
        return document.getElementById("ifnotplayed").innerHTML=`Please play first to find out result`
    }
    if(pl1turns<pl2turns){
        var remturns=pl2turns-pl1turns;
        return document.getElementById("ifnotplayed").innerHTML=`Player 1 has not played ${Math.abs(remturns)} turns`
    }
    else if(pl2turns<pl1turns){
        var remturns=pl2turns-pl1turns;
        return document.getElementById("ifnotplayed").innerHTML=`Player 2 has not played ${Math.abs(remturns)} turns`
    }
    else if(pl2turns===pl1turns){
        document.getElementById("ifnotplayed").innerHTML=""
    }
    var player1result=[];
    var player2result=[];
    for(var i=0;i<player1.length;i++){
        if(player1[i]===player2[i]){
            player1result.push("drawn")
            player2result.push("drawn")
        }
        if(player1[i]==="rock" & player2[i]==="scissor"){
            player1result.push("win")
            player2result.push("loose")
        }
        else if(player1[i]==="scissor" & player2[i]==="paper"){
            player1result.push("win")
            player2result.push("loose")
        }
        else if(player1[i]==="paper" & player2[i]==="rock"){
            player1result.push("win")
            player2result.push("loose")
        }
        if(player2[i]==="rock" & player1[i]==="scissor"){
            player2result.push("win")
            player1result.push("loose")
        }
        else if(player2[i]==="scissor" & player1[i]==="paper"){
            player2result.push("win")
            player1result.push("loose")
        }
        else if(player2[i]==="paper" & player1[i]==="rock"){
            player2result.push("win")
            player1result.push("loose")
        }
    }
    var pl1count=0;
    var pl2count=0;
    for(var i=0;i<player1result.length;i++){
        if(player1result[i]==="win"){
            pl1count=pl1count+1
        }
        if(player2result[i]==="win"){
            pl2count=pl2count+1
        }
    }
    if(pl1count===pl2count){
        document.getElementById("player1").innerHTML="Drawn"
        document.getElementById("player2").innerHTML="Drawn"
    }
    else if(pl1count>pl2count){
        document.getElementById("player1").innerHTML="Winner"
        document.getElementById("player2").innerHTML="Looser"
    }
    else if(pl1count<pl2count){
        document.getElementById("player1").innerHTML="Looser"
        document.getElementById("player2").innerHTML="Winner"
    }
    console.log(player1)
    console.log(player2)
    console.log(player1result)
    console.log(player2result)
    console.log(pl1count)
    console.log(pl2count)


}