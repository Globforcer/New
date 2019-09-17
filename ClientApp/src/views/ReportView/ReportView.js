import React, { Component } from 'react';
import Report from 'components/Report/Report';

export class DemoReport extends Component {
    static displayName = DemoReport.name; 
    render() {
        return (
            <React.Fragment>
                <Report id="report_1"/>
                <Report id="report_2"/>
            </React.Fragment>
        );
    }
}
