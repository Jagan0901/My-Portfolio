const header = document.createElement('header')
header.innerHTML = `<div class="user">
    <img src="fas fa-user" alt="">
    <h3 class="name">Jaganath G</h3>
    <p class="post">Mathematical graduate</p>
</div>

<nav class="navbar">
    <ul>
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#certificates">certificates</a></li>
        <li><a href="#contact">contact</a></li>
    </ul>
</nav>`;
document.body.appendChild(header)
