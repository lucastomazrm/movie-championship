
import React, { } from "react";
import "react-step-progress-bar/styles.css";
import { ContainerStyle } from "./style";

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


