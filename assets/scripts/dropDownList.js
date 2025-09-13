export default class CityDropdown {
    constructor(rootSelector, cities) {
        this.root = document.querySelector('.city-dropdown');
        this.button = this.root.querySelector('.city-dropdown__button');
        this.menu = this.root.querySelector('.city-dropdown__menu');
        this.input = this.root.querySelector('.city-dropdown__input');
        this.list = this.root.querySelector('.city-dropdown__list');
        this.cities = cities;

        this.init();
    }

    

    toggleMenu() {
        this.menu.classList.toggle('show');
        this.input.value = '';
        this.list.innerHTML = '';
        if (this.menu.classList.contains('show')) {
            this.input.focus();
        }
    }

    filterCities() {
        const value = this.input.value.toLowerCase();
        this.list.innerHTML = '';

        const filtered = this.cities.filter(city => city.toLowerCase().includes(value));

        filtered.forEach(city => {
            const li = document.createElement('li');
            li.textContent = city;
            li.addEventListener('click', () => {
                this.button.textContent = city;
                this.menu.classList.remove('show');
            });
            this.list.appendChild(li);
        });
    }

    handleClickOutside(e) {
        if (!e.target.closest('.city-dropdown')) {
            this.menu.classList.remove('show');
        }
    }

    init() {
        this.button.addEventListener('click', () => this.toggleMenu());
        this.input.addEventListener('input', () => this.filterCities());
        document.addEventListener('click', (e) => this.handleClickOutside(e));
        

    }
}
