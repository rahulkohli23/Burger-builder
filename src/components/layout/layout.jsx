import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import "./layout.css";
import Toolbar from "../UI/Navigation/Toolbar/Toolbar";
import SideDrawer from "../UI/Navigation/SideDrawer/SideDrawer";

class layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerOpenehandler = () => {
        this.setState({showSideDrawer: true})
    }
    render() {
        return (
            <Aux>
                <Toolbar open={this.sideDrawerOpenehandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className="content">
                    {this.props.children}
                </main>
            </Aux >
        )
    }

}

export default layout;