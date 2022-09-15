import './style.scss';
import { Container } from 'react-bootstrap';
import Wrapper from '../../components/Wrapper'

function Home() {
  return (
    <Container>
      <div className="main-hero">
        <div className="main-hero">
          <h1 className='title-page'>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      <Wrapper></Wrapper>
     </Container>
  );
}

export default Home;
