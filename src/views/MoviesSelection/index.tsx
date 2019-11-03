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
  loadAllMovies(): void;
  setProgressIndex(index: number): void;
}

type Props = DispatchProps & ApplicationState;
const Movies = (props: Props) => {

  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (!props.movies.data.length && !props.movies.loading && !props.movies.error) {
      props.loadAllMovies();
    } else {
      console.log(props.movies)
    }
  }, [props.movies]);

  useEffect(() => {
    console.log(selectedMovies);
  }, [selectedMovies]);

  if (!props.movies.data.length) return null;

  return (
    <Container>
      <IntroText>Fase de Seleção
        <span>Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Avançar.</span>
      </IntroText>
      <MoviesList>
        {props.movies.data.map(movie => <MovieCard key={movie.id} movie={movie} toogleChecked={checked => {
          if (!checked) {
            const currentList = [...selectedMovies];
            currentList.push(movie);
            setSelectedMovies(currentList);
          } else {
            const index = selectedMovies.indexOf(movie);
            if (index != -1) {
              let newList = [...selectedMovies];
              newList.splice(index, 1);
              setSelectedMovies(newList);
            }
          }
        }} />)}
      </MoviesList>
      <MoviesCounter length={selectedMovies.length}>
        <b>{selectedMovies.length}</b> filme(s) selecionado(s) de <b>8</b>.
      </MoviesCounter>

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
