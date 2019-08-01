import React, {Component}      from 'react';
import './App.css';
import LoginPage               from "./components/login/LoginPage";
import {observer}              from "mobx-react";
import {authenticationStore}   from "./stores/AuthenticationStore";
import {Route, Router, Switch} from "react-router-dom";
import DashboardPage           from "./components/dashboard/DashboardPage";
import {createBrowserHistory}  from "history";
import {syncHistoryWithStore}  from 'mobx-react-router';
import {routerStore}           from "./stores/RouterStore";
import ExperimentEditor        from "./components/editor/ExperimentEditor";

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routerStore);

@observer
class App extends Component {

    async componentDidMount() {
        await authenticationStore.rehydrateSession();
    }

    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route path="/dashboard" component={DashboardPage}/>
                        <Route path="/editor/:uuid" component={ExperimentEditor}/>
                    </Switch>
                </Router>
            </div>
        );
    }

}


export default App;
