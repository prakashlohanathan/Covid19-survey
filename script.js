//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=957cc80abe6cbfbfb9d37152c0aaf7c2

async function getdata(){
    let res=await fetch("https://restcountries.com/v3.1/all");
    let result=await res.json();
    for(var i=0;i<result.length;i++){
        var name=result[i].name.common;
        var latlon=result[i].latlng;//[13.33,45.3]
        wd(name,...latlon); //wd(13.33,45.3)
    }

}

getdata();


async function wd(name,lat,lon){
let res1= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=957cc80abe6cbfbfb9d37152c0aaf7c2`)
let res2=await res1.json();
console.log(`${name}${res2.main.temp}`);
}

