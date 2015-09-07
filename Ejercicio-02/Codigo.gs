function saludar() {
  saludarPersona("Pedro")
}

function saludarPersona(nombre) {
  
  Browser.msgBox('Hola ' + nombre + "!");
  
  Logger.log("Saludamos a ["+nombre+"] a las " + Utilities.formatDate(new Date(), "GMT-03", "HH:mm:ss"));
  
}

function saludarMuchasPersonas() {
  
  var personas = ["Pablo", "Javier", "Lucas"];
  
  for (var i in personas) {
      
    var h = personas[i];
  
    saludarPersona(h);
  }
}
