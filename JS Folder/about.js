
const aboutSection = document.createElement('section')
aboutSection.setAttribute("id","about")
aboutSection.setAttribute("class","about")
aboutSection.innerHTML = `  <h1 class="heading"><span>about </span>Me</h1>

<div class="row">
        
   <p>Creative and responsible Mathematics undergraduate student passionate about programming and looking for exciting opportunities to learn, grow and gain experience in the field of full stack development. If I get an opportunity, I'll give my one hundred percent to express my skills and experiences in technologies to do the work. I believe it will help me upskill myself on the technical aspects and contribute to great improvement in my career growth in the future as well.</p>
   <a href="https://drive.google.com/file/d/1ijqnymPFYKkvxzTpiQwfPgYawM6DoCoY/view" target="_blank"><button class="btn">Resume <i class="fas fa-download"></i></button></a>
</div>`;
document.body.appendChild(aboutSection);