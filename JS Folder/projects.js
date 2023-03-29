const projectSection = document.createElement('section')
projectSection.setAttribute("id","projects")
projectSection.setAttribute("class","projects")
projectSection.innerHTML =
`<h1 class="heading">my <span>Projects </span></h1>

<div class="box-container">

  <div class="box">
    <a href="https://mini-ott-application.netlify.app/" target="_blank"><img src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?size=338&ext=jpg&ga=GA1.2.1661719016.1671630009&semt=ais" alt=""></a>
    <h1>name : <span>OTT Application(format) </span></h1>
    <h1>Technologies used : <span>React, MongoDB, Express, NodeJS</span></h1>
    <h1>Concepts used: <span>all API methods, CRUD operations, JWT(for authentication) </span></h1>
    <h1>Github links:   
      
    <a href="https://github.com/Jagan0901/OTT-application.git" target="_blank"><p> front-End<i class="fa-brands fa-github"></i></p></a>
    <a href="https://github.com/Jagan0901/OTT-app-Back-end-.git" target="_blank"><p>: back-End<i class="fa-brands fa-github"></i></p></h1></a>
    
  </div>

  <div class="box">
    <a href="https://gold-calculator-india.netlify.app" target="_blank"><img src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?size=338&ext=jpg&ga=GA1.2.1661719016.1671630009&semt=ais" alt=""></a>
    <h1>name : <span>Gold Calculator India</span></h1>
    <h1>Technologies used : <span>React, MongoDB, Express, NodeJS</span></h1>
    <h1>Concepts used: <span> API methods, CRUD operations, JWT(for authentication) </span></h1>
    <h1>Github links:   
      
    <a href="https://github.com/Jagan0901/Gold-Calculator-Front-End.git" target="_blank"><p> front-End<i class="fa-brands fa-github"></i></p></a>
    <a href="https://github.com/Jagan0901/Gold-Calculator-Back-End.git" target="_blank"><p>: back-End<i class="fa-brands fa-github"></i></p></h1></a>
    
  </div>



</div>`
document.body.appendChild(projectSection);