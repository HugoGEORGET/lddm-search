import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Highlight } from 'react-instantsearch-dom';

import './Hit.css';

function Hit(props) {
  return (
    <article className={props.hit.Type}>
      Épisode n°{props.hit.Episode} (
      {props.hit.Ordre === 1 ? '1er' : `${props.hit.Ordre}ème`} morceau)
      <h1>
        <Highlight attribute="Titre (sur Album)" hit={props.hit} />
      </h1>
      <hr />
      <p>
        Jeu :{' '}
        <b>
          <Highlight attribute="Jeu" hit={props.hit} />
        </b>
      </p>
      <p>
        Compositeur / Interprète :{' '}
        <b>
          <Highlight attribute="Compositeur / Interprète" hit={props.hit} />
        </b>
        {props.hit['Liens web'] ? (
          <a
            href={props.hit['Liens web']}
            className="ext-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />{' '}
          </a>
        ) : (
          ''
        )}
      </p>
      <p>
        Type : <b>{props.hit.Type.charAt(0).toUpperCase() + props.hit.Type.slice(1)}</b>
      </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;
