import { render } from '@testing-library/react';
import { StatusBar } from './StatusBar';

describe('StatusBar', () => {
  it('renders', () => {
    const { baseElement } = render(<StatusBar />);
    expect(baseElement).toBeTruthy();
  });
});
