import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');
const storageKey = "feedback-form-state";

const saveStateToStorage = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem(storageKey, JSON.stringify(formState));
}, 500);

const fillFormFromStorage = () => {
  const storedState = localStorage.getItem(storageKey);
  if (storedState) {
    const formState = JSON.parse(storedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

form.addEventListener('input', saveStateToStorage);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log({
    email: emailInput.value,
    message: messageInput.value
  });
  localStorage.removeItem(storageKey);
  emailInput.value = "";
  messageInput.value = "";
});

fillFormFromStorage();