document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("#timetable tbody tr");
  const today = new Date();

  rows.forEach(row => {
    const dateValue = row.getAttribute("data-date");
    if (!dateValue) return;

    const eventDate = new Date(dateValue);
    if (eventDate < today) {
      row.classList.add("passed");
    }
  });
});
