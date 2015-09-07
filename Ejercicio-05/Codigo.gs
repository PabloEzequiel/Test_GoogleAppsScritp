function onFormSubmit(e) {

 // Marca temporal,	Equipo Rival, Fecha y Hora,	Lugar,	Estadio
 
  var tiempoRegistro     = e.values[0];
  
  var preg1_nombreRival  = e.values[1];
  var preg2_FechaYHOra   = e.values[2];
  var preg3_Lugar        = e.values[3];
  
  var mail = Session.getActiveUser().getEmail();    // Tomar el correa de la persona que esta ejecutando el script.
  
  GmailApp.sendEmail(mail, 
        "MAIL Formulario: Próximo partido: Racing - "+preg1_nombreRival, 
        "Información del Partido: Racing "
             + " vs " +preg1_nombreRival
             + "Lugar: " +preg3_Lugar );

}


function poblarCalendario() {

  var sheet = SpreadsheetApp.getActiveSheet();
  
  var startRow = 2; 
  var numRows  = 1;  
  
  var range = sheet.getRange(startRow, 1, numRows, 4);
  var data = range.getValues();
  
  var calendar = CalendarApp.getDefaultCalendar();
  
  for (i in data) {
  
    // COLUMNAS :  Marca temporal	- Equipo Rival	- Fecha y Hora -	Lugar
    
    var row    = data[i];
    
    var timeStamp  = row[0]; 
    var rival      = row[1]; 
    var fechaHora  = row[2];
    var lugar      = row[3];
    
    var  evento    = "Racing vs " + rival;

    calendar.createEvent(evento, 
        fechaHora,
        fechaHora, 
        {description:evento,location:lugar});
    
 }
}

