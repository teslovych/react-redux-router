import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class NewPostComponent extends Component {

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control" {...field.input} type="text"/>
            </div>
        )
    }

    render() {
        return (
            <form>
                <Field name="title" label="Title" component={this.renderField}/>
                <Field name="tags" label="Tags" component={this.renderField}/>
                <Field name="content" label="Content" component={this.renderField}/>
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(NewPostComponent);