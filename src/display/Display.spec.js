// Test away!
import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';
afterEach(rtl.cleanup);

describe('Display', () => {
    it('renders correctly', () => {
        const displayWrapper = rtl.render(<Display />);
        expect(displayWrapper.baseElement)
        .toMatchSnapshot();
    });
});