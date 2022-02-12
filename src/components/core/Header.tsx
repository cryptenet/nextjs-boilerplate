import tw from 'twin.macro';
import { FC } from 'react';
import Navbar from '@core/Navbar';
import { styled } from 'stitches.config';

const StitchedHeader = styled('header', {
  ...tw`flex flex-col w-screen`,
});

const Header: FC = function Header() {
  return (
    <StitchedHeader>
      <Navbar />
    </StitchedHeader>
  );
};

export default Header;
