import React, { useState, useEffect } from "react";
import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "redux";
import * as CountryActions from "../../store/ducks/movie/actions";
import { connect } from "react-redux";

const Movies = () => {
  return (
    <div>Olá!</div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({ ...state });
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(CountryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
