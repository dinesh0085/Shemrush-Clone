document.getElementById("homepage_logo").addEventListener("click",function(){
let token=JSON.parse( localStorage.getItem("Token"));

if(token.length==0){
    window.location.href="index.html";
}else{
    window.location.href="homepage2.html";

}
    
// console.log(token)
})