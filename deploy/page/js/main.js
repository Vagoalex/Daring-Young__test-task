const UI = {
	prevButton: document.querySelector('.btn-prev'),
	nextButton: document.querySelector('.btn-next'),
	slides: document.querySelectorAll('.slide'),
	slideBeginners: document.querySelector('.slide--beginners'),
	slideSpecialists: document.querySelector('.slide--specialists'),
	slideLeaders: document.querySelector('.slide--leaders'),
	dots: document.querySelectorAll('.dot'),
	footerLogo: document.getElementById('logo-footer'),
};

console.log(UI.footerLogo);

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
	activeFooter(numbIndex);
}

function activeSlide(n) {
	UI.slides.forEach(img => {
		img.classList.remove('slide--active');
	});
	UI.slides[n].classList.add('slide--active');
}

function activeDot(n) {
	const beginnersID = UI.dots[n].id == 'dot-beginners';
	const specialistsID = UI.dots[n].id == 'dot-specialists';
	const leadersID = UI.dots[n].id == 'dot-leaders';

	const slidesClasses = {
		beginners: 'dot--beginners',
		specialists: 'dot--specialists',
		leaders: 'dot--leaders',
	};

	UI.dots.forEach(dot => {
		dot.classList.remove('dot--active');

		dot.classList.remove(slidesClasses.beginners);
		dot.classList.remove(slidesClasses.specialists);
		dot.classList.remove(slidesClasses.leaders);
	});

	UI.dots.forEach(dot => {
		dot.classList.remove('dot--active');
	});

	if (beginnersID) {
		UI.dots[n].classList.add(slidesClasses.beginners);
	} else if (specialistsID) {
		UI.dots[n].classList.add(slidesClasses.specialists);
	} else if (leadersID) {
		UI.dots[n].classList.add(slidesClasses.leaders);
	}
}

function activeFooter(n) {
	const beginnersID = UI.dots[n].id == 'dot-beginners';
	const specialistsID = UI.dots[n].id == 'dot-specialists';
	const leadersID = UI.dots[n].id == 'dot-leaders';

	const slidesClasses = {
		beginners: 'logo--beginners',
		specialists: 'logo--specialists',
		leaders: 'logo--leaders',
	};

	UI.footerLogo.classList.remove(slidesClasses.beginners);
	UI.footerLogo.classList.remove(slidesClasses.specialists);
	UI.footerLogo.classList.remove(slidesClasses.leaders);

	if (beginnersID) {
		UI.footerLogo.classList.add(slidesClasses.beginners);
	} else if (specialistsID) {
		UI.footerLogo.classList.add(slidesClasses.specialists);
	} else if (leadersID) {
		UI.footerLogo.classList.add(slidesClasses.leaders);
	}
}

UI.dots.forEach((el, dotIndex) => {
	el.addEventListener('click', () => {
		index = dotIndex;
		slideAndDotActive(index);
	});
});
