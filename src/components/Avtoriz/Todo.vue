<template>
  <router-link to="/">Вернуться на главную</router-link>
        <main class="kanban">
    <section class="kanban__column kanban__column--to-do">
      <h2 class="kanban__title">Задачи</h2>
      <div class="rectangle">
        <h2 class="Name_">To-Do</h2>
        <div class="restangleW" >
          
            <span class="Fri">Fri</span>
            <p class="Hueta" style="background-color: #ECB800"></p>
            <p class="Hueta2" style="background-color: #ECB800"></p>
            <p class="Hueta3" style="background-color: #D9D9D9"></p>
          
        <p class="data" id="current-date"></p>
        <h1 class="Create">Create wireframes </h1>
        </div>
        <div class="restangleW" >
          
            <span class="Fri">Wed</span>
            <p class="Hueta" style="background-color: #ECB800"></p>
            <p class="Hueta2" style="background-color: #ECB800"></p>
            <p class="Hueta3" style="background-color: #D9D9D9"></p>
          
        <p class="data" id="current-date">.</p>
        <h1 class="Create">Create light and dark mode </h1>
        </div>

      </div>
    </section>
    
    <section class="kanban__column kanban__column--in-progress">
      <h2 class="kanban__title">В процессе</h2>
            <h1>Введите текст:</h1>
            <input type="text" id="textInput" placeholder="Введите ваш текст">
            <button onclick="displayText()">Показать текст</button>
        
            <h2>Вывод:</h2>
            <p id="outputText"></p>
        
            <script>
                function displayText() {
                    // Получаем значение из текстового поля
                    const text = document.getElementById('textInput').value;
                    // Находим элемент для вывода текста и обновляем его содержимое
                    document.getElementById('outputText').innerText = text;
                }
            </script>
            
    </section>
    
    <section class="kanban__column kanban__column--done">
      <h2 class="kanban__title">Выполнено</h2>

        <div class="rectangle">
            <h2 class="Name_">Done</h2>
            <div class="restangleW" >
            
                <span class="Fri" style="background-color: #E42C5F;">Mon</span>
                <p class="Hueta" style="background-color: #E42C5F"></p>
                <p class="Hueta2" style="background-color: #E42C5F;"></p>
                <p class="Hueta3" style="background-color: #D9D9D9"></p>
            
                <p class="data" id="current-date"></p>
                <h1 class="Create2">Wire up the new user flow </h1>
            </div>
            <div class="restangleW"  >
            
                <!-- <span class="Fri" ></span> -->
                <p class="Hueta4" style="background-color: #E42C5F;"></p>
                <p class="Hueta5" style="background-color: #E42C5F;"></p>
                <p class="Hueta6" style="background-color: #E42C5F;" ></p>
            
                <p class="data" id="current-date">.</p>
                <h1 class="Create3">Create light and dark mode </h1>
            </div>

        

        
        </div>
    </section>
  </main>
  <footer class="footer">
    <p class="footer__text">To-Do-List-Kanban</p>
  </footer>
    
</template>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        const currentDateElement = document.getElementById('current-date');
        if (currentDateElement) {
            const today = new Date();
            const formattedDate = today.toLocaleDateString('ru-RU'); // Форматируем дату для русского языка
            currentDateElement.textContent = formattedDate;
        }
    });

    document.getElementById('showTextButton').onclick = function() {
        // Получаем текст из текстового поля
        const text = document.getElementById('textInput').value;
        // Отображаем текст в элементе с классом output
        const outputElement = document.querySelector('.output');
        outputElement.innerText = text;
    };
    export default {};


</script>

<style>
@media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}

@media (min-width: 1400px) {
    .container {
        max-width: 1320px;
    }
}

@media screen and (min-width: 640px) {
    .kanban__column {
        flex: 0 0 calc(33.333% - 20px);
    }
}

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900;9..40,1000&display=swap');
@import './component/_header.css';
@import './component/_kanban.css';
@import './_media.css';



