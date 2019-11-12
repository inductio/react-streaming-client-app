import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';

class StreamCreate extends Component {
    renderError = ({error, touched}) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    };

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label htmlFor="">{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" type="text" component={this.renderInput} label="Enter Title"/>
                <Field name="description" type="text" component={this.renderInput} label="Enter Description"/>

                <button className="ui button blue" type="submit">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Enter title!';
    }

    if (!formValues.description) {
        errors.description = 'Enter Description!';
    }

    return errors;
};

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);

// const mapStateToProps = (state) => {
//
// };

export default connect(null, {
    createStream
})(formWrapped)