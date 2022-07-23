data=[{
    img:"https://cdn.semrush.com/company/static/company/contacts/contacts_need-help.12afd10d409b.svg",
    h1:"Need help?",
    p:"Learn how to use Semrush and contact our support team if needed.",
    text:"Go to Help Center"

},
{
    img:"https://cdn.semrush.com/company/static/company/contacts/contacts_personal-demo.366e8ced3c61.svg",
    h1:"Want a personal demo?",
    p:"See Semrush in action. Request a demo and we'll be in touch shortly.",
    text:"Request a Demo"

},
{
    img:"https://cdn.semrush.com/company/static/company/contacts/contacts_custom-solution.fa6020f35557.svg",
    h1:"Need a custom solution?",
    p:"Get to know how to customize Semrush for your business needs.",
    text:"Contact Sales"

},]


let selecttype=document.getElementById("contactid")



  
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
        
        let heading_div_h1=document.createElement("div")
        heading_div_h1.setAttribute("class","heading_div")

        let heading_h1=document.createElement("h2")
       
        heading_h1.setAttribute("class","h1select")
        heading_h1.innerText=element.h1

        let heading_div_p=document.createElement("div")
        heading_div_p.setAttribute("class","heading_div_p")
        let heading_p=document.createElement("p")
       
        heading_p.setAttribute("class","pselect")
        heading_p.innerText=element.p
          
        
        let bttn_div=document.createElement("div")
        bttn_div.setAttribute("class","bttn_div")
        let bttn=document.createElement("button")
       
        bttn.setAttribute("class","bttnselect")
        bttn.innerText=element.text
        
        bttn_div.append(bttn)
        heading_div_p.append(heading_p)
        heading_div_h1.append(heading_h1)
        imgdiv.append(img)
        selectdiv.append(imgdiv,heading_div_h1,heading_div_p,bttn_div,)
        selecttype.append(selectdiv)
        });
}
append()
// ...............................
data2=[
    {
img:"https://www.semrush.com/company/static/images/usa.212a45a3e6e4631261c875a712bc331d.png",
h1:"United States",
no:"+1 (800) 815 - 9959",
},
{
    img:"https://www.semrush.com/company/static/images/usa.212a45a3e6e4631261c875a712bc331d.png",
    h1:"United States",
    no:"+1 (800) 815 - 9959",
   
    },
        {
img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAnCAMAAABQShoEAAAA3lBMVEUAAADmFxffEBDmFhbnFhbmFxfmFhblFxfh4ufjGBjp6u3o6e3l5urf4OTnFxfmFxff4OXl5eXnGBjf3+Xf4OTmFxfmFhblFhbp6u3lFhbf4eXp6+/kGBjd3+TkFRXfGBjf4OTnFhblGBjn5+zf3+Tl5eziFhbb3+PjFBTn5+/////9GRnmFxfp6u7pFxf1GBj+jIz5GBj29vj5+vv9NTX9Jyf+xcX8/P3/4+PxFxfx8vX/8fHt7/H+mprtFxf+fn7+b2/9UlL9RETf4OT/1NT/xsb+t7f+qan+qKj+UlJssrkEAAAAKnRSTlMA3xCvf3DPkHBA79/Fv7+/ryAgEO/v76Cfn5d/YDAwIN+fgGBgUFBAQCBDpL6vAAABqUlEQVQ4y8XU11LCQBSA4SURRAFFpSgK9pY9aRsSEnpX3/+FPKaehXDtf5XMfLMtO2FS3XKnXqvVOuV3dqCr21M9rXJ9cZAMhYOJ4Rif99kHkrGjpQ2GyI5kcwT6eJCRmMGxIhkQ2l7CgJJCjanlZBugJuYNDc9DHFW8rssCBDwfcRPgJESPYHCKRgTxAM7DgQBsirYeRdwIhzqGKadoPs9QOlQBzAxZX5rr+tYsQziUwnq4IoK4yzGLoCkUWRGmBH3zsC1BJtzgkswIrXFf/jpCnj/CtwjZUGJnCfL6k6U7iZDl9ic/XoKaGdIWXGoRT8cBCPJk5BGkJmizlNHST1CTtWMU7j/LtUZatvAiBBHC/Hm6IJ8cgcpO6GHirsJcSz5M1gI7QRGcaBj9LL2/DxzIyJKQCQXGcD6Q0Gy2c1XuGHYOAUUbL0PxQNhlC8xD19eOBsKKAPYBZOAViGuDYechNAUlQUoJDGffDNDcszRFBV3sGqFLBnvC/4MYEOLgj0VVmNxnBdlYOOE8YogvlVe233NVJ1XLVyy3i5d6tbFaNR7q5S77v34BCR2rZsU9sP4AAAAASUVORK5CYII=",
h1:"Canada",
no:"+1 (800) 815 - 9959",
        
},
{
    img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAnCAMAAABQShoEAAABSlBMVEUAAADFJDkqKpIpKZYtLZbGJDktLZfm5uotLZXo6e0tLZfo6O3o6OstLZUsLJPp6u3FJDrEJDrFIzrp6u7FJDosLJfp6e7p6ezo6e3FJDno6Ozp6e8uLpcuLpXn5+vf7+/f3+/hv8d9frzKQ1UsLJXRZnbGJDvVhZPR0+NERKPFJDrEJDnn5+zl5ewtLZZYWKvn5+/XgI/HIDi/IEDYJz7///8xMaEtLZbFJDro6e3UJj3r7O/65OfdQlbrk58uLpr29/h+fsRKSqzRJTzy8/X98vPl5fPxrrYvL5zgT2L8/P36+vzy8vnneIbaNErm5vPu7/L419tXV7NERKHd3u3c3OrR0uKystvk0Nenp9GYmNBKSq1RUarWh5PLPFH34eXm3eLQ0eKWls/kx82Ki8F2drpzc7bbn6rVb33YTWDMSVzTP1PHMEXNJTwR9Se/AAAANHRSTlMAvyAQ36+fMO/fv3BwYEDv7+/fz8+/r6+goJB/f3BAEBDf38+Qj4+Af39/cGBQUEAgICAQ9HSH8AAAAcdJREFUOMvF1Mdy2zAQgOFVlyy5dyd2nN47gcWCtsiIjMJIKUrkGpf0nrz/1QQoWqAL5Zv/G2a+2QN2AEhUqt4oZDKZ+eoSnFLu4iiR0BFVitkTSRmJfM+TUnq+TYjH2cMyotNmzNIx1nIQ8XbSXNjoOpyzPmKcO92N609NQ7TWOIoaa7/E1WWIu/Pnk8uajSRqvH0t97dmYnN/X/x+zkJlotBYqx9tuhWZ7JWtv9ZLpUykzAprr++OaFTE7yurWplIG/ZqF4f0IET+TKsEisx7jqhGXUOHx8pAPcMDPSqPAe8pE0UmDDEHJbJZXB8ZdagGNeqkI5fmYIHcdNSmScgIaaUmxZhG6QlxNlQQ3iA0BvODkBRTcFf8T0eeKMDSoMv0qQYwSu1UZFMJYIH8NORSBQBGENWCw/MLE9WtN+8+6P0OQ9gQOpGxDBSrAPOgypYxMgaK1Rc1SLf4g1rK1PsoVl+/FaHXHNnKNE20qZT4dzkXo0uTP4WsN3dMxDdZy96beAJwqApib33nyAvetqnyGMxufu5i0DJQ4OD2zDIky+YRqeNKvVPXtxHzD+B4w9PU/8RoejEHJ/bo3uzUuBDjE7PVEpxfB9KE2iPIyjj9AAAAAElFTkSuQmCC",
    h1:"United Kingdom",
    no:"+1 (800) 815 - 9959",
            
    },
    {
        img:"https://www.semrush.com/company/static/images/usa.212a45a3e6e4631261c875a712bc331d.png",
        h1:"United States",
        no:"+1 (800) 815 - 9959",
                
        },
        {
            img:"https://www.semrush.com/company/static/images/usa.212a45a3e6e4631261c875a712bc331d.png",
            h1:"United States",
            no:"+1 (800) 815 - 9959",
                    
            },
            {
                img:"https://www.semrush.com/company/static/images/usa.212a45a3e6e4631261c875a712bc331d.png",
                h1:"United States",
                no:"+1 (800) 815 - 9959",
                        
                },
                {
                    img:"https://www.semrush.com/company/static/images/usa.212a45a3e6e4631261c875a712bc331d.png",
                    h1:"United States",
                    no:"+1 (800) 815 - 9959",
                            
                    },
                
]




