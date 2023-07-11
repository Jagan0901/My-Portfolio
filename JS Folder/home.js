const homeSection = document.createElement('section')
homeSection.setAttribute("id","home")
homeSection.setAttribute("class","home")
homeSection.innerHTML = `     <h3>HI THERE !</h3>
<h1>I'M <span>Jaganath G</span></h1>
<h4><span>Full stack</span> developer</h4>
<p>Sincere and focused, <span>eager</span> to learn and work with new technologies in the field, <span>delight</span> to involve in projects that I work in, <span>love</span> to interact with the team to be a better team member.</p>
<a href="#about"><button class="btn">about me <i class="fas fa-user"></i></button></a>`;
document.body.appendChild(homeSection)