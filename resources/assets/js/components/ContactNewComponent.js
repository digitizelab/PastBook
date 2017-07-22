import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {toast} from 'react-toastify';

import {renderField, renderTextArea} from "./form_components"

class ContactNew extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.submitRequest(values, () => {
            toast(<div>Request sent successfully!</div>);
            this.props.history.push('/');
        });
    };

    render() {
        const {handleSubmit} = this.props;
        const serverErrors = this.props.supportRequest.error;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        name="name"
                        label="Name"
                        serverError={(serverErrors && serverErrors.name) ? serverErrors.name : ''}
                        component={renderField}
                    />
                    <Field
                        name="email"
                        label="Email"
                        serverError={(serverErrors && serverErrors.email) ? serverErrors.email : ''}
                        component={renderField}
                    />
                    <Field
                        name="subject"
                        label="Subject"
                        serverError={(serverErrors && serverErrors.subject) ? serverErrors.subject : ''}
                        component={renderField}
                    />
                    <Field
                        name="description"
                        label="Description"
                        serverError={(serverErrors && serverErrors.description) ? serverErrors.description : ''}
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
    if (!values.description) {
        errors.description = "Please describe the issue/request"
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'ContactForm'
})(ContactNew);