let selecttype1=document.getElementById("conc_no")



  
function append1(){
    
    data2.forEach(element => {
       
         console.log(data)

        let selectdiv=document.createElement("div")
        selectdiv.setAttribute("class","selectdiv1")

        let divimgh1=document.createElement("div")
        divimgh1.setAttribute("class","imgh1div1")

        let img=document.createElement("img")
        img.setAttribute("class","selectimg1")
        img.src=element.img
        
        // let heading_div_h1=document.createElement("div")
        // heading_div_h1.setAttribute("class","heading_div")

        let heading_h1=document.createElement("h2")
       
        heading_h1.setAttribute("class","h1select1")
        heading_h1.innerText=element.h1

        let heading_div_p=document.createElement("div")
        heading_div_p.setAttribute("class","heading_div_p")
        let heading_p=document.createElement("a")
        heading_p.href="#"
        heading_p.setAttribute("class","aselect12")
        heading_p.innerText=element.no
          
        
        // let bttn_div=document.createElement("div")
        // bttn_div.setAttribute("class","bttn_div")
        // let bttn=document.createElement("button")
       
        // bttn.setAttribute("class","bttnselect1")
        // bttn.innerText=element.text
        
        // bttn_div.append(bttn)
        heading_div_p.append(heading_p)
        divimgh1.append(img,heading_h1)
    
        selectdiv.append(divimgh1,heading_div_p,)
        selecttype1.append(selectdiv)
        });
}
append1()