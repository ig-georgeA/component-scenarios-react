import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import ChildView1 from './child-view1';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders ChildView1 component', () => {
  const wrapper = render(<ChildView1 />);
  expect(wrapper).toBeTruthy();
});