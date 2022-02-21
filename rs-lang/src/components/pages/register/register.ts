import { createUser } from "../../api/api";
import { User } from "../user/user";
import { checkOnProfile } from "../../../index";

export class Register {
    private registerSection: HTMLElement;
    private registerSectionBg: HTMLElement;
    private user: User;
    constructor(id:string){
        this.registerSection = document.createElement('div')
        this.registerSection.id = id;
        this.registerSectionBg = document.createElement('div')
        this.registerSectionBg.className = 'user__bg';
        this.registerSectionBg.append(this.registerSection)
    }
    private Register(text:string){

        const registerImg = document.createElement('img')
        registerImg.className = 'register__img'
        registerImg.src = 'assets/img/Website SignIn.png'
        this.registerSection.append(registerImg)

        const registerRight = document.createElement('div')
        registerRight.className = 'register__right'
        this.registerSection.append(registerRight)

        const userCross = document.createElement('i')
        userCross.className = 'far fa-times user__exit'
        registerRight.append(userCross)

        userCross.addEventListener('click', (event)=>{
            console.log(event.target)
            const register = document.querySelector('.user__bg')
            register.remove()
        })
        
        const registerHeader = document.createElement('div')
        registerHeader.className = 'register__header'
        registerRight.append(registerHeader)

        const registerMainText = document.createElement('p')
        registerMainText.className = 'register__main-text'
        registerMainText.innerHTML = 'welcome'


        registerHeader.append(registerMainText)

        const registerInputContainer = document.createElement('div')
        registerInputContainer.className = 'register__input-container'
        registerRight.append(registerInputContainer)

        const arr = ['Email', 'Name',]
        
        arr.forEach((elem)=>{
            const registerBox = document.createElement('div')
            registerBox.className = `register__box ${elem}`

            const regInput = document.createElement('input')
            regInput.className = `reg__input ${elem}`

            elem === 'Email' ? 
            regInput.placeholder = 'example@gmail.com' : elem ==='Name' ? regInput.placeholder = 'Name' : regInput.placeholder = 'Password'
            
            elem === 'Email' ? regInput.type = 'email' : elem === 'Name' ? regInput.type = 'text' : regInput.type = 'password'

            regInput.required = true
            regInput.autocomplete = 'on'
            

            registerBox.append(regInput)
            registerInputContainer.append(registerBox)

        })

        const registerBox = document.createElement('div')
        registerBox.className = 'register__box Pass'

        const regInput = document.createElement('input')
        regInput.className = `reg__input Pass`
        regInput.placeholder = 'Password'
        regInput.type = 'password'
        regInput.required = true
        regInput.autocomplete = 'on'
        registerBox.append(regInput)
        registerInputContainer.append(registerBox)

        const registerBoxRe = document.createElement('div')
        registerBoxRe.className = 'register__box Repass'

        const regInputRe = document.createElement('input')
        regInputRe.className = `reg__input Repass`
        regInputRe.placeholder = 'Confirm password'
        regInputRe.type = 'password'
        regInputRe.required = true
        regInputRe.autocomplete = 'on'
        registerBoxRe.append(regInputRe)
        registerInputContainer.append(registerBoxRe)

        regInputRe.oninput = () => {
            regInputRe.value === regInput.value ? regInput.disabled = false : regInputRe.value === '' ? regInput.disabled = false : regInput.disabled = true
          };



        const userBtn = document.createElement('div') as HTMLElement
        userBtn.className = 'user__btn reg'
        registerRight.append(userBtn)

        const register = document.createElement('button') as HTMLButtonElement
        register.className = 'register reg user__btn-active'
        register.id = 'reg'
        register.innerHTML = 'Register'

        const signIn = document.createElement('button') as HTMLButtonElement
        signIn.className = 'sign__in reg'
        signIn.id = 'signin'
        signIn.innerHTML = 'Already have an account? Sign in'
        
        userBtn.append(register, signIn )

        signIn.addEventListener('click', ()=>{
            this.user = new User('user')
            const register = document.querySelector('.user__bg')
            register.remove()
            const signin = this.user.render()
            document.body.append(signin)
            console.log(1)
        })
        register.addEventListener('click', async()=>{
            
            const name:NodeListOf<HTMLInputElement> = document.body.querySelectorAll('.reg__input')
            const arr = {name: name[1].value, email: name[0].value, password: name[2].value}
            const a = await createUser(arr)
            localStorage.setItem('userRegistration', JSON.stringify(a))
            // checkOnProfile()
            this.registerSectionBg.remove()
        })

        
    }
    render() {
        this.Register('register')
        const val1 = document.body.querySelector('.reg__input.Pass')
        console.log(val1)
        return this.registerSectionBg
    }
}