document.getElementById('culturalFestForm').addEventListener('submit', function (e) {
  e.preventDefault();

  
  const events = document.querySelectorAll('input[name="events"]:checked');
  if (events.length === 0) {
    alert('Please select at least one event you want to participate in.');
    return;
  }

  
  alert('Registration submitted successfully! We will contact you with further details.');

  
  this.reset();
});
