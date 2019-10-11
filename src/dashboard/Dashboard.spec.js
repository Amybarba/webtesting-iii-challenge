// Test away
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";
import Dashboard from './Dashboard';
import Display from "../display/Display";
import 'jest-dom/extend-expect';

// - shows the controls and display
describe("<Dashboard />", () => {
   it("matches snapshot", () => {
       const  testrun = renderer.create(<Dashboard />).toJSON();
       expect(testrun).toMatchSnapshot();
   });

   it("is testing me", () => {
       const trial = jest.fn();

       const result = trial();

       expect(result).toBeUndefined();
       expect(trial).toHaveBeenCalledTimes(1);
   });

   it("should initially be unlocked and open", () => {
const { getByTestId } = render (<Display />);
const lock = getByTestId("lock-display");
const gate = getByTestId("close-display");

expect(lock).toHaveTextContent("Unlocked");
expect(lock).toHaveClass("green-led");
expect(gate).toHaveTextContent("Open");
expect(gate).toHaveClass("green-led");
   });

   it("should lock and unlock as expected", () => {
       const { getByTestId } = render (<Dashboard />);
       const lock = getByTestId("lock-display");
       const gate = getByTestId("close-display");

       fireEvent.click(getByTestId("close-button"));
       expect(lock).toHaveTextContent("Unlocked");
       expect(gate).toHaveTextContent("Closed");
       expect(lock).toHaveClass("green-led");
       expect(gate).toHaveClass("red-led");

       fireEvent.click(getByTestId("lock-button"));
       expect(lock).toHaveTextContent("Locked");
       expect(gate).toHaveTextContent("Closed");
       expect(lock).toHaveClass("red-led");
       expect(gate).toHaveClass("red-led");
   });
});