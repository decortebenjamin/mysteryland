
 document.addEventListener("deviceready", onDeviceReady, false);

 function onDeviceReady(){

	checkConnection();
    //	console.log(StatusBar);
    //  console.log(onBatteryStatus);
    devicecordova();

 }

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}
// --------------------------------------------------

function devicecordova(){
 
    var model = device.model; // affiche le model
    var string = device.platform; // affiche la plateforme
    var string1 = device.uuid; // affiche l'UUID
    var string2 = device.version; // affiche la version de la plateforme
  //  var string3 = navigator.globalization;    Marche pas 

    alert ('Model :'+ model+'\n'+'Platforme :'+'\n'+ string+' '+string2+'\n'+'UUID :'+ string1);
    alert(string3);

}


/*
 window.addEventListener("batterystatus", onBatteryStatus, false);
function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
}


 window.addEventListener("batterycritical", onBatteryCritical, false);
function onBatteryCritical(status) {
    alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
}*/