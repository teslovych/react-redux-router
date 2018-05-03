import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class NewPostComponent extends Component {

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control" {...field.input} type="text"/>
                {field.meta.touched ? field.meta.error: ''}
            </div>
        )
    }

    onSubmit(values) {

    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field name="title" label="Title" component={this.renderField}/>
                <Field name="tags" label="Tags" component={this.renderField}/>
                <Field name="content" label="Content" component={this.renderField}/>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title) {
        errors.title = 'Enter a title';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(NewPostComponent);