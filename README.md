# Simple-js-image-preview
Simple image preview

# Required
1. Jquery 1.12
1. Bootstrap 3

# Instalation
1. Include the Bootstrap css file into the header.
2. Include the css file into the header.
3. Include the Jqeury
4. Include the plugin.

# Usage

$(selector).previewInit(); -> initilaize with default options.

# Options
options = {
    name : "field_name", // name attribute of the input field that will be generated
    placeholder : "http://placehold.it/300x300" // default image that will be rendered
    errorMsg : "Something went wrong", // Error message after 
    errMsgTime : 3000 // Error visibility 
}
