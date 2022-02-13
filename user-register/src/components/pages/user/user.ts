import { loginUser } from "../../api/api";
import { Register } from "../register/register";


export class User {
    private container: HTMLElement;
    private register: Register
    constructor(id:string){
        this.container = document.createElement('div')
        this.container.id = id;
        this.register = new Register('register')
    }
    private User(text:string){
        const userCross = document.createElement('span')
        userCross.className = 'user__exit'
        userCross.innerHTML = 'X'
        this.container.append(userCross)
        
        userCross.addEventListener('click', (event)=>{
            console.log(event.target)
            const user = document.getElementById('user')
            user.remove()
        })
        

        const userHeaderBox = document.createElement('div')
        userHeaderBox.className = 'user__header-box'
        this.container.append(userHeaderBox)

        const userHeader = document.createElement('p') as HTMLElement
        userHeader.textContent = 'login'
        userHeader.className = 'user__header'
        userHeaderBox.append(userHeader)

        const userText = document.createElement('p') as HTMLElement
        userText.textContent = 'Look at the world in a new way - RSLang'
        userText.className = 'user__text'
        userHeaderBox.append(userText)

        const userBox = document.createElement('div') as HTMLElement
        userBox.className = 'user__box'
        this.container.append(userBox)

        const userEmailBox = document.createElement('div')
        userEmailBox.className = 'user__input-box'
        
        const userEmail = document.createElement('input') as HTMLInputElement
        userEmail.type = 'email'
        userEmail.id = 'email'
        userEmail.className = 'user__email'
        userEmail.placeholder = 'example@gmail.com'
        const userEmailTitle = document.createElement('label') as HTMLLabelElement
        userEmailTitle.htmlFor = 'email'
        userEmailTitle.innerHTML = 'Email:'
        userEmailBox.append(userEmailTitle, userEmail)

        const userPassBox = document.createElement('div')
        userPassBox.className = 'user__input-box'
        
        const userPass = document.createElement('input') as HTMLInputElement
        userPass.type = 'password'
        userPass.id = 'password'
        userPass.className = 'user__password'
        userPass.placeholder = '************'
        userPass.minLength = 8
        const userPassTitle = document.createElement('label') as HTMLLabelElement
        userPassTitle.htmlFor = 'password'
        userPassTitle.innerHTML = 'Password:'
        userPassBox.append(userPassTitle, userPass)
        userPass.value = localStorage.getItem('UserPass');
        userPass.oninput = () => {
          localStorage.setItem('UserPass', userPass.value)
        };
        userEmail.value = localStorage.getItem('UserEmail');
        userEmail.oninput = () => {
          localStorage.setItem('UserEmail', userEmail.value)
        };

        
        

        userBox.append(userEmailBox, userPassBox)
        
        const userBtn = document.createElement('div') as HTMLElement
        userBtn.className = 'user__btn'
        this.container.append(userBtn)

        const signIn = document.createElement('button') as HTMLButtonElement
        signIn.className = 'sign__in'
        signIn.innerHTML = 'Login'
        
        signIn.addEventListener('click', async()=>{
            const userArr = {email: userEmail.value, password: userPass.value}
            const a = await loginUser(userArr)
            localStorage.setItem('SignInUser', JSON.stringify(a))
        })

        const register = document.createElement('button') as HTMLButtonElement
        register.className = 'register'
        register.innerHTML = 'Register'

        userBtn.append(signIn, register)

        register.addEventListener('click', ()=>{
            const user = document.getElementById('user')
            user.remove()
            const Register = this.register.render()
            document.body.append(Register)
            console.log(1)
        })

    }
    render() {
        this.User('user')
        return this.container
    }
}