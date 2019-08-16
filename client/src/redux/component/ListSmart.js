import React, {Component} from "react";
import {connect} from "react-redux";
import uuidv1 from "uuid";
import * as PropTypes from "prop-types";
import List_Table from "../container/List_Table"
import API from "../api/API"
import {crud_read_all} from "../action/index";
import {crud_read} from "../action/index";

class ConnectedList extends Component {
    constructor(props) {
        super(props);
        console.debug("ConnectedList.constructor()");
        // console.debug("creating object Number " + ConnectedList.count++);
        // this.api = new Api(process.env.REACT_APP_BACKEND_IP_PORT);
        this.job1 = this.job1.bind(this);
        this.job2 = this.job2.bind(this);
        // this.job = this.job.bind(this);
    }
    componentDidMount() {
        console.debug("ConnectedList.componentDidMount()");
        API.doAfterGet("lesson" ,1, this.job1);
        API.doAfterGet("lesson" ,2, this.job1);
        API.doAfterGet("lesson" ,3, this.job1);
    }
    job1(isSuccess , data) {
        console.debug("ConnectedList.job()");
        if (isSuccess) {
            console.log("HOORAY! ++ ");
            this.props.crud_read_all(
                {
                    something: ["something_nice" , "something_nicer"],
                    data: data
                })
        } else {
            console.log("HOORAY! -- ");
        }
    }
    job2(isSuccess , data) {
        console.debug("ConnectedList.job()");
        if (isSuccess) {
            console.log("HOORAY! ++ ");
            this.props.crud_read(
                {
                    something: ["something_nice" , "something_nicer"],
                    data: data
                })
        } else {
            console.log("HOORAY! -- ");
        }
    }

    render() {
        console.debug("ConnectedList.render()");
        let data = this.props.list;
        return (
            <List_Table data={data}/>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        crud_read_all: something => dispatch(crud_read_all(something)),
        crud_read: something => dispatch(crud_read(something))
    };
}
const mapStateToProps = state => {
    return {
        something: state.something , 
        list: state.list
    };
};
ConnectedList.propTypes = {something: PropTypes.any};
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;