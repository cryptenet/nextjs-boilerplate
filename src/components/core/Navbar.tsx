import tw from 'twin.macro';
import { FC } from 'react';
import { styled } from 'stitches.config';

const StitchedNavbar = styled('nav', {
  ...tw``,
});

const Navbar: FC = function Navbar() {
  return <StitchedNavbar />;
};

export default Navbar;
