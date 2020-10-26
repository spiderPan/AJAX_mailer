import { SendMail } from "./components/mailer.js";

(() => {
    let mailSubmit = document.querySelector('input[type=submit]');

    function processMailFailure(result) {
        // show a failure message in the UI
        console.table(result); // table shows us an object in table form
        alert('failure! and if you keep using an alert, DOUBLE failure!');

        // show some UI here to let the user know the mail attempt was successful
    }

    function processMailSuccess(result) {
        // show a success message in the UI
        console.table(result); // table shows us an object in table form
        alert("success! but don't EVER use alerts. They are gross.");

        // show some UI here to let the user know the mail attempt was successful
    }

    function processMail(event) {
        // block the default submit behaviour
        event.preventDefault();

        // use the SendMail component to try to process mail
        SendMail(this.parentNode)
            .then(data => processMailSuccess(data))
            .catch(err => processMailFailure(err));
    }

    mailSubmit.addEventListener("click", processMail);
})();