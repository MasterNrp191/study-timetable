document.addEventListener("DOMContentLoaded", () => {
  // ----- Auto strike past events -----
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

  // ----- Live Date & Time -----
  const datetime = document.getElementById("datetime");
  function updateTime() {
    const now = new Date();
    const options = { 
      weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', 
      hour: '2-digit', minute: '2-digit', second: '2-digit' 
    };
    datetime.textContent = now.toLocaleString('en-US', options);
  }
  updateTime();
  setInterval(updateTime, 1000); // update every second
});
