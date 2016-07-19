"use strict";

const React = require('react');
const { Link } = require('react-router');

module.exports = class Accounts extends React.Component {

    componentWillMount() {
        this.props.conn.describeGlobal((error, res) => {
            if (error) {
                console.error(error);
                this.setState({
                    error
                });
                return;
            }

            this.setState({
                objects: res.sobjects
            });
        });
    }

    render() {
        if (this.state && this.state.error) {
            return (
                <div>{this.state.error}</div>
            );
        }

        if (!this.state || !this.state.objects) {
            return (
                <div><em>Loading objects...</em></div>
            );
        }

        return (
            <div>
                <h2>Objects</h2>
                <ul>
                    { this.state.objects.map((object, i) => 
                        <li key={i}>
                            <Link to={`/objects/${object.name}`}>
                                {object.name} { object.keyPrefix && <em>{object.keyPrefix}</em> }
                            </Link>
                        </li>
                    ) }
                </ul>
            </div>
        );
    }
};
