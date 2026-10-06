// =========================
// DARK / LIGHT MODE
// =========================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


// =========================
// ANIMASI CARD
// =========================

const cards = document.querySelectorAll(
    ".info-card, .member-card, .project"
);


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});
