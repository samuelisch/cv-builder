import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import SectionHeader from "../components/assets/SectionHeader";

it("renders with text", () => {
  const component = render(
    <SectionHeader className="random" text="Header" />
  )
  expect(component.container).toHaveTextContent("Header");
});

it("renders with className", () => {
  const component = render(
    <SectionHeader className="random" text="Header" />
  )
  const header = component.container.querySelector('.random')

  expect(header).toHaveTextContent("Header");
});