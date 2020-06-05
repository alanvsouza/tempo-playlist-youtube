var tempo = document.querySelectorAll('ytd-playlist-video-renderer.style-scope.ytd-playlist-video-list-renderer span.style-scope.ytd-thumbnail-overlay-time-status-renderer');

var horas_total = 0;
var minutos_total = 0;
var segundos_total = 0;

for(var i = 0; i < tempo.length; i++){    
    var time = tempo[i].innerHTML.split(':');               
    
    if(time.length == 2){                       
        minutos_total += parseInt(time[0]);
        segundos_total += parseInt(time[1]);
    } else if(time.length == 3){        
        horas_total += parseInt(time[0]);
        minutos_total += parseInt(time[1]);
        segundos_total += parseInt(time[2]);
    }                
}

minutos_total += Math.floor(segundos_total / 60);
horas_total += Math.floor(minutos_total / 60);

segundos_total -= Math.floor(segundos_total / 60)*60;
minutos_total -= Math.floor(minutos_total / 60)*60;

string_tempo_total = "";

if(horas_total < 10){
    string_tempo_total += "0" + horas_total + ":";
} else {
    string_tempo_total += horas_total + ":";
}
if(minutos_total < 10){
    string_tempo_total += "0" + minutos_total + ":";
} else {
    string_tempo_total += minutos_total + ":";
}
if(segundos_total < 10){
    string_tempo_total += "0" + segundos_total;
} else {
    string_tempo_total += segundos_total;
}

console.log(string_tempo_total);
