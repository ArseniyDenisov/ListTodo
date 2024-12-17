<template>
 
 <main flex style="padding-top: 200px;">
        <h1>
             <span style="color: White;">Авторизация </span> 
        </h1>
        <form id="myForm">
          
            <p style="color: white;">
                <label for="login;">Login:</label>
            </p> 
                
                <input v-model="email" type="email" id="login"  required style="width: 300px; height: 50px; border-radius: 15px;">
            
            <p style="color: white;">
                <label for="password">Password</label>
            </p>
            <input v-model="password" type="password" id="password" required  style="width: 300px; height: 50px; border-radius: 15px;">
            
            <div style="white-space: nowrap;">
               
                
                <label>
                    <input type="checkbox">
                    <span class="custom-checkbox"></span>
                </label>
                <label style="color: white;" for="privacy" >Запомнить меня</label>
            </div>
             
            <button type="button" @click="login" style="width: 200px; height: 50px; border-radius: 15px; color: #ffffff; background: #5D5FEF;">Отправить</button>
            <button @click="goToNewPage">Открыть новую страницу</button>
            <div v-if="showSuccess" class="success-modal">
              Успешный вход!
            </div>


        </form>

    </main>

 
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: null,
      password: null,
      error: ''
    };
  },
  methods: {
    // Отврака на нью страницу
    goToNewPage() {
      this.$router.push('/Todo');
    },

    async login() {
    console.log(this.email, this.password)
      try {
        // Отправляем данные логина/пароля
        const response = await axios.post('https://todo-list.edu-playground.ru/api/v1/auth/signin', {
        "formData": {
        "email": this.email,
        "password": this.password
          }
        });
        

        // Сохраняем токен в localStorage
        const token = response.data.token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // Перенаправляем (или обновляем свэггер UI)
        this.$router.push('/dashboard');
      } catch (error) {
        this.error = 'Неверный логин или пароль';
      }
    }
  }
};



// import axios from "axios";
// export default {
//   name: "App",
//   data() {
//     return
//     {
//       email: null;
//       name: null;
//       error: "";
//     }
//   },
//   async created() {
//     this.email = await axios.post(
//       "https://todo-list.edu-playground.ru/api/v1/auth/signin",
//       {
//         formData: {
//           name: "ganeFFFFFFFFFFFF",
//           email: "gfffffff@guest.com",
//           password: "gfffff",
//         },
//       }
      
//     );

    
//     this.user = await axios.post(
//       "https://todo-list.edu-playground.ru/api/v1/auth/signin",
//       {
//         formData: {
         
//           email: "gfffffff@guest.com",
//           password: "gfffff",
//         },
//       }
//     );
//     console.log(this.user.data.userId)

//     await axios.get(
//       `https://todo-list.edu-playground.ru/api/v1/user/${this.user.data.userId}/boards`,{ headers: {
//         'x-Base-Auth': this.user.data.token
//       }});
      
    

//     console.log(this.data);
//   },
  
// };
</script>

<style>
* {
    box-sizing: border-box;
}

body,html {
    margin: 0;
    padding: 0;

}
body {
    background: #2B1887;

}
h1 {
    font-family: Montserrat;
    font-size: 45px;
    font-weight: 500;
    line-height: 54.86px;
    text-align: center;
    
}

form {
    width: 39px;
    height: 20px;
    top: 284px;
    left: 502px;
    gap: 0px;
    opacity: 0px;
    font-family: Lexend Deca;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;  
    padding-left: 900px;
    flex: auto; 
}
  

.horizontal-line {
       
    width: 1280px;
    height: 111px;
    top: 609px;
    gap: 0px;
    opacity: 0px;
    background: #E5E5E521;
    border: 1px solid #000000

  }

.horizontal-line2 {
       
    width: 1280px;
    height: 111px;
    top: 609px;
    gap: 0px;
    opacity: 0px;
    background: #20DF7F17;
    border: 1px solid #000000

  }

 
input[type="checkbox"] {
    display: none; /* Скрыть стандартный checkbox */
  }

.custom-checkbox {
    width: 15px;
    height: 15px;
    background-color: #5D5FEF; /* Цвет по умолчанию */
    border: 4px solid #5D5FEF;
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

 input[type="checkbox"]:checked + .custom-checkbox {
    background-color: #4144f2; /* Цвет при выборе */
    border-color: #474aef;
  }

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent; /* Цвет фона для отмеченного состояния */
  }
   
</style>
