import throttle from 'lodash.throttle';


const refs = {
  form: document.querySelector("form.feedback-form"),
  emailInput: document.querySelector("input[name='email']"),
  textarea: document.querySelector("textarea[name='message']")
};

const KEY_LOCSTOR = "feedback-form-state";
const accData = {};

// const formRef = document.querySelector("form.feedback-form");
// console.log(formRef)
// const btnSubRef = document.querySelector("button[type='submit']");
// console.log(btnSubRef)

// console.log(refs.form)
// console.log(refs.emailInput)
// console.log(refs.textarea)


refs.form.addEventListener("submit", onFormSubmit);
refs.emailInput.addEventListener("input", throttle(onInputChange, 500));
refs.textarea.addEventListener("input", throttle(onTextareaChange, 500));

// console.log(localStorage);


function onFormSubmit(e) {
  e.preventDefault();
  
  console.log("Форма успешно отправленна!")
  e.currentTarget.reset();
  console.log("Вот что мне удалось собрать от юзера", accData)
}

function onInputChange(e) {
  let userEmail = e.target.value;
  console.log(userEmail)
  accData.email = userEmail;
}

function onTextareaChange(e) {
  let userMassage = e.target.value;
  console.log(userMassage)
  accData.message = userMassage;
}

console.log(accData)

const toStrData = JSON.stringify(accData);

localStorage.setItem(KEY_LOCSTOR, toStrData)