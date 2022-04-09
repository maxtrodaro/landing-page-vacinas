import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

import trackClick from 'api/farmacies/trackClick';

import Footer from 'components/organisms/Footer';
import Footnotes from 'components/organisms/Footnotes';
import Header from 'components/organisms/Header';
import SearchForm from 'components/organisms/SearchForm';

import questions from './questions.json';
import { Main, QuestionsSection, MapSection, InitialSection, ReferencesSection } from './styles';

const Component: React.FC = () => {
  const trackingClick = (e: any): Promise<void> =>
    trackClick({
      url: 'faq/cliques',
      faq: `FAQ${e.target.parentElement.id.split('button-')[1]}`,
    });

  return (
    <>
      <Header />
      <Main>
        <p className="info-label">Por que a imunização contra Influenza?</p>
        <InitialSection>
          <p>
            O objetivo da vacinação é reduzir a circulação do vírus e, consequentemente, a
            severidade da doença. <sup>1,2</sup>
          </p>
          <p>
            A vacina ensina ao nosso organismo como reconhecer o vírus e a montar uma resposta de
            defesa forte contra ele, diminuindo muito a chance de ser contaminado. <sup>3</sup>
          </p>

          <p>Além disso:</p>

          <ul>
            <li>
              Reduz em até 75% a mortalidade por complicações causadas pelo vírus. <sup>4</sup>
            </li>
            <li>
              Protege você e quem você ama. <sup>5</sup>
            </li>
          </ul>
        </InitialSection>

        <p className="info-label">Dúvidas e respostas</p>
        <QuestionsSection>
          {questions.map((question) => {
            if (question.sectionId !== '1') return null;
            return (
              <Accordion allowToggle width="100%">
                <AccordionItem style={{ marginBottom: '2rem' }}>
                  <>
                    <AccordionButton
                      onClick={(e) => trackingClick(e)}
                      style={{
                        alignItems: 'flex-start',
                        backgroundColor: '#009CDE',
                        border: 0,
                        padding: '0 1rem',
                      }}
                    >
                      <Box
                        flex="1"
                        as="h1"
                        textAlign="left"
                        style={{
                          color: '#fff',
                          fontSize: '18px',
                          fontWeight: 700,
                          margin: 0,
                          lineHeight: '38px',
                        }}
                      >
                        {question.question}
                      </Box>
                      <AccordionIcon color="#fff" />
                    </AccordionButton>
                    <AccordionPanel p={4} style={{ paddingBottom: 0 }}>
                      <Box
                        as="p"
                        flex="1"
                        style={{ color: '#888B8D', fontSize: '14px', marginBottom: '10px' }}
                      >
                        {question.answer}
                        {!question.answerList && <sup>{question.sup}</sup>}
                      </Box>
                      <Box as="ul">
                        {question.answerList &&
                          question.answerList.map((item) => (
                            <li>
                              {item} <sup>{question.sup}</sup>
                            </li>
                          ))}
                      </Box>
                    </AccordionPanel>
                  </>
                </AccordionItem>
              </Accordion>
            );
          })}
        </QuestionsSection>
        <QuestionsSection>
          <h3>Tomei a vacina. E agora?</h3>
          {questions.map((question) => {
            if (question.sectionId !== '2') return null;

            return (
              <Accordion allowToggle width="100%">
                <AccordionItem style={{ marginBottom: '2rem' }}>
                  <>
                    <AccordionButton
                      onClick={(e) => trackingClick(e)}
                      style={{
                        alignItems: 'flex-start',
                        backgroundColor: '#009CDE',
                        border: 0,
                        padding: '0 1rem',
                      }}
                    >
                      <Box
                        flex="1"
                        as="h1"
                        textAlign="left"
                        style={{
                          color: '#fff',
                          fontSize: '18px',
                          fontWeight: 700,
                          margin: 0,
                          lineHeight: '38px',
                        }}
                      >
                        {question.question}
                      </Box>
                      <AccordionIcon color="#fff" />
                    </AccordionButton>
                    <AccordionPanel p={4} style={{ paddingBottom: 0 }}>
                      <Box
                        as="p"
                        flex="1"
                        style={{ color: '#888B8D', fontSize: '14px', marginBottom: '10px' }}
                      >
                        {question.answer}
                        <sup>{question.sup}</sup>
                      </Box>
                    </AccordionPanel>
                  </>
                </AccordionItem>
              </Accordion>
            );
          })}
        </QuestionsSection>
        <QuestionsSection>
          <h3>Informações para gestantes e puérperas.</h3>
          {questions.map((question) => {
            if (question.sectionId !== '3') return null;

            return (
              <Accordion allowToggle width="100%">
                <AccordionItem style={{ marginBottom: '2rem' }}>
                  <>
                    <AccordionButton
                      onClick={(e) => trackingClick(e)}
                      style={{
                        alignItems: 'flex-start',
                        backgroundColor: '#009CDE',
                        border: 0,
                        padding: '0 1rem',
                      }}
                    >
                      <Box
                        flex="1"
                        as="h1"
                        textAlign="left"
                        style={{
                          color: '#fff',
                          fontSize: '18px',
                          fontWeight: 700,
                          margin: 0,
                          lineHeight: '38px',
                        }}
                      >
                        {question.question}
                      </Box>
                      <AccordionIcon color="#fff" />
                    </AccordionButton>
                    <AccordionPanel p={4} style={{ paddingBottom: 0 }}>
                      <Box
                        as="p"
                        flex="1"
                        style={{ color: '#888B8D', fontSize: '14px', marginBottom: '10px' }}
                      >
                        {question.answer}
                        <sup>{question.sup}</sup>
                      </Box>
                    </AccordionPanel>
                  </>
                </AccordionItem>
              </Accordion>
            );
          })}
        </QuestionsSection>
        <QuestionsSection>
          <h3>Informações referentes às crianças</h3>
          {questions.map((question) => {
            if (question.sectionId !== '4') return null;

            return (
              <Accordion allowToggle width="100%">
                <AccordionItem style={{ marginBottom: '2rem' }}>
                  <>
                    <AccordionButton
                      onClick={(e) => trackingClick(e)}
                      style={{
                        alignItems: 'flex-start',
                        backgroundColor: '#009CDE',
                        border: 0,
                        padding: '0 1rem',
                      }}
                    >
                      <Box
                        flex="1"
                        as="h1"
                        textAlign="left"
                        style={{
                          color: '#fff',
                          fontSize: '18px',
                          fontWeight: 700,
                          margin: 0,
                          lineHeight: '38px',
                        }}
                      >
                        {question.question}
                      </Box>
                      <AccordionIcon color="#fff" />
                    </AccordionButton>
                    <AccordionPanel p={4} style={{ paddingBottom: 0 }}>
                      <Box
                        as="p"
                        flex="1"
                        style={{ color: '#888B8D', fontSize: '14px', marginBottom: '10px' }}
                      >
                        {question.answer}
                        <sup>{question.sup}</sup>
                      </Box>
                    </AccordionPanel>
                  </>
                </AccordionItem>
              </Accordion>
            );
          })}
        </QuestionsSection>
        <QuestionsSection>
          <h3>Sabia que existem 2 tipos da vacina da gripe?</h3>
          {questions.map((question) => {
            if (question.sectionId !== '5') return null;

            return (
              <Accordion allowToggle width="100%">
                <AccordionItem style={{ marginBottom: '2rem' }}>
                  <>
                    <AccordionButton
                      onClick={(e) => trackingClick(e)}
                      style={{
                        alignItems: 'flex-start',
                        backgroundColor: '#009CDE',
                        border: 0,
                        padding: '0 1rem',
                      }}
                    >
                      <Box
                        flex="1"
                        as="h1"
                        textAlign="left"
                        style={{
                          color: '#fff',
                          fontSize: '18px',
                          fontWeight: 700,
                          margin: 0,
                          lineHeight: '38px',
                        }}
                      >
                        {question.question}
                      </Box>
                      <AccordionIcon color="#fff" />
                    </AccordionButton>
                    <AccordionPanel p={4} style={{ paddingBottom: 0 }}>
                      <Box
                        as="p"
                        flex="1"
                        style={{ color: '#888B8D', fontSize: '14px', marginBottom: '10px' }}
                      >
                        {question.answer}
                        <sup>{question.sup}</sup>
                      </Box>
                    </AccordionPanel>
                  </>
                </AccordionItem>
              </Accordion>
            );
          })}
        </QuestionsSection>
        <QuestionsSection className="last-child">
          <h3>Dúvidas sobre H3N2</h3>
          {questions.map((question) => {
            if (question.sectionId !== '6') return null;

            return (
              <Accordion allowToggle width="100%">
                <AccordionItem style={{ marginBottom: '2rem' }}>
                  <>
                    <AccordionButton
                      onClick={(e) => trackingClick(e)}
                      style={{
                        alignItems: 'flex-start',
                        backgroundColor: '#009CDE',
                        border: 0,
                        padding: '0 1rem',
                      }}
                    >
                      <Box
                        flex="1"
                        as="h1"
                        textAlign="left"
                        style={{
                          color: '#fff',
                          fontSize: '18px',
                          fontWeight: 700,
                          margin: 0,
                          lineHeight: '38px',
                        }}
                      >
                        {question.question}
                      </Box>
                      <AccordionIcon color="#fff" />
                    </AccordionButton>
                    <AccordionPanel p={4} style={{ paddingBottom: 0 }}>
                      <Box
                        as="p"
                        flex="1"
                        style={{ color: '#888B8D', fontSize: '14px', marginBottom: '10px' }}
                      >
                        {question.answer}
                        <sup>{question.sup}</sup>
                      </Box>
                    </AccordionPanel>
                  </>
                </AccordionItem>
              </Accordion>
            );
          })}
        </QuestionsSection>

        <p className="info-label">Onde se vacinar?</p>
        <MapSection>
          <p>Descubra o local mais próximo de você para vacinação contra influenza.</p>

          <SearchForm />
        </MapSection>

        <Footnotes />
      </Main>
      <ReferencesSection>
        <h3>REFERÊNCIAS</h3>

        <ol>
          <li>
            Hospital Nove de Julho. Vacina contra a gripe: por que é importante e quem deve ser
            vacinado? Disponível em:
            https://www.h9j.com.br/pt/sobre-nos-site/blog-site/paginas/vacina-contra-a-gripe-por-que-e-importante-e-quem-deve-ser-vacinado.aspx.
            Acesso em Fevereiro/2022
          </li>
          <li>
            Centers for Disease Control and Prevention. What are the benefits of flu vaccination?
            Disponível em: https://www.cdc.gov/flu/prevent/vaccine-benefits.htm. Acesso em
            Fevereiro/2022
          </li>
          <li>
            Sociedade Brasileira de Imunizações. Vacinas – Apresentação. Disponível em:
            https://familia.sbim.org.br/vacinas. Acesso em Fevereiro/2022
          </li>
          <li>
            Saúde Brasil. Saúde Brasil contra Influenza. Disponível em:
            https://saudebrasil.saude.gov.br/saude-brasil-contra-a-influenza. Acesso em
            Fevereiro/2022
          </li>
          <li>
            Centers for Disease Control and Prevention. Key Facts About Seasonal Flu Vaccine.
            Disponível em: https://www.cdc.gov/flu/prevent/keyfacts.htm Acesso em Fevereiro/2022
          </li>
          <li>
            Arriola C, Garg S, Anderson EJ, Ryan PA, George A, Zansky SM, Bennett N, Reingold A,
            Bargsten M, Miller L, Yousey-Hindes K, Tatham L, Bohm SR, Lynfield R, Thomas A,
            Lindegren ML, Schaffner W, Fry AM, Chaves SS. Influenza Vaccination Modifies Disease
            Severity Among Community-dwelling Adults Hospitalized With Influenza. Clin Infect Dis.
            2017 Oct 15;65(8):1289-1297.{' '}
          </li>
          <li>
            Deiss RG, Arnold JC, Chen WJ, Echols S, Fairchok MP, Schofield C, Danaher PJ, McDonough
            E, Ridoré M, Mor D, Burgess TH, Millar EV. Vaccine-associated reduction in symptom
            severity among patients with influenza A/H3N2 disease. Vaccine. 2015 Dec
            16;33(51):7160-7167. doi: 10.1016/j.vaccine.2015.11.004. Epub 2015 Nov 10.{' '}
          </li>
          <li>
            Xue Y, Kristiansen IS, de Blasio BF. Modeling the cost of influenza: the impact of
            missing costs of unreported complications and sick leave. BMC Public Health. 2010 Nov
            24;10:724.{' '}
          </li>
          <li>
            Sociedade Brasileira de Imunizações. Vacina gripe (influenza) – trivalente ou
            quadrivalente. Setembro de 2020. Disponível em:
            https://familia.sbim.org.br/vacinas/vacinas-disponiveis/vacina-gripe-influenza. Acesso
            em Fevereiro/2022.
          </li>
          <li>
            Ribeiro J, Bellei N. Influenza (Gripe). Journal of Infection Control. v. 7, n. 2 (2018).
            Disponível em: https://jic-abih.com.br/index.php/jic/article/view/225. Acesso em
            Fevereiro/2022.
          </li>
          <li>
            Sociedade Brasileira de Imunizações. Perguntas e respostas sobre a vacina gripe
            (influenza). Disponível em:
            https://familia.sbim.org.br/vacinas/perguntas-e-respostas/gripe. Acesso em
            Fevereiro/2022.
          </li>
          <li>
            da Silva MV. A &quot;corrida&quot; pela vacina da gripe em 2016. Rev Fac Ciênc Méd
            Sorocaba. 2016;18(2):68-9. Disponível em:
            https://revistas.pucsp.br/RFCMS/article/download/27672/pdf. Acesso em Fevereiro/2022.
          </li>
          <li>
            Cleveland Clinic. Is Getting a Flu Shot While Sick Risky? Dospinível em:
            https://health.clevelandclinic.org/can-you-get-the-flu-shot-while-sick/. Acesso em
            Fevereiro/2022
          </li>
          <li>
            Rodrigues CO et al. Sociedade Brasileira de Pediatria. Atualização no Tratamento e
            Prevenção da Infecção pelo Vírus Influenza - 2020. Abril 2020. Disponível em:
            https://www.sbp.com.br/fileadmin/user_upload/22445f-Diretriz-_Atualiz_Trat_e_Prev_Infecc_Virus_Influenza_2020.pdf.
            Acesso em Fevereiro/2022.
          </li>
          <li>
            Mayo Clinic. Flu shot: Your best bet for avoiding influenza. Disponível em:
            https://www.mayoclinic.org/diseases-conditions/flu/in-depth/flu-shots/art-20048000.
            Acesso em Janeiro/2022
          </li>
          <li>
            Organização Pan-Americana de Saúde. Confira mitos e verdades sobre a vacina contra a
            influenza sazonal. 2019. Disponível em:
            https://www.paho.org/pt/noticias/15-5-2019-confira-mitos-e-verdades-sobre-vacina-contra-influenza-sazonal.
            Acesso em Fevereiro/2022.
          </li>
          <li>
            Centers for Disease Control and Prevention. Cold Versus Flu. Disponível em:
            https://www.cdc.gov/flu/symptoms/coldflu.htm. Acesso em Fevereiro/2022
          </li>
          <li>
            World Health Organization (WHO). Recommended composition of influenza virus vaccines for
            use in the 2022 southern hemisphere influenza season. September 2021. Disponível em:
            https://cdn.who.int/media/docs/default-source/influenza/who-influenza-recommendations/vcm-southern-hemisphere-recommendation-2022/202109_recommendation.pdf?sfvrsn=698a54b9_12&download=true.
            Acesso em Fevereiro/2022
          </li>
          <li>
            Ministério da Saúde Informe Técnico. 23ª Campanha Nacional de Vacinação Contra a
            Influenza. Brasília, 2021. Disponível em:
            https://www.gov.br/saude/pt-br/media/pdf/2021/marco/16/informe-tecnico-influenza-2021.pdf.
            Acesso em Fevereiro/2022.{' '}
          </li>
          <li>
            Portal do Estado do Rio Grande do Sul. Vacinação contra a gripe continua com foco em
            idosos, gestantes, puérperas e crianças. Disponível em:
            https://estado.rs.gov.br/vacinacao-contra-a-gripe-continua-com-foco-em-idosos-gestantes-puerperas-e-criancas#:~:text=A%20m%C3%A9dica%20informa%20que%20a,n%C3%A3o%20podem%20receber%20a%20vacina.
            Acesso em Fevereiro/2022
          </li>
          <li>
            Ministério da Saúde. Biblioteca Virtual em Saúde. H3N2: novo vírus influenza em
            circulação no país. Disponível em:
            https://bvsms.saude.gov.br/h3n2-novo-virus-influenza-em-circulacao-no-pais/. Acesso em
            Fevereiro/2022.{' '}
          </li>
        </ol>
      </ReferencesSection>
      <Footer />
    </>
  );
};
export default Component;
