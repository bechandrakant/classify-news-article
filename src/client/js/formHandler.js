function handleSubmit(event) {
    event.preventDefault()

    // get url that was put into the form field
    let enteredUrl = getUrl('url')

    const isValidUrl = Client.urlChecker(enteredUrl)
    console.log(isValidUrl)

    if (isValidUrl) {
        // make json object out of entered url
        let url = makeJson(enteredUrl)

        // make a post request with entered url
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/classify', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(url),
        })
        .then(res => {
            return res.json()
        })
        // Update DOM with results
        .then((data) => {
            document.getElementById('category').innerHTML = data.category
            document.getElementById('text').innerHTML = data.text
        })
    } else {
        alert('Please enter a valid url')
    }
}

function getUrl(id) {
    return document.getElementById(id).value
}

export function makeJson(enteredUrl) {
    let res =  {
        'url': enteredUrl
    };
    return res;
}

export { handleSubmit }