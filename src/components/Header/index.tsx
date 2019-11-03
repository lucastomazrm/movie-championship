import React, { } from "react";
import "react-step-progress-bar/styles.css";
import { PageInfo } from "./style";
import Progress from "../Progress";

const Intro = () => {
    return (
        <PageInfo>
            Campeonato de Filmes
            <Progress />
        </PageInfo>
    );
};


export default Intro;
