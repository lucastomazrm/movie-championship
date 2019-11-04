import React, { useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as MovieActions from "../../store/ducks/movie/actions";
import { connect } from "react-redux";
import { IntroText, MoviesList, NextButton } from "./style";
import history from "../../routes/history";
import Container from "../../components/Container";
import MovieGroupCard from "../../components/MovieGroupCard";
import { Movie } from "../../store/ducks/movie/types";

interface DispatchProps {
  setProgressIndex(index: number): void;
  loadGroups(movies: Movie[], step: string): void;
}

type Props = DispatchProps & ApplicationState;

const Groups = (props: Props) => {

  useEffect(() => {
    if (!props.movies.selectedMovies.length) {
      history.push('/');
    } else if (!props.movies.groups.length) {
      props.loadGroups(props.movies.selectedMovies, "groups");
    } else {
      props.setProgressIndex(30);
    }
  }, [props.movies.groups]);


  if (!props.movies.groups.length) return null;

  return (
    <Container>
      <IntroText>Quartas de Final
        <span>Aqui estão os 8 filmes selecionados, que irão concorrer à semifinal.</span>
      </IntroText>

      <MoviesList>
        {props.movies.groups.map((group, index) => <MovieGroupCard
          index={index + 1}
          movieGroup={group}
          key={group.movies[0].id} />)}
      </MoviesList>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <NextButton onClick={() => {
          history.push('/semifinals')
        }}>Avançar</NextButton>
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
)(Groups);
