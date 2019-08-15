import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import * as PropTypes from "prop-types";
import DumbList from "../container/ListDumb"
import Api from "../api/apiTemp"
// import { addArticle } from "../actions/index";
// todo add mapStatetoProps

class ConnectedList extends Component {
    constructor(props) {
        super(props);
        // console.log("creating object Number " + ConnectedList.count++);
        this.api = new Api("http://localhost:8000/api/lesson/1");
        this.doAfterFetch = this.doAfterFetch.bind(this); 
    }
    static count = 0;

    componentDidMount() {
        console.log("ConnectedList.componentDidMount()");
        let x = this.api.doAfterFetch(this.doAfterFetch)
    }

    doAfterFetch(isSuccess) {
        if (isSuccess) {
            console.log("HOORAY! ++ ");
        } else {
            console.log("HOORAY! -- ");
        }
        
    }

    render() {
        console.log("ConnectedList.render()");
        // let {lessons} = this.props;
        let {lessons} = {lessons:["l1" , "l2"]};
        return (
            <DumbList/>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // addArticle: article => dispatch(addArticle(article))
    };
}

ConnectedList.propTypes = {lessons: PropTypes.any};
const List = connect(null, mapDispatchToProps)(ConnectedList);
export default List;