let popup = document.querySelector('.popup');
let buttonEdit = document.querySelector('.profile__button-edit');
let buttonClosePopup = document.querySelector('.popup__close-button');

let popupForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__text-input_name');
let jobInput = document.querySelector('.popup__text-input_job');

let profileUsername = document.querySelector('.profile__username');
let profileDescription = document.querySelector('.profile__user-description');


function openPopup() {
	popup.classList.add('popup_visible');

	profileDescription.textContent = jobInput.value;
	profileUsername.textContent = nameInput.value;
}

function closePopup() {
	popup.classList.remove('popup_visible')
}

function handleFormSubmit(evt) {
	evt.preventDefault();

	profileDescription.textContent = jobInput.value;
	profileUsername.textContent = nameInput.value;

	closePopup()
}

buttonEdit.addEventListener('click', openPopup);
buttonClosePopup.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);








