let blocks_data=[
    {
        name:"Keyword Research",
        paragraph:"Bring traffic to your site by finding the best keywords",
        tools:"6 Tools",
        type:"SEO",
        link:"https://www.semrush.com/features/keyword-research-toolkit/"
        
     },

     {
        name:"On page SEO",
        paragraph:"Get new ideas to improve your site’s health and SEO performance",
        tools:"3 Tools",
        type:"SEO",
        link:"https://www.semrush.com/features/technical-seo-tools/"
        
     },

     {
        name:"Compatitor Analysis",
        paragraph:"Increase your website traffic and improve performance with competitors’ winning strategies",
        tools:"4 Tools",
        type:"Market Research",
        link:"https://www.semrush.com/features/competitor-website-analysis-tools/"

        
     },

     {
        name:"Sharp tools for your Amazon business",
        paragraph:"",
        tools:"",
        type:"SEO",
        link:"https://www.sellzone.com/?utm_source=Semrush&utm_medium=Features&_ga=2.37274144.1689642152.1658208594-2045038679.1658208594"
        
     },

     {
        name:"Content Marketing",
        paragraph:"Develop a powerful content strategy with data-driven solutions",
        tools:"7 Tools",
        type:"Content",
        link:"https://www.semrush.com/features/content-marketing-tools/"
        
     },

     {
        name:"Local SEO",
        paragraph:"Optimize your site for local searches to get more customers in your area",
        tools:"4 Tools",
        type:"SEO",
        link:"https://www.semrush.com/features/local-seo-tools/"
        
     },

     {
        name:"Rank Tracking",
        paragraph:"Track daily changes of your target keywords in your target location",
        tools:"3 Tools",
        type:"SEO",
        link:"https://www.semrush.com/features/serp-tracking-tools/"
        
     },

     {
        name:"Social Media ",
        paragraph:"Increase your brand awareness with our social media posting and analytics platform",
        tools:"2 Tools",
        type:"SMM&SERM",
        link:"https://www.semrush.com/features/social-media-marketing/"
        
     },

     {
        name:"Link Building ",
        paragraph:"Find unique opportunities to strengthen your backlink profile",
        tools:"5 Tools",
        type:"SEO",
        link:"https://www.semrush.com/features/link-building-and-prospecting-tools/"
        
     },

     {
        name:"Compatitor SEO Analysis ",
        paragraph:"Find all of the keywords and content in your competitor's strategy",
        tools:"7 Tools",
        type:"SEO",
        link:"https://www.semrush.com/features/seo-competitor-analysis-tool/"
        
     },

     {
        name:"Content Creation And Distribution",
        paragraph:"Create and share traffic-driving articles that make your target audience take action",
        tools:"3 Tools",
        type:"Content",
        link:"https://www.semrush.com/features/content-creation-and-distribution-tools/"
        
     },

    

     {
        name:"Content Optimization",
        paragraph:"Drive more organic traffic with personalized recommendations to optimize your content",
        tools:"2 Tools",
        type:"Content",
        link:"https://www.semrush.com/features/content-optimization-tools/"
        
     },

     {
        name:"Content Marketing Analytics",
        paragraph:"Create and share traffic-driving articles that make your target audience take action",
        tools:"3 Tools",
        type:"Content",
        link:"https://www.semrush.com/features/content-marketing-analytics-tools/"
        
     },

     {
        name:"Market Analytics",
        paragraph:"See the paid keywords and ad copy from your competitor's PPC ads to craft a winning strategy",
        tools:"3 Tools",
        type:"Market Research",
        link:"https://www.semrush.com/features/market-analysis-tools/"
        
     },

     {
        name:"Paid Advertising",
        paragraph:"See the paid keywords and ad copy from your competitor's PPC ads to craft a winning strategy",
        tools:"3 Tools",
        type:"Market Research",
        link:"https://www.semrush.com/features/ppc-marketing-tools/"
        
     },

     {
        name:"Competitor PR Monitoring",
        paragraph:"Track your rivals’ online mentions and social media presence to build your brand’s reputation",
        tools:"3 Tools",
        type:"Market Research",
        link:"https://www.semrush.com/features/pr-monitoring-tools/"
     },

     {
        name:"PPC Keyword Reaserch",
        paragraph:"Build your perfect paid search campaign with our keyword research tools",
        tools:"3 Tools",
        type:"Advertising",
        link:"https://www.semrush.com/features/ppc-keyword-research-tools/"
        
     },

     {
        name:"Website Monitization",
        paragraph:"Build your perfect paid search campaign with our keyword research tools",
        tools:"3 Tools",
        type:"Advertising",
        link:"https://www.semrush.com/features/website-monetization-tools/"
        
     },


     

]


