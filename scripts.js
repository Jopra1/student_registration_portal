document.getElementById('culturalFestForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Validate at least one event is selected
  const events = document.querySelectorAll('input[name="events"]:checked');
  if (events.length === 0) {
    alert('Please select at least one event you want to participate in.');
    return;
  }

  // In a real application, you would send this data to a server
  alert('Registration submitted successfully! We will contact you with further details.');

  // Reset form
  this.reset();
});
