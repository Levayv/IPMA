import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import * as PropTypes from "prop-types";
import DumbList from "../comp-presenter/List"
 
// import { addArticle } from "../actions/index";

class ConnectedList extends Component {
    render() {
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