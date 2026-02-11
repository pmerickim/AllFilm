A simple IMDb-style movie search application built with React.
Users can search for movies and add them to a personal watchlist, which is stored locally in the browser.

No login. No accounts. No backend.

---

## Features

- Search movies by title
- View movie details (poster, title, year, rating, etc.)
- Add / remove movies from a watchlist
- Persistent watchlist using LocalStorage
- Built with React functional components and hooks
- No authentication or database required

---

## Tech Stack

- React
- JavaScript
- TMDb API
- Browser LocalStorage

---

## App Logic Overview

### Movie Search
- User enters a movie title in the search input
- App fetches matching movies from TMDB API
- Results are displayed as movie cards

### Watchlist (to be added)
- Clicking Add to Watchlist saves the movie to LocalStorage
- Watchlist state is initialized from LocalStorage on app load
- Movies can be removed from the watchlist
- Watchlist updates persist across page refreshes
