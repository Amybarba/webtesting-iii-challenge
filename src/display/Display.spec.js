// Test away!

// import  ??? from 'react-test-renderer';
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';
afterEach(rtl.cleanup);

describe('Display', () => {
    it('renders correctly', () => {
 // it('matches snapshot', () => {
        // const ??? = ???.create(<Display/>)
  const displayWrapper = rtl.render(<Display />);
        expect(displayWrapper.baseElement)
        .toMatchSnapshot();
          // expect(tree.toJSON()).toMatchSnapshot();
    });
});