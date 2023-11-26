
const citys =["Azilal","rabat","casablanca"]
let cityVar = "Azilal";
const dis = document.querySelector('#bra')
function timeFill(id,time) {
    document.getElementById(id).innerHTML = time
}
function getDate(readable) {
    document.querySelector('p').innerHTML = readable
}

for (const city of citys) {
    dis.innerHTML+=`<option >${city} </option>`
}
let params = {
    country:"MA",
    city: cityVar
}
function getRequest(params) {
                    axios.get('http://api.aladhan.com/v1/timingsByCity', {
                    params:params
                })
                .then(function (response) {
                            const timings = response.data.data.timings;
                            const date = response.data.data.date;
                            timeFill("time1", timings.Fajr)
                            timeFill("time2",timings.Dhuhr)
                            timeFill("time3",timings.Asr)
                            timeFill("time4",timings.Maghrib)
                            timeFill("time5",timings.Isha)
                            getDate(date.readable) 
                })
                        .catch(function (error) {
                            console.log(error);
                })
                 
}
getRequest(params)

dis.addEventListener('change',()=>{
    cityVar= dis.value;
    params.city = cityVar
getRequest(params)
})