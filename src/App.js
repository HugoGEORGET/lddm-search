import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  PoweredBy,
  Hits,
  Stats,
  SearchBox,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  'RWDUF9UWAN',
  'b660b5d864b51219a1f14583a465c34e'
);

class App extends Component {
  render() {
    return (
      <>
        <header className="header">
          <h1>Les Démons du MIDI</h1>
          <hr />
          <small>
            un podcast{' '}
            <a
              href="https://www.geekzone.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Geekzone
            </a>{' '}
            par{' '}
            <a
              href="https://twitter.com/Pipomantis"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pipomantis
            </a>
            ,{' '}
            <a
              href="https://twitter.com/Gautoz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gautoz
            </a>{' '}
            et{' '}
            <a
              href="https://twitter.com/Faskil"
              target="_blank"
              rel="noopener noreferrer"
            >
              Faskil
            </a>
          </small>
        </header>
        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="lddm">
            <div className="search-panel">
              <div className="search-panel__results">
                <PoweredBy />
                <SearchBox
                  className="searchbox"
                  translations={{
                    placeholder: 'Recherchez un morceau...',
                  }}
                />
                <Stats />
                <Hits hitComponent={Hit} />

                <div className="pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </>
    );
  }
}

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
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
