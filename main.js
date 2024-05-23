function full (){
    document.getElementById('column1').style.width='100%';
    document.getElementById('column2').style.width='100%';
    document.getElementById('column3').style.width='100%';
    document.getElementById('column4').style.width='100%';
}
function twoColumn () {
    document.getElementById('column1').style.width='50%';
    document.getElementById('column2').style.width='50%';
    document.getElementById('column3').style.width='50%';
    document.getElementById('column4').style.width='50%';
}
function fourColumn (){
    document.getElementById('column1').style.width='25%';
    document.getElementById('column2').style.width='25%';
    document.getElementById('column3').style.width='25%';
    document.getElementById('column4').style.width='25%';
}
let toTop = document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
    if (window.scrollY>100){
        toTop.classList.add("active");
    }
    else {
        toTop.classList.remove("active");
    }
});