import Autosuggest from 'react-autosuggest';
import { useState } from 'react';

const AutoCompleteField = () => {
  const [tickers, setTickers] = useState('');
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : tickers &&
          tickers.filter(
            (ticker) =>
              ticker.name.toLowerCase().slice(0, inputLength) === inputValue ||
              ticker.symbol.toLowerCase().slice(0, inputLength) === inputValue
          );
  };

  /*
   * When suggestion is clicked, Autosuggest needs to populate the input
   * based on the clicked suggestion. Teach Autosuggest how to calculate the
   * input value for every given suggestion.
   */
  const getSuggestionValue = (suggestion) => suggestion.symbol;

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion) => (
    <>
      <div className="symbol">{suggestion.symbol}</div>
      <div className="name">{suggestion.name}</div>
    </>
  );

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onFocus = async () => {
    const data = (await import('./autoCompleteList')).default;

    setTickers(data);
  };

  /*
   * Autosuggest will call this function every time you need to update suggestions.
   * You already implemented this logic above, so just use it.
   */

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    onChange,
    onFocus,
    placeholder: 'Search...',
    value,
  };

  return (
    <Autosuggest
      getSuggestionValue={getSuggestionValue}
      inputProps={inputProps}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      renderSuggestion={renderSuggestion}
      suggestions={suggestions}
    />
  );
};

export default AutoCompleteField;
