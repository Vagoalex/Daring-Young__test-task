const sections = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const dotsID = {
	beginners: document.getElementById('dot-beginners'),
	specialist: document.getElementById('dot-specialist'),
	leaders: document.getElementById('dot-leaders'),
};

for (let item of sections) {
	if (item.classList.contains('slide--beginners')) {
		item.classList.add('slide--active');
		const dotBeginners = item.querySelector('#dot-beginners');
		dotBeginners.classList.add('dot--beginners');
	}
}
