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

class AppRouter extends Component {
    render() {
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
                            <li><Link to="/">
                                Dashboard
                            </Link></li>
                            <li><Link to="/lesson/">
                                List
                            </Link></li>
                            <li><Link to="/lesson/form">
                                Form
                            </Link></li>
                            {/*<li onClick={() => {*/}
                            {/*    alert("Please use edit button inside List of Lessons")*/}
                            {/*}}>*/}
                            {/*    Edit*/}
                            {/*</li>*/}
                            <li><Link to="/lesson/edit">
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
    return <h2>Home sweet Home</h2>;
}

function Lesson({match}) {
    return (<div>
        <Route exact path={match.path} component={LessonList}/>
        <Route exact path={`${match.path}/form/`} component={LessonCreate}/>
        <Route exact path={`${match.path}/edit/`} render={
            () =>{
                alert("Please use edit button inside List of Lessons");
                return (
                    <Redirect
                        to={{
                            pathname: "/lesson",
                        }}
                    />
                )
            }
        }/>
        <Route path={`${match.path}/edit/:recordID`} component={LessonCreate}/>
        
    </div>)
}

function Blog({match}) {
    return (<div style={{backgroundColor:"red"}}> Under construction </div>)
}

export default AppRouter;