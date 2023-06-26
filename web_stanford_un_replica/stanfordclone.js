let month = parseInt(new Date().getMonth())+1
console.log(month);
let date = new Date().getDate()
console.log(date);
console.log(document.documentElement.scrollTop);

let m = "" ;

let months = document.getElementsByClassName("calenderblock1")
let dates = document.getElementsByClassName("calenderblock2")
if(month == 1)
{
    m = "JAN";
}
else if(month == 2)
{
    m = "FEB";
}
else if(month == 3)
{
    m = "MAR";
}
else if(month == 4)
{
    m = "APR";
}
else if(month == 5)
{
    m = "MAY";
}
else if(month == 6)
{
    m = "JUN";
}
else if(month == 7)
{
    m = "JULY";
}
else if(month == 8)
{
    m = "AUG";
}
else if(month == 9)
{
    m = "SEP";
}
else if(month == 10)
{
    m = "OCT";
}
else if(month == 11)
{
    m = "NOV";
}
else if(month == 12)
{
    m = "DEC";
}
else{
    m = "" ;
}
for (let index = 0; index <= 3; index++) {
    months[index].textContent = m
    dates[index].textContent = date
}

// while clicking explore stanford downward button
function clicktoviewcontent()
{
    window.scrollTo({top: 640, behavior: 'smooth'})
}

// while clicking the upward icon it will move to it's initial position
function scrolltowardsinitial()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}


console.log(document.documentElement.scrollTop);
//navbar color changes while scroll
window.onscroll = function(){myFunction()};

function myFunction()
{
    let image = document.getElementById("onclickimage")
    if(document.documentElement.scrollTop >= 5)
    {
        image.style.opacity = "60%"
    }
    else{
        image.style.opacity = "0%"
    }
    if (document.documentElement.scrollTop > 500) {
        document.getElementById("nav").className = "navbar1";
        document.getElementById("linkbar1").className = "linkbar1";
        document.getElementById("linkbar1").classList.remove = "link"
        
        if(document.documentElement.scrollTop > 3500)
        {
            //  document.getElementById("normalbackground").className = "normalbackground2"
            document.getElementById("image").classList.remove = "image"
            document.getElementById("image").className = "images"
            document.getElementById("content").className = "contents"

            if (document.documentElement.scrollTop > 7150) {
                document.getElementById("imaging").classList.remove = "image"
            document.getElementById("imaging").className = "images"
            document.getElementById("contenting").className = "contents"
            } else {
                document.getElementById("imaging").classList.remove = "images"
            document.getElementById("imaging").className = "image"
            document.getElementById("contenting").className = ""
            }
         }
         else{
            //  document.getElementById("normalbackground").className = "normalbackground1"
            document.getElementById("image").classList.remove = "images"
            document.getElementById("image").className = "image"
            document.getElementById("content").className = ""
         }
    } 
    else {
        document.getElementById("nav").className = "";
        document.getElementById("linkbar1").className = "link";

    }
}
// function scrollup()
// {
//     let element = document.getElementById("block2")
//     element.scrollTop = 500;
// }


// window.onscroll = function(){thisFunction()};

// function thisFunction()
// {
//     // console.log(document.documentElement.scrollTop);
//     if(document.documentElement.scrollTop > 3300)
//     {
//         document.getElementById("normalbackground").className = "normalbackground2"
//     }
//     else{
//         document.getElementById("normalbackground").className = "normalbackground1"
//     }
// }