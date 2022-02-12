import tw from 'twin.macro';
import { FC } from 'react';
import { styled } from 'stitches.config';

const StitchedFooter = styled('footer', {
  ...tw`flex flex-col w-screen`,

  p: {
    ...tw`text-center`,
  },
});

const Footer: FC = function Footer() {
  return (
    <StitchedFooter>
      <p>&copy; Cryptenet Limited {new Date().getFullYear()}</p>
    </StitchedFooter>
  );
};

export default Footer;
