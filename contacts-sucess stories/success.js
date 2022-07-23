data=[{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/6f6fdbc9948a4409896d990c638de319.png",
    heading:" Spanish merchandising retailer uses Semrush to increase revenue by 50% and website traffic by 60%",
    id:"1"
},
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/f2586494574b435582ce909974d5809a.png",
    heading:" Startup ecosystem research center uses traffic data to help startup owners choose the top location for building business",
    id:"3"
},
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/d0b7a1f71d974aefaeeacceaa7b22843.png",
    heading:" A sustainable foods marketplace builds its e-commerce platform from the ground up, achieving 230% YoY revenue growth with almost zero capital",
    id:"4"
},
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/6775aadf4ada44b5aa3d38e937dcb44e.png",
    heading:" A company focused on solving travel problems increases organic traffic by 588% and cuts CAC in half",
    id:"5"
},
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/3f08b30eb4d14fd4b0ee3fb862326342.png",
    heading:" Alternative data platform for investors integrates Semrush traffic data for 300,000+ businesses into its ecosystem",
    id:"6"
},
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/8e5c7db4d1d64c27a519c518605b1f4c.png",
    heading:" 10X-ing traffic: how one ambitious tech startup leveraged SEO content strategies for incredible growth",
    id:"7"
},
// {
//     img:"https://cdn-company2.semrush.com/stories/cover_preview/c6e892fc49194ae680a69e8ddfa779ec.png",
//     heading:" Spanish merchandising retailer uses Semrush to increase revenue by 50% and website traffic by 60%",
//     id:"8"
// },
// {
//     img:"https://cdn-company2.semrush.com/stories/cover_preview/5c748593eb95437bad968d54ee36fcc8.png",
//     heading:" Startup ecosystem research center uses traffic data to help startup owners choose the top location for building business",
//     id:"9"
// },
// {
//     img:"https://cdn-company2.semrush.com/stories/cover_preview/6dd4b8a5bd7643069b394beaa0bf3aa0.png",
//     heading:" A sustainable foods marketplace builds its e-commerce platform from the ground up, achieving 230% YoY revenue growth with almost zero capital",
//     id:"10"
 ]



let selecttype=document.getElementById("select_type")



  
function append(){
    
    data.forEach(element => {
       
         console.log(data)
        let selectdiv=document.createElement("div")
        selectdiv.setAttribute("class","selectdiv")

        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("class","imgdiv")
        let img=document.createElement("img")
        img.setAttribute("class","selectimg")
        img.src=element.img
        
        let heading_div=document.createElement("div")
        heading_div.setAttribute("class","heading_div")
        let heading=document.createElement("a")
        heading.href="#"
        heading.setAttribute("class","aselect")
        heading.innerText=element.heading
        
        
        heading_div.append(heading)
        imgdiv.append(img)
        selectdiv.append(imgdiv,heading_div)
        selecttype.append(selectdiv)
        });
}
append()


// ...............................................

// document.getElementById("selectid1").addEventListener("change",function(){
//     filter()
// })
// function filter (){
// let selected=document.getElementById("alldata").value
// let filterdata=data.filter(function (el){
//     return el.id==selected
// })
// console.log(filterdata)
//  append(filterdata)
// }


let data2=[{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/6dd4b8a5bd7643069b394beaa0bf3aa0.png",
    heading:" A sustainable foods marketplace builds its e-commerce platform from the ground up, achieving 230% YoY revenue growth with almost zero capital",
    id:"10"
},,
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/5c748593eb95437bad968d54ee36fcc8.png",
    heading:" Startup ecosystem research center uses traffic data to help startup owners choose the top location for building business",
    id:"9"
},
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/d0b7a1f71d974aefaeeacceaa7b22843.png",
    heading:" A sustainable foods marketplace builds its e-commerce platform from the ground up, achieving 230% YoY revenue growth with almost zero capital",
    id:"4"
},
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/c6e892fc49194ae680a69e8ddfa779ec.png",
    heading:" Spanish merchandising retailer uses Semrush to increase revenue by 50% and website traffic by 60%",
    id:"8"
},,
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/3f08b30eb4d14fd4b0ee3fb862326342.png",
    heading:" Alternative data platform for investors integrates Semrush traffic data for 300,000+ businesses into its ecosystem",
    id:"6"
},
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/8e5c7db4d1d64c27a519c518605b1f4c.png",
    heading:" 10X-ing traffic: how one ambitious tech startup leveraged SEO content strategies for incredible growth",
    id:"7"
},


]



 let selecttype1=document.querySelector("#selectid1").addEventListener("change",function(){
    Filter()
 })



  
function Filter(){
    document.getElementById("select_type").innerHTML=null
     data2.forEach(element => {
       
        //  console.log(data2)
        let selectdiv=document.createElement("div")
        selectdiv.setAttribute("class","selectdiv")

        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("class","imgdiv")
        let img=document.createElement("img")
        img.setAttribute("class","selectimg")
        img.src=element.img
        
        let heading_div=document.createElement("div")
        heading_div.setAttribute("class","heading_div")
        let heading=document.createElement("a")
        heading.href="#"
        heading.setAttribute("class","aselect")
        heading.innerText=element.heading
        
        
        heading_div.append(heading)
        imgdiv.append(img)
        selectdiv.append(imgdiv,heading_div)
        selecttype.append(selectdiv)
     });
}

