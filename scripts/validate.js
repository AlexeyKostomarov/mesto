const configValidation = {
	formSelector: '.popup__form',
	inputSelector: '.popup__text-input',
	submitButtonSelector: '.popup__submit-button',
	inactiveButtonClass: 'popup__submit-button_disabled',
	inputErrorClass: '.popup__text-input-error'
};
const showInputError = (formElement, inputElement, errorMessage, config) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.add(config.inputErrorClass);
	errorElement.textContent = errorMessage;
}
const hideInputError = (formElement, inputElement, config) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.remove(config.inputErrorClass);
	errorElement.textContent = '';
}
const isValid = (formElement, inputElement, config) => {
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage, config)
	} else {
		hideInputError(formElement, inputElement, config)
	}
}
const setEventListeners = (formElement, config) => {
	const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
	const buttonElement = formElement.querySelector(config.submitButtonSelector)
	toggleButtonState(inputList, buttonElement, config);
	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
			isValid(formElement, inputElement, config);
			toggleButtonState(inputList, buttonElement, config);
		});
	});
};
const enableValidation = (config) => {
	const formList = Array.from(document.querySelectorAll(config.formSelector));
	formList.forEach((formElement) => {
		setEventListeners(formElement, config)
	})
}
const removeErrorText = () => {
	errorElementText = Array.from(document.querySelectorAll('.popup__input-error'));
	errorElementText.forEach((error) => {
		error.textContent = '';
	})
}
const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
		return !inputElement.validity.valid;
	})
}
const toggleButtonState = (inputList, buttonElement, config) => {
	if (hasInvalidInput(inputList)) {
		buttonElement.classList.add(config.inactiveButtonClass);
		buttonElement.setAttribute('disabled', 'disabled')
	} else {
		buttonElement.classList.remove(config.inactiveButtonClass);
		buttonElement.removeAttribute('disabled', 'disabled')
	}
}
enableValidation(configValidation);
