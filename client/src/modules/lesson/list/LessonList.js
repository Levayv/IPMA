import React, {Component} from "react";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import LessonTable from "./components/LessonTable"
import API from "../../../redux/api/API"
import {crud_read_all} from "../../../redux/action";
import {crud_read} from "../../../redux/action";

class ConnectedList extends Component {
    constructor(props) {
        super(props);
        //todo refactor job1forGet 
        this.job1forGet = (isSuccess , data) =>{
            try{
                if (isSuccess) {
                    this.props.crud_read(
                        {
                            data: data
                        })
                } 
            }catch (e) {
                debugger
            }
        };
        this.job2forAll = (isSuccess , data) => {
            try{
                if (isSuccess) {
                    this.props.crud_read_all(
                        {
                            bulkData: data
                        })
                }
            }catch (e) {
                debugger
            }
        };
    }
    componentDidMount() {
        API.doAfterGetAll("lesson" , this.job2forAll)
        document.getElementById("router-nav-list")
            .style.color = "red";
    }
    componentWillUnmount() {
        document.getElementById("router-nav-list")
            .style.color = null;
    }    
    render() {
        let data = this.props.bulkList;
        return (<div>
                <LessonTable dataList={data}/>
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
        list: state.list,
        bulkList: state.bulkList
    };
};
ConnectedList.propTypes = {list: PropTypes.any};
const LessonList = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default LessonList;
