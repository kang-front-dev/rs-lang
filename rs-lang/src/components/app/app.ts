// import { Register } from "../pages/register/register";
import { User } from "../pages/user/user";
export class App{
    private container: HTMLElement;
    private user: User;

    constructor(){
        this.container = document.body
        this.user = new User('user')
    }
    run(){
        const User = this.user.render()
        this.container.append(User)
    }
}