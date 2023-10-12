import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import Photos from "./Photos";
import './Dictionary.css';

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let scApiKey = "c3of6a63a347e624b70f4bfaed6810dt";
    let scApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=20a7b4d455458e7ffo4952342tabf625`;

    axios.get(scApiUrl, { scApiKey }).then(handleScResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleScResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: pulchritudinous, cruciverbalist, facetious,  ...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}