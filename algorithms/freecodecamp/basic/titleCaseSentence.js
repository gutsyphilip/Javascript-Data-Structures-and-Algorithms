function totitleCase(text) {
    let convertToArray = text.toLowerCase().split('');
    let result = convertToArray.map(function (val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
}