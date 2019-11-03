
import React, { } from "react";
import "react-step-progress-bar/styles.css";
import { GroupStyle } from "./style";
import { MovieGroup } from "../../store/ducks/movie/types";
import MovieCard from "../MovieCard";

interface Props {
    movieGroup: MovieGroup;
    index: number;
}

const MovieGroupCard = (props: Props) => {
    return (
        <GroupStyle>
            <h3>Grupo {props.index}</h3>
            <MovieCard movie={props.movieGroup.firstMovie} />
            <span>X</span>
            <MovieCard movie={props.movieGroup.secondMovie} />
        </GroupStyle>
    );
};


export default MovieGroupCard;
