import React, { useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as MovieActions from "../../store/ducks/movie/actions";
import { connect } from "react-redux";
import { IntroText, MoviesList, CupStyle } from "./style";
import history from "../../routes/history";
import Container from "../../components/Container";
import MovieGroupCard from "../../components/MovieGroupCard";
import { Movie, MovieGroup } from "../../store/ducks/movie/types";
import MovieCard from "../../components/MovieCard";

interface DispatchProps {
  setProgressIndex(index: number): void;
  loadGroups(movies: MovieGroup[], step: string): void;
}

type Props = DispatchProps & ApplicationState;

const Winner = (props: Props) => {

  useEffect(() => {
    if (!props.movies.selectedMovies.length) {
      history.push('/');
    } else {
      props.setProgressIndex(100);
    }
  }, [props.movies.groups]);

  if (!props.movies.groups.length) return null;

  return (
    <Container>
      <IntroText>Vencedor!
        <span>E aqui está o melhor filme do ano, segundo nossas análises!</span>
      </IntroText>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
        <CupStyle />
        <MovieCard movie={props.movies.groups[0].movies[0]} />
      </div>
      <IntroText>E em segundo lugar!
        <span>Não menos importante, este recebeu o segundo lugar no pódium!</span>
      </IntroText>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MovieCard movie={props.movies.groups[0].movies[1]} />
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
)(Winner);
