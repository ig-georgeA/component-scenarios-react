import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import RevealDashboard from './reveal-dashboard';
import 'element-internals-polyfill';

test('renders RevealDashboard component', () => {
  const wrapper = render(<RevealDashboard />);
  expect(wrapper).toBeTruthy();
});