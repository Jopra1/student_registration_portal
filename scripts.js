// Cultural Fest Form Submission
document.getElementById('culturalFestForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const events = document.querySelectorAll('input[name="events"]:checked');
  if (events.length === 0) {
    alert('Please select at least one event for Cultural Fest.');
    return;
  }

  alert('Cultural Fest registration submitted successfully!');
  this.reset();
});

// Tech Fest Form Submission
document.getElementById('techFestForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const events = document.querySelectorAll('input[name="techEvents"]:checked');
  if (events.length === 0) {
    alert('Please select at least one event for Tech Fest.');
    return;
  }

  alert('Tech Fest registration submitted successfully!');
  this.reset();
});
