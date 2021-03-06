import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as MovieActions from "../../store/ducks/movie/actions";
import { connect } from "react-redux";
import { IntroText, MoviesList, MoviesCounter, NextButton } from "./style";
import history from '../../routes/history';
import MovieCard from "../../components/MovieCard";
import { Movie } from "../../store/ducks/movie/types";
import Container from "../../components/Container";

interface DispatchProps {
  loadAllMovies(): void;
  setProgressIndex(index: number): void;
  setSelectedMovies(movies: Movie[]): void;
}

type Props = DispatchProps & ApplicationState;
const Movies = (props: Props) => {

  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (!props.movies.data.length && !props.movies.loading && !props.movies.error) {
      props.loadAllMovies();
    } else {
      props.setProgressIndex(0);
    }
  }, [props.movies.data]);

  if (!props.movies.data.length) return null;

  const hangleGroups = () => {
    props.setSelectedMovies(selectedMovies);
    history.push('/groups');
  }

  return (
    <Container>
      <IntroText>Fase de Seleção
        <span>Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Avançar.</span>
      </IntroText>
      <MoviesCounter length={selectedMovies.length}>
        <b>{selectedMovies.length + ' '}</b> filme(s) selecionado(s) de <b>8</b>.
      </MoviesCounter>
      <MoviesList>
        {props.movies.data.map(movie => <MovieCard key={movie.id} movie={movie} toogleChecked={checked => {
          if (!checked) {
            const currentList = [...selectedMovies];
            currentList.push(movie);
            setSelectedMovies(currentList);
          } else {
            const index = selectedMovies.indexOf(movie);
            if (index !== -1) {
              let newList = [...selectedMovies];
              newList.splice(index, 1);
              setSelectedMovies(newList);
            }
          }
        }} />)}
      </MoviesList>
      <div style={{ justifyContent: "flex-end", display: "flex" }}>
        <NextButton onClick={hangleGroups} disabled={selectedMovies.length !== 8}>Avançar</NextButton>
      </div>

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
