import { render } from '@testing-library/react';
import { TextField } from './TextField';

describe('IconButton', () => {
  it('renders', () => {
    const { baseElement } = render(<TextField id="test" value="test" onChange={() => {}}  />);
    expect(baseElement).toBeTruthy();
  });
});
