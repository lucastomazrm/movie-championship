
import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { IndexedStyle, ProgressContainer } from "./style";

type Props = ApplicationState;
const Progress = (props: Props) => {

    const transitionStyles: any = {
        entering: { transform: "scale(1.5)" },
        entered: { transform: "scale(1)" },
        exiting: { transform: "scale(1.5)" },
        exited: { transform: "scale(1)" }
    };

    return (
        <ProgressContainer>
            <ProgressBar percent={props.movies.progressIndex}>
                <Step>
                    {({ accomplished, index, transitionState }: { accomplished: string, index: number, transitionState: string }) => (
                        <IndexedStyle accomplished={accomplished}
                            style={transitionStyles[transitionState]}
                        > {index + 1}
                        </IndexedStyle>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }: { accomplished: string, index: number }) => (
                        <IndexedStyle accomplished={accomplished}>
                            {index + 1}
                        </IndexedStyle>
                    )}
                </Step>
                <Step>
                    {({ accomplished, index }: { accomplished: string, index: number }) => (
                        <IndexedStyle accomplished={accomplished}>
                            {index + 1}
                        </IndexedStyle>
                    )}
                </Step>
            </ProgressBar>
        </ProgressContainer>
    );
};

const mapStateToProps = (state: ApplicationState) => ({ ...state });

export default connect(
    mapStateToProps,
)(Progress);
