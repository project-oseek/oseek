import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders', () => {
    const { queryAllByText } = render(<Button>버튼</Button>);
    expect(queryAllByText('버튼')).toHaveLength(1);
  });
});
