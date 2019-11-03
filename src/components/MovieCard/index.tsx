
import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import * as MovieActions from "../../store/ducks/movie/actions";
import { CardStyle, CheckedButton, CardContent } from "./style";
import { Dispatch, bindActionCreators } from "redux";
import { Movie } from "../../store/ducks/movie/types";

interface Props {
    movie: Movie;
    checkCallback(): void;
}

const MovieCard = (props: Props) => {
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <CardStyle checked={checked} onClick={() => {
            setChecked(!checked);
            props.checkCallback();
        }}>
            <CheckedButton checked={checked}>✓</CheckedButton>
            <CardContent>
                teste
            </CardContent>
        </CardStyle>
    );
};


export default MovieCard;
