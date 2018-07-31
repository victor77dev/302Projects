/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
  overlayMsg: {
    width: '60%',
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 5,
    textAlign: 'center',
  },
  textCen: {
    top: '50%',
    left: '50%',
    textAlign: 'center',
    color: grey['300'],
    margin: 5 * theme.spacing.unit,
  },
  button: {
    float: 'right',
    margin: theme.spacing.unit,
  },
});

export class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    showMsg: true,
  }

  closeMsg = () => {
    this.setState({ showMsg: false });
  }

  render() {
    const { match, classes } = this.props;
    const { showMsg } = this.state;
    const { type } = match.params;
    if (showMsg) {
      return (
        <Card className={classes.overlayMsg}>
          <IconButton className={classes.button} aria-label="Close" onClick={this.closeMsg}>
            <CloseIcon />
          </IconButton>
          <Typography variant="display3" component="h1" className={classes.textCen}>
            404 Not Found!
          </Typography>
          {type === 'tag' &&
            <Typography variant="display3" component="h2" className={classes.textCen}>
              Want to add a new Tag?
            </Typography>
          }
          {type === 'project' &&
            <Typography variant="display3" component="h3" className={classes.textCen}>
              Want to Create / Submit a new project?
            </Typography>
          }
          {type === 'data' &&
            <Typography variant="display3" component="h3" className={classes.textCen}>
              Error! Failed to load project data! Please Try again later!
            </Typography>
          }
        </Card>
      );
    }
    return null;
  }
}

NotFound.propTypes = {
  match: PropTypes.object,
  classes: PropTypes.object,
};

export default withStyles(styles)(NotFound);
