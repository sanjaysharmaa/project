
let imagebox = document.querySelector("#imagebox");
let qrimage = document.querySelector("#qrimage");
let text = document.querySelector("#qrtext");


function generateQR(){
    qrimage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" 
    + qrtext.value;
}
