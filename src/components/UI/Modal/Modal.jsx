import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/aux";

const Modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modelClosed}/>
            <div
                className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    )
}

export default Modal;