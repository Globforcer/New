// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


// Write your JavaScript code.
$(document).ready(function () {
    $("a").tooltip();

});

function displayTerms() {
    $("#modal-1").modal();
}

function acceptTermsAndConditions() {

    setTermsAcceptStatus("true");
    displayReport();
}

function setTermsAcceptStatus(status) {
    localStorage.setItem("TermsAndConditionsAccepted", "true");
}
function getTermsAcceptStatus() {
    var status = localStorage.getItem("TermsAndConditionsAccepted");
    return status;
}

function clearTermsAcceptStatus() {
    localStorage.setItem("TermsAndConditionsAccepted", "false");
}

