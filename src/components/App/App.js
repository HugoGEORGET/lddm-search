import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import {
  InfiniteHits,
  InstantSearch,
  MenuSelect,
  PoweredBy,
  SearchBox,
  Stats,
} from 'react-instantsearch-dom';
import Hit from '../Hit/Hit';
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
        <div className="pattern-cross-dots-xl" style={{ color: 'blue' }}>
          <div
            className="container pattern-cross-dots-xl"
            style={{ color: 'initial' }}
          >
            <b>
              Un grand merci à{' '}
              <a
                href="https://twitter.com/PatrickRaberin"
                target="_blank"
                rel="noopener noreferrer"
              >
                @patrickraberin
              </a>{' '}
              et{' '}
              <a
                href="https://twitter.com/PbnPierre"
                target="_blank"
                rel="noopener noreferrer"
              >
                @PbnPierre
              </a>{' '}
              pour le{' '}
              <a
                href="https://docs.google.com/spreadsheets/d/1KsT0n2ipMIBLT4Ajc9k0uHxwCXYZ_HaBrjVjoZz8HbE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Sheet
              </a>{' '}
              tenu à jour !
            </b>
            <hr />
            <InstantSearch searchClient={searchClient} indexName="lddm">
              <div className="search-panel">
                <div className="search-panel__results">
                  <SearchBox
                    autoFocus
                    className="searchbox"
                    translations={{
                      placeholder: 'Cherchez un morceau, jeu, compositeur...',
                    }}
                  />
                  <PoweredBy translations={{ searchBy: 'Recherche par' }} />
                  <MenuSelect
                    attribute="Type"
                    transformItems={items =>
                      items.map(item => ({
                        ...item,
                        label:
                          // Capitalize the first letter of each type
                          item.label.charAt(0).toUpperCase() +
                          item.label.slice(1),
                      }))
                    }
                    translations={{
                      seeAllOption: 'Type de morceau',
                    }}
                  />
                  <Stats
                    translations={{
                      stats(nbHits, timeSpentMS) {
                        return `${nbHits} morceaux trouvés en ${timeSpentMS}ms`;
                      },
                    }}
                  />
                  <InfiniteHits
                    hitComponent={Hit}
                    translations={{ loadMore: 'Charger plus de morceaux' }}
                  />
                </div>
              </div>
            </InstantSearch>
          </div>
        </div>
      </>
    );
  }
}

export default App;
