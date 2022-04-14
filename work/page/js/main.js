const UI = {
	prevButton: document.querySelector('.btn-prev'),
	nextButton: document.querySelector('.btn-next'),
	slides: document.querySelectorAll('.slide'),
	slideBeginners: document.querySelector('.slide--beginners'),
	slideSpecialists: document.querySelector('.slide--specialists'),
	slideLeaders: document.querySelector('.slide--leaders'),
	dots: document.querySelectorAll('.dot'),
};

let index = 0;
slideAndDotActive(index);

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
}

function activeSlide(n) {
	UI.slides.forEach(img => {
		img.classList.remove('slide--active');
	});
	UI.slides[n].classList.add('slide--active');
}

function activeDot(n) {
	UI.dots.forEach(dot => {
		dot.classList.remove('dot--active');
	});
	UI.dots[n].classList.add('dot--active');
}

UI.dots.forEach((el, dotIndex) => {
	el.addEventListener('click', () => {
		index = dotIndex;
		slideAndDotActive(index);
	});
});
