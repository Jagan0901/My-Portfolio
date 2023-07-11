const contactSection = document.createElement("section");
contactSection.setAttribute("id", "contact");
contactSection.setAttribute("class", "contact");
contactSection.innerHTML = `  <h1 class="heading"><span>Contact </span>info</h1>
<div class="info">
    <div class="contact-info">
      <h3><i class="fas fa-envelope"></i>jaganath0901@gmail.com</h3>
      <h3><i class="fas fa-phone"></i>+91 6383630185</h3>
      <h3><i class="fa-brands fa-github"></i><a href="https://github.com/Jagan0901" target="_blank">github.com/Jagan0901</a></h3>
      <h3><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/jaganath-g-b13b7524a/" target="_blank">linkedin.com/in/jaganath-g-b13b7524a</a></h3>
      </div>
      <div class="cv">
      <a href="https://drive.google.com/file/d/1fkV_AzDRaej-09ivvZIl5Eib-5sYwvpH/view" target="_blank"><button class="btn">Resume <i class="fas fa-download"></i></button></a>
     </div>
      </div>`;
document.body.appendChild(contactSection);
;