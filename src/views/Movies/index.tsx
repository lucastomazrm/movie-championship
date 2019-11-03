import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as MovieActions from "../../store/ducks/movie/actions";
import { connect } from "react-redux";

interface DispatchProps {
  loadAllMovies(): void;
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
    <div onClick={() => {
      props.loadAllMovies();
    }}>Olá!</div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({ ...state });
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(MovieActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
