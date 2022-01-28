let API='http://api.openweathermap.org/data/2.5/weather?q=';
let second ='&appid=b067377a72c98ae6963cdae2e35408d9'


let  input, btn, output, enter
input = document.getElementById('input')
btn = document.getElementById('btn')
output = document.getElementById('output')
enter = document.getElementById('enter')


const searchCity = async () => {
    let url = API + input.value + second
    let requset = await fetch(url)
    let response = await requset.json() 
    console.log(response)
    renderCity(response)
    input.value = ''
  }


  const renderCity = (results) => {
      output.innerHTML = ''
    let div = document.createElement('div')

    let nameCity = document.createElement('h2') 
    nameCity.innerHTML = 'city ' + results.name

    let temp = document.createElement('h4')    
    temp.innerHTML = 'temp ' + ( results.main.temp - 273.15).toFixed(0) + '°'

    let wind = document.createElement('h4')
    wind.innerHTML = 'wind speed ' + results.wind.speed + ' m/s'


    let country = document.createElement('h4')
    country.innerHTML = 'country ' + results.sys.country

    div.append(nameCity, temp, wind, country)
    output.append(div)    
}


 input.addEventListener('keyup', e => {
   e.preventDefault();
   if(e.keyCode === 13){
     searchCity()
   }
 })

  btn.addEventListener('click', () => {
    searchCity()
  })
