import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import FormsGridCRUD from './forms-grid-crud';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders FormsGridCRUD component', () => {
  const wrapper = render(<FormsGridCRUD />);
  expect(wrapper).toBeTruthy();
});