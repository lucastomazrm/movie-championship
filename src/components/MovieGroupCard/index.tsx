
import React, { } from "react";
import "react-step-progress-bar/styles.css";
import { GroupStyle } from "./style";
import { MovieGroup, Movie } from "../../store/ducks/movie/types";
import MovieCard from "../MovieCard";

interface Props {
    movieGroup: MovieGroup;
    index: number;
}

const MovieGroupCard = (props: Props) => {
    return (
        <GroupStyle>
            <h3>Grupo {props.index}</h3>
            <MovieCard movie={props.movieGroup.movies[0]} />
            <span>X</span>
            <MovieCard movie={props.movieGroup.movies[1]} />
        </GroupStyle>
    );
};


export default MovieGroupCard;
