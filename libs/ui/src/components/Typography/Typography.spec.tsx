import { render } from '@testing-library/react';
import { Typography } from './Typography';

describe('Typography', () => {
  it('renders', () => {
    const { queryAllByText } = render(<Typography>텍스트</Typography>);
    expect(queryAllByText('텍스트')).toHaveLength(1);
  });
});
