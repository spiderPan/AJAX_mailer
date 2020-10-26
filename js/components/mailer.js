async function SendMail(targetForm) {
    debugger;
    // mail stuff goes here
    let formData = new FormData(targetForm),
        mailData = {};

    // set up the mail data -> loop thru the iterable and populate the mailData object
    for (let [key, value] of formData.entries()) {
        mailData[key] = value;
    }


    let result = await fetch(`./includes/index.php`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            //'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(mailData)
    }).then(response => {
        debugger;
        if (response.status !== 200) {
            throw new Error(`Mail submission failed: ${response.status}`);
        }

        return response;
    })

    let mailStatus = await result.json();

    debugger;

    return mailStatus;
}

export { SendMail };