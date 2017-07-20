import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

import {renderField, renderTextArea} from "./form_components"

class ContactNew extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        console.log(values);
    };

    render() {
        const {handleSubmit} = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        name="name"
                        label="Name"
                        component={renderField}
                    />
                    <Field
                        name="email"
                        label="Email"
                        component={renderField}
                    />
                    <Field
                        name="subject"
                        label="Subject"
                        component={renderField}
                    />
                    <Field
                        name="description"
                        label="Description"
                        component={renderTextArea}
                    />
                    <input type="submit" className="btn btn-primary" value="Submit"/>
                </form>
            </div>
        )
    };
}

function validate(values) {
    const errors = {};

    if (!values.name) {
        errors.name = "Please enter your name"
    }
    if (!values.email) {
        errors.email = "Please enter your email"
    }
    if (!values.subject) {
        errors.subject = "Please enter a subject"
    }
    if(!values.description){
        errors.description = "Please describe the issue/request"
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'ContactForm'
})(ContactNew);