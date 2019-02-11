import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import StudentDashboard from '../StudentDashboard/StudentDashboard';

class Split extends Component {
    render() {
        if (this.props.user.admin) {
            return(
                <AdminDashboard />
            )
        } else {
            return (
                <StudentDashboard />
            )
        }
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(Split);
