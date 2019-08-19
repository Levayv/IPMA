import React, {Component} from "react";
import {connect} from "react-redux";
import uuidv1 from "uuid";
import * as PropTypes from "prop-types";
import LessonTable from "../component/LessonTable"
import API from "../api/API"
import {crud_read_all} from "../action/index";
import {crud_read} from "../action/index";

//todo temp solution
import LessonCreate from "./LessonCreate"

class ConnectedList extends Component {
    constructor(props) {
        super(props);
        console.debug("List-container.constructor()");
        // console.debug("creating object Number " + ConnectedList.count++);
        // this.api = new Api(process.env.REACT_APP_BACKEND_IP_PORT);
        this.job1 = this.job1.bind(this);
        this.job2forAll = this.job2forAll.bind(this);
        // this.job = this.job.bind(this);
    }
    componentDidMount() {
        console.debug("List-container.componentDidMount()");
        // API.doAfterGet("lesson" ,1, this.job1);
        // API.doAfterGet("lesson" ,2, this.job1);
        // API.doAfterGet("lesson" ,3, this.job1);
        API.doAfterGetAll("lesson" , this.job2forAll)
    }
    job1(isSuccess , data) {
        console.debug("List-container.job()");
        try{
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
        }catch (e) {
            debugger
            console.log(e);
        }
    }
    job2forAll(isSuccess , data) {
        try{
            console.debug("List-container.job()");
            if (isSuccess) {
                console.log("HOORAY! ++ ");
                this.props.crud_read_all(
                    {
                        something: ["something_nice" , "something_nicer"],
                        bulkData: data
                    })
            } else {
                console.log("HOORAY! -- ");
            }    
        }catch (e) {
            console.log(e);
        }
    }

    render() {
        console.debug("List-container.render()");
        let data = this.props.bulkList;
        console.debug(data);
        
        return (<div>
                <LessonTable dataList={data}/>
                <LessonCreate/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        crud_read_all: all_lessons => dispatch(crud_read_all(all_lessons)),
        crud_read: single_lesson => dispatch(crud_read(single_lesson))
    };
}
const mapStateToProps = state => {
    return {
        something: state.something ,
        list: state.list,
        bulkList: state.bulkList
    };
};
ConnectedList.propTypes = {something: PropTypes.any};
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;