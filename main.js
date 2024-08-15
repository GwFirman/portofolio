function toggleTheme() {
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Set theme on page load
  (function() {
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.getElementById('theme-toggle').checked = true;
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.getElementById('theme-toggle').checked = false;
    }
  })();
  