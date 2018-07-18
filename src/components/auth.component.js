import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {login} from "../actions/auth";

class AuthComponent extends Component {

    renderField(field) {
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input {...field.input} type={field.type || 'text'} className="form-control" placeholder={field.label}/>
                <div className="text-help text-danger">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }

    onSubmit(model) {
        this.props.login(model, (res) => {
            console.log(res);
        })
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div className="container">
                <div className="row align-items-center justify-content-center full-height">
                    <div className="col-8">
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field name="user" type="text" label="User" component={this.renderField}/>
                            <Field name="password" type="password" label="Password" component={this.renderField}/>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.user) {
        errors.user = 'Enter a username';
    }
    if (!values.password) {
        errors.password = 'Enter a password';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'AuthForm'
})(
    connect(null, {login})(AuthComponent)
);