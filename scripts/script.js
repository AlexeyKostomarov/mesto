const popupEdit = document.querySelector(".popup_type_profile");
const buttonEdit = document.querySelector(".profile__button-edit");
const buttonClosePopupProfile = popupEdit.querySelector(".popup__close-button");
const popupFormProfile = document.querySelector(".popup__form_type_profile");
const formProfileInputName = document.querySelector(
  ".popup__text-input_type_name"
);
const formProfileInputJob = document.querySelector(
  ".popup__text-input_type_job"
);
const profileUsername = document.querySelector(".profile__username");
const profileDescription = document.querySelector(".profile__user-description");
const buttonAddCard = document.querySelector(".profile__button-add");
const popupAddCard = document.querySelector(".popup_type_elements");
const formAddCard = popupAddCard.querySelector(".popup__form_type_elements");
const formAddCardInputLink = formAddCard.querySelector(
  ".popup__text-input_type_link"
);
const formAddCardInputDescription = formAddCard.querySelector(
  ".popup__text-input_type_description"
);
const buttonClosePopupAddCards = popupAddCard.querySelector(
  ".popup__close-button"
);
const cardsContainer = document.querySelector(".elements");
const templateCard = document.querySelector(".elements__template").content;
const popupImage = document.querySelector(".popup_type_image");
const buttonClosePopupImage = popupImage.querySelector(".popup__close-button");
const popupImagePhoto = popupImage.querySelector(".popup__image-full-size");
const popupImageTitle = popupImage.querySelector(".popup__image-title");

const handleFormSubmitAddCard = (evt) => {
  evt.preventDefault();
  const inputValue = {
    link: formAddCardInputLink.value,
    name: formAddCardInputDescription.value,
  };
  formAddCard.reset();
  cardsContainer.prepend(createCard(inputValue));
  closePopup(popupAddCard);
};

const createButtonDisabled = (popup) => {
  const submitButton = popup.querySelector(".popup__submit-button");
  submitButton.setAttribute("disabled", "disabled");
  submitButton.classList.add("popup__submit-button_disabled");
};

const handleFormSubmitProfile = (evt) => {
  evt.preventDefault();
  profileDescription.textContent = formProfileInputJob.value;
  profileUsername.textContent = formProfileInputName.value;

  closePopup(popupEdit);
};
const createCard = (card) => {
  const elementCard = templateCard.cloneNode(true);
  const elementImage = elementCard.querySelector(".elements__image");
  const elementLike = elementCard.querySelector(".elements__like");
  elementImage.src = card.link;
  elementCard.querySelector(".elements__title").textContent = card.name;
  elementImage.alt = card.name;
  elementCard
    .querySelector(".elements__delite-button")
    .addEventListener("click", handleDeleteCardElement);
  elementLike.addEventListener("click", handleLikeButton);
  elementImage.addEventListener("click", () => {
    showPopup(popupImage);
    popupImagePhoto.src = card.link;
    popupImageTitle.textContent = card.name;
    popupImagePhoto.alt = card.name;
  });
  return elementCard;
};
const handleLikeButton = (evt) => {
  evt.target.classList.toggle("elements__like_active");
};
const handleDeleteCardElement = (evt) => {
  const item = evt.target.closest(".elements__container");
  item.remove();
};
const addCards = () =>
  initialCards.forEach((card) => {
    cardsContainer.append(createCard(card));
  });
const showPopup = (popup) => {
  popup.classList.add("popup_visible");
  document.addEventListener("keydown", handleClosePopupEsc);
  document.addEventListener("click", handleClosePopupOverlay);
};
const closePopup = (popup) => {
  popup.classList.remove("popup_visible");
  document.removeEventListener("keydown", handleClosePopupEsc);
  document.removeEventListener("click", handleClosePopupOverlay);
  createButtonDisabled(popup);
};
const handleClosePopupEsc = (evt) => {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_visible");
    closePopup(popup);
    formAddCard.reset();
  }
};
const handleClosePopupOverlay = (evt) => {
  if (evt.target.classList.contains("popup_visible")) {
    const popup = document.querySelector(".popup_visible");
    closePopup(popup);
    formAddCard.reset();
  }
};

buttonEdit.addEventListener("click", function () {
  showPopup(popupEdit);
  formProfileInputName.value = profileUsername.textContent;
  formProfileInputJob.value = profileDescription.textContent;
});
buttonAddCard.addEventListener("click", function () {
  showPopup(popupAddCard);
});
buttonClosePopupImage.addEventListener("click", function () {
  closePopup(popupImage);
});
buttonClosePopupAddCards.addEventListener("click", function () {
  closePopup(popupAddCard);
  formAddCardInputDescription.value = "";
  formAddCardInputLink.value = "";
  removeErrorText();
});
buttonClosePopupProfile.addEventListener("click", function () {
  closePopup(popupEdit);
  removeErrorText();
});
popupFormProfile.addEventListener("submit", handleFormSubmitProfile);
formAddCard.addEventListener("submit", handleFormSubmitAddCard);

addCards();

const truncate = (text, length) => {
  // BEGIN (write your solution here)

  const str = text.slice(0, length);
  const textLength = str + "...";
  return textLength;

  // END
};
