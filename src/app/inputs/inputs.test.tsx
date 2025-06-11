import { expect, test, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Inputs from './inputs';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders Inputs component', () => {
  const wrapper = render(<Inputs />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});