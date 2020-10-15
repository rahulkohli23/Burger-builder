import React from "react";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import './SideDrawer.css'
import Backdrop from "../../../UI/Backdrop/Backdrop";
import Aux from "../../../../hoc/aux";

const SideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "close"];
    if(props.open) {
        attachedClasses = ["SideDrawer", "open"]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className="logo-sideDrawer">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer;