import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Input from '../components/assets/Input';

it('renders with text in label', () => {
  const component = render(
    <Input inputId="input" labelText="hello world" />
  );

  expect(component.container).toHaveTextContent('hello world');
})

it('renders input element with value', () => {
  const mockEventHandler = jest.fn();

  const component = render(
    <Input inputId="input"  inputValue="hello" changeHandler={mockEventHandler} />
  );

  const input = component.container.querySelector('#input')

  expect(input.value).toBe('hello');
})

it('executes event handler when value changed', () => {
  const mockEventHandler = jest.fn();

  const component = render(
    <Input inputId="input" inputValue="" changeHandler={mockEventHandler} />
  );

  const input = component.container.querySelector('#input');
  fireEvent.change(input, {target: {value: 'a'}});

  expect(mockEventHandler).toHaveBeenCalledTimes(1);
})

it('calls event handler multiple times when value changed multiple times', () => {
  const mockEventHandler = jest.fn();

  const component = render(
    <Input inputId="input" inputValue="" changeHandler={mockEventHandler} />
  );

  const input = component.container.querySelector('#input');
  fireEvent.change(input, {target: {value: 'a'}});
  fireEvent.change(input, {target: {value: 'ab'}});
  fireEvent.change(input, {target: {value: 'abc'}});
  fireEvent.change(input, {target: {value: 'ab'}});


  expect(mockEventHandler).toHaveBeenCalledTimes(4);
})

it('does not update when type and input type are not the same', () => {
  const mockEventHandler = jest.fn();

  const component = render(
    <Input inputId="input" type="number" inputValue="" changeHandler={mockEventHandler} />
  );

  const input = component.container.querySelector('#input');
  fireEvent.change(input, {target: {value: '1'}});
  fireEvent.change(input, {target: {value: 'a'}});
  fireEvent.change(input, {target: {value: 'ab'}});


  expect(mockEventHandler).toHaveBeenCalledTimes(1);
})