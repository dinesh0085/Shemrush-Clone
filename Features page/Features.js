let blocks_data=[
    {
        name:"Keyword Research",
        paragraph:"Bring traffic to your site by finding the best keywords",
        tools:"6 Tools",
        type:"SEO"
        
     },

     {
        name:"On page SEO",
        paragraph:"Get new ideas to improve your site’s health and SEO performance",
        tools:"3 Tools",
        type:"SEO"
        
     },

     {
        name:"Compatitor Analysis",
        paragraph:"Increase your website traffic and improve performance with competitors’ winning strategies",
        tools:"4 Tools",
        type:"Market Research"
        
     },

     {
        name:"Sharp tools for your Amazon business",
        paragraph:"",
        tools:"",
        type:"SEO"
        
     },

     {
        name:"Content Marketing",
        paragraph:"Develop a powerful content strategy with data-driven solutions",
        tools:"7 Tools",
        type:"Content"
        
     },

     {
        name:"Local SEO",
        paragraph:"Optimize your site for local searches to get more customers in your area",
        tools:"4 Tools",
        type:"SEO"
        
     },

     {
        name:"Rank Tracking",
        paragraph:"Track daily changes of your target keywords in your target location",
        tools:"3 Tools",
        type:"SEO"
        
     },

     {
        name:"Social Media ",
        paragraph:"Increase your brand awareness with our social media posting and analytics platform",
        tools:"2 Tools",
        type:"SMM&SERM"
        
     },

     {
        name:"Link Building ",
        paragraph:"Find unique opportunities to strengthen your backlink profile",
        tools:"5 Tools",
        type:"SEO"
        
     },

     {
        name:"Compatitor SEO Analysis ",
        paragraph:"Find all of the keywords and content in your competitor's strategy",
        tools:"7 Tools",
        type:"SEO"
        
     },

     {
        name:"Content Creation And Distribution",
        paragraph:"Create and share traffic-driving articles that make your target audience take action",
        tools:"3 Tools",
        type:"Content"
        
     },

    

     {
        name:"Content Optimization",
        paragraph:"Drive more organic traffic with personalized recommendations to optimize your content",
        tools:"2 Tools",
        type:"Content"
        
     },

     {
        name:"Content Marketing Analytics",
        paragraph:"Create and share traffic-driving articles that make your target audience take action",
        tools:"3 Tools",
        type:"Content"
        
     },

     {
        name:"Market Analytics",
        paragraph:"See the paid keywords and ad copy from your competitor's PPC ads to craft a winning strategy",
        tools:"3 Tools",
        type:"Market Research"
        
     },

     {
        name:"Paid Advertising",
        paragraph:"See the paid keywords and ad copy from your competitor's PPC ads to craft a winning strategy",
        tools:"3 Tools",
        type:"Market Research"
        
     },

     {
        name:"Competitor PR Monitoring",
        paragraph:"Track your rivals’ online mentions and social media presence to build your brand’s reputation",
        tools:"3 Tools",
        type:"Market Research"  
     },

     {
        name:"PPC Keyword Reaserch",
        paragraph:"Build your perfect paid search campaign with our keyword research tools",
        tools:"3 Tools",
        type:"Advertising"
        
     },

     {
        name:"Website Monitization",
        paragraph:"Build your perfect paid search campaign with our keyword research tools",
        tools:"3 Tools",
        type:"Advertising"
        
     },


     

]

function filterblock(){

    blocks_data.forEach((el)=>{
      let cont=document.getElementById("features_filter_blocks");
      
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

      cont.append(div)

    })
 }

 filterblock()