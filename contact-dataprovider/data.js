data=[
    {img:"https://www.semrush.com/company/static/images/trusted-providers_website-traffic-data.c9045de1e1c29f83613e81d5fd389e47.svg",
    atag:"Website traffic data",
    ptag:"Website traffic spikes & decline in any industry. Shifts in user behaviour."
},
{img:"https://www.semrush.com/company/static/images/trusted-providers_online-search-volume-trends.bf67ec775a5f5e45eee68b83b1ffc593.svg",
atag:"Website traffic data",
ptag:"Website traffic spikes & decline in any industry. Shifts in user behaviour."
},
{img:"https://www.semrush.com/company/static/images/trusted-providers_advertising-data.e4e5fd6480b87dfac6086ca4d4645067.svg",
atag:"Website traffic data",
ptag:"Website traffic spikes & decline in any industry. Shifts in user behaviour."
},
{img:"https://www.semrush.com/company/static/images/trusted-providers_social-media-data.dbda8c86bc5cfaf951f18188f2fe1396.svg",
atag:"Website traffic data",
ptag:"Website traffic spikes & decline in any industry. Shifts in user behaviour."
},
{img:"https://www.semrush.com/company/static/images/trusted-providers_brand-mentions.d8ff2e52f1de079737b729a3f4191691.svg",
atag:"Website traffic data",
ptag:"Website traffic spikes & decline in any industry. Shifts in user behaviour."
},

    
]






let selecttype=document.getElementById("dataproviderdiv")



  
function append(){
    
    data.forEach(element => {
       
        //  console.log(data)

        let atag=document.createElement("a")
        atag.href="#"
        atag.setAttribute("id","atagg")

        let selectdiv=document.createElement("div")
        selectdiv.setAttribute("class","selectdiv")
        
        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("class","imgdiv")
        let img=document.createElement("img")
        img.setAttribute("class","selectimg")
        img.src=element.img
        
        let heading_div=document.createElement("div")
        heading_div.setAttribute("class","heading_div_a")
        let heading=document.createElement("h1")
        
        heading.setAttribute("class","aselect")
        heading.innerText=element.atag

        let heading_div_p=document.createElement("div")
        heading_div_p.setAttribute("class","heading_div_p")
        let heading_div_ptag=document.createElement("p")
       
        heading_div_ptag.setAttribute("class","pselect")
        heading_div_ptag.innerText=element.ptag
        
        heading_div_p.append(heading_div_ptag)
        heading_div.append(heading)
        imgdiv.append(img)
        selectdiv.append(imgdiv,heading_div,heading_div_p)
        // document.getElementById("atagg")
        //  atag.append(selectdiv)
        selecttype.append(selectdiv)
        });
}
append()


// .......................


let dataArray=[
    {
     atag:"USA TODAY",
     ptag:"Dawn Gilbertson",
     img:"https://www.semrush.com/company/static/images/trusted-provider_usa-today.e4482a2d4979e4d814e65814dfccac3b.webp",
     p2tag:"Copyright © Gannett Co., Inc."
    },
    {
        atag:"USA TODAY",
        ptag:"Dawn Gilbertson",
        img:"https://www.semrush.com/company/static/images/trusted-provider_usa-today.e4482a2d4979e4d814e65814dfccac3b.webp",
        p2tag:"Copyright © Gannett Co., Inc."
       },
       {
        atag:"USA TODAY",
        ptag:"Dawn Gilbertson",
        img:"https://www.semrush.com/company/static/images/trusted-provider_usa-today.e4482a2d4979e4d814e65814dfccac3b.webp",
        p2tag:"Copyright © Gannett Co., Inc."
       },
       {
        atag:"USA TODAY",
        ptag:"Dawn Gilbertson",
        img:"https://www.semrush.com/company/static/images/trusted-provider_usa-today.e4482a2d4979e4d814e65814dfccac3b.webp",
        p2tag:"Copyright © Gannett Co., Inc."
       },
       {
        atag:"USA TODAY",
        ptag:"Dawn Gilbertson",
        img:"https://www.semrush.com/company/static/images/trusted-provider_usa-today.e4482a2d4979e4d814e65814dfccac3b.webp",
        p2tag:"Copyright © Gannett Co., Inc."
       },
       {
        atag:"USA TODAY",
        ptag:"Dawn Gilbertson",
        img:"https://www.semrush.com/company/static/images/trusted-provider_usa-today.e4482a2d4979e4d814e65814dfccac3b.webp",
        p2tag:"Copyright © Gannett Co., Inc."
       },
]

