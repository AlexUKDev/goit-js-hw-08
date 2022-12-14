import throttle from 'lodash.throttle';


const refs = {
  form: document.querySelector("form.feedback-form"),
  emailInput: document.querySelector("input[name='email']"),
  textarea: document.querySelector("textarea[name='message']")
};

const KEY_LOCSTOR = "feedback-form-state";
// read localStorage data or set default 
let accData = JSON.parse(localStorage.getItem(KEY_LOCSTOR)) || {};

// set EventListeners
refs.form.addEventListener("submit", onFormSubmit);
refs.emailInput.addEventListener("input", throttle(onInputChange, 500));
refs.textarea.addEventListener("input", throttle(onTextareaChange, 500));

// console.log(localStorage);
autocompleteForm();

function onFormSubmit(e) {
  e.preventDefault();
  if(refs.emailInput.value && refs.textarea.value){
    // console.log("Форма успешно отправленна!")

  // ресет form inputs
  e.currentTarget.reset();
  // check value show obj
  console.log("Вот что мне удалось собрать от User:", accData)
  //очистка локал сторыдж после отправки формы
  cleanLocalStorage();
  // console.log("localStorage был очищен")
    accData = {};
  } else {
    alert("Друже не торопись, заполни все поля!");
  }
   
}

function onInputChange(e) {
  let userEmail = e.target.value;
  accData.email = userEmail;

  toLocalStorageSave()

  // const localStorageSavedData = localStorage.getItem(KEY_LOCSTOR);
  // console.log("From localStorageSavedData check value email:", localStorageSavedData);
}

function onTextareaChange(e) {
  let userMassage = e.target.value;
  // console.log(userMassage)
  accData.message = userMassage;
  toLocalStorageSave()

  // const localStorageSavedData = localStorage.getItem(KEY_LOCSTOR);
  // console.log("From localStorageSavedData check value texarea:", localStorageSavedData);
}


function toLocalStorageSave(){
  const toStrData = JSON.stringify(accData);
  // console.log(toStrData);
  localStorage.setItem(KEY_LOCSTOR, toStrData)
}

function cleanLocalStorage(){
  localStorage.removeItem(KEY_LOCSTOR);
}

function autocompleteForm(){
  const localStorageSavedData = localStorage.getItem(KEY_LOCSTOR);
  console.log("From localStorageSavedData check value:", localStorageSavedData)

  if(localStorageSavedData){
    // console.log("In localStorage !Null работаем дальше...", localStorageSavedData)
    const savedDataParsed = JSON.parse(localStorageSavedData);

    refs.emailInput.value = savedDataParsed.email || "";
    refs.textarea.value =savedDataParsed.message || "";
  }
  
}