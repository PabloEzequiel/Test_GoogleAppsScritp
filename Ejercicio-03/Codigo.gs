function encuestaTorneoDeportivoForm() {

  // Creamos un Formulario
  var form = FormApp.create('Ejercicio Nro 3');
  
  form.setTitle('Encuesta Dia de Actividades Deportivas');

  var item = form.addCheckboxItem();
  item.setTitle('¿Que deportes te gustan?');
  item.setChoiceValues(
      ['Futbol', 
       'Ajedrez', 
       'Basquet',
       'Natacion',
       'Ping Pong']);
       
       
  form.addMultipleChoiceItem()
    .setTitle('¿Que día preferís la actividad?')
    .setChoiceValues(['Jueves 23','Viernes 24', 'Sabado 25'])
    .showOtherOption(true);

   // var mailTo = Session.getActiveUser().getEmail();
   
   var arrayMails = getMails_from_Rango();
   
   for (j in arrayMails) {
   
       var mailTo = arrayMails[j];
       MailApp.sendEmail( mailTo, 'Por favor, completar la siguiente encuesta', form.getPublishedUrl());
       
       Logger.log('mailTo: %s',mailTo);
   
   }
}


function getMails_from_Rango() {

//  var spreadsheet = SpreadsheetApp.getActive();
//  var sheet = spreadsheet.getSheets()[0];
//  var range = sheet.getRange('B2:B4');         // Rango 

  var spreadsheet = SpreadsheetApp.getActive();
  var range = spreadsheet.getRangeByName('listaMailUsuarios');  // Rango Nombrado
  
  var mails = range.getValues();
  
  Logger.log('');
  Logger.log('m1: %s',mails[0]);
  Logger.log('m2: %s',mails[1]);
  Logger.log('m3: %s',mails[2]);
  
  return mails;
}


