import React, { Component } from 'react';
import Report from 'components/Report/Report';

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>Power BI WebbApp Template</h1>
                <Report id="report"/>
            </div>
        );
    }
}
