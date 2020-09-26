function read_more_less_1()
{
    var text1=document.getElementById("hide1");
    var btn1=document.getElementById("hideBTN1");
    if(btn1.innerText==="Read More")
    {
        text1.classList.remove("hide");
        btn1.innerText="Read Less";
        btn1.innerHTML+='<i class="arrow fas fa-angle-up"></i>'
    }
    else
    {
        text1.classList.add("hide");
        btn1.innerText="Read More";
        btn1.innerHTML+='<i class="arrow fas fa-angle-down">';
    }
}

function read_more_less_2()
{
    var text2=document.getElementById("hide2");
    var btn2=document.getElementById("hideBTN2");
    if(btn2.innerText==="Read More")
    {
        text2.classList.remove("hide");
        btn2.innerText="Read Less";
        btn2.innerHTML+='<i class="arrow fas fa-angle-up"></i>';
    }
    else
    {
        text2.classList.add("hide");
        btn2.innerText="Read More";
        btn2.innerHTML+='<i class="arrow fas fa-angle-down">';
    }
}
