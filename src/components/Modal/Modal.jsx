import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import css from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

// class Modal extends Component {

//     componentDidMount() {
//         window.addEventListener('keydown', this.handleKeyDown);
//     }

//     componentWillUnmount() {
//         window.removeEventListener("keydown", this.handleKeyDown);
//     }

//     handleKeyDown = e => {
//         if (e.code === 'Escape') {
//             this.props.onClose();
//         }
//     };

//     handleBackdropClick = (event) => {
//         if (event.currentTarget === event.target) {
//             this.props.onClose();
//         }
//     }

//     render() {
//         return createPortal(
//             <div className={css.overlay} onClick={this.handleBackdropClick}>
//                 <div className={css.modal}>
//                     {this.props.children}
//                 </div>
//             </div>, modalRoot
//         );
//     }
// }

const Modal = ({ onClose, children }) => {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === "Escape") {
                onClose();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [onClose]);
    
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }

    return createPortal(
        <div className={css.overlay} onClick={handleBackdropClick}>
            <div className={css.modal}>
                {children}
            </div>
        </div>, modalRoot
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default Modal;