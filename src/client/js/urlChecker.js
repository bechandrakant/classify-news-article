function urlChecker(inputText) {
    console.log("::: Running checkForURL :::", inputText);

    // Regex matching
    const res = inputText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    
    if(res == null) {
        return false;
    }
    else
        return true;
}

export { urlChecker }