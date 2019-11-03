import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as MovieActions from "../../store/ducks/movie/actions";
import { connect } from "react-redux";
import { Container, Steps, PageInfo } from "./style";

interface DispatchProps {
  loadAllMovies(): void;
  setProgressIndex(index: number): void;
}

type Props = DispatchProps & ApplicationState;
const Movies = (props: Props) => {
  useEffect(() => {
    if (!props.movies.data.length && !props.movies.loading && !props.movies.error) {
      props.loadAllMovies();
    } else {
      console.log(props.movies)
    }
  }, [props.movies])
  return (
    <Container>
      <PageInfo>
        Campeonato de Filmes
        </PageInfo>
      <Steps>
        sad
      </Steps>
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({ ...state });
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(MovieActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
