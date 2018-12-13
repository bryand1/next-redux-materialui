import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    background: theme.palette.background.primary,
    minHeight: '100vh',
  },
});

class Index extends React.Component {

  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center" className={this.props.classes.root}>
        <Head>
          <title>Next / Redux / MaterialUI</title>
          <link
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.2/gh-fork-ribbon.min.css" />
        </Head>
        <a className="github-fork-ribbon left-top"
          href="http://github.com/bryand1/next-redux-materialui"
          data-ribbon="Fork me on GitHub"
          title="Fork me on GitHub">
          Fork me on GitHub
        </a>
        <Grid item>
          <Typography variant="h3">
            Next / Redux / MaterialUI
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownprops) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles, { withTheme: true })(Index));