//..................ALL DATA...............................

let ALL=()=>{
   
  //...........BUTTONS STYLE FUNCTION................
  let pbuttons=document.querySelectorAll("button");
//   console.log(pbuttons)
  for(let i=1;i<7;i++){
     if(pbuttons[i]==0){
        continue;
     }else if(pbuttons[i].id=="features_filter_all"){
        // let button=document.getElementById("features_filter_SEO");
        pbuttons[i].style.backgroundColor="#00BC98";
        pbuttons[i].style.color="white";
        pbuttons[i].style.borderColor="#00BC98"
        

     }else{
        pbuttons[i].style.backgroundColor="white";
        pbuttons[i].style.color="black";
        pbuttons[i].style.borderColor="grey"
      //   pbuttons[i].style.hover.borderColor="#00BC98";
     }
  }

   filterblock(blocks_data)


 }

 //..................ALL DATA...............................


 
 
 //..................SEO DATA...............................

let SEO=()=>{

    //...........BUTTONS STYLE FUNCTION................
   let pbuttons=document.querySelectorAll("button");
   // console.log(pbuttons)
   for(let i=1;i<7;i++){
      if(pbuttons[i]==0){
         continue;
      }else if(pbuttons[i].id=="features_filter_SEO"){
         // let button=document.getElementById("features_filter_SEO");
         pbuttons[i].style.backgroundColor="#00BC98";
         pbuttons[i].style.color="white";
         pbuttons[i].style.borderColor="#00BC98"
         
      }else{
         pbuttons[i].style.backgroundColor="white";
         pbuttons[i].style.color="black";
         pbuttons[i].style.borderColor="grey"
         
      }

      
       

      
   }


   let data=blocks_data.filter((el)=>{
   return el.type=="SEO";
   })
   filterblock(data)

 }

 //..................SEO DATA...............................



 //..................Content DATA...............................

let Content=()=>{    

   //...........BUTTONS STYLE FUNCTION................
  let pbuttons=document.querySelectorAll("button");
  // console.log(pbuttons)
  for(let i=1;i<7;i++){
     if(pbuttons[i]==0){
        continue;
     }else if(pbuttons[i].id=="features_filter_content"){
        // let button=document.getElementById("features_filter_SEO");
        pbuttons[i].style.backgroundColor="#00BC98";
        pbuttons[i].style.color="white";
        pbuttons[i].style.borderColor="#00BC98"

     }else{
        pbuttons[i].style.backgroundColor="white";
        pbuttons[i].style.color="black";
        pbuttons[i].style.borderColor="grey"
      //   pbuttons[i].style.hover.backgroundColor="#00BC98"
     }
  }


  let data=blocks_data.filter((el)=>{
  return el.type=="Content";
  })
  filterblock(data)

}

//..................Market Research DATA...............................




