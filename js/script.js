


//Бургер меню

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__block-menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
	$('.header__menu a').click(function () {
		$('.header__burger,.header__block-menu').removeClass('active');
		$('body').removeClass('lock');
	});
});



function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();



// слайдер 


const swiper = new Swiper('.swiper', {
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	speed: 1600,
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		424: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		600: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
		900: {
			slidesPerView: 5,
			spaceBetween: 50,
		},
	},
});


// движение блоков в след мыши
const boxes = document.querySelectorAll('.img__move');
const movementStrength = 20; // Насколько сильно блоки будут двигаться

window.addEventListener('mousemove', (event) => {
	const { clientX, clientY } = event;

	// Вычисляем смещение для каждого блока
	boxes.forEach((box) => {
		const boxRect = box.getBoundingClientRect();
		const offsetX = (clientX - (boxRect.left + boxRect.width / 2)) / window.innerWidth * movementStrength;
		const offsetY = (clientY - (boxRect.top + boxRect.height / 2)) / window.innerHeight * movementStrength;

		// Для движения в ту же сторону используйте `+offsetX`, для противоположной `-offsetX`
		box.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
	});
});



// Карточки прайсов
const buttonBying = document.querySelector('.item-buying__buttons');
const blockBying = document.querySelector('.item-buying__row');

buttonBying.addEventListener('click', function(event) {
	if (!event.target.closest('.monthly')) {
		buttonBying.classList.add('active');
		blockBying.classList.add('active');
	}else{
		buttonBying.classList.remove('active');
		blockBying.classList.remove('active');
	}
});


// карусель коментов
let currentSlide = 0;
const slides = document.querySelectorAll('.item-comment__slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
	currentSlide = (currentSlide + 1) % totalSlides;
	updateSlidePosition();
});

document.querySelector('.prev').addEventListener('click', () => {
	currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
	updateSlidePosition();
});

function updateSlidePosition() {
	const slideWidth = slides[0].offsetWidth;
	document.querySelector('.item-comment__slider').style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}


// Вопрос ответ 




const questionsSections = document.querySelectorAll('.item-questions');

questionsSections.forEach(section => {
	section.addEventListener('click', function(event) {
		const questionsButton = event.target.closest('button');
		const questionsText = section.querySelector('.item-questions__text');
		if(questionsButton) {
			questionsText.classList.toggle('active');
			questionsButton.classList.toggle('active');
		}
	});
});















/*
questionsSections.forEach(section => {
	section.addEventListener('click', function (event) {
			const textElement = section.querySelector('.item-questions__text');
			const button = event.target.closest('button');
			if (button) {
				textElement.classList.toggle('active');
				button.classList.toggle('active');
			}
	});
});

*/