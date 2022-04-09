import { useRouter } from 'next/router';

// import TemplateBasic from 'templates/basic';

import Button from 'components/atom/Form/Button';
import Footnotes from 'components/organisms/Footnotes';
import Header from 'components/organisms/Header';

import { Container } from './styles';

const Page404: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Container>
        <div>
          <h4>ERRO</h4>
          <p>Página não encontrada</p>

          <Button theme="primary" onClick={() => router.push('/')} text="Voltar" />
        </div>
        <Footnotes />
      </Container>
    </>
  );
};

export default Page404;
