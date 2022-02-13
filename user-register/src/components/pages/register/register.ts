import { createUser } from "../../api/api";
import { User } from "../user/user";


export class Register {
    private container: HTMLElement;
    private user: User;
    constructor(id:string){
        this.container = document.createElement('div')
        this.container.id = id;
    }
    private Register(text:string){
        const userCross = document.createElement('span')
        userCross.className = 'user__exit'
        userCross.innerHTML = 'X'
        this.container.append(userCross)

        userCross.addEventListener('click', (event)=>{
            console.log(event.target)
            const register = document.getElementById('register')
            register.remove()
        })
        
        const registerHeader = document.createElement('div')
        registerHeader.className = 'register__header'
        this.container.append(registerHeader)

        const registerMainText = document.createElement('p')
        registerMainText.className = 'register__main-text'
        registerMainText.innerHTML = 'register'
        const registerText = document.createElement('p')
        registerText.className = 'register__text'
        registerText.innerHTML = 'register to RSLANG'

        registerHeader.append(registerMainText, registerText)

        const registerInputContainer = document.createElement('div')
        registerInputContainer.className = 'register__input-container'
        this.container.append(registerInputContainer)

        const arr = ['Email', 'Name',]
        
        arr.forEach((elem)=>{
            const registerBox = document.createElement('div')
            registerBox.className = `register__box ${elem}`

            const regLabel = document.createElement('label')
            regLabel.className = `reg__label ${elem}`
            regLabel.innerText = `${elem}:`

            const regInput = document.createElement('input')
            regInput.className = `reg__input ${elem}`

            elem === 'Email' ? 
            regInput.placeholder = 'example@gmail.com' : elem ==='Name' ? regInput.placeholder = 'write your name' : regInput.placeholder = '*************'
            
            elem === 'Email' ? regInput.type = 'email' : elem === 'Name' ? regInput.type = 'text' : regInput.type = 'password'

            regInput.required = true
            regInput.autocomplete = 'on'
            

            registerBox.append(regLabel, regInput)
            registerInputContainer.append(registerBox)

        })

        const registerBox = document.createElement('div')
        registerBox.className = 'register__box Pass'
        const regLabel = document.createElement('label')
        regLabel.className = `reg__label Pass`
        regLabel.innerText = `Password:`
        const regInput = document.createElement('input')
        regInput.className = `reg__input Pass`
        regInput.placeholder = '*************'
        regInput.type = 'password'
        regInput.required = true
        regInput.autocomplete = 'on'
        registerBox.append(regLabel, regInput)
        registerInputContainer.append(registerBox)

        const registerBoxRe = document.createElement('div')
        registerBoxRe.className = 'register__box Repass'
        const regLabelRe = document.createElement('label')
        regLabelRe.className = `reg__label Repass`
        regLabelRe.innerText = `Re-password:`
        const regInputRe = document.createElement('input')
        regInputRe.className = `reg__input Repass`
        regInputRe.placeholder = '*************'
        regInputRe.type = 'password'
        regInputRe.required = true
        regInputRe.autocomplete = 'on'
        registerBoxRe.append(regLabelRe, regInputRe)
        registerInputContainer.append(registerBoxRe)

        regInputRe.oninput = () => {
            regInputRe.value === regInput.value ? regInput.disabled = false : regInputRe.value === '' ? regInput.disabled = false : regInput.disabled = true
          };



        const userBtn = document.createElement('div') as HTMLElement
        userBtn.className = 'user__btn reg'
        this.container.append(userBtn)

        const register = document.createElement('button') as HTMLButtonElement
        register.className = 'register reg'
        register.id = 'reg'
        register.innerHTML = 'Register'

        const signIn = document.createElement('button') as HTMLButtonElement
        signIn.className = 'sign__in reg'
        signIn.id = 'signin'
        signIn.innerHTML = 'Login'
        
        userBtn.append(signIn, register)

        signIn.addEventListener('click', ()=>{
            this.user = new User('user')
            const register = document.getElementById('register')
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
        })

        
    }
    render() {
        this.Register('register')
        const val1 = document.body.querySelector('.reg__input.Pass')
        console.log(val1)
        return this.container
    }
}