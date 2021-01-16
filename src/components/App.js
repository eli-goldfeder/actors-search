import React from 'react';
import ActorsGallery from './ActorsGallery/ActorsGallery';
import MoviesGallery from './MoviesGallery/MoviesGallery';
import { Container } from "react-bootstrap";

const App = () => {
    return (
        <Container>
            <ActorsGallery />
            <MoviesGallery />
        </Container>
    );
}

export default App;