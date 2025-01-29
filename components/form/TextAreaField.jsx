import React from 'react';

const TextAreaField = ({label, name, placeholder, defaultValue}) => {
    return (
        <label className="form-control">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <textarea className="textarea textarea-bordered h-24" placeholder={placeholder} name={name} defaultValue={defaultValue || null}></textarea>
        </label>
    );
};

export default TextAreaField;