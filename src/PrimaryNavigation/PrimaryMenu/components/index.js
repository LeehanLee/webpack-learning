import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrimaryItem from '../../Common/PrimaryItem.js';
import {primaryMenuInitAction } from "../actions/index.js";

class PrimaryMenu extends Component {
    componentWillMount(){
        this.props.initPrimaryMenu();
    }
    render(){
        const { primaryMenuList } = this.props;
        return (
            <div className="primary-menu-container">
                {
                    primaryMenuList.map((l) => {
                        return (<PrimaryItem text={l.text} href={l.href}/>);
                    })
                }
            </div>
        );
    }
}

function mapStatetoProps(state){
    return {
        primaryMenuList: state.primaryMenuList
    };
}

function mapDispatchtoProps(dispatch, ownProps){
    return {
        initPrimaryMenu: () => {
            const mockDate = [
                {text: "系统管理", href: "#"},
                {text: "资讯管理", href: "#"},
                {text: "百度", href: "#"},
                {text: "腾讯", href: "#"},
                {text: "爱奇异", href: "#"},
            ];
            dispatch(primaryMenuInitAction(mockDate));
        },
        onIncreaseClick:()=>{
            dispatch(increaseAction());
        }
    };
}

export default connect(mapStatetoProps,mapDispatchtoProps)(PrimaryMenu);