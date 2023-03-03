const homeSection = document.createElement('section')
homeSection.setAttribute("id","home")
homeSection.setAttribute("class","home")
homeSection.innerHTML =
`     <h3>HI THERE !</h3>
<h1>I'M <span>Jaganath G</span></h1>
<p>Creative and responsible Mathematics undergraduate student passionate about programming and looking for exciting opportunities to learn,grow and gain experience in the field of Full Stack Developing. </p>
<a href="#about"><button class="btn">about me <i class="fas fa-user"></i></button></a>`
document.body.appendChild(homeSection)