// ...................................
// data3=[{
//     img:"https://cdn-company2.semrush.com/stories/cover_preview/6f6fdbc9948a4409896d990c638de319.png",
//     heading:" Spanish merchandising retailer uses Semrush to increase revenue by 50% and website traffic by 60%",
//     id:"1"
// },
// {
//     img:"https://cdn-company2.semrush.com/stories/cover_preview/f2586494574b435582ce909974d5809a.png",
//     heading:" Startup ecosystem research center uses traffic data to help startup owners choose the top location for building business",
//     id:"3"
// },
// 
// {
//     img:"https://cdn-company2.semrush.com/stories/cover_preview/6775aadf4ada44b5aa3d38e937dcb44e.png",
//     heading:" A company focused on solving travel problems increases organic traffic by 588% and cuts CAC in half",
//     id:"5"
// },
// {
//     img:"https://cdn-company2.semrush.com/stories/cover_preview/3f08b30eb4d14fd4b0ee3fb862326342.png",
//     heading:" Alternative data platform for investors integrates Semrush traffic data for 300,000+ businesses into its ecosystem",
//     id:"6"
// },
// {
//     img:"https://cdn-company2.semrush.com/stories/cover_preview/8e5c7db4d1d64c27a519c518605b1f4c.png",
//     heading:" 10X-ing traffic: how one ambitious tech startup leveraged SEO content strategies for incredible growth",
//     id:"7"
// },]





// let selecttype11=document.querySelector("selectid1").addEventListener("change",function(){
//     Filter()
//  })



  
// function Filter(){
//     document.getElementById("select_type").innerHTML=null
//      data3.forEach(element => {
       
//         //  console.log(data2)
//         let selectdiv=document.createElement("div")
//         selectdiv.setAttribute("class","selectdiv")

//         let imgdiv=document.createElement("div")
//         imgdiv.setAttribute("class","imgdiv")
//         let img=document.createElement("img")
//         img.setAttribute("class","selectimg")
//         img.src=element.img
        
//         let heading_div=document.createElement("div")
//         heading_div.setAttribute("class","heading_div")
//         let heading=document.createElement("a")
//         heading.href="#"
//         heading.setAttribute("class","aselect")
//         heading.innerText=element.heading
        
        
//         heading_div.append(heading)
//         imgdiv.append(img)
//         selectdiv.append(imgdiv,heading_div)
//         selecttype.append(selectdiv)
//      });
// }
// //////////////////


let data3=[{
    
             img:"https://cdn-company2.semrush.com/stories/cover_preview/d0b7a1f71d974aefaeeacceaa7b22843.png",
            heading:" A sustainable foods marketplace builds its e-commerce platform from the ground up, achieving 230% YoY revenue growth with almost zero capital",
            id:"4"
        },
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/5c748593eb95437bad968d54ee36fcc8.png",
    heading:" Startup ecosystem research center uses traffic data to help startup owners choose the top location for building business",
    id:"9"
},
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/d0b7a1f71d974aefaeeacceaa7b22843.png",
    heading:" A sustainable foods marketplace builds its e-commerce platform from the ground up, achieving 230% YoY revenue growth with almost zero capital",
    id:"4"
},
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/c6e892fc49194ae680a69e8ddfa779ec.png",
    heading:" Spanish merchandising retailer uses Semrush to increase revenue by 50% and website traffic by 60%",
    id:"8"
},,
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/3f08b30eb4d14fd4b0ee3fb862326342.png",
    heading:" Alternative data platform for investors integrates Semrush traffic data for 300,000+ businesses into its ecosystem",
    id:"6"
},
{
    img:"https://cdn-company2.semrush.com/stories/cover_preview/8e5c7db4d1d64c27a519c518605b1f4c.png",
    heading:" 10X-ing traffic: how one ambitious tech startup leveraged SEO content strategies for incredible growth",
    id:"7"
},


]



 let selecttype11=document.querySelector("#selectid2").addEventListener("change",function(){
    Filter1()
 })



  
function Filter1(){
    document.getElementById("select_type").innerHTML=null
     data2.forEach(element => {
       
        //  console.log(data2)
        let selectdiv=document.createElement("div")
        selectdiv.setAttribute("class","selectdiv")

        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("class","imgdiv")
        let img=document.createElement("img")
        img.setAttribute("class","selectimg")
        img.src=element.img
        
        let heading_div=document.createElement("div")
        heading_div.setAttribute("class","heading_div")
        let heading=document.createElement("a")
        heading.href="#"
        heading.setAttribute("class","aselect")
        heading.innerText=element.heading
        
        
        heading_div.append(heading)
        imgdiv.append(img)
        selectdiv.append(imgdiv,heading_div)
        selecttype.append(selectdiv)
     });
}