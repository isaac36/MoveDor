animateScript_mulher();
var tID_mulher;

function stopAnimate_mulher() {
clearInterval(tID_mulher);
} 

function animateScript_mulher() {


var    position_mulher = 100; 
const  interval_mulher = 100; 
const  diff_mulher = 100;

tID_mulher = setInterval ( () => {
    document.getElementById("mulher").style.backgroundPosition = 
`-${position_mulher}px 0px`; 

if (position_mulher < 5400)
{ position_mulher = position_mulher + diff_mulher;}

else
{ position_mulher = 100; }

}
, interval_mulher );

}


animateScript_velha();
var tID_velha;

function stopAnimate_velha() {
clearInterval(tID_velha);
} 

function animateScript_velha() {


var    position_velha = 50; 
const  interval_velha = 50; 
const  diff_velha = 50;

tID_velha = setInterval ( () => {
    document.getElementById("velha").style.backgroundPosition = 
`-${position_velha}px 0px`; 

if (position_velha < 1500)
{ position_velha = position_velha + diff_velha;}

else
{ position_velha = 50; }

}
, interval_velha );

}





animateScript_garoto();
var tID_garoto;

function stopAnimate_garoto() {
clearInterval(tID_garoto);
} 

function animateScript_garoto() {


var    position_garoto = 42; 
const  interval_garoto = 25; 
const  diff_garoto = 42;

tID_garoto = setInterval ( () => {
    document.getElementById("garoto").style.backgroundPosition = 
`-${position_garoto}px 0px`; 

if (position_garoto < 1050)
{ position_garoto = position_garoto + diff_garoto;}

else
{ position_garoto = 42; }

}
, interval_garoto );

}


animateScript_cruz();
var tID_cruz;

function stopAnimate_cruz() {
clearInterval(tID_cruz);
} 

function animateScript_cruz() {


    var    position_cruz = 33; 
    const  interval_cruz = 150; 
    const  diff_cruz = 33;
    
    tID_cruz = setInterval ( () => {
        document.getElementById("cruz").style.backgroundPosition = 
    `-${position_cruz}px 0px`; 
    
    if (position_cruz < 325)
    { position_cruz = position_cruz + diff_cruz;}
    
    else
    { position_cruz = 198; }
    
    }
    , interval_cruz );
    
    }
    

    
animateScript_seta();
var tID_seta;

function stopAnimate_seta() {
clearInterval(tID_seta);
} 

function animateScript_seta() {


    var    position_seta = 52; 
    const  interval_seta = 100; 
    const  diff_seta = 52;
    
    tID_seta = setInterval ( () => {
        document.getElementById("seta").style.backgroundPosition = 
    `-${position_seta}px 0px`; 
    
    if (position_seta <1040)
    { position_seta = position_seta + diff_seta;}
    
    else
    { position_seta = 52; }
    
    }
    , interval_seta );
    
    }
    



       
animateScript_corredor();
var tID_seta;

function stopAnimate_corredor() {
clearInterval(tID_corredor);
} 

function animateScript_corredor() {


    var    position_corredor = 58; 
    const  interval_corredor = 100; 
    const  diff_corredor = 58;
    
    tID_corredor = setInterval ( () => {
        document.getElementById("corredor").style.backgroundPosition = 
    `-${position_corredor}px 0px`; 
    
    if (position_corredor <1740)
    { position_corredor = position_corredor + diff_corredor;}
    
    else
    { position_corredor = 58; }
    
    }
    , interval_corredor );
    
    }