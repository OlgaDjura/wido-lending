export default class DevelopmentScroll {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;

        this.list = this.container.querySelector('.development__scroll--list');
        this.items = Array.from(this.container.querySelectorAll('.development__scroll--item'));
        this.prevBtn = this.container.querySelectorAll('.task__arrow-buttons--button')[0];
        this.nextBtn = this.container.querySelectorAll('.task__arrow-buttons--button')[1];

        this.currentIndex = 0;
        this.itemWidth = 0;

        this.init();
    }

    init() {
        this.setItemWidth(); // высчитаем ширину при загрузке
        window.addEventListener('resize', () => this.setItemWidth()); // пересчёт при ресайзе
        this.updateActive();
        this.bindEvents();
    }

    setItemWidth() {
        const containerWidth = this.container.offsetWidth;
        const gap = parseFloat(getComputedStyle(this.list).columnGap) || 0;

        // считаем ширину так, чтобы влезало 3 элемента + кусочек 4-го (0.3 от ширины)
        this.itemWidth = (containerWidth - gap * 2) / 3.3;

        this.items.forEach(item => {
            item.style.minWidth = `${this.itemWidth}px`;
        });

        this.updatePosition();
    }

    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.scroll(-1));
        this.nextBtn.addEventListener('click', () => this.scroll(1));
    }

    scroll(direction) {
        this.currentIndex += direction;

        // Ограничиваем индекс, чтобы не уехать дальше последнего элемента
        if (this.currentIndex < 0) this.currentIndex = 0;
        if (this.currentIndex > this.items.length - 1) {
            this.currentIndex = this.items.length - 1;
        }

        this.updatePosition();
        this.updateActive();
    }

    updatePosition() {
        const gap = parseFloat(getComputedStyle(this.list).columnGap) || 0;
        const offset = -(this.currentIndex * (this.itemWidth + gap));
        this.list.style.transform = `translateX(${offset}px)`;
    }

    updateActive() {
        this.items.forEach((item, index) => {
            item.classList.toggle('active', index === this.currentIndex);
        });
    }
}

















