
import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import * as MovieActions from "../../store/ducks/movie/actions";
import { ContainerStyle } from "./style";
import { Dispatch, bindActionCreators } from "redux";
import { Movie } from "../../store/ducks/movie/types";
import loader from "../../assets/img/loader.gif";

interface Props {
    children: React.ReactNode;
}

export default (props: Props) => {
    return (
        <ContainerStyle>
            {props.children}
        </ContainerStyle>
    );
};


