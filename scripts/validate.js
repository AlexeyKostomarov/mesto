const showInputError = (formElement, inputElement, errorMessage) => {
	const errorElement = formElement.querySelector(`${inputElement.id}-error`);
	inputElement.classList.add('')
}


const isValid = (formElement, inputElement) => {
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage)
	}
	else {
		hideInputError(formElement, inputElement)
	}
}