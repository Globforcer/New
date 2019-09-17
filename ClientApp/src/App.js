import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from 'components/Layout';
import { Home } from 'views/HomeView/Home';
import { FetchData } from 'components/FetchData';
import { DemoReport } from 'views/ReportView/ReportView';
import Counter from 'views/CounterView/Counter';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/powerbi' component={DemoReport} />
            </Layout>
        );
    }
}
