import {action, observable, reaction} from "mobx";
import {StorageService}                     from "../services/StorageService";
import {routerStore}                        from "./RouterStore";


class AuthenticationStore {

    constructor() {
        reaction(
            () => this.token,
            () => {
                if(this.token) {
                    routerStore.history && routerStore.history.push("/dashboard")
                } else {
                    routerStore.history && routerStore.history.push("/login")
                }
            }
        );
    }

    @observable token: string | null = null;

    @action rehydrateSession = async () => {
        const token = await StorageService.getItem("authToken");
        if(token) {
            this.token = token;
        }
    };

    @action logout = async () => {
        if(window.confirm("Are you sure you wish to logout?")) {
            this.token = null;
            await StorageService.removeItem("authToken");
        }
    }

}

export const authenticationStore = new AuthenticationStore();