
## Setup

### 1.  Install dependencies

```sh
$ npm install
```

### 2. Run the app

```sh
$ npm start
```

> [http://localhost:8000](http://localhost:8000) — Development server<br>

### 3. Run the API server
  > [https://github.com/dscx/weatherman-api](https://github.com/dscx/weatherman-api) — See Repo for instructions<br>

### 4. Search for a city or zip and select an item form the autocomplete

## Architecture
I chose to use a template from ARc, to get things moving quickly. The structure is not ideal but works nicely for this small app. Ideally I would make a folder for each module (Eg. Search, Login, etc) containing its own components folder, but that seemed too complex for this.

I broke out the components into bite-sized chunks for easier reasoning and reuse.

I also chose to use some helpful UI libraries, like Reactstrap, and used Google Places API to simplify the search process.

As far as tradeoffs go, I chose to use the included icons with the weather api as fetching them was basically free (time constraint).

Did not have time to implement tests.