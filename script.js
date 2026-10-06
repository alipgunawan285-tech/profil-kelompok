* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}


body {
    font-family: Arial, sans-serif;
    background: #0b1120;
    color: white;
    line-height: 1.6;
}


/* =========================
   NAVBAR
========================= */

header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;

    background: rgba(11, 17, 32, 0.95);
    backdrop-filter: blur(10px);
}


.navbar {
    max-width: 1100px;
    height: 70px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 20px;
}


.logo {
    color: #00eaff;
    font-size: 22px;
    font-weight: bold;
}


.nav-menu {
    display: flex;
    gap: 30px;
    list-style: none;
}


.nav-menu a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
}


.nav-menu a:hover {
    color: #00eaff;
}


#themeButton {
    border: none;
    background: #172033;
    color: white;

    padding: 10px;
    border-radius: 8px;

    cursor: pointer;
}


/* =========================
   HOME
========================= */

.hero {
    min-height: 100vh;
    max-width: 1100px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 50px;

    padding: 120px 20px 60px;
}


.hero-content {
    max-width: 600px;
}


.small-title {
    color: #00eaff;
    font-weight: bold;
    letter-spacing: 2px;

    margin-bottom: 10px;
}


.hero h1 {
    font-size: 60px;
    line-height: 1.1;

    margin-bottom: 20px;
}


.hero h1 span {
    color: #00eaff;
}


.hero-content > p:not(.small-title) {
    color: #b9c1d0;

    margin-bottom: 30px;
}


.button {
    display: inline-block;

    background: #00eaff;
    color: #06101d;

    padding: 13px 22px;

    border-radius: 8px;

    text-decoration: none;
    font-weight: bold;

    transition: 0.3s;
}


.button:hover {
    transform: translateY(-4px);
}


/* =========================
   CODE BOX
========================= */

.code-box {
    width: 350px;

    padding: 30px;

    background: #111b2e;

    border: 1px solid #243653;
    border-radius: 15px;

    box-shadow: 0 0 30px rgba(0, 234, 255, 0.1);

    color: #7ff7ff;

    font-family: monospace;
    font-size: 17px;
}


.code-box p {
    margin: 8px 0;
}


/* =========================
   SECTION
========================= */

.section {
    max-width: 1100px;
    margin: auto;

    padding: 100px 20px;
}


.section h2 {
    text-align: center;

    font-size: 36px;

    margin-bottom: 15px;
}


.section-description {
    max-width: 650px;

    margin: auto;

    text-align: center;

    color: #aeb8ca;
}


/* =========================
   INFO CARD
========================= */

.info-container {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 20px;

    margin-top: 50px;
}


.info-card {
    background: #111b2e;

    padding: 30px;

    border-radius: 15px;

    border: 1px solid #20304b;

    transition: 0.3s;
}


.info-card:hover {
    transform: translateY(-8px);

    border-color: #00eaff;
}


.icon {
    font-size: 35px;

    margin-bottom: 15px;
}


.info-card h3 {
    margin-bottom: 10px;
}


.info-card p {
    color: #aeb8ca;
}


/* =========================
   ANGGOTA
========================= */

.anggota-section {
    max-width: none;

    background: #0d1526;

    padding-left: max(20px, calc((100% - 1100px) / 2));
    padding-right: max(20px, calc((100% - 1100px) / 2));
}


.members {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 20px;

    margin-top: 50px;
}


.member-card {
    background: #111b2e;

    padding: 25px;

    text-align: center;

    border-radius: 15px;

    border: 1px solid #20304b;

    transition: 0.3s;
}


.member-card:hover {
    transform: translateY(-10px);

    border-color: #00eaff;
}


.profile-photo {
    width: 90px;
    height: 90px;

    margin: 0 auto 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #17253c;

    border-radius: 50%;

    font-size: 40px;
}


.member-card h3 {
    margin-bottom: 5px;
}


.member-card .role {
    color: #00eaff;

    font-weight: bold;

    margin-bottom: 10px;
}


.member-card > p:last-child {
    color: #aeb8ca;

    font-size: 14px;
}


/* =========================
   PROJECT
========================= */

.project {
    margin-top: 50px;

    background: #111b2e;

    padding: 40px;

    border-radius: 20px;

    display: flex;

    justify-content: space-between;

    gap: 50px;

    border: 1px solid #20304b;
}


.project-text {
    max-width: 600px;
}


.project-text h3 {
    font-size: 28px;

    margin-bottom: 15px;
}


.project-text p {
    color: #aeb8ca;
}


.project-text ul {
    margin-top: 20px;

    padding-left: 20px;
}


.project-text li {
    margin: 8px 0;
}


.tech {
    display: flex;

    flex-direction: column;

    gap: 15px;

    min-width: 200px;
}


.tech-item {
    background: #17253c;

    padding: 15px 20px;

    border-radius: 10px;

    display: flex;

    justify-content: space-between;
}


.tech-item strong {
    color: #00eaff;
}


.tech-item span {
    color: #9aa7bc;
}


/* =========================
   FOOTER
========================= */

footer {
    text-align: center;

    padding: 50px 20px;

    background: #070c16;

    color: #9da8ba;
}


footer h3 {
    color: #00eaff;

    font-size: 22px;
}


.copyright {
    margin-top: 15px;

    font-size: 13px;
}


/* =========================
   LIGHT MODE
========================= */

body.light {
    background: #f2f5f9;

    color: #111827;
}


body.light header {
    background: rgba(255, 255, 255, 0.95);
}


body.light .nav-menu a {
    color: #111827;
}


body.light .info-card,
body.light .member-card,
body.light .project,
body.light .code-box {
    background: white;

    border-color: #dce2ea;
}


body.light .anggota-section {
    background: #e9eef5;
}


body.light .section-description,
body.light .info-card p,
body.light .member-card > p:last-child,
body.light .project-text p {
    color: #596579;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 850px) {

    .hero {
        flex-direction: column;

        text-align: center;

        justify-content: center;
    }


    .hero h1 {
        font-size: 45px;
    }


    .code-box {
        width: 100%;

        max-width: 400px;

        text-align: left;
    }


    .info-container {
        grid-template-columns: 1fr;
    }


    .members {
        grid-template-columns: repeat(2, 1fr);
    }


    .project {
        flex-direction: column;
    }

}


@media (max-width: 600px) {

    .nav-menu {
        display: none;
    }


    .hero h1 {
        font-size: 38px;
    }


    .members {
        grid-template-columns: 1fr;
    }


    .section {
        padding: 80px 20px;
    }

    }
