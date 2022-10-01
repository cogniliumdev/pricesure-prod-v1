function truncateText(text, maxLength) {
    var ret = text;
    if (ret.length > maxLength) {
        ret = ret.substr(0, maxLength - 3) + "…";
    }
    return ret;
}


export { truncateText };