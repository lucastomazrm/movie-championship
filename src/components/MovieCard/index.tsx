
import React, { useState } from "react";
import "react-step-progress-bar/styles.css";
import { CardStyle, CheckedButton, CardContent, MovieTitle, MovieYear } from "./style";
import { Movie } from "../../store/ducks/movie/types";

interface Props {
    movie: Movie;
    toogleChecked?(checked: boolean): void;
}

const MovieCard = (props: Props) => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <CardStyle checked={checked} onClick={() => {
            if (props.toogleChecked) {
                setChecked(!checked);
                props.toogleChecked(checked);
            }
        }}>
            <CheckedButton checked={checked}>✓</CheckedButton>
            <CardContent>
                <MovieTitle>{props.movie.title}</MovieTitle>
                <MovieYear>Ano de Lançamento: {props.movie.releaseYear}</MovieYear>
            </CardContent>
        </CardStyle>
    );
};


export default MovieCard;
