import tw, { styled } from 'twin.macro';
import { FC } from 'react';

const StitchedNavbar = styled('nav', {
  ...tw``,
});

const Navbar: FC = () => <StitchedNavbar />;

export default Navbar;
