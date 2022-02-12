import tw from 'twin.macro';
import { BaseLayout, Brand, Container } from '@components/index';

const IndexPage = function IndexPage() {
  return (
    <BaseLayout pageTitle="Home">
      <Container>
        <Brand />
        <p css={tw`text-4xl`}>NextJS Boilerplate</p>
      </Container>
    </BaseLayout>
  );
};

export default IndexPage;
