const popupEdit = document.querySelector('.popup_type_profile');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonClosePopupProfile = popupEdit.querySelector('.popup__close-button');
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
const buttonClosePopupAddCards = popupAddCard.querySelector('.popup__close-button');
const photoCard = document.querySelector('.elements');
const templateCard = document.querySelector('.elements__template').content;

const popupImage = document.querySelector('.popup_type_image');
const popupImageContainer = popupImage.querySelector('.popup__container_type_image')
const buttonClosePopupImage = popupImage.querySelector('.popup__close-button');
const popupImagePhoto = popupImage.querySelector('.popup__image-full-size');
const popupImageTitle = popupImage.querySelector('.popup__image-title');




const deletePhoto = (evt) => {
	const item = evt.target.closest('.elements__container');
	item.remove();
}

const handleFormSubmitAddCard = (evt) => {
	evt.preventDefault();
	const inputValue = {
		link: formAddCardInputLink.value,
		name: formAddCardInputDescription.value
	}
	renderElements(inputValue);
	formAddCard.reset();

	photoCard.prepend(renderElements(inputValue))
	closePopup(popupAddCard)
}

const handleFormSubmitProfile = (evt) => {
	evt.preventDefault();

	profileDescription.textContent = jobInput.value;
	profileUsername.textContent = nameInput.value;

	closePopup(popupEdit)
}

const renderElements = (todo) => {
	const elementCard = templateCard.cloneNode(true);
	const elementImage = elementCard.querySelector('.elements__image');
	elementImage.src = todo.link;
	elementCard.querySelector('.elements__title').textContent = todo.name;
	elementImage.alt = todo.name;
	elementCard.querySelector('.elements__like').addEventListener('click', function (evt) {
		evt.target.classList.toggle('elements__like_active');
	})
	elementCard.querySelector('.elements__delite-button').addEventListener('click', deletePhoto);

	elementImage.addEventListener('click', function (evt) {
		showPopup(popupImage);
		popupImagePhoto.src = todo.link;
		popupImageTitle.textContent = todo.name;
		popupImagePhoto.alt = todo.name;
	})

	return elementCard;
}



initialCards.forEach(function (todo) {
	photoCard.append(renderElements(todo))
})

const showPopup = (popUp) => {
	popUp.classList.add('popup_visible');
}

const closePopup = (popUp) => {
	popUp.classList.remove('popup_visible');
}



buttonEdit.addEventListener('click', function () {
	showPopup(popupEdit)

	nameInput.value = profileUsername.textContent;
	jobInput.value = profileDescription.textContent
});
buttonAddCard.addEventListener('click', function () {
	showPopup(popupAddCard)
})
buttonClosePopupImage.addEventListener('click', function () {
	closePopup(popupImage)
})
buttonClosePopupAddCards.addEventListener('click', function () {
	closePopup(popupAddCard);
})
buttonClosePopupProfile.addEventListener('click', function () {
	closePopup(popupEdit)
});
popupFormProfile.addEventListener('submit', handleFormSubmitProfile);
formAddCard.addEventListener('submit', handleFormSubmitAddCard);






