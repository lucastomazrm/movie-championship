
import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import * as MovieActions from "../../store/ducks/movie/actions";
import { LoadingContainer } from "./style";
import { Dispatch, bindActionCreators } from "redux";
import { Movie } from "../../store/ducks/movie/types";
import loader from "../../assets/img/loader.gif";

type Props = ApplicationState;
const Loading = (props: Props) => {
    if (!props.movies.loading) return null;
    return (
        <LoadingContainer>
            <img src={loader} />
            Carregando
        </LoadingContainer>
    );
};

const mapStateToProps = (state: ApplicationState) => ({ ...state });

export default connect(
    mapStateToProps,
)(Loading);

