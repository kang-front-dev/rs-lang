import { loginUser } from "../../api/api";
import { Register } from "../register/register";


export class User {
    private userSection: HTMLElement;
    private userSectionBg: HTMLElement;
    private register: Register
    constructor(id:string){
        this.userSection = document.createElement('div')
        this.userSection.id = id;
        this.userSectionBg = document.createElement('div')
        this.userSectionBg.className = 'user__bg';
        this.register = new Register('register')
    }
    private User(text:string){

        this.userSectionBg.append(this.userSection)

        const userImg = document.createElement('img')
        userImg.className = 'user__img'
        userImg.src = 'assets/img/Website Login.png'
        this.userSection.append(userImg)

        const userRight = document.createElement('div')
        userRight.className = 'user__right'
        this.userSection.append(userRight)

        const userCross = document.createElement('i')
        userCross.className = 'far fa-times user__exit'
        userRight.append(userCross)
        
        userCross.addEventListener('click', (event)=>{
            console.log(event.target)
            const user = document.querySelector('.user__bg')
            user.remove()
        })
        

        const userHeaderBox = document.createElement('div')
        userHeaderBox.className = 'user__header-box'
        userRight.append(userHeaderBox)

        const userHeader = document.createElement('p') as HTMLElement
        userHeader.textContent = 'login'
        userHeader.className = 'user__title'
        userHeaderBox.append(userHeader)


        const userBox = document.createElement('div') as HTMLElement
        userBox.className = 'user__box'
        userRight.append(userBox)

        const userEmailBox = document.createElement('div')
        userEmailBox.className = 'user__input-box'
        
        const userEmail = document.createElement('input') as HTMLInputElement
        userEmail.type = 'email'
        userEmail.id = 'email'
        userEmail.className = 'user__email'
        userEmail.placeholder = 'example@gmail.com'
        userEmailBox.append(userEmail)

        const userPassBox = document.createElement('div')
        userPassBox.className = 'user__input-box'
        
        const userPass = document.createElement('input') as HTMLInputElement
        userPass.type = 'password'
        userPass.id = 'password'
        userPass.className = 'user__password'
        userPass.placeholder = 'password'
        userPass.minLength = 8
        userPassBox.append(userPass)

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
        userRight.append(userBtn)

        const signIn = document.createElement('button') as HTMLButtonElement
        signIn.className = 'sign__in user__btn-active'
        signIn.innerHTML = 'Login'
        
        signIn.addEventListener('click', async()=>{
            const userArr = {email: userEmail.value, password: userPass.value}
            const a = await loginUser(userArr)
            localStorage.setItem('SignInUser', JSON.stringify(a))
        })

        const register = document.createElement('button') as HTMLButtonElement
        register.className = 'register'
        register.innerHTML = `Don't have an account? Sign up`

        userBtn.append(signIn, register)

        register.addEventListener('click', ()=>{
            const user = document.querySelector('.user__bg')
            user.remove()
            const Register = this.register.render()
            document.body.append(Register)
            console.log(1)
        })

    }
    render() {
        this.User('user')
        return this.userSectionBg
    }
}