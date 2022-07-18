

function validate() {
    let x = document.getElementById("password");
    let y = document.getElementById("confirm-password");
    if (x.value === y.value) {
        return true;
    } else {
        alert ("Your passwords do not match");
        return false;
    }
}