async function SendMail(targetForm) {
    // mail stuff goes here
    let formData = new FormData(targetForm);

    let result = await fetch(`./includes/${targetForm.getAttribute("action")}`, {
        method: targetForm.method,
        headers: {
            "Content-type":"application/x-www-form-urlencoded"
        },
        // could include headers here but they're breaking my Fetch call
        body: formData
    }).then(response => {
        if (response.status !== 200) {
            throw new Error(`Mail submission failed: ${response.status}`);

            // could examine status code here and return it as part of an error object to the .catch
            // handler in the SendMail thenable chain in main.js
        }

        return response;
    })

    let mailStatus = await result.json();

    return mailStatus;
}

export { SendMail };