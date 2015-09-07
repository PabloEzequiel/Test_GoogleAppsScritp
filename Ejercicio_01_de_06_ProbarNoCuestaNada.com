/**
 * Ejercicio del blog: "ProbarNoCuestaNada.com"
 *
 * http://www.probarnocuestanada.com/2015/07/primer-google-apps-scripts-standalone-envio-mail.html
 */
function myFunction() {
  
    MailApp.sendEmail(
      Session.getActiveUser().getEmail(),    // Tomar el correa de la persona que esta ejecutando el script.
      'Hola Mundo Action Script!',
      'Hola! Hice mi primer Script y ya estoy enviando un mail. ProbarNoCuestaNada.com');
}

