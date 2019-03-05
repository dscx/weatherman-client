import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      errorMessage: "",
      latitude: null,
      longitude: null,
      isGeocoding: false
    };
  }

  handleChange = address => {
    this.setState({
      address,
      latitude: null,
      longitude: null,
      errorMessage: ""
    });
  };

  handleSelect = selected => {
    this.setState({ isGeocoding: true, address: selected });
    geocodeByAddress(selected)
      .then(res => getLatLng(res[0]))
      .then(({ lat, lng }) => {
        this.setState({
          latitude: lat,
          longitude: lng,
          isGeocoding: false
        });
        this.props.getWeather({ lat, lng });
      })
      .catch(error => {
        this.setState({ isGeocoding: false });
        console.log("error", error);
      });
  };

  handleCloseClick = () => {
    this.setState({
      address: "",
      latitude: null,
      longitude: null
    });
  };

  handleError = (status, clearSuggestions) => {
    console.log("Error from Google Maps API", status);
    this.setState({ errorMessage: status }, () => {
      clearSuggestions();
    });
  };

  render() {
    const { address, errorMessage } = this.state;

    return (
      <div>
        <PlacesAutocomplete
          onChange={this.handleChange}
          value={address}
          onSelect={this.handleSelect}
          onError={this.handleError}
          shouldFetchSuggestions={address.length > 2}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              <input
                style={styles.input}
                {...getInputProps({
                  placeholder: "Search Places"
                })}
              />
              <div>
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const style = styles.suggestion(suggestion.active);
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        {errorMessage.length > 0 && <div>{this.state.errorMessage}</div>}
      </div>
    );
  }
}

const styles = {
  input: { minWidth: 200 },
  suggestion: active => ({
    backgroundColor: active ? "#fafafa" : "#ffffff",
    cursor: "pointer"
  })
};
