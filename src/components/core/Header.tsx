import tw, { styled } from 'twin.macro';
import { FC } from 'react';
import Navbar from '@core/Navbar';

const StitchedHeader = styled('header', {
  ...tw`flex flex-col w-screen`,
});

const Header: FC = () => (
  <StitchedHeader>
    <Navbar />
  </StitchedHeader>
);

export default Header;
