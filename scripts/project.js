const naught = document.querySelector('.sub-main');
const radios = document.getElementsByName("temp");
let rad;
const loca = document.getElementById("location");
const locaContainer = document.getElementById("loca");
const temperature = document.getElementById("tem");
const description = document.getElementById("desp");
const currentTemp = document.createElement('p');
const image = document.querySelector("img");
const humidity = document.querySelector("#hum");

radios.forEach(radio =>{
	radio.addEventListener("change",function(){
		if(radio.checked){
			rad = radio.value;
			console.log(rad);
		}
	});
});

document.querySelector('#enter').onclick = () => {


	const lat = document.getElementById('lat').value;

	const long = document.getElementById('long').value;

	const url = "https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ long +"&units="+ rad +"&APPID=61a0af6c0abff327e78c6ce5bfbb578c";

	async function apiFetch() {
		try {
			const response = await fetch(url);
			if (response.ok) {
				const data = await response.json();
				displayWeather(data);

			} else {
				throw Error(await response.text());
			}
		} catch (error) {
			console.log(error);
		}
	}

	apiFetch();

	function displayWeather(data) {

		loca.innerHTML = `${data.name}, ${data.sys.country}`;
		locaContainer.appendChild(loca);


		const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
		image.setAttribute('src', iconsrc);
		image.setAttribute('alt', "data.weather[0].description");

		if(rad === "imperial"){
			currentTemp.innerHTML = `${data.main.temp.toFixed(0)} &deg;F`;
		} else{
			currentTemp.innerHTML = `${data.main.temp.toFixed(0)} &deg;C`;
		}
		temperature.appendChild(image);
		temperature.appendChild(currentTemp);
currentTemp.style.color = "black";
		const desc = data.weather[0].description;

		description.innerHTML = `- ${desc.charAt(0).toUpperCase() + desc.slice(1)}`;

		const humid = [];
		humid.push(`Humidity: ${data.main.humidity}%`);
		humid.push(`Pressure: ${data.main.pressure}`);
		console.log(humid);
		// div.appendChild(humidity);

		// const windSpeed = document.createElement('p');
		// windSpeed.innerHTML = `Wind Speed: ${weather.wind.speed}km/h`;
		// div.appendChild(windSpeed);


		//FORECAST FOR 3 DAYS


	// 	let allDays = [];
	// 	allDays.push(data.list[8]);
	// 	allDays.push(data.list[16]);
	// 	allDays.push(data.list[24]);

	// 	allDays.forEach((day) => {

	// 		const section = document.createElement('section');

	// 		const date = document.createElement('h4');
	// 		date.innerHTML = `${day.dt_txt.slice(0, 10)}`;

	// 		const dayTemp = document.createElement('p');
	// 		dayTemp.innerHTML =`${day.main.temp.toFixed(0)}&deg;F`;

	// 		const forecastIcon = document.createElement('img');
	// 		const icon = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`
	// 		forecastIcon.setAttribute('src', icon);
	// 		forecastIcon.setAttribute('alt', "forecast-image"); 
	// 		forecastIcon.setAttribute('width', '50px');
	// 		forecastIcon.setAttribute('height', '50px');



	// 		const upper = day.weather[0].description; 
	// 		const dayDesc = document.createElement('p');
	// 		dayDesc.innerHTML = `${upper.charAt(0).toUpperCase() + upper.slice(1)}`;

	// 		section.append(date, dayTemp, forecastIcon, dayDesc);
	// 		document.querySelector('#forecast').appendChild(section);
			
	// 	}); 

	// }
	}
	document.querySelector("#enter").addEventListener("click",function(){
		document.querySelector(".main").classList.add("body");
		document.querySelector(".sub-main").classList.remove("sub");
		document.querySelector(".sub-main").classList.add("su");
	});
	document.querySelector(".sub-main").addEventListener("click",function(){
		document.querySelector(".main").classList.remove("body");
		document.querySelector(".sub-main").classList.add("sub");
	});
}