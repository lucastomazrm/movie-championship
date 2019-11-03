import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as MovieActions from "../../store/ducks/movie/actions";
import { connect } from "react-redux";
import { IntroText, MoviesList } from "./style";
import MovieCard from "../../components/MovieCard";
import Intro from "../../components/Header";
import { Movie } from "../../store/ducks/movie/types";
import Container from "../../components/Container";

interface DispatchProps {
  setProgressIndex(index: number): void;
}

type Props = DispatchProps & ApplicationState;
const Groups = (props: Props) => {

  useEffect(() => {
    props.setProgressIndex(50);
  }, []);

  return (
    <Container>
      <IntroText>Fase de Grupos
        <span>Aqui estão os 8 filmes selecionados, separados em grupos.</span>
      </IntroText>


      <MoviesList>

      </MoviesList>
    </Container >
  );
};

const mapStateToProps = (state: ApplicationState) => ({ ...state });
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(MovieActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups);
