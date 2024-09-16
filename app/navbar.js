
function loadNavbar() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/app/component/navbar.html", true);  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById("navbar-container").innerHTML = xhr.responseText;
        setActivePage(); 
      }
    };
    xhr.send();
  }

  function setActivePage() {
    var pageIndicator = document.getElementById("index-page");
    
    var currentPage = pageIndicator ? pageIndicator.getAttribute("value") : null;

    if (currentPage) {
        var menuItems = document.querySelectorAll(".navbar a");

        menuItems.forEach(function (item) {
            var id = item.getAttribute("id");

           
            if (id === currentPage) {
                item.classList.add("text-secondary","font-medium"); 
            } else {
                item.classList.remove("text-secondary","font-medium");  
            }
        });
    }
}

  document.addEventListener("DOMContentLoaded", loadNavbar);