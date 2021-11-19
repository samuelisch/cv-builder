import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Button from "../components/assets/Button";

it("renders with text", () => {
  const component = render(
    <Button text="Click me!" />
  )
  expect(component.container).toHaveTextContent("Click me!");
});

it("renders without text", () => {
  const component = render(
    <Button />
  )
  expect(component.container).toHaveTextContent("");
});

it("calls eventHandler when clicked", () => {
  const mockClickHandler = jest.fn();
  const component = render(
    <Button clickHandler={mockClickHandler} text="Click me" />
  )

  const button = component.getByText('Click me');
  fireEvent.click(button);
  expect(mockClickHandler).toHaveBeenCalledTimes(1);
});

it("calls eventHandler when clicked multiple times", () => {
  const mockClickHandler = jest.fn();
  const component = render(
    <Button clickHandler={mockClickHandler} text="Click me" />
  )

  const button = component.getByText('Click me');
  for (let i = 0; i < 5; i++) {
    fireEvent.click(button);
  }
  expect(mockClickHandler).toHaveBeenCalledTimes(5);
});

it("has background color of grey by default", () => {
  const component = render(
    <Button />
  )
  expect(component.container.firstChild).toHaveStyle(`background-color: grey`);
});