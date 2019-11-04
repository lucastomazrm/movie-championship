
import React, { } from "react";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import * as MovieActions from "../../store/ducks/movie/actions";
import { IndexedStyle, ProgressContainer } from "./style";
import { Dispatch, bindActionCreators } from "redux";
import history from "../../routes/history";

interface DispatchProps {
    setProgressIndex(index: number): void;
    clearGroups(): void;
}

type Props = ApplicationState & DispatchProps;

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
                <Step transition="scale">
                    {({ accomplished, index, transitionState }: { accomplished: string, index: number, transitionState: string }) => (
                        <IndexedStyle accomplished={accomplished}
                            style={transitionStyles[transitionState]}
                            onClick={() => {
                                props.setProgressIndex(0);
                                props.clearGroups();
                                history.push("/");
                            }}
                        > {index + 1}
                        </IndexedStyle>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished, index }: { accomplished: string, index: number }) => (
                        <IndexedStyle accomplished={accomplished}>
                            {index + 1}
                        </IndexedStyle>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished, index }: { accomplished: string, index: number }) => (
                        <IndexedStyle accomplished={accomplished}>
                            {index + 1}
                        </IndexedStyle>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished, index }: { accomplished: string, index: number }) => (
                        <IndexedStyle accomplished={accomplished}>
                            {index + 1}
                        </IndexedStyle>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished, index }: { accomplished: string, index: number }) => (
                        <IndexedStyle accomplished={accomplished}>
                            🏆
                        </IndexedStyle>
                    )}
                </Step>
            </ProgressBar>
        </ProgressContainer>
    );
};


const mapStateToProps = (state: ApplicationState) => ({ ...state });
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(MovieActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Progress);
