import React, {Component} from "react";
import {connect} from "react-redux";
import uuidv1 from "uuid";
import * as PropTypes from "prop-types";
import DumbList from "../container/ListDumb"
import Api from "../api/apiTemp"
import {crud_read_all} from "../action/index";

// todo add mapStatetoProps

class ConnectedList extends Component {
    constructor(props) {
        super(props);
        console.debug("ConnectedList.constructor()");
        // console.debug("creating object Number " + ConnectedList.count++);
        this.api = new Api(process.env.REACT_APP_BACKEND_IP_PORT);
        this.job = this.job.bind(this);
    }

    static count = 0;

    componentDidMount() {
        console.debug("ConnectedList.componentDidMount()");
        let x = this.api.doAfterFetch(this.job)
    }

    job(isSuccess) {
        console.debug("ConnectedList.job()");
        if (isSuccess) {
            console.log("HOORAY! ++ ");
        } else {
            console.log("HOORAY! -- ");
        }
        console.debug(crud_read_all);

        this.props.crud_read_all(
            {
                something: ["something_nice" , "something_nicer"]
            })
    }

    render() {
        console.debug("ConnectedList.render()");
        // let {lessons} = this.props;
        let {lessons} = {lessons: ["l1", "l2"]};
        return (
            <DumbList/>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        crud_read_all: something => dispatch(crud_read_all(something))
    };
}

// function mapStateToProps(state) {
//     return {lessons: state.lessons};
// }
const mapStateToProps = state => {
    return {something: state.something};
};
ConnectedList.propTypes = {something: PropTypes.any};
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;