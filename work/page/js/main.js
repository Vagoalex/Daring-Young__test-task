import { UI } from './UI.js';
import { activeSlide, activeDot, activeFooter } from './actives.js';

let index = 0;
slideAndDotActive(index);

setInterval(() => {
	nextSlide();
}, 5000);

UI.nextButton.addEventListener('click', nextSlide);
UI.prevButton.addEventListener('click', prevSlide);

function nextSlide() {
	if (index === UI.slides.length - 1) {
		index = 0;
		slideAndDotActive(index);
	} else {
		index++;
		slideAndDotActive(index);
	}
}

function prevSlide() {
	if (index === 0) {
		index = UI.slides.length - 1;
		slideAndDotActive(index);
	} else {
		index--;
		slideAndDotActive(index);
	}
}

function slideAndDotActive(numbIndex) {
	activeSlide(numbIndex);
	activeDot(numbIndex);
	activeFooter(numbIndex);
}

UI.dots.forEach((el, dotIndex) => {
	el.addEventListener('click', () => {
		index = dotIndex;
		slideAndDotActive(index);
	});
});
