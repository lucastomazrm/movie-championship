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

const Semifinals = (props: Props) => {

  useEffect(() => {
    if (!props.movies.selectedMovies.length) {
      history.push('/');
    } else if (props.movies.groups.length === 4) {
      props.loadGroups(props.movies.groups, "groups/semifinal");
    } else {
      props.setProgressIndex(50);
    }
  }, [props.movies.groups]);


  if (!props.movies.groups.length) return null;

  return (
    <Container>
      <IntroText>Quartas de Final
        <span>Aqui estão os 4 filmes que irão concorrer à semi-final.</span>
      </IntroText>

      <MoviesList>
        {props.movies.groups.map((group, index) => <MovieGroupCard
          index={index + 1}
          movieGroup={group}
          key={group.movies[0].id} />)}
      </MoviesList>
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
)(Semifinals);
