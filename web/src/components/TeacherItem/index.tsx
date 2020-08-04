import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return (
  
    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/51544205?s=460&u=a6dd600a9a2e7cd101b1e5fc45d9104740f27f8f&v=4" alt="Mickael Rocha"/>
      <div>
        <strong>Mickael Rocha</strong>
        <span>Games</span>
      </div>
    </header>

    <p>
      Gosto de jogos e é isso dai. 
      <br/><br/>
      Me motivo todo dia a ser uma pessoa mais estudiosa.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 20,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>

    </article>
  )
}

export default TeacherItem; 