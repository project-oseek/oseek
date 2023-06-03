import { render } from '@testing-library/react';
import { IconButton } from './IconButton';
import SvgNotification from "../../Icons/Notification";

describe('IconButton', () => {
  it('renders', () => {
    const { queryAllByText } = render(<IconButton size="56px" icon={<SvgNotification width={24} height={24} color="black" />} />);
    expect(queryAllByText('버튼')).toHaveLength(1);
  });
});
