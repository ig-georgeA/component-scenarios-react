import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import GridSummaries from './grid-summaries';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders GridSummaries component', () => {
  const wrapper = render(<GridSummaries />);
  expect(wrapper).toBeTruthy();
});