import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as MovieActions from "../../store/ducks/movie/actions";
import { connect } from "react-redux";
import { Container, IntroText, MoviesList, MoviesCounter } from "./style";
import MovieCard from "../../components/MovieCard";
import Intro from "../../components/Header";
import { Movie } from "../../store/ducks/movie/types";

interface DispatchProps {
  setProgressIndex(index: number): void;
}

type Props = DispatchProps & ApplicationState;
const Movies = (props: Props) => {



  return (
    <Container>
      <IntroText>Fase de Grupos
        <span>Aqui estão os 8 filmes selecionados, separados em grupos.</span>
      </IntroText>

    </Container >
  );
};

const mapStateToProps = (state: ApplicationState) => ({ ...state });
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(MovieActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
