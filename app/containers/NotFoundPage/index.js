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
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme) => ({
  overlayMsg: {
    width: '80%',
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
    margin: 3 * theme.spacing.unit,
  },
  title: {
    top: '50%',
    left: '50%',
    textAlign: 'center',
    color: grey['300'],
    margin: theme.spacing.unit,
  },
  closeButton: {
    float: 'right',
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const SimilarList = (props) => {
  const { tagList, projectList, classes, goToLink } = props;
  const tagButtonList = tagList.similarList.map((tagKey) => {
    const clickTag = goToLink.bind(this, `/tag/${tagKey}`);
    return (
      <Button key={tagKey} variant="contained" color="primary" className={classes.button} onClick={clickTag}>
        {tagKey}
      </Button>
    );
  });
  const projectButtonList = projectList.similarList.map((projectKey) => {
    const clickProject = goToLink.bind(this, `/project/${projectKey}`);
    return (
      <Button key={projectKey} variant="contained" color="secondary" className={classes.button} onClick={clickProject}>
        {projectKey}
      </Button>
    );
  });

  return (
    <div>
      <Typography variant="display3" component="h1" className={classes.textCen}>
        Are you searching for
      </Typography>
      <Typography variant="headline" component="h1" className={classes.title}>
        Tag
      </Typography>
      {tagButtonList.slice(0, 5)}
      <Typography variant="headline" component="h1" className={classes.title}>
        Project
      </Typography>
      {projectButtonList.slice(0, 5)}
      {(tagButtonList.lenght > 5 || projectButtonList.length > 5) &&
        <Typography variant="headline" component="h3" className={classes.title}>
          Found out more similar Tags or Projects in the Graph
        </Typography>
      }
    </div>
  );
};

SimilarList.propTypes = {
  tagList: PropTypes.object,
  projectList: PropTypes.object,
  classes: PropTypes.object,
  goToLink: PropTypes.func,
};

export class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    showMsg: true,
  }

  closeMsg = () => {
    this.setState({ showMsg: false });
  }

  goToLink = (link) => {
    const { history } = this.props;
    history.push(link);
  }

  render() {
    const { match, classes, history } = this.props;
    const { showMsg } = this.state;
    const { type } = match.params;
    const { state } = history.location;
    let tags = null;
    let projects = null;
    if (state) {
      tags = state.tags;
      projects = state.projects;
    }
    if (showMsg) {
      return (
        <Card className={classes.overlayMsg}>
          <IconButton className={classes.closeButton} aria-label="Close" onClick={this.closeMsg}>
            <CloseIcon />
          </IconButton>
          {type === 'similar' &&
            <SimilarList tagList={tags} projectList={projects} classes={classes} goToLink={this.goToLink} />
          }
          {(type !== 'similar' || !tags || !projects) &&
            <Typography variant="display3" component="h1" className={classes.textCen}>
              404 Not Found!
            </Typography>
          }
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
  history: PropTypes.object,
};

export default withStyles(styles)(NotFound);
