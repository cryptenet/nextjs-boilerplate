import tw, { styled } from 'twin.macro';
import { FC } from 'react';

const StitchedFooter = styled('footer', {
  ...tw`flex flex-col w-screen`,

  p: {
    ...tw`text-center`,
  },
});

const Header: FC = () => (
  <StitchedFooter>
    <p>&copy; Cryptenet Limited {new Date().getFullYear()}</p>
  </StitchedFooter>
);

export default Header;
