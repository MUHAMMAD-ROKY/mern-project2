const input = document.getElementById("todoInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

btn.addEventListener("click",()=>{
  const task = input.value;
  if(task === "") return;

  const li = document.createElement("li");
  li.innerText = task;
  list.appendChild(li);

  input.value="";
});




document.getElementById("check").addEventListener("click", async () => {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  const API_KEY = "YOUR_API_KEY";

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );

  const data = await res.json();

  result.innerText =
    `Temp: ${Math.round(data.main.temp - 273)}°C | ` +
    `Weather: ${data.weather[0].description}`;
});
