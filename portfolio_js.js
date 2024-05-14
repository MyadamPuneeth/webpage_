
let email;

document.getElementById("mySubmit").onclick = function(){
    email= document.getElementById("user_email").value;
    window.alert("Thank you for providing your email. \nYou will now be redirected to the home page.");
}

const like = document.getElementById("like");
const likes_count = document.getElementById("likes_count");
let count= 0;


like.onclick = function(){
    count++;
    likes_count.textContent = count;
}

