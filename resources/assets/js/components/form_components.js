import React from 'react';

export const renderField = (field) => {
    const {meta: {touched, error}} = field;
    const className = `form-group row ${touched && error ? 'has-error' : ''}`;
    const {name} = field.input;

    return (
        <div className={className}>
            <label className="col-sm-4 col-form-label">{field.label}</label>
            <div className="col-sm-8">
                <label className="control-label" htmlFor={name}>{touched ? error : ''}</label>
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
    const {meta: {touched, error}} = field;
    const className = `form-group row ${touched && error ? 'has-error' : ''}`;
    const {name} = field.input;

    return (
        <div className={className}>
            <label className="col-sm-4 col-form-label">{field.label}</label>
            <div className="col-sm-8">
                <label className="control-label" htmlFor={name}>{touched ? error : ''}</label>
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