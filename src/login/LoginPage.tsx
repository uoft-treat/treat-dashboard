import React, {Component}  from "react";
import {loginStore}        from "./LoginStore";
import {observer}          from "mobx-react";
import styled              from 'styled-components';
import {TextField, Button} from "@material-ui/core";

@observer
class LoginPage extends Component {

    render() {
        return (
            <FormContainer>
                <h1>TREAT</h1>
                <DefaultTextInput
                    label="Username"
                    name="username"
                    margin="normal"
                    variant="outlined"
                    value={loginStore.formValue.username}
                    onChange={this.onFormUpdate}
                />
                <DefaultTextInput
                    label="Password"
                    name="password"
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={loginStore.formValue.password}
                    onChange={this.onFormUpdate}
                />
                <Button href="#">
                    Login
                </Button>
            </FormContainer>
        )
    }

    onFormUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        loginStore.formValue[e.target.name] = e.target.value;
    }

}

const FormContainer = styled.div`
    background-color: azure;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 500px;
    padding: 30px;
`;

const DefaultTextInput = styled(TextField)`
  width: 100%;
`;

export default LoginPage;
