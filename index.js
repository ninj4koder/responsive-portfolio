function placeEmail() {

    // This function puts my email in the SPAN element after loading a webpage,
    // so it won't be picked by any web crawlers

    $("span.js-place-email").html('<a href="mailto:robbocik@gmail.com">email me</a>');
}

$(placeEmail);