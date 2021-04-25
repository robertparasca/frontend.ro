import React from 'react';
import SEOTags from '~/components/SEOTags';
import { RobertParasca } from '~/services/contributors';
import coverSvg from '~/public/images/lessons/lists__cover.svg';
import Lesson, {
  LessonContributors, LessonCover, LessonHeading, LessonTip,
} from '~/components/lessons';
import Highlight from '~/components/Highlight/Highlight';
import Demo, { DemoPreview } from '~/components/demo';

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
          <Highlight
              className="my-5"
              language="html"
              code={`
<form action="formHandler.php" method="POST" autocomplete="on">
  <div>
    <label for="username">Username</label>
    <input type="text" name="username">
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" name="password">
  </div>
  <div>
    <button type="submit">Login</button>
  </div>
</form>   
`}
          />
        </section>
        <section>
          <LessonHeading as="h3" id={chapters[2].id}>
            {chapters[2].title}
          </LessonHeading>
          <p>Un formular poate fi format din mai multe câmpuri, de diferite feluri. Elementul input are și el câteva atribute, printre care se numără:
          </p>
          <LessonTip>
            Încearcă să completezi fiecare input pe care prezentat ca demo mai jos pentru a înțelege mai bine. ;)
          </LessonTip>
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
              <DemoPreview className="mt-4">
                <input type="text" name="text" id="text-example" value="Nu mai poți edita aici" disabled />
              </DemoPreview>
              <Highlight
                className="mt-4"
                language="html"
                code={`
<input type="text" name="text" id="text-example" value="Nu mai poți edita aici" disabled="disabled" />
`}
              />
            </li>
            <li className="mb-4">
              <strong className="formatted">required</strong>
              {' '}
              - marchează câmpul ca fiind obligatoriu pentru a reuși să trimiți formularul.
              <DemoPreview className="mt-4">
                <form>
                  <input type="text" name="text" id="text-example" required />
                  <button type="submit">Apasă-mă</button>
                </form>
              </DemoPreview>
              <Highlight
                className="mt-4"
                language="html"
                code={`
<form>
  <input type="text" name="text" id="text-example" required="required" />
  <button type="submit">Apasă-mă</button>
</form>
`}
              />
            </li>
            <li className="mb-4">
              <strong className="formatted">placeholder</strong>
              {' '}
              - reprezintă textul din input când nu există nicio valoare în el. În momentul în care începi să scrii în input, acest placeholder dispare, motiv pentru care nu este recomand să-l folosim.
              <DemoPreview className="mt-4">
                <input type="text" name="text" id="text-example" placeholder="Introdu adresa" />
              </DemoPreview>
              <Highlight
                className="mt-4"
                language="html"
                code={`
<input type="text" name="text" id="text-example" placeholder="Introdu adresa" />
`}
              />
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
                <DemoPreview className="mt-4">
                    <input type="text" name="text" id="text-example" />
                </DemoPreview>
                <Highlight
                  className="mt-4"
                  language="html"
                  code={`
<input type="text" name="text" id="text-example" />
`}
              />
            </li>
            <li className="mb-4">
              <strong className="formatted">email</strong>
              {' '}
              - acest tip este folosit atunci când avem un câmp pentru email. Un exemplu ar fi email-ul dintr-un formular de autentificare.
              <DemoPreview className="mt-4">
                <input type="email" name="email" id="email-example" />
              </DemoPreview>
              <Highlight
                className="mt-4"
                language="html"
                code={`
<input type="email" name="email" id="email-example" />
`}
              />
            </li>
            <li className="mb-4">
              <strong className="formatted">password</strong>
              {' '}
              - așa cum sugerează și numele, acest tip este folosit pentru câmpurile de tip parolă.
                <DemoPreview className="mt-4">
                    <input type="password" name="password" id="password-example" />
                </DemoPreview>
                <Highlight
                    className="mt-4"
                    language="html"
                    code={`
<input type="password" name="password" id="password-example">
`}
                />
            </li>
            <li className="mb-4">
              <strong className="formatted">number</strong>
              {' '}
              - acest tip este folosit atunci când vrei ca utilizatorul să poată adăuga doar numere. Exemple: cantitate într-un coș de cumpărături sau vârsta utilizatorului.
                <DemoPreview className="mt-4">
                    <input type="number" name="number" id="number-example" />
                </DemoPreview>
                <Highlight
                    className="mt-4"
                    language="html"
                    code={`
<input type="number" name="number" id="number-example">
`}
                />
            </li>
            <li className="mb-4">
              <strong className="formatted">file</strong>
              {' '}
              - este folosit atunci când vrei să-i oferi utilizatorului posibilitatea să încarce fișiere. Exemplu: fotografia de profil de pe Facebook.
                <DemoPreview className="mt-4">
                    <input type="file" name="file" id="file-example" />
                </DemoPreview>
                <Highlight
                    className="mt-4"
                    language="html"
                    code={`
<input type="file" name="file" id="file-example">
`}
                />
            </li>
            <li className="mb-4">
              <strong className="formatted">checkbox</strong>
              {' '}
              - este folosit atunci când vrei să-i oferi utilizatorului posibilitatea de a alege multiple opțiuni. Gândește-te la un formular de dezabonare de la un newsletter în care ești întrebat care sunt motivele pentru care vrei să te dezabonezi.
                <DemoPreview className="mt-4">
                    Checked: <input type="checkbox" name="checkbox1" id="checkbox-example1" checked />
                    Unchecked: <input type="checkbox" name="checkbox2" id="checkbox-example2" />
                </DemoPreview>
                <Highlight
                    className="mt-4"
                    language="html"
                    code={`
<input type="checkbox" name="checkbox1" id="checkbox-example1" checked="checked">
<input type="checkbox" name="checkbox2" id="checkbox-example2">
`}
                />
            </li>
            <li className="mb-4">
              <strong className="formatted">radio</strong>
              {' '}
              - este folosit atunci când vrei să-i oferi utilizatorului posibilitatea de a alege o singură opțiune. Gândește-te la un formular de înregistrare în care trebuie să selectezi metoda de plată.
                <DemoPreview className="mt-4">
                    Checked: <input type="radio" name="radio" id="radio-example1" checked />
                    Unchecked: <input type="radio" name="radio" id="radio-example2" />
                </DemoPreview>
                <Highlight
                    className="mt-4"
                    language="html"
                    code={`
<input type="radio" name="radio" id="radio-example1" checked="checked">
<input type="radio" name="radio" id="radio-example2">
`}
                />
            </li>
          </ul>
        </section>
        <section>
          <LessonHeading as="h3" id={chapters[3].id}>
            {chapters[3].title}
          </LessonHeading>
          <p>Gândește-te la un formular în care poți adăuga un comentariu. Acest tip de formular conține deobicei două-trei câmpuri. Unul pentru nume, unul pentru email și un câmp mai mare în care poți adăuga comentariul tău. Ultimul câmp este, de obicei, un element textarea.</p>

        </section>
        <section>
          <LessonHeading as="h3" id={chapters[4].id}>
            {chapters[4].title}
          </LessonHeading>
          <p>
            Cu ajutorul elementului select îi oferim utilizatorului o listă de opțiuni din care poate alege. Gândește-te spre exemplu la un formular de înregistrare în care trebuie să completezi un câmp pentru țara de origine. Opțiunile din acel select sunt adăugate cu ajutorul elementului option.
          </p>
          <p>Câteva dintre atributele elementului <strong className="formatted">select</strong> sunt:</p>
          <ul className="with--bullets">
            <li className="mb-4">
              <strong className="formatted">disabled</strong>
              {' '}
              - indică dacă câmpul ar trebui să fie dezactivat sau nu.
              <DemoPreview className="mt-4">
                <input type="text" name="text" id="text-example" />
              </DemoPreview>
              <Highlight
                className="mt-4"
                language="html"
                code={`
<input type="text" name="text" id="text-example" />
`}
              />
            </li>
            <li className="mb-4">
              <strong className="formatted">name</strong>
              {' '}
              - este folosit pentru a identifica datele din formular.
            </li>
            <li className="mb-4">
              <strong className="formatted">multiple</strong>
              {' '}
              - indică dacă utilizatorul poate selecta mai multe opțiuni sau nu.
              <DemoPreview className="mt-4">
                <input type="text" name="text" id="text-example" />
              </DemoPreview>
              <Highlight
                className="mt-4"
                language="html"
                code={`
<input type="text" name="text" id="text-example" />
`}
              />
            </li>
            <li className="mb-4">
              <strong className="formatted">required</strong>
              {' '}
              - marchează câmpul ca fiind obligatoriu pentru a reuși să trimiți formularul.
              <DemoPreview className="mt-4">
                <input type="text" name="text" id="text-example" />
              </DemoPreview>
              <Highlight
                className="mt-4"
                language="html"
                code={`
<input type="text" name="text" id="text-example" />
`}
              />
            </li>
          </ul>
          <p>Câteva dintre atributele elementului <strong className="formatted">option</strong> sunt:</p>
          <ul className="with--bullets">
            <li className="mb-4">
              <strong className="formatted">selected</strong>
              {' '}
              - indică care opțiune să fie preselectată.
              <DemoPreview className="mt-4">
                <input type="text" name="text" id="text-example" />
              </DemoPreview>
              <Highlight
                className="mt-4"
                language="html"
                code={`
<input type="text" name="text" id="text-example" />
`}
              />
            </li>
            <li className="mb-4">
              <strong className="formatted">value</strong>
              {' '}
              - conținutul atributului reprezintă valoarea care va fi trimisă.
              <DemoPreview className="mt-4">
                <input type="text" name="text" id="text-example" />
              </DemoPreview>
              <Highlight
                className="mt-4"
                language="html"
                code={`
<input type="text" name="text" id="text-example" />
`}
              />
            </li>
            <li className="mb-4">
              <strong className="formatted">disabled</strong>
              {' '}
              - indică dacă opțiunea ar trebui să fie dezactivată sau nu.
              <DemoPreview className="mt-4">
                <input type="text" name="text" id="text-example" />
              </DemoPreview>
              <Highlight
                className="mt-4"
                language="html"
                code={`
<input type="text" name="text" id="text-example" />
`}
              />
            </li>
          </ul>
        </section>
        <section>
          <LessonHeading as="h3" id={chapters[5].id}>
            {chapters[5].title}
          </LessonHeading>
          <p>Cu ajutorul acestui element asociem unui câmp o descriere. Este considerat <strong>best practice</strong> să adaugăm un label fiecărui "input" pentru că în modul acesta utilizatorului îi va fi mai ușor să înțeleagă ce trebuie completat. Elementul label are un atribut important și anume for care indică câmpul corespunzător.</p>
          <p>Pentru a fi valid, valoarea atributului <strong>for</strong> trebuie să fie <strong>identică</strong> cu valoarea atributului <strong>id</strong> de pe input.</p>
          <DemoPreview className="mt-4">
            <label htmlFor="email_example">Email</label>
            <input type="email" id="email_example" name="email"/>
          </DemoPreview>
          <Highlight
            className="mt-4"
            language="html"
            code={`
<label for="email_example">Email</label>
<input type="email" id="email_example" name="email" />
`}
          />
        </section>
        <section>
          <LessonHeading as="h3" id={chapters[6].id}>
            {chapters[6].title}
          </LessonHeading>
          <p><strong>Best practice</strong>, așa cum sugerează și numele sunt tehnici de programare care indică cum ar trebui să faci anumite lucruri pentru a avea un rezultat cât mai bun și calitativ. Mai jos sunt prezentate câteva best practices în cazul formularelor. </p>
        </section>
      </Lesson>
    </>
  );
}
