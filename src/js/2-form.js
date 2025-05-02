let formData = { email: "", message: "" };

const STORAGE_KEY = "feedback-form-state" // зберігання даних в локальному сховищі

const form = document.querySelector(".feedback-form")
const emailField = form.querySelector("input"); 
const messageField = form.querySelector("textarea"); 

loadFormData();

form.addEventListener("input", (e) => {
    formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 3. Сабміт форми
form.addEventListener("submit", (e) => {
  e.preventDefault();

if (!formData.email.trim() || !formData.message.trim()) {
  alert("Fill please all fields");
  return;
}

  console.log(formData);

  // Очищення
  formData = { email: "", message: "" };
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

// Функція: заповнення форми зі збережених даних
function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) return;

  try {
    formData = JSON.parse(savedData);
    if (formData.email) emailField.value = formData.email;
    if (formData.message) messageField.value = formData.message;
  } catch (err) {
    console.error("Fill please all fields", err);
  }
}

