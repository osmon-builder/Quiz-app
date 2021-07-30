import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";



import { StartQuiz } from "../Components/StartQuiz";
import { Questions } from "../Components/Questions";



export const AppRouters = () => {
    return (
        <Router>
            <div>                
                <Switch>
                    <Route exact path="/" component={StartQuiz} />
                    
                    <Route exact path="/Questions" component = {Questions}/>
                </Switch>
            </div>
        </Router>
    );
}

