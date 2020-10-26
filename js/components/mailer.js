async function SendMail(targetForm) {
    debugger;
    // mail stuff goes here
    let mailData = new FormData(targetForm);

    let result = await fetch(`./includes/${targetForm.getAttribute('action')}`, {
        method: "POST",
        body: mailData
    }).then(response => {
        if (response.status !== 200) {
            throw new Error(`Mail submission failed: ${response.status}`);
        }

        return response;
    })

    let mailStatus = await result.json();

    return mailStatus;
}

export { SendMail };