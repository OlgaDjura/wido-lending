import Header from './Header.js';
import CityDropdown from './dropDownList.js';
import DevelopmentScroll from './DevelopmentScroll.js'

new Header();

const cities = [
    "Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург",
    "Казань", "Нижний Новгород", "Челябинск", "Самара", "Омск", "Ростов-на-Дону"
];

document.addEventListener('DOMContentLoaded', () => {
    new CityDropdown('.city-dropdown', cities);
});

document.addEventListener("DOMContentLoaded", () => {
    new DevelopmentScroll(".development__scroll");
});
