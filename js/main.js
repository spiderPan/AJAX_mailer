// imports go here
import { SendMail } from "./components/mailer.js";

(() => {
    // stub
    let mailSubmit = document.querySelector('input[type=submit]');

    function processMailFailure(result) {
        debugger;
        // show a success message here (this can go inline if we want to condense our code a bit)
        console.table(result); // table shows us an object in table form

        // show some UI here to let the user know the mail attempt was successful
    }

    function processMailSuccess(result) {
        debugger;
        // show a success message here (this can go inline if we want to condense our code a bit)
        console.table(result); // table shows us an object in table form

        // show some UI here to let the user know the mail attempt was successful
    }

    function processMail(event) {
        debugger;
        // block the default submit behaviour
        event.preventDefault();

        // use the SendMail component to try to process mail
        SendMail(this.parentNode)
            .then(data => processMailSuccess(data))
            .catch(err => processMailFailure(err));
    }

    mailSubmit.addEventListener("click", processMail);
})();