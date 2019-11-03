import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as MovieActions from "../../store/ducks/movie/actions";
import { connect } from "react-redux";
import { IntroText, MoviesList, NextButton } from "./style";
import history from "../../routes/history";
import Container from "../../components/Container";
import { MovieGroup } from "../../store/ducks/movie/types";
import MovieGroupCard from "../../components/MovieGroupCard";

interface DispatchProps {
  setProgressIndex(index: number): void;
}

type Props = DispatchProps & ApplicationState;
const Groups = (props: Props) => {

  const [groups, setGroups] = useState<MovieGroup[]>([]);

  const groupMovies = () => {
    const sortedMovies = props.movies.selectedMovies.sort((a, b) => {
      if (a.title < b.title) { return -1; }
      if (a.title > b.title) { return 1; }
      return 0;
    })
    let groups = []
    for (let i = 0; i < sortedMovies.length / 2; i++) {
      groups.push({
        firstMovie: sortedMovies[i],
        secondMovie: sortedMovies[sortedMovies.length - i - 1]
      });
    }
    setGroups(groups);
  }

  useEffect(() => {
    if (!props.movies.selectedMovies.length) {
      history.push('/');
    } else {
      groupMovies();
    }
    props.setProgressIndex(50);
  }, [props.movies.selectedMovies]);

  return (
    <Container>
      <IntroText>Fase de Grupos
        <span>Aqui estão os 8 filmes selecionados, separados em grupos.</span>
      </IntroText>

      <MoviesList>
        {groups.map((group, index) => <MovieGroupCard
          index={index + 1}
          key={group.firstMovie.id}
          movieGroup={group} />)}
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
)(Groups);
