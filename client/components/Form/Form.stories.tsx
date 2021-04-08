import React from 'react';
import Link from 'next/link';
import ReactSelect from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import Form from './Form';
import FormGroup from './FormGroup/FormGroup';
import PasswordReveal from './PasswordReveal/PasswordReveal';
import UsernameInput from './UsernameInput/UsernameInput';
import LoginButtons from '../login/LoginButtons/LoginButtons';
import Checkbox from './Checkbox/Checkbox';
import InputWithIcon from './InputWithIcon/InputWithIcon';
import { ShareButton } from '../SocialMediaButtons/SocialMediaButtons';
import MarkdownTextarea from '../MarkdownTextarea';
import subscribeForm from '../SubscribeForm/SubscribeForm.module.scss';
import initForm from '../Editor/InitForm/InitForm.module.scss';

let styles = {};
Object.assign(styles, subscribeForm, initForm);

export default {
  title: 'Form',
};

const onSubmit = () => {
  console.log('submit');
};

export const Login = () => (
  <Form onSubmit={onSubmit}>
    <FormGroup className="mb-4">
      <label>
        <span className="label">
          Email
        </span>
        <input
          required
          type="text"
          autoCapitalize="none"
        />
      </label>
    </FormGroup>

    <FormGroup className="mb-4">
      <label>
        <span className="label"> Username </span>
        <InputWithIcon
          required
          type="text"
          name="username"
        />
      </label>
    </FormGroup>

    <FormGroup className="mb-4">
      <label>
        <span className="label"> Parola </span>
        <PasswordReveal />
      </label>
    </FormGroup>

    <Checkbox
      required
      name="confirm"
      className="d-flex mb-4"
    >
      <span style={{ fontSize: '0.85em' }}>
        Am citit și sunt de acord cu
        {' '}
        <a href="/termeni-si-conditii" className="link">
          Termenii și Condițiile
        </a>
        {' '}
        de utilizare.
      </span>
    </Checkbox>

    <LoginButtons mode="login" onLogin={() => console.log('login')} onRegister={() => console.log('register')} />
  </Form>
);
export const FilesList = () => (
  <form noValidate onSubmit={onSubmit}>
    <input
      className={styles['filename-input']}
      type="text"
    />
    <Button hidden type="submit" />
  </form>
);
export const FolderBrowse = () => (
  <form noValidate onSubmit={onSubmit} className="d-flex align-items-center">
    <FontAwesomeIcon style={{ marginRight: '0.5em' }} icon={faChevronRight} width="18" height="18" />
    <input
      className={styles['folder-input']}
      type="text"
    />
    <Button hidden type="submit" />
  </form>
);
export const InitForm = () => (
  <Form
    className={`
        ${styles['init-editor-form']} 
        d-flex align-items-center justify-content-center`}
    onSubmit={onSubmit}
  >
    <label>
      <span>Numele fișierului*</span>
      <div className={styles['input-and-button']}>
        <input required type="text" name="name" />
        <Button type="submit" variant="success">
          Creează
        </Button>
      </div>
    </label>
    <span className={styles.separator}>
      <span>sau</span>
    </span>
    <p className={styles['dnd-cta']}>
      <label htmlFor="123">Drag and drop</label>
      {' '}
      fișiere și foldere
    </p>

    <label className={`${styles['upload-label']} pin-full d-flex align-items-center justify-content-center`}>
      <p>
        <span className="icon-check mr-2" />
        Adaugă fișierele
      </p>
      <input className="pin-full" id="123" type="file" multiple />
    </label>
  </Form>
);
export const RegisterEventCard = () => (
  <Form onSubmit={onSubmit}>
    <div className="d-flex justify-content-between flex-wrap">
      <div>
        <p className="m-0">
          Durată:
          {' '}
          <strong>
            3h
          </strong>
        </p>

        <p className="m-0">
          Dată:
          {' '}
          <strong>
            <time dateTime="10 aprilie 2021">10 aprilie 2021</time>
          </strong>
        </p>

      </div>
      <div>
        <p className="m-0">
          Preț:
          {' '}
          <span className="text-blue text-bold">
            Gratuit
          </span>
        </p>
        <p className="m-0">
          Locație:
          {' '}
          <span className="text-blue text-bold">
            Online: ZOOM
          </span>
        </p>
      </div>
    </div>
    <p className="my-5">descriere</p>

    <FormGroup className="mb-4">
      <label>
        <span className="label text-bold mb-2">
          Nume si prenume
        </span>
        <input type="text" name="name" required />
      </label>
    </FormGroup>

    <FormGroup className="mb-4">
      <label>
        <span className="label text-bold mb-2">
          Adresa de email
        </span>
        <input type="email" name="email" required />
      </label>
    </FormGroup>

    <FormGroup>
      <label>
        <span className="label text-bold mb-2">
          Număr de telefon
        </span>
        <span className="text-xs text-grey d-flex align-items-center">
          Te vom contacta cu o zi înainte de eveniment a confirma participarea
        </span>
        <input type="tel" name="tel" required />
      </label>
    </FormGroup>

    <ReactSelect
      isSearchable
      placeholder="Alege data si ora la care vrei sa participi"
      options={[{ value: '10 Aprilie 2021 ora 10:00', label: '10 Aprilie 2021 ora 10:00' },
        { value: '18 Aprilie 2021 ora 10:00', label: '18 Aprilie 2021 ora 10:00' }]}
      className={`${styles.select} my-5`}
      name="timestamp"
    />

    <footer className="d-flex my-5 justify-content-between flex-wrap">
      <Button type="submit" variant="blue">
        Înscrie-te
      </Button>
      <ShareButton
        variant="light"
        url="#"
        config={{
          copy: true,
          facebook: true,
          whatsapp: true,
          linkedin: true,
        }}
      />
    </footer>

    <div className="text-right my-5">
      <Link href="#">
        <a>
          Află mai multe
        </a>
      </Link>
    </div>
  </Form>
);
export const ChangeDescription = () => (
  <Form autoComplete="off" onSubmit={onSubmit}>
    <h3 className="mt-0">Schimbă descrierea</h3>
    <div className="d-flex justify-content-between align-items-center">
      <div id="change-description">
        <FormGroup className="mb-4">
          <label>
            <span className="label">
              Noua descriere*
            </span>
            <textarea cols={40} rows={5} name="newDescription" required />
          </label>
        </FormGroup>

        <FormGroup>
          <label>
            <span className="label">
              Parola*
            </span>
            <PasswordReveal required autoComplete="new-password" name="passwordConfirm" />
          </label>
        </FormGroup>
      </div>
      <Button
        type="submit"
        variant="blue"
      >
        Schimbă descrierea
      </Button>
    </div>
  </Form>
);
export const ChangeEmail = () => (
  <Form onSubmit={onSubmit}>
    <h3 className="mt-0">Schimbă email-ul</h3>
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <FormGroup className="mb-4">
          <label>
            <span className="label">
              Noul email*
            </span>
            <input type="email" name="newEmail" required />
          </label>
        </FormGroup>

        <FormGroup>
          <label>
            <span className="label">
              Parola*
            </span>
            <PasswordReveal required autoComplete="new-password" name="passwordConfirm" />
          </label>
        </FormGroup>
      </div>
      <Button
        type="submit"
        variant="blue"
      >
        Schimbă email-ul
      </Button>
    </div>
  </Form>
);
export const ChangeName = () => (
  <Form autoComplete="off" onSubmit={onSubmit}>
    <h3 className="mt-0">Schimbă numele</h3>
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <FormGroup className="mb-4">
          <label>
            <span className="label">
              Noul nume*
            </span>
            <input type="text" name="newName" required />
          </label>
        </FormGroup>

        <FormGroup>
          <label>
            <span className="label">
              Parola*
            </span>
            <PasswordReveal required autoComplete="new-password" name="passwordConfirm" />
          </label>
        </FormGroup>
      </div>
      <Button
        type="submit"
        variant="blue"
      >
        Schimbă numele
      </Button>
    </div>
  </Form>
);
export const ChangePassword = () => (
  <Form onSubmit={onSubmit}>
    <h3 className="mt-0">Schimbă parola</h3>
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <FormGroup className="mb-4">
          <label>
            <span className="label">
              Noua parolă*
            </span>
            <PasswordReveal required autoComplete="new-password" name="newPassword" />
          </label>
        </FormGroup>

        <FormGroup>
          <label>
            <span className="label">
              Parola curentă*
            </span>
            <PasswordReveal required autoComplete="new-password" name="passwordConfirm" />
          </label>
        </FormGroup>
      </div>
      <Button
        type="submit"
        variant="blue"
      >
        Schimbă parola
      </Button>
    </div>
  </Form>
);
export const ChangeUsername = () => (
  <Form onSubmit={onSubmit}>
    <h3 className="mt-0">Schimbă username-ul</h3>
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <FormGroup className="mb-4">
          <label>
            <span className="label">
              Noul username*
            </span>
            <UsernameInput name="newUsername" />
          </label>
        </FormGroup>

        <FormGroup>
          <label>
            <span className="label">
              Parola*
            </span>
            <PasswordReveal required autoComplete="new-password" name="passwordConfirm" />
          </label>
        </FormGroup>
      </div>
      <Button
        type="submit"
        variant="blue"
      >
        Schimbă username-ul
      </Button>
    </div>
  </Form>
);
export const DeleteAccount = () => (
  <Form onSubmit={onSubmit}>
    <h3 className="mt-0">Șterge contul și toate informațiile asociate</h3>
    <div className="d-flex justify-content-between align-items-center">
      <FormGroup>
        <p className="mt-0"> Această decizie e una finală, nu te poți răzgândi. Te rugăm să fii sigur!</p>
        <label className="d-inline-block">
          <span className="label">
            Parola*
          </span>
          <PasswordReveal required autoComplete="new-password" name="passwordConfirm" />
        </label>
      </FormGroup>
      <Button
        variant="danger"
        type="submit"
      >
        Șterge contul
      </Button>
    </div>
  </Form>
);
export const SubscribeForm = () => (
  <form onSubmit={onSubmit} className={`${styles.form} my-5 text-center`}>
    <label>
      <span className="m-0">Cum să-ți spunem?</span>
      <input type="text" name="name" required />
    </label>
    <label>
      <span className="m-0">Email</span>
      <input type="email" name="email" required />
    </label>
    <label>
      <span className="mb-2">
        Ca să ne asigurăm că nu ești robot,
        {' '}
        <br />
        {' '}
        scrie mai jos
        {' '}
        <strong>frontend.ro</strong>
      </span>
      <input type="text" name="robot-check" required />
    </label>

    <Button
      variant="light"
      type="submit"
      className="w-100"
    >
      Abonează-te!
    </Button>

  </form>
);
export const ViewOrEditExercise = () => (
  <Form withStyles={false} onSubmit={onSubmit} className="relative" id="createForm">
    <div>
      <MarkdownTextarea
        title="Descrie exercițiul"
        initialTab="PREVIEW"
        onInput={(text:string) => console.log(text)}
        onUpload={(files: File[], cursorPosition: number) => console.log(files, cursorPosition)}
      />
    </div>
  </Form>
);
