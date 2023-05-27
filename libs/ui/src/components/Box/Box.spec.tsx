import { render } from '@testing-library/react';
import { Box } from './Box';

describe('Box', () => {
  it('renders', () => {
    const { baseElement } = render(<Box />);
    expect(baseElement).toBeTruthy();
  });
});
