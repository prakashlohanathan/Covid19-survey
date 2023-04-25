var div=document.createElement("div");
div.styletextAlign="center";
div.style.marginTop="100px";

var input=document.createElement("input");
input.setAttribute("type","text");
input.style.width="35%";
input.id="countryname";

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Click Me";
button.style.margin="5px";

button.addEventListener("click",getdata);

var active=document.createElement("div");
active.style.fontSize="25px";
active.style.fontFamily="Arial";

var deaths=document.createElement("div");
deaths.style.fontSize="25px";
deaths.style.fontFamily="Arial";

var recovered=document.createElement("div");
recovered.style.fontSize="25px";
recovered.style.fontFamily="Arial";


div.append(input,button,active,deaths,recovered);
document.body.append(div);


async function getdata(){
    let res=document.getElementById("countryname").value;
    console.log(res);
try{
let res1=await fetch(`https://api.covid19api.com/total/dayone/country/${res}`);
let res2=await res1.json();
index= res2.length-1;
console.log(`Active:${res2[index].Active}`);
active.innerHTML=`Active:${res2[index].Active}`;
console.log(`Deaths:${res2[index].Deaths}`);
deaths.innerHTML=`Deaths:${res2[index].Deaths}`;
console.log(`Recovered:${res2[index].Recovered}`);
recovered.innerHTML=`Recovered:${res2[index].Recovered}`;
}catch(error)  {
    console.log(error);
}

}





