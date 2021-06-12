// 1. Есть инпут для ввода текста
// 2. Есть какой-то div для вывода сообщений.
 // 2.1 Вывод сообщения "Теперь Вам нужно назвать город, начинающийся на букву Х"
 // 2.2 Если попадается одинаковый город, то выводится сообщение: "Такой город уже был"

/*
1. Повесить обработчик события на инпут, чтобы реагировал на клавишу Enter;
2. Заводим массив, который будет принимать в себя названия введённых городов.
3. Проверить, есть ли уже в массиве город.
	3.1 Если город уже есть, то в массив НЕ записывать, а выводить сообщение из. п. 2.2.
  3.2 Если города нет, то записывать его в массив и выводить сообщение из п. 2.1
4. Стирать введённое сообщение
*/

const cityInput = document.querySelector('.city');

const cities = [];

let lastUsedChar;

cityInput.addEventListener('keydown', function(event) {
  const cityName = cityInput.value;
  if (event.keyCode === 13) {
  	if (lastUsedChar != undefined && lastUsedChar != cityName[0].toLowerCase()) {
    	showMessage(`Нужно вводить город только на букву "${lastUsedChar}"!`);
    } else if (cities.includes(cityName)) {
      showMessage("Такой город уже был!");
    } else {
    	allowNextTurn(cityName, cities);
    }
    cityInput.value = "";
  }
})

function allowNextTurn(cityName, cities) {
  let charToShow = cityName[cityName.length - 1];
  if (charToShow === "ь") {
    charToShow = cityName[cityName.length - 2];
  }
  showMessage(`Теперь Вам нужно назвать город, начинающийся на букву "${charToShow}".`);
  cities.push(cityName);
  lastUsedChar = charToShow;
}

function showMessage (message) {
	const el = document.querySelector('.message');
  el.textContent = message;
}