let Market_research=()=>{    

   //...........BUTTONS STYLE FUNCTION................
  let pbuttons=document.querySelectorAll("button");
  // console.log(pbuttons)
  for(let i=1;i<7;i++){
     if(pbuttons[i]==0){
        continue;
     }else if(pbuttons[i].id=="features_filter_MarketResearch"){
        // let button=document.getElementById("features_filter_SEO");
        pbuttons[i].style.backgroundColor="#00BC98";
        pbuttons[i].style.color="white";
        pbuttons[i].style.borderColor="#00BC98"
     }else{
        pbuttons[i].style.backgroundColor="white";
        pbuttons[i].style.color="black";
        pbuttons[i].style.borderColor="grey"
     }
  }


  let data=blocks_data.filter((el)=>{
  return el.type=="Market Research";
  })
  filterblock(data)

}

//..................Market Research DATA...............................




//..................Advertising DATA...............................




let Advertising=()=>{    

   //...........BUTTONS STYLE FUNCTION................
  let pbuttons=document.querySelectorAll("button");
  // console.log(pbuttons)
  for(let i=1;i<7;i++){
     if(pbuttons[i]==0){
        continue;
     }else if(pbuttons[i].id=="features_filter_advertising"){
        // let button=document.getElementById("features_filter_SEO");
        pbuttons[i].style.backgroundColor="#00BC98";
        pbuttons[i].style.color="white";
        pbuttons[i].style.borderColor="#00BC98"
     }else{
        pbuttons[i].style.backgroundColor="white";
        pbuttons[i].style.color="black";
        pbuttons[i].style.borderColor="grey"
     }
  }


  let data=blocks_data.filter((el)=>{
  return el.type=="Advertising";
  })
  filterblock(data)

}

//..................Advertising DATA...............................




//..................SMM&SERM DATA...............................




let Smm_serm=()=>{    

   //...........BUTTONS STYLE FUNCTION................
  let pbuttons=document.querySelectorAll("button");
  // console.log(pbuttons)
  for(let i=1;i<7;i++){
     if(pbuttons[i]==0){
        continue;
     }else if(pbuttons[i].id=="features_filter_SMM&SERM"){
        // let button=document.getElementById("features_filter_SEO");
        pbuttons[i].style.backgroundColor="#00BC98";
        pbuttons[i].style.color="white";
        pbuttons[i].style.borderColor="#00BC98"
     }else{
        pbuttons[i].style.backgroundColor="white";
        pbuttons[i].style.color="black";
        pbuttons[i].style.borderColor="grey"
     }
  }


  let data=blocks_data.filter((el)=>{
  return el.type=="SMM&SERM";
  })
  filterblock(data)

}

//..................SMM&SERM DATA...............................






 //...............DISPLAY BLOCKS..................
 function filterblock(data){
   let cont=document.getElementById("features_filter_blocks");
   cont.innerHTML=null;

   data.forEach((el)=>{

      let anchortag=document.createElement("a");
      anchortag.href=el.link;
      
     
     let div=document.createElement("div");
     div.setAttribute("class","features_filter_block");

     let h1=document.createElement("h1");
     h1.innerText=el.name;

     let p=document.createElement("p");
     p.innerText=el.paragraph;

     let div2=document.createElement("div");
     div2.setAttribute("class","feature_block_inside_div")

     let p2=document.createElement("p");
     p2.innerText="Learn more";

     let p3=document.createElement("p");
     p3.innerText=el.tools;

     div2.append(p2,p3);

     div.append(h1,p,div2);
     
     anchortag.append(div)
     cont.append(anchortag)

   })
}



let alltools_data=["Backlink Analytics","Backlink Analytics","Organic Research","Backlink Audit Tool","Keyword Overview","Organic Traffic Insights","Backlink Gap","Link Building Tool","Position Tracking",'Bulk Analysis',"Bulk Analysis","Ranks","Domain Overview","Log File Analyzer","Sensor","Google Data Studio connectors","My Reports","Site Audit","Keyword Gap","On Page SEO checker"]

let SEO_DATA=()=>{
   let cont=document.getElementById("features_allTools_details");

   alltools_data.forEach((el)=>{
      let div=document.createElement("div");

      div.innerText=el;

      cont.append(div)
   })
   
}

SEO_DATA()