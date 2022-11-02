var tbody = document.getElementById('tbody') ;
var global = document.getElementById('global') ;

fetch('https://api.covid19api.com/summary').then((data)=> {return data.json()}).then(data=>{
 data.Countries.forEach(item=> {
    global.innerHTML=
   `<h1> Total Confirmed:${data.Global.TotalConfirmed}</h1>
   <h1 class="text-danger"> TotalDeaths:${data.Global.TotalDeaths}</h1> `
   
   
   
   
    tbody.innerHTML+=`
 <tr>
    <td>${item.Country}</td>
    <td class ='bg-danger'>${item.NewDeaths}</td>
    <td class ='bg-warning'>${item.NewConfirmed}</td> 
    <td class ='bg-danger'>${item.TotalDeaths}</td>
    <td class ='bg-warning'>${item.TotalConfirmed}</td>
    
 </tr>`
 
})


})