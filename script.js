    // Mobile menu script
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuBtn.innerHTML = mobileMenu.classList.contains('hidden')
        ? '<i class="fas fa-bars"></i>'
        : '<i class="fas fa-times"></i>';
    });

    // Hero carousel script

    const carousel = document.getElementById("carousel");
    const items = document.querySelectorAll(".carousel-item");
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    let index = 0;
    const interval = 3000; // Temps entre les transitions (en ms)

    // Fonction pour afficher l'élément suivant
    function showNextItem() {
      index = (index + 1) % items.length; // Passe au suivant, revient au premier après le dernier
      carousel.scrollTo({
        left: carousel.offsetWidth * index,
        behavior: "smooth",
      });
    }

    // Fonction pour afficher l'élément précédent
    function showPrevItem() {
      index = (index - 1 + items.length) % items.length; // Passe au précédent, revient au dernier si on dépasse le premier
      carousel.scrollTo({
        left: carousel.offsetWidth * index,
        behavior: "smooth",
      });
    }

    // Boutons suivant et précédent
    nextButton.addEventListener("click", showNextItem);
    prevButton.addEventListener("click", showPrevItem);

    // Lecture automatique
    let autoPlay = setInterval(showNextItem, interval);

    // Arrêter et redémarrer la lecture automatique lors du survol
    carousel.addEventListener("mouseover", () => clearInterval(autoPlay));
    carousel.addEventListener("mouseout", () => {
      autoPlay = setInterval(showNextItem, interval);
    });
