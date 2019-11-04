import React, { useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as MovieActions from "../../store/ducks/movie/actions";
import { connect } from "react-redux";
import { IntroText, MoviesList, NextButton } from "./style";
import history from "../../routes/history";
import Container from "../../components/Container";
import MovieGroupCard from "../../components/MovieGroupCard";
import { Movie, MovieGroup } from "../../store/ducks/movie/types";

interface DispatchProps {
  setProgressIndex(index: number): void;
  loadGroups(movies: MovieGroup[], step: string): void;
}

type Props = DispatchProps & ApplicationState;

const Finals = (props: Props) => {

  useEffect(() => {
    if (!props.movies.selectedMovies.length) {
      history.push('/');
    } else if (props.movies.groups.length === 2 && !props.movies.loading) {
      props.loadGroups(props.movies.groups, "groups/final");
    } else {
      props.setProgressIndex(80);
    }
  }, [props.movies.groups]);


  if (!props.movies.groups.length) return null;
  console.log(props.movies.groups)
  return (
    <Container>
      <IntroText>Final
        <span>Aqui estão os 2 filmes que irão concorrer ao troféu de Melhor Filme do Ano!</span>
      </IntroText>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <MovieGroupCard
          index={1}
          movieGroup={props.movies.groups[0]}
        />
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <NextButton onClick={() => { }}>Ver Resultado</NextButton>
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
)(Finals);
