import { render } from '@testing-library/react';
import { Button } from '@oseek/ui';
import { AppBar } from './AppBar';

describe('StatusBar', () => {
  it('renders', () => {
    const title = '시작하기';
    const { baseElement } = render(<AppBar title={title} leftAction={<Button />} rightAction={<Button />} />);
    expect(baseElement).toBeTruthy();
  });
});
