// Test away!
// import  ??? from 'react-test-renderer';
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';
afterEach(rtl.cleanup);

describe('Controls', () => {
    it('renders correctly', () => {
        // it('matches snapshot', () => {
        // const ??? = ???.create(<Controls />)
        const controlsWrapper = rtl.render(<Controls />);
        expect(controlsWrapper.baseElement)
        .toMatchSnapshot();
         // expect(tree.toJSON()).toMatchSnapshot();
    });
});