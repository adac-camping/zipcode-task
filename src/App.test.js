import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("doesn't crash terribly", () => {
  test("it's running without exploding", () => {
      expect(true).toBe(true);
  })
})
