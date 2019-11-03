
import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import * as MovieActions from "../../store/ducks/movie/actions";
import { CardStyle, CheckedButton, CardContent, MovieTitle, MovieYear } from "./style";
import { Dispatch, bindActionCreators } from "redux";
import { Movie } from "../../store/ducks/movie/types";

interface Props {
    movie: Movie;
    toogleChecked(checked: boolean): void;
}

const MovieCard = (props: Props) => {
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <CardStyle checked={checked} onClick={() => {
            setChecked(!checked);
            props.toogleChecked(checked);
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
