fetch('/www/page/components/navbar.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('navbar-container');
    container.innerHTML = html;

    const user = JSON.parse(localStorage.getItem("user"));
    const img = container.querySelector('img[alt="Usuario"]');

    if (user && user.profile_picture && img) {
      img.src = user.profile_picture;
    }
  })
  .catch(error => console.error('Error cargando el navbar:', error));
