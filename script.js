function ml_webform_success_44801120() {
  const form = document.querySelector(
    ".ml-subscribe-form-44801120 .row-form"
  );

  const success = document.querySelector(
    ".ml-subscribe-form-44801120 .row-success"
  );

  if (form) form.style.display = "none";
  if (success) success.style.display = "block";
}