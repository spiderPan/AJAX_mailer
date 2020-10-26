async function SendMail(targetForm) {
    // mail stuff goes here
    let formData = new FormData(targetForm);

    let result = await fetch(`./includes/${targetForm.getAttribute("action")}`, {
        method: targetForm.method,
        // could include headers here but they're breaking my Fetch call
        body: formData
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