// navlink click sound
let links=document.getElementsByClassName("mouseclick");
let audio=new Audio('click.wav');
Array.from(links).forEach(function(element){
    // console.log(element);
    element.addEventListener("click",()=>{
        audio.play();
        
    })
    
})

let username=document.getElementById("username");
let namelabel=document.querySelector(".namelabel");
username.addEventListener("blur",()=>{
    if(username.value){
        namelabel.style.transform="translate(0,-20px) scale(.8)";
    }
})

let mail=document.getElementById("mail");
let maillabel=document.querySelector(".mail_label");
mail.addEventListener("blur",()=>{
    if(mail.value){
        maillabel.style.transform="translate(0,-20px) scale(.8)";
    }
})

let message=document.getElementById("message");
let message_label=document.querySelector(".text_area_label");
message.addEventListener("blur",()=>{
    if(message.value){
        message_label.style.transform="translate(0,-20px) scale(.8)";
    }
})


// username
let usernamevalidate = document.getElementById("username");
let validusername = false;
username.addEventListener("blur", function () {
    let regx = /^[a-zA-Z0-9_.]{3,25}$/;
    let namevalue = usernamevalidate.value;
    if (regx.test(namevalue)) {
        console.log('true');
        validusername = true;
        usernamevalidate.style.outline="2px solid  #4d7aff"

    }
    else {
        console.log('false');
        usernamevalidate.style.outline="2px solid  red"
    }

})


let useremail = document.getElementById("mail");
let validusermail = false;
useremail.addEventListener("blur", function () {
    let regx = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.[a-zA-Z]{2,7}$/;
    let emailvalue = useremail.value;
    if (regx.test(emailvalue)) {
        validusermail = true;
        useremail.style.outline="2px solid  #4d7aff"

    }
    else {
        useremail.style.outline="2px solid  red"

    }
})



// let input_message = document.getElementById("message");
// let valid_message = false;
// input_message.addEventListener("blur", function () {
//     let regx = /^[A-Za-z0-9]{5,1000}$/;
//     let namevalue = input_message.value;
//     console.log(namevalue);
    
//     if (regx.test(namevalue)) {
//         console.log('true');
//         valid_message = true;
//         input_message.style.outline="2px solid  #4d7aff"

//     }
//     else {
//         console.log('false');
//         input_message.style.outline="2px solid  red"
//     }

// })

document.querySelector(".mail_thanks2").style.display="none";

let confirm_mail=document.getElementById("confirm_mail");
confirm_mail.addEventListener("click",function(){
    if(validusername&&validusermail){
        let from_name=document.getElementById("username").value
        console.log(from_name.value);
        let mail=document.getElementById("mail").value
        console.log(mail);
        let text=document.getElementById("message").value
        console.log(text);
        emailjs.send("service_60kwm66","template_y7vi5zj",{
            from_name:document.getElementById("username").value,
            email_id: document.getElementById("mail").value,
            message: document.getElementById("message").value,
            }).then(function(res){
            })

            document.querySelector(".mail_thanks2").style.display="flex";
            document.querySelector(".container1").style.display="none";




    }
    else{
        // alert("Login details are not valid");
        document.getElementById("btn_pm").click();
    }
})