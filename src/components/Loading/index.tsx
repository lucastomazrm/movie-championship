
import React, { } from "react";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import "react-step-progress-bar/styles.css";
import { LoadingContainer } from "./style";
import loader from "../../assets/img/loader.gif";

type Props = ApplicationState;
const Loading = (props: Props) => {
    if (!props.movies.loading) return null;
    return (
        <LoadingContainer>
            <img src={loader} alt="Loader" />
            Carregando
        </LoadingContainer>
    );
};

const mapStateToProps = (state: ApplicationState) => ({ ...state });

export default connect(
    mapStateToProps,
)(Loading);

