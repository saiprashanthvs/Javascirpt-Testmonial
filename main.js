
let reviews=[
    {
        id:1,
        name:"Christain",
        job: "Frontend dev",
        des:" Hi I Am frontend developer in Adobe.Your website have a great impact on my job.Even your website provides best qualities of free images and videos",
        img:"img/1.jpg",

    },
    {
        id:2,
        name:"sai",
        job: "Frontend dev",
        des:" Hi I Am frontend developer in Adobe. Your website has one high qualities of images",
        img:"img/2.jpg",

    },

    {
        id:3,
        name:"Rai",
        job: "Frontend dev",
        des:" Hi I Am full Stack developer in googl.Your website is helping a lot",
        img:"img/3.jpg",

    }



]
let job= document.getElementById("job");
let ident= document.getElementById("name");
let img= document.getElementById("img");
let des= document.getElementById("des");
let forward= document.getElementById("forward");
let backward= document.getElementById("backward");
let random= document.getElementById("random");


let current=0;
window.addEventListener('DOMContentLoaded', function(){
    let i= reviews[current];
    img.src=i.img;
    ident.textContent=i.name;
    job.textContent=i.job;
    des.textContent=i.des;
})

function show(p){
    let i=reviews[p];
    img.src=i.img;
    ident.textContent=i.name;
    job.textContent=i.job;
    des.textContent=i.des;
}
forward.addEventListener('click',function(){
    current++;
    if(current > reviews.length - 1){
        current=0;
    }
    show(current)
})
backward.addEventListener('click', function(){
    current--;
    if(current<1){
        current= reviews.length-1;
    }
    show(current)

}
)
random.addEventListener('click',function(){
    current=Math.floor(Math.random()*reviews.length)
    show(current);
})

