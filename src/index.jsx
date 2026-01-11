import React from 'react';
import { createRoot } from 'react-dom/client';

class Main extends React.Component {
  render() {
    return <h1>AllFilm</h1>;
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<Main />);
