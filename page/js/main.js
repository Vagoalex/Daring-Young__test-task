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
// for (let item of sections) {
// 	if (item.classList.contains('slide--specialists')) {
// 		item.classList.add('slide--active');
// 		const dotSpecialists = item.querySelector('#dot-specialists');
// 		dotSpecialists.classList.add('dot--specialists');
// 	}
// }
// for (let item of sections) {
// 	if (item.classList.contains('slide--leaders')) {
// 		item.classList.add('slide--active');
// 		const dotLeaders = item.querySelector('#dot-leaders');
// 		dotLeaders.classList.add('dot--leaders');
// 	}
// }
