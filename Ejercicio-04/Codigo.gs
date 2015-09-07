function generarChart() {
 
  // https://docs.google.com/spreadsheet/tq?range=B3:F15&key=1eThwExQFk2ULt3Bef99GQHpt0PVlzAPssiYbMXy5rns&gid=0&headers=-1
  
  var dataSourceUrl = "https://docs.google.com/spreadsheet/tq?range=B3:F15"+
    "&key=1eThwExQFk2ULt3Bef99GQHpt0PVlzAPssiYbMXy5rns&gid=0&headers=-1";
  
  var chartBuilder = Charts.newBarChart()
    .setTitle('Presupuesto Familiar')
    .setXAxisTitle('Meses')
    .setYAxisTitle('Rubros')
    .setDimensions(900, 900)
    .setLegendPosition(Charts.Position.BOTTOM)
    .setDataSourceUrl(dataSourceUrl);

   
   var chart = chartBuilder.build();

      var email = Session.getActiveUser().getEmail();
   // var email = "mail_de_prueba@gmail.com";
  
    // Send the chart as an email attachment.
    GmailApp.sendEmail(email, 'Chart sobre Presupuesto Familiar',
      'Desde ProbarNoCuestaNada.com '
      +'enviamos un mail sobre el presupuesto familiar',      
      {attachments: [chart]});
      
 
 }
 
 
 /**
  * Version 2:
  * Variamos la forma de recuperar el rango de datos
  * Utilizamos DataTable y DataViewDefinition
  */
 function generarChart_V2() {
 
    var spreadsheet = SpreadsheetApp.getActive();
    var sheet = spreadsheet.getSheets()[0];
    var range = sheet.getRange('B3:F15');         // Rango 
    
    var data = range.getDataTable(true);
    var dataView = Charts.newDataViewDefinition()
      .setColumns([ 0, 1, 2, 3, 4 ])
      .build();

   var chart = Charts.newBarChart()
        .setDataTable(data)
        .setDataViewDefinition(dataView)
        .setTitle('Presupuesto Familiar V2')
        .build();

      var email = Session.getActiveUser().getEmail();
   // var email = "mail_de_prueba@gmail.com";
  
    // Send the chart as an email attachment.
    GmailApp.sendEmail(email, 'Chart sobre Presupuesto Familiar (v2)',
      'Desde ProbarNoCuestaNada.com '
      +'enviamos un mail sobre el presupuesto familiar - Version 2',      
      {attachments: [chart]});
 
 }
