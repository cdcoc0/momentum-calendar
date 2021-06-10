import React from 'react';
import {connect} from 'react-redux';
import Modal from '../calendar/Modal';

const ModalContainer = ({today, open, close}) => {
    return (
        <Modal today={today} open={open} close={close} />
    );
}

const mapStateToProps = state => ({
    today: state.today
});

export default connect(
    mapStateToProps
)(ModalContainer);