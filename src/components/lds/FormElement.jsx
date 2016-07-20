"use strict";

const React = require('react');

module.exports = class FormElement extends React.Component {

    render() {
        const { label, children } = this.props;

        return (
            <div className="slds-form-element slds-hint-parent slds-has-divider--bottom">
                <span className="slds-form-element__label">{label}</span>
                <div className="slds-form-element__control">
                    <span className="slds-form-element__static">
                        {React.cloneElement(children, this.props)}
                    </span>
                </div>
            </div>
        );
    }
};
