const popupEdit = document.querySelector('.popup_type_profile');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClosePopupProfile = document.querySelector('.popup__close-button_type_profile');
const popupFormProfile = document.querySelector('.popup__form_type_profile');
const nameInput = document.querySelector('.popup__text-input_type_name');
const jobInput = document.querySelector('.popup__text-input_type_job');
const profileUsername = document.querySelector('.profile__username');
const profileDescription = document.querySelector('.profile__user-description');

const buttonAddCard = document.querySelector('.profile__button-add');
const popupAddCard = document.querySelector('.popup_type_elements');
const formAddCard = popupAddCard.querySelector('.popup__form_type_elements');
const formAddCardInputLink = formAddCard.querySelector('.popup__text-input_type_link');
const formAddCardInputDescription = formAddCard.querySelector('.popup__text-input_type_description');
const buttonClosePopupAddCards = document.querySelector('.popup__close-button_type_elements'); 
const photoCards = document.querySelector('.elements');
const templateCards = document.querySelector('.elements__template').content; // сохранение в переменной содержимого template элемента

formAddCard.addEventListener('submit', (evt) => {
	evt.preventDefault();
	const elementCard = templateCards.cloneNode(true); // Клонирование содержимого template элемента
	elementCard.querySelector('.elements__image').src = formAddCardInputLink.value;
	elementCard.querySelector('.elements__title').textContent = formAddCardInputDescription.value;
	formAddCardInputDescription.value = '';
	formAddCardInputLink.value = '';

	elementCard.querySelector('.elements__delite-button').addEventListener('click', delitePhoto);
	photoCards.prepend(elementCard)
	closePopup(popupAddCard)
})

const delitePhoto = (event) => {
	const item = event.target.closest('.elements__container');
	item.remove();
}

const renderElements = (todo) => {
	const elementCard = templateCards.cloneNode(true); // Клонирование содержимого template элемента
	elementCard.querySelector('.elements__image').src = todo.link;
	elementCard.querySelector('.elements__title').textContent = todo.name; 
	elementCard.querySelector('.elements__like').addEventListener('click', function (evt) { // Реализация активной кнопки лайка
		evt.target.classList.toggle('elements__like_active');
	})
	elementCard.querySelector('.elements__delite-button').addEventListener('click', delitePhoto);


	photoCards.append(elementCard); 
}

initialCards.forEach(function (todo) { 
	renderElements(todo);
})

function openPopupEdit() { // Функция открытия попапа для редактирования профиля: 
	popupEdit.classList.add('popup_visible');

	jobInput.value = profileDescription.textContent;
	nameInput.value = profileUsername.textContent;
}

function openPopupAddCard() { // Функция открытия попапа для загразки фото: 
	popupAddCard.classList.add('popup_visible');
}

function closePopup(popUp) { // Функция закрытия попапа
	popUp.classList.remove('popup_visible');
}

function handleFormSubmitProfile(evt) { // Метод отправки формы попапа редактирования:
	evt.preventDefault();

	profileDescription.textContent = jobInput.value;
	profileUsername.textContent = nameInput.value;

	closePopup(popupEdit)
}



buttonEdit.addEventListener('click', openPopupEdit); // Открытие попапа редактирования профиля 
buttonAddCard.addEventListener('click', openPopupAddCard) // Открытие попапа загрузки фото
buttonClosePopupAddCards.addEventListener('click', function() { // Закрытие попапа для загрузки фото
	closePopup(popupAddCard);
}) 
buttonClosePopupProfile.addEventListener('click', function() {
	closePopup(popupEdit)
}); // Закрытие попапа редактирования профиля
popupFormProfile.addEventListener('submit', handleFormSubmitProfile); // Метод отправки формы попапа редактирования







