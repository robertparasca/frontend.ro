import React from 'react';
import SEOTags from '~/components/SEOTags';
import { RobertParasca } from '~/services/contributors';
import coverSvg from '~/public/images/lessons/lists__cover.svg';
import Lesson, { LessonContributors, LessonCover, LessonHeading } from '~/components/lessons';
import Highlight from '~/components/Highlight/Highlight';

const contributors = [RobertParasca];
const chapters = [
  { title: 'Introducere', id: 'introducere' },
  { title: 'Elementul <form>', id: 'elementul-form' },
  { title: 'Elementul <input>', id: 'elementul-input' },
  { title: 'Elementul <textarea>', id: 'elementul-textarea' },
  { title: 'Elementele <select> & <option>', id: 'select-option' },
  { title: 'Elementul <label>', id: 'elementul-label' },
  { title: 'Bonus', id: 'bonus' },
];
{ /* eslint-disable */ }
export default function FormsLesson() {
  return (
    <>
      <SEOTags
        title="Liste | Lecție HTML"
        shareImage="https://frontend.ro/seo/html-lists.jpg"
        description="Învață despre tipurile de liste în HTML"
        url="https://FrontEnd.ro/html/liste"
      />
      <Lesson id="formulare" title="Formulare" chapters={chapters} withExercises={false}>
        <LessonContributors className="absolute" contributors={contributors} />
        <LessonCover>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{
            __html: coverSvg,
          }}
          />
        </LessonCover>
        <section>
          <LessonHeading as="h3" id={chapters[0].id}>
            {chapters[0].title}
          </LessonHeading>

          <p>Formularele reprezintă o mare parte a Internetului deoarece, cu ajutorul lor, utilizatorii interacționează într-un mod dinamic cu paginile web pe care le vizitează. Fie că te-ai conectat  pe Github să lucrezi la un proiect interesant, fie că ți-ai comandat ceva de pe un site, cu siguranță ai completat un formular.</p>
          <p>
            În continuare, o să-ți povestesc câteva lucruri legate de formulare, dar între timp uite și un exemplu de formular de autentificare.
          </p>
          <Highlight
              className="my-5"
              language="html"
              code={`
<ol>
  <li> Cumpără ingredientele necesare </li>
  <li> Amestecă ingredientele </li>
  <li> Pune amestecul într-un vas de gătit </li>
  <li> Coace în cuptor prăjitura timp de o oră </li>
  <li> Scoate prăjitura din cuptor </li>
</ol>     
`}
          />
        </section>
        <section>
          <LessonHeading as="h3" id={chapters[1].id}>
            {chapters[1].title}
          </LessonHeading>

          <p>Indiferent de scopul pentru care construiești un formular, vei folosi elementul form pentru a grupa câmpurile. Acesta are mai multe atribute, însă momentan ne vom concentra atenția pe următoarele:</p>
          <ul className="with--bullets">
            <li className="mb-4">
              <strong className="formatted">action</strong>
              {' '}
              - acest atribut indică URL-ul care va procesa formularul odată trimis
            </li>
            <li className="mb-4">
              <strong className="formatted">method</strong>
              {' '}
              - acest atribut indică metoda HTTP care va fi folosită când formularul va fi trimis.
              pentru a grupa un set de elemente ce au o ordine specifică; Nu-ți face prea multe griji legat de acest atribut. O să intrăm în detalii mai mult la capitolul despre JavaScript.
            </li>
            <li className="mb-4">
              <strong className="formatted">autocomplete</strong>
              {' '}
              - Indică dacă câmpurile din formular pot fi precompletate de către browser sau nu.
            </li>
          </ul>
        </section>
        <section>
          <LessonHeading as="h3" id={chapters[2].id}>
            {chapters[2].title}
          </LessonHeading>

          <p>Un formular poate fi format din mai multe câmpuri, de diferite feluri. Elementul input are și el câteva atribute, printre care se numără:
          </p>
          <ul className="with--bullets">
            <li className="mb-4">
              <strong className="formatted">type</strong>
              {' '}
              - principalele tipuri ar fi: text, password, number, file, checkbox și radio. Am pregătit mai multe detalii despre fiecare în parte mai jos.
            </li>
            <li className="mb-4">
              <strong className="formatted">disabled</strong>
              {' '}
              - este folosit în cazul în care vrem ca un câmp să nu mai fie editabil.
            </li>
            <li className="mb-4">
              <strong className="formatted">required</strong>
              {' '}
              - marchează câmpul ca fiind obligatoriu pentru a reuși să trimiți formularul.
            </li>
            <li className="mb-4">
              <strong className="formatted">placeholder</strong>
              {' '}
              - reprezintă textul din input când nu există nicio valoare în el. În momentul în care începi să scrii în input, acest placeholder dispare, motiv pentru care nu este recomand să-l folosim.
            </li>
            <li className="mb-4">
              <strong className="formatted">name</strong>
              {' '}
              - este folosit pentru a identifica datele din formular.
            </li>
            <li className="mb-4">
              <strong className="formatted">value</strong>
              {' '}
              - reprezintă valoarea din input.
            </li>
            <li className="mb-4">
              <strong className="formatted">autofocus</strong>
              {' '}
              - indică dacă câmpul ar trebui să fie "focused" sau nu.
            </li>
            <li className="mb-4">
              <strong className="formatted">inputmode</strong>
              {' '}
              - atributul acesta indică tipul de tastatură virtuală care îi va apărea utilizatorului când intră de pe telefon.
            </li>
          </ul>
          <p>Cu siguranță ai observat că nu toate câmpurile dintr-un formular se comportă la fel. Dacă e să luăm exemplul unui formular de login, câmpul în care scrii parola "ascunde" informația înlocuind vizual fiecare caracter cu câte un punct negru. Acest lucru este realizat cu ajutorul atributului pe care l-am menționat mai sus, și anume type.</p>
          <p>În continuare o să-ți prezint o parte din valorile pe care atributul type le poate avea:</p>
          <ul className="with--bullets">
            <li className="mb-4">
              <strong className="formatted">text</strong>
              {' '}
              - acest tip este folosit atunci când avem un câmp pentru text generic. Un exemplu ar fi adresa dintr-un formular de comandă.
            </li>
            <li className="mb-4">
              <strong className="formatted">password</strong>
              {' '}
              - așa cum sugerează și numele, acest tip este folosit pentru câmpurile de tip parolă.
            </li>
            <li className="mb-4">
              <strong className="formatted">number</strong>
              {' '}
              - acest tip este folosit atunci când vrei ca utilizatorul să poată adăuga doar numere. Exemple: cantitate într-un coș de cumpărături sau vârsta utilizatorului.
            </li>
            <li className="mb-4">
              <strong className="formatted">file</strong>
              {' '}
              - este folosit atunci când vrei să-i oferi utilizatorului posibilitatea să încarce fișiere. Exemplu: fotografia de profil de pe Facebook.
            </li>
            <li className="mb-4">
              <strong className="formatted">checkbox</strong>
              {' '}
              - este folosit atunci când vrei să-i oferi utilizatorului posibilitatea de a alege multiple opțiuni. Gândește-te la un formular de dezabonare de la un newsletter în care ești întrebat care sunt motivele pentru care vrei să te dezabonezi.
            </li>
            <li className="mb-4">
              <strong className="formatted">radio</strong>
              {' '}
              - este folosit atunci când vrei să-i oferi utilizatorului posibilitatea de a alege o singură opțiune. Gândește-te la un formular de înregistrare în care trebuie să selectezi metoda de plată.
            </li>
          </ul>
        </section>
      </Lesson>
    </>
  );
}
