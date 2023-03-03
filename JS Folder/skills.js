const skillsSection = document.createElement('section')
skillsSection.setAttribute("id","skills")
skillsSection.setAttribute("class","skills")
skillsSection.innerHTML = `
<h1 class="heading"><span>skills </span>& tools</h1>
 <div class="skillsList" >
   <div class="skill">
       <img src="https://i.pinimg.com/564x/70/69/40/706940fc27a2eb4a360f6f773db82296.jpg" alt="React">
       <p class="mern">React</p>
   </div>
   <div class="skill">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEX///8AAAD8/Pz09PT39/fx8fHk5OSQkJBvb2/5+fl9fX3h4eFISEjo6Oje3t7s7OzHx8c9PT2lpaXT09O7u7uurq5RUVGAgIBsbGwiIiLBwcGcnJzW1taoqKgQEBCKioowMDBhYWFZWVmVlZUbGxszMzNDQ0MVFRUnJydMTExWVlb0/vn8+f///fituLDh38zcjnjQaUXivbDOxMbbkG3mrZrchWT24dZZXln/8OjaWyLq7eTukmnhtZvmZTX83MrmXT48SFX/8Nuxfmre9nyuAAAHPElEQVR4nO3deZujth0HcB3cmMMIAQZsjI/ZsWcnTZukbXqlx/t/T5HAHJ7slTZjz/b5fvZ5bBCC0Q8JSfgPLSEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvzl27wJ8AVVGw+Tj9jy9/2BMZzHYcLjb6I+y7ovz6dw+obsem67DTYPc72641ZJSeqx0GYjI0ulI2YaE5CohyFcqy0Pi9unSVh+B9HJd5rp4R+mmjcezQk9nXnlhv8tUwqNK2NrBrSK6woig1JNx6lEqdMKOlmNRaas+NzaRdFvFInXopu4OeEditpTucrXt0Md9Wa4zujP6SnIobdK43K+o3V/Godt9KVL7QJNbR9eJadu30OhEdT2wFTX7I+5hpUt8qGIq+5TgSH397T1EdNNlJufhWEy3XQ3vxzi6LUZsOrSKRm3dvqFG1Bm3H7rYQpr1lVH04azyqVbdx63+8o7HBx0OU1GI4fGq+yvpz0sYBe0S8jFht7lDhM5m+psBbXQJJK1UF6K++trZ0mLKLroKyemBd2U16X46tqeBTpGzzKG+heP9ISW9/aPIVYGmEItNd7s9XTHhULlbWs9OWJ6IjvDS3BLKp0ORbpVc3Z4xYaUiNGYhWwf/VaL4lJJGs72UWt33kZrs3fYS+SN1Z1nWuiXnw6N6aucXW+i9M50NFNpSX4jdbdhs6Hwv6vsa1VxbRwXbl+rxYZ4l1Fm8x8verMIU+6A+LEr34fUZK2n91uX+crvN3p40fbfHVNXqp6ePcOXNT3B1o/OW/U5Ez94kf+huF68O9J2TWmS4QGSr0dGRt2+gnRPNFpPT4jJu9xH2Ds3VGfphGyL06fG0OA0W2dLo0+t8Q+nBE+OsRuRqVnDI7zHkZ8sXCV2ZAloU4wO6cubHX9RhSj4iWO9o3zVfwrSkmiN8NPvryTeznbE4y4PL6HJ4DrP5Cf1zONyXl7OUqw7FcFTeeS9jOPT2D6QcesVO0HYVl+txTOiRWnt8Nz9hret2jHB7Vb9r1e+U82nLSo2kZTlL2Fw90zfhXzWchvKum1n305Wyu/1bOu8jFkcyi7Chs0rjqlWqsXTcZ8R51FOKWYTO4jWC+LTT46xpqUGeqYfrMshlqrq6CGcVJbrxe4wwnDfTRN+KlI5DBSPFUVf6NKch7ek1Yvi0emiMRL8E6M5uOYzwJu0CeTzQ8c2IH/SQN0aoamkKqJ8Esc3Ud3H9dmHQaVIR3eXtoqJOP/Myi67FNv1LlFbqZqfGw2aYeNWrfgY31iFxj0MVxVSNFUx/Ly6Dgv9AeTfNPVyu6B838+nRjTDVrtT7oUxaPQTqvWZ6N+9iVqOFTVd2Gqv+f9XXmHccz3YLuqzKOFnQ1uhPjDd0t47j5EyXVteRqj/QpmFYqpzRPV7zGWEyU6/g2bobrvdyfjCx+/HQavTPALuhVyrnmer8qOcsYkopHfVOv/XG9ypX7rqX/lmWu/nQBPl6xP96sfnvRlfpQ4Rsduj6Byv2Molcfq0iHzzhzfl/qcOPQ4RfP9p+Ps/XjBGTfz4XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8eay+rPfZrY/HXD8MXDMMSegHQeiTwIo4j7krLMGFS/zZgqRMnRhZepFEzohbh3dYQfCLmHEshOXHcSr82E+tdWLLpIxJVSVlUgZJKtMkrM1GVFUTEWnFdRzHYZzWwk1jMw3r0lenCiJiEb/NGM2yLNMkkX4lZGILax2lUsrGTMx4X8kg3oukTCszqWW0jomKaO8LkVRpLY0qEH4qwySs1qUrw7W44xLQn8AsNzINw3V5YFjcUk3PZC43CScGjyLCuWuQgLEgcnU75sRXWQ1uGWZATNcwI8ONktCI3MCM77T68+dc/suKfk1hxqb1Acd09qH1B8c0teG+PPjWmUKVWwxrmjHXJU/v3Sf2/ETMNO3WKu0XkF7fde31/4WxUP1GRoJQBRBGxPvm/e++/f0fWPQUnKtqTczQIMTySb0j5n3+j45fyY3U8xWpBy8iAefqMQxI4pE8lY63NwrnnLbtd9//8MMf/7T4s8xkQPzWbnnleYlfWGe9HK8IiR+SKOCR+dk/dhdmEZ14EXh+G3mhLTy/IeZJnM1zlWTSIwZpyh//8tfgb38/1SSs2n3lyUJmSZKFu7NeuLXar+O8SXO7aIo3GqJdeZUknvosiWd7lSCkySrSJmqE21kyapKnf/z0/M8f/xVxGaWtdMKU76QQYZZkKqRCXcHnTcP2QfUWFp39AJH5DxFJ23rhkrUXn4lthoVFrMZJSeo0vHa++fe33//nOyfilZOHJCls18+d2MpJYvMmLvLacURu7K23GqEeAdXjyNUISFxDjXjG2D+OG+9J1BqzU6Yvl3BXnaYmbvrfzQr9X3pZwMv+8/MzY79cRvfNh/MrvGfk6d5leF3P5CubswDcxM/dZmIhVVgNYQAAAABJRU5ErkJggg==" alt="Express">
    <p class="mern">Express</p>
   </div>
   <div class="skill">
    <img src="https://i.pinimg.com/236x/5d/2c/17/5d2c177bca17faec6232064e9fafde0e.jpg" alt="HTML">
    <p>HTML</p>
   </div>
   <div class="skill">
    <img src="https://i.pinimg.com/236x/e4/3e/4c/e43e4cd41ddffc21d2e6600dfca20306.jpg" alt="CSS">
    <p>CSS</p>
   </div>
   <div class="skill">
    <img src="https://i.pinimg.com/564x/3d/43/02/3d43022040cff5074ebe1cd483fcdfe4.jpg" alt="Javascript">
    <p>Javascript</p>
   </div>
   <div class="skill">
    <img src="https://i.pinimg.com/236x/92/d6/60/92d660adb69ff63b4d133cda9592d848.jpg" alt="Bootstrap">
    <p>Bootstrap</p>
   </div>
   <div class="skill">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwPgogSPXAsvvPq7ze4wL-kDW48h10A6hvw&usqp=CAU" alt="MongoDB">
    <p class="mern">Mongo DB</p>
   </div>
   <div class="skill">
    <img src="https://i.pinimg.com/236x/af/c8/cd/afc8cde9ebaa565af1b802b6c3f3f530.jpg" alt="Nodejs">
    <p class="mern">NodeJS</p>
   </div>
   <div class="skill">
    <img src="https://i.pinimg.com/236x/e4/9d/a7/e49da7a0eeedfa732124d9aabeae3062.jpg" alt="MUI">
    <p>MUI</p>
   </div>   
   <div class="skill">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCF4b1qAlo6FG34YuKHQe_rwXGdHSjyVqZ9Q&usqp=CAU" alt="Postman">
    <p>Postman</p>
   </div>
   <div class="skill">
    <img src="https://i.pinimg.com/236x/a9/d0/ec/a9d0ecdc69a7a13d5d63675ff4d655c1.jpg" alt="SQL">
    <p >SQL</p>
   </div>
   <div class="skill">
    <img src="https://i.pinimg.com/236x/1a/8a/19/1a8a19e550676f7728f3f8441e9b7684.jpg" alt="Git">
    <p >Git</p>
   </div>

 </div>
`
document.body.appendChild(skillsSection)