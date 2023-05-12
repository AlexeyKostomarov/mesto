const popupMultiple = document.querySelector('.popup')
const popupEdit = document.querySelector('.popup_type_profile');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClosePopupProfile = document.querySelector('.popup__close-button_type_profile');


const popupForm = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__text-input_type_name');
const jobInput = document.querySelector('.popup__text-input_type_job');

const profileUsername = document.querySelector('.profile__username');
const profileDescription = document.querySelector('.profile__user-description');

const buttonAddCard = document.querySelector('.profile__button-add');
const popupAddCard = document.querySelector('.popup_type_elements');
const buttonClosePopupAddCards = document.querySelector('.popup__close-button_type_elements')

const photoCards = document.querySelector('.elements'); // блок с изображениями
const templateCards = document.querySelector('.elements__template').content; // сохранение в переменной содержимого template элемента
const image = document.querySelectorAll('.elements__image');

const initialCards = [ //  Карточки, добавляемые на страницу при загрузке

	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];



initialCards.forEach(function (item) { // item = элемент массива
	const elementCard = templateCards.cloneNode(true); // Клонирование содержимого template элемента

	elementCard.querySelector('.elements__image').src = item.link; // Ссылка на изображение 
	elementCard.querySelector('.elements__title').textContent = item.name; // Название карточки

	elementCard.querySelector('.elements__like').addEventListener('click', function (evt) { // Реализация активной кнопки лайка
		evt.target.classList.toggle('elements__like_active');
	})



	photoCards.append(elementCard); // Добавление карточек в блок
})


const descriptionInput = document.querySelector('.popup__text-input_type_description');
const linkInput = document.querySelector('.popup__text-input_type_link')










// Функция открытия попапа для редактирования профиля: 

function openPopupEdit() {
	popupEdit.classList.add('popup_visible');

	jobInput.value = profileDescription.textContent;
	nameInput.value = profileUsername.textContent;
}

// Функция открытия попапа для загразки фото: 

function openPopupAddCard() {
	popupAddCard.classList.add('popup_visible');
}

function closePopupAddCard() {
	popupAddCard.classList.remove('popup_visible')
}

function closePopup() {
	popupMultiple.classList.remove('popup_visible')
}

function handleFormSubmitProfile(evt) {
	evt.preventDefault();

	profileDescription.textContent = jobInput.value;
	profileUsername.textContent = nameInput.value;

	closePopup()
}




buttonAddCard.addEventListener('click', openPopupAddCard) // Открытие попапа загрузки фото
buttonClosePopupAddCards.addEventListener('click', closePopupAddCard) // Закрытие попапа для загрузки фото
buttonEdit.addEventListener('click', openPopupEdit); // Открытие попапа редактирования профиля 
buttonClosePopupProfile.addEventListener('click', closePopup); // Закрытие попапа редактирования профиля
popupForm.addEventListener('submit', handleFormSubmitProfile); // Метод отправки формы попапа редактирования
popupForm.addEventListener('submit', handleFormSubmitAddCard) // Метод отправки формы для попапа загрузки карточек







