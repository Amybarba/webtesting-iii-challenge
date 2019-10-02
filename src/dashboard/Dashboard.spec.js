// Test away
// import  ??? from 'react-test-renderer';
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';
afterEach(rtl.cleanup);

describe('Dashboard', () => {
    it('renders correctly', () => {
        // it('matches snapshot', () => {
        // const ??? = ???.create(<Dashboard />)
        const dashboardWrapper = rtl.render(<Dashboard />);
        expect(dashboardWrapper.baseElement)
        .toMatchSnapshot();
        // expect(tree.toJSON()).toMatchSnapshot();
    });
});