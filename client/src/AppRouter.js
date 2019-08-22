import React, {Component} from "react";
import {
    Router,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import history from "./history";
import LessonList from "./modules/lesson/list/LessonList";
import LessonCreate from "./modules/lesson/form/LessonCreate";
import LessonDelete from "./modules/lesson/archive/LessonDelete";

class AppRouter extends Component {
    constructor(props) {
        super(props);
        // this.myRef = 
    }

    render() {
        //todo refactor (id for getElementbyID) >> (ref)
        return (
            <Router history={history}>
                <div>
                    <button
                        onClick={() => {
                            console.log(Date.now());
                        }}> KILLSWITCH
                    </button>
                    <nav
                        className={"router-nav-main"}
                    >
                        <ul>
                            <li id={"router-nav-dashboard"}><Link to="/">
                                Dashboard
                            </Link></li>
                            <li id={"router-nav-list"}><Link to="/lesson/list">
                                List
                            </Link></li>
                            <li id={"router-nav-form"}><Link to="/lesson/form">
                                Form
                            </Link></li>
                            {/*<li onClick={() => {*/}
                            {/*    alert("Please use edit button inside List of Lessons")*/}
                            {/*}}>*/}
                            {/*    Edit*/}
                            {/*</li>*/}
                            <li id={"router-nav-edit"}><Link to="/lesson/edit">
                                Edit
                            </Link></li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/lesson" component={Lesson}/>
                    <Route path="/blog" component={Blog}/>

                    {/*<Route path="/lesson/" component={LessonList}/>*/}
                    {/*<Route path="/lesson/form/" component={LessonCreate}/>*/}
                    {/*<Route path="/lesson/edit/:id" component={LessonCreate}/>*/}
                </div>
            </Router>
        );
    }
}

function Dashboard() {
    return <h2 style={{
        width: "80%",
        margin: "auto",
        textAlign: "center"
    }}>Home sweet Home</h2>;
}

function Lesson({match}) {
    return (<div>
        <Route exact path={`${match.path}/list/`} component={LessonList}/>
        <Route exact path={`${match.path}/form/`} component={LessonCreate}/>
        <Route exact path={`${match.path}/edit/`}
               render={() => {
                   alert("Please use edit button inside List of Lessons");
                   // history.push("/lesson/")
                   return (<Redirect to={{pathname: "/lesson/list",}}/>)
               }}/>
        <Route path={`${match.path}/edit/:recordID`} component={LessonCreate}/>
        <Route path={`${match.path}/delete/:recordID`} component={LessonDelete}/>
    </div>)
}

function Blog({match}) {
    return (<div style={{backgroundColor: "red"}}> Under construction </div>)
}

export default AppRouter;