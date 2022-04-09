import { useRouter } from 'next/router';

import Button from 'components/atom/Form/Button';
import Footer from 'components/organisms/Footer';
import Footnotes from 'components/organisms/Footnotes';
import Header from 'components/organisms/Header';
import SearchForm from 'components/organisms/SearchForm';

import { Main } from './styles';

const Component: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Main>
        <section className="info">
          <section>
            <p className="info-label">ONDE SE VACINAR?</p>
            <div className="info-container">
              <p>Descubra o local mais próximo de você para vacinação contra influenza.</p>

              <SearchForm />
            </div>
          </section>
          <Button
            className="btn-questions"
            type="button"
            text="DÚVIDAS SOBRE A VACINAÇÃO?"
            aria-label="DÚVIDAS SOBRE A VACINAÇÃO?"
            onClick={() => router.push('/duvidas')}
          />
        </section>
        <Footnotes />
      </Main>
      <Footer />
    </>
  );
};
export default Component;
