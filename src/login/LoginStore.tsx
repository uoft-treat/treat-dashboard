import {autorun, observable} from "mobx";

class LoginStore {

    @observable formValue: { [key: string]: string } = {
        username: "",
        password: "",
    };

    constructor() {
        autorun(() => console.log(this.formValue.username, this.formValue.password));
    }

}

export const loginStore = new LoginStore();
