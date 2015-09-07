function onOpen() {
  SpreadsheetApp.getUi() // Tambien DocumentApp o FormApp.
  
      .createMenu('Mis Pruebas')
      .addItem('Saludar a Pedro',  'saludar')
      .addItem('Saludar al Grupo', 'saludarMuchasPersonas')
  
      .addItem('Ayuda',   'ayudaDialog')
      .addToUi();
}


function ayudaDialog() {
    var html = HtmlService.createHtmlOutputFromFile('ayuda')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  
  SpreadsheetApp.getUi() // Tambien DocumentApp o FormApp.
      .showModalDialog(html, 'Ayuda Hoja de Saludos');

}
