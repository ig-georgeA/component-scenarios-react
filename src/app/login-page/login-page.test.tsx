import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import LoginPage from './login-page';
import 'element-internals-polyfill';

test('renders LoginPage component', () => {
  const wrapper = render(<LoginPage />);
  expect(wrapper).toBeTruthy();
});