let arrowdiv=document.querySelector("#arrowchangeid")
let buttn1=document.querySelector(".bttnarow1");
let arrowdivnum=0;

buttn1.addEventListener("click",function(){
    
    console.log("bjhb")
    if(arrowdivnum==0){
        arrowdivnum=dataArray.length-1;
        
        console.log(dataArray)
    }else{
        arrowdivnum--;
    }
    img.src=dataArray[arrowdivnum]
});
let buttn2=document.querySelector(".bttnarow2");
buttn2.addEventListener("click",function(){
    console.log("bjhwb")
    if(arrowdivnum==dataArray.length-1){
        arrowdivnum=0;
        console.log(dataArray)
    }else{
        arrowdivnum++;
    }
    arrowdiv=dataArray[arrowdivnum]
});





data3=[{
    img:"https://cdn-company2.semrush.com/dpp/cover_preview/f373643004234a29bd8fad3c3acce343.png",
    atag:"Digital Market Shifts in the Fashion Industry in 2021"
},
{
    img:"https://cdn-company2.semrush.com/dpp/cover_preview/20802407a71c42daba4577ed58743eed.png",
    atag:"Digital Market Shifts in the Fashion Industry in 2021"
},
{
    img:"https://cdn-company2.semrush.com/dpp/cover_preview/9fd93308ed804435821f0682292f9e6e.png",
    atag:"Digital Market Shifts in the Fashion Industry in 2021"
},
{
    img:"https://cdn-company2.semrush.com/dpp/cover_preview/7146b992830c4ceb889ee586cf0d6e24.jpg",
    atag:"Digital Market Shifts in the Fashion Industry in 2021"
},
{
    img:"https://cdn-company2.semrush.com/dpp/cover_preview/f373643004234a29bd8fad3c3acce343.png",
    atag:"Digital Market Shifts in the Fashion Industry in 2021"
},
{
    img:"https://cdn-company2.semrush.com/dpp/cover_preview/f373643004234a29bd8fad3c3acce343.png",
    atag:"Digital Market Shifts in the Fashion Industry in 2021"
},]




let bottomdiv=document.getElementById("bottomdiv")

function append2(){
    
    data3.forEach(element => {
       
        //  console.log(data)

        // let atag=document.createElement("a")
        // atag.href="#"
        // atag.setAttribute("id","atagg")

        let selectdiv=document.createElement("div")
        selectdiv.setAttribute("class","selectdiv2")
        
        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("class","imgdiv2")
        let img=document.createElement("img")
        img.setAttribute("class","selectimg2")
        img.src=element.img
        
        let heading_div=document.createElement("div")
        heading_div.setAttribute("class","heading_div_a2")
        let heading=document.createElement("a")
        heading.href="#"
        heading.setAttribute("class","aselect3")
        heading.innerText=element.atag

        // let heading_div_p=document.createElement("div")
        // heading_div_p.setAttribute("class","heading_div_p")
        // let heading_div_ptag=document.createElement("p")
       
        // heading_div_ptag.setAttribute("class","pselect")
        // heading_div_ptag.innerText=element.ptag
        
        // heading_div_p.append(heading_div_ptag)
        heading_div.append(heading)
        imgdiv.append(img)
        selectdiv.append(imgdiv,heading_div)
        // document.getElementById("atagg")
        //  atag.append(selectdiv)
        bottomdiv.append(selectdiv)
        });
}
append2()