* {
  font-family: 'DM Sans', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: white;
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header,
footer {
  background-color: gray;
  text-align: center;
  padding: 10px 0;
}

.header__title,
.footer__text {
  margin: 0;
  padding: 10px 0;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.rectangle {
  background: #D5CCFF;
  width: 620px;
  height: 350px;
  padding: 24px 24px 24px 24px;
  gap: 24px;
  border-radius: 16px 16px 16px 16px;
  opacity: 0px;
}

.Name_{
  font-family: DM Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 41.66px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #2B1887; 
}

.restangleW {
  background: #ffffff;
  width: 570px;
  height: 100px;
  padding: 24px 24px 24px 24px;
  gap: 24px;
  border-radius: 16px 16px 16px 16px;
  opacity: 0px;
  margin-top  : 10px;
}

.Fri {
  width: 33px;
  height: Hug (35px)px;
  top: 30px;
  left: 0%;
  padding: 8px 8px 8px 8px;
  gap: 8px;
  border-radius: 8px 8px 8px 8px;
  opacity: 0px;
  background: #ECB800;
  margin-top: 20px;
  position: relative;
 

}


.Create{
  font-family: DM Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 31.25px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: black;
  position: relative;
  top: -115px; 
  left: 0%; 
}

.Create2{
  font-family: DM Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 31.25px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: black;
  position: relative;
  top: -75px; 
  left: 0%; 
}

.Create3{
  font-family: DM Sans;
  font-size: 24px;
  font-weight: 700;
  line-height: 31.25px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: black;
  position: relative;
  top: -95px; 
  left: 0%; 
}

.Hueta{
  width: 10px;
  height: 10px;
  padding: 12px 25px 0px 0px;
  gap: 16px;
  border-radius: 0px 10px 10px 40px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  /* background-color: #ECB800;   */
  position: relative;
  top:  15px;
  left: 60px;
}

.Hueta2 {
  width: 10px;
  height: 10px;
  padding: 12px 25px 0px 0px;
  gap: 16px;
  border-radius: 0px 10px 10px 40px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  /* background-color: #ECB800;   */
  position: relative;
  top: 3px;
  left: 95px;
}
.Hueta3 {
  width: 10px;
  height: 10px;
  padding: 12px 25px 0px 0px;
  gap: 16px;
  border-radius: 0px 10px 10px 40px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  /* background-color: #D9D9D9; */
  
  position: relative;
  top: -9px;
  left: 130px;
}

.Hueta4{
  width: 10px;
  height: 10px;
  padding: 12px 25px 0px 0px;
  gap: 16px;
  border-radius: 0px 10px 10px 40px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  /* background-color: #ECB800;   */
  position: relative;
  top:  30px;
  left: 0px;
}

.Hueta5{
  width: 10px;
  height: 10px;
  padding: 12px 25px 0px 0px;
  gap: 16px;
  border-radius: 0px 10px 10px 40px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  /* background-color: #ECB800;   */
  position: relative;
  top:  18px;
  left: 35px;
}

.Hueta6{
  width: 10px;
  height: 10px;
  padding: 12px 25px 0px 0px;
  gap: 16px;
  border-radius: 0px 10px 10px 40px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  /* background-color: #ECB800;   */
  position: relative;
  top:  6px;
  left: 70px;
}

.data{
  font-family: DM Sans;
  font-size: 32px;
  font-weight: 100;
  line-height: 41.66px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color:  #2B1887;
  position: relative;
  left: 400px;
  top: -30px;
}

.data2{
  font-family: DM Sans;
  font-size: 32px;
  font-weight: 100;
  line-height: 41.66px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color:  #2B1887;
  position: relative;
  left: 400px;
  top: -65px;
}
.data3{
  font-family: DM Sans;
  font-size: 32px;
  font-weight: 100;
  line-height: 41.66px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color:  #2B1887;
  position: relative;
  left: 400px;
  top: -65px;
}
.data4{
  font-family: DM Sans;
  font-size: 32px;
  font-weight: 100;
  line-height: 41.66px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color:  #2B1887;
  position: relative;
  left: 400px;
  top: -65px;
}
</style>