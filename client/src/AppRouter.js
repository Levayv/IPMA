import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LessonList from "./redux/container/LessonList";
import LessonCreate from "./redux/container/LessonCreate";
function Index() {
    const myStyle = {
        // fontSize: 24,
        // lineHeight: '1.3em',
        // fontWeight: 'bold',
    };
    return <h2 style={myStyle}>Home sweet Home</h2>;
}

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav
                        className={"router-nav-main"}
                    >
                        <ul>
                            <li><Link to="/">
                                <div>
                                    <span>Main</span> <span>Dashboard</span>
                                </div>
                            </Link></li>
                            <li><Link to="/lessons/">
                                <div>
                                    <span>Lesson</span> <span>List</span>
                                </div>
                            </Link></li>
                            <li><Link to="/lesson-details/">
                                <div>
                                    <span>Lesson</span> <span>Details</span>
                                </div>
                            </Link></li>
                            <li><Link to="/lesson-create/">
                                <div>
                                    <span>Lesson</span> <span>Create</span>
                                </div>
                            </Link></li>
                            <li><Link to="/lesson-edit/">
                                <div>
                                    <span>Lesson</span> <span>Edit</span>
                                </div>
                            </Link></li>
                            {/*<li><Link to="/lesson-delete/">*/}
                            {/*    <div>*/}
                            {/*        Lesson Delete*/}
                            {/*    </div>*/}
                            {/*</Link></li>*/}
                        </ul>
                    </nav>

                    <Route path="/" exact component={Index}/>
                    <Route path="/lessons/" component={LessonList}/>
                    <Route path="/lesson-details/" component={LessonCreate}/>
                    <Route path="/lesson-create/" component={LessonCreate}/>
                    <Route path="/lesson-edit/" component={LessonCreate}/>
                    {/*<Route path="/lesson-delete/" component={LessonCreate}/>*/}
                </div>
            </Router>
        );
    }
}

export default AppRouter;