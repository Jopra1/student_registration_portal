function setupFestForm(formId, checkboxName) {
  document.getElementById(formId)?.addEventListener('submit', function (e) {
    e.preventDefault();
    const selected = document.querySelectorAll(`input[name="${checkboxName}"]:checked`);
    if (selected.length === 0) {
      alert('Please select at least one event.');
      return;
    }
    window.location.href = 'thank-you.html';
  });
}

setupFestForm('culturalFestForm', 'culturalEvents');
setupFestForm('techFestForm', 'techEvents');
