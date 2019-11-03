
import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import * as MovieActions from "../../store/ducks/movie/actions";
import { PageInfo } from "./style";
import { Dispatch, bindActionCreators } from "redux";
import { Movie } from "../../store/ducks/movie/types";
import Progress from "../Progress";

const Intro = () => {
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <PageInfo>
            Campeonato de Filmes
          <Progress />
        </PageInfo>
    );
};


export default Intro;
