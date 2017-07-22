import React from 'react';

export const renderField = (field) => {
    const {meta: {touched, error}, serverError} = field;
    const className = `form-group row ${touched && error ? 'has-error' : ''}`;
    const {name} = field.input;

    return (
        <div className={className}>
            <label className="col-sm-4 col-form-label">{field.label}</label>
            <div className="col-sm-8">
                {(touched && error) ? <label className="control-label" htmlFor={name}>{error}</label> : null}
                {(serverError && serverError[0]) ?
                    <label className="control-label" htmlFor={name}>{serverError[0]}</label> : null}
                <input
                    className="form-control"
                    type="text"
                    id={name}
                    {...field.input}
                />
            </div>
        </div>
    );
};

export const renderTextArea = (field) => {
    const {meta: {touched, error}, serverError} = field;
    const className = `form-group row ${touched && error ? 'has-error' : ''}`;
    const {name} = field.input;

    return (
        <div className={className}>
            <label className="col-sm-4 col-form-label">{field.label}</label>
            <div className="col-sm-8">
                {(touched && error) ? <label className="control-label" htmlFor={name}>{error}</label> : null}
                {(serverError && serverError[0]) ?
                    <label className="control-label" htmlFor={name}>{serverError[0]}</label> : null}
                <textarea
                    className="form-control"
                    type="text"
                    id={name}
                    {...field.input}
                />
            </div>
        </div>
    );
};