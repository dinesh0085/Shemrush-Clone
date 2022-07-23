


data=[
    {
    img:"https://cdn-company2.semrush.com/newsroom/cover_preview/0b3690a45b48477bb984141fa1bdda3d.png",
    name:"Semrush Appoints New Leaders to Support Rapid Growth",
    date:"June 16, 2022"},
    {
        img:"https://cdn-company2.semrush.com/newsroom/cover_preview/83a8233b9509430582fe8b60661c249b.png",
        name:"Semrush Launches Beta Version of Content Outline Builder, Expands Listing Management Globally",
        date:"June 16, 2022"},
     {
        img:"https://cdn-company2.semrush.com/newsroom/cover_preview/66de98c4dc2f4599a99731019fd151f8.png",
         name:"Semrush Earns No. 1 Spot on G2's 2022 Best Marketing & Digital Advertising Products List",
         date:"June 16, 2022"},
     {
      img:"https://cdn-company2.semrush.com/newsroom/cover_preview/7da7ab170763442ea66bbc499ef069be.png",
     name:"Semrush Acquires Backlinko.com, Adds 500K in Monthly Traffic",
     date:"June 16, 2022"},
    {
      img:"https://cdn-company2.semrush.com/newsroom/cover_preview/d3d30481d533472090805224512e2382.png",
    name:"Semrush Appoints Marcus Tober as SVP of Enterprise Solutions",
    date:"June 16, 2022"},   
     {
     img:"https://cdn-company2.semrush.com/newsroom/cover_preview/ce23a4ffc16043b0b471a0b4401d76cb.png",
     name:"Semrush Wins at UK and US Search Awards 2021",
     date:"June 16, 2022"},   
      {
     img:"https://cdn-company2.semrush.com/newsroom/cover_preview/41802d605386465293498add93c3c82b.png",
     name:"Semrush Appoints Andrew Warden as Chief Marketing Officer",
     date:"June 16, 2022"},
     {
        img:"https://cdn-company2.semrush.com/newsroom/cover_preview/e78f48d2077942f59d3dabeb9144e7b7.png",
        name:"Semrush Wins the Best SEO Software Suite at Global Search Awards",
        date:"June 16, 2022"},
        {
            img:"https://cdn-company2.semrush.com/newsroom/cover_preview/212f02ef502a4ae29c942061fe247eac.png",
            name:"G2 Names Semrush One of the Best Global Software Sellers",
            date:"June 16, 2022"},
            
]


let newsid=document.getElementById("ourrecentnews")

function append(){
   
    
    data.forEach(element => {
        let newsdiv=document.createElement("div")
        newsdiv.setAttribute("class","newsdiv")

        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("class","imgdiv")
        let img=document.createElement("img")
        img.setAttribute("class","newsimg")
        img.src=element.img
        
        let name_div=document.createElement("div")
        name_div.setAttribute("class","name_div")
        let name=document.createElement("a")
        name.href="#"
        name.setAttribute("class","anews")
        name.innerText=element.name
        let datediv=document.createElement("div")
        datediv.setAttribute("class","datediv")
        let date = document.createElement("p")
        date.innerText=element.date
       
        date.setAttribute("class","pnewsdate")
        
        datediv.append(date)
        name_div.append(name)
        imgdiv.append(img)
        newsdiv.append(imgdiv,name_div,datediv)
        newsid.append(newsdiv)
    });

}

append()