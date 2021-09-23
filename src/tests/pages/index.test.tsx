import IndexPage from '@pages/index';
import { render } from '../testUtils';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<IndexPage />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
