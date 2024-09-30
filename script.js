"use strict";

function genQR() {
    var baseAPI = "https://api.qrserver.com/v1/create-qr-code/?";
    var mytext = document.getElementById("qrtext").value;
    var myimg = document.getElementById("img");
    var mysize = document.getElementById("size").value;

    if (mytext !== "") {
        // Build the correct URL with size and text
        myimg.src = `${baseAPI}size=${mysize}x${mysize}&data=${encodeURIComponent(mytext)}`;
    } else {
        alert("Please enter text to generate the QR code.");
    }
}
