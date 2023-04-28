// https://drive.google.com/file/d/1DKDyKCdQpyks9yOeK6Sm3eDbBy2fPMHI/view
const aboutSection = document.createElement('section')
aboutSection.setAttribute("id","about")
aboutSection.setAttribute("class","about")
aboutSection.innerHTML =
`  <h1 class="heading"><span>about </span>Me</h1>

<div class="row">
        
   <div class="info">
    <h3><span>name:</span>Jaganath G</h3>
    <h3><span>degree:</span>B.Sc</h3>
    <h3><span>department:</span>Mathematics</h3>
    <h3><span>CGPA:</span>7.433</h3>
    <h3><span>languages known:</span>Tamil and English</h3>
    <a href="https://drive.google.com/file/d/1Be3FtvLXoRjNYyKsPFCF7PMOO8Arc2Zb/view" target="_blank"><button class="btn">download CV <i class="fas fa-download"></i></button></a>
   </div>
   
   <div class="contact">
    <h3 class="title">contact info</h3>

    <div class="contact-info">
      <h3><i class="fas fa-envelope"></i>jaganath0901@gmail.com</h3>
      <h3><i class="fas fa-phone"></i>+91 6383630185</h3>
    </div>

   </div>

</div>`
document.body.appendChild(aboutSection);