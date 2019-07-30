import {action, observable, when} from "mobx";
import {StorageService}           from "../services/StorageService";
import {routerStore}              from "./RouterStore";


class AuthenticationStore {

    constructor() {
        when(
            () => this.token !== null,
            () => routerStore.history.push("/dashboard")
        );
    }

    @observable token: string | null = null;

    @action rehydrateSession = async () => {
        const token = await StorageService.getItem("authToken");
        if(token) {
            this.token = token;
        }
    }

}

export const authenticationStore = new AuthenticationStore();