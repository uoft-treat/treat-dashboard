import {action, observable}  from "mobx";
import {TreatService}        from "../../services/TreatService";
import {authenticationStore} from "../../stores/AuthenticationStore";
import {StorageService}      from "../../services/StorageService";

class LoginStore {

    @observable formValue: { [key: string]: string } = {
        username: "",
        password: "",
    };

    @observable lastError: any = null;

    @action attemptLogin = async () => {
        this.lastError = null;
        console.log("Trying to login with credentials", this.formValue.username, this.formValue.password);
        try {
            const response = await TreatService.mutate(`
                mutation($username: String!, $password: String!) {
                    createUserToken(username: $username, password: $password) {
                        body
                    }
                }
            `, {
                username: this.formValue.username,
                password: this.formValue.password,
            });
            await StorageService.setItem("authToken", response.createUserToken.body);
            authenticationStore.token = response.createUserToken.body;
        } catch (e) {
            this.lastError = e;
        }
    };

}

export const loginStore = new LoginStore();
