const generate = document.getElementById("generate");
const clear = document.getElementById("clear");
const display = document.getElementById("display");

generate.onclick = function () {

    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    generated = password;
    display.textContent = generated;
}

clear.onclick = function () {
    display.textContent = "";
}
const copy = document.getElementById("copy");
copy.onclick = function () {
    navigator.clipboard.writeText(generated).then(() => {
        console.log("Password copied to clipboard");
    }).catch(err => {
        console.error("Error copying password: ", err);
    });
}