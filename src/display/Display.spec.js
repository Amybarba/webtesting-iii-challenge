// Test away!
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';
import Display from './Display';

test("<Display />", () => {
    it('matches snapshot', () => {
  const testrun = renderer.create(<Display />).toJSON();
        expect(testrun)
        .toMatchSnapshot();
    });

    it("is testing me", () => {
          const trial = jest.fn();

          const result = trial();
          
          expect(result).toBeUndefined();
          expect(trial).toHaveBeenCalledTimes(1);
    });
});