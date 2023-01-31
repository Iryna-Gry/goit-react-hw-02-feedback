import { Container } from 'components/container/Container.styled';
import { FirstLetter, LogoTitle } from 'components/logo';
import { Feedback } from 'components/feedback/Feedback';

export const App = () => {
  return (
    <Container>
      <LogoTitle href="#">
        <FirstLetter>E</FirstLetter>xpresso <FirstLetter>C</FirstLetter>afe
      </LogoTitle>
      <Feedback></Feedback>
    </Container>
  );
};
