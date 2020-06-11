import React from 'react';
import {Link} from 'react-router-dom';

export default function DogBreedImages(props) {
    const {images, breed} = props;

    return (
        <div className="dog-breed-images">
            <h1>Dogs Breed Images</h1>
            {images && images.map(url => <img src={url} alt="Dog"/>)}
            {!images && 'Loading...'}
            <Link to="/">Go back to the index</Link>
        </div>
    )
}