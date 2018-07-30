/**
*
* ProjectDetails
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import projectData from '../Graph/projectsAllData.json';

const styles = (theme) => ({
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 3,
    textAlign: 'center',
  },
  overlayDetail: {
    width: '60%',
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(150,150,150,0.7)',
    zIndex: 4,
    textAlign: 'center',
  },
  textCen: {
    textAlign: 'center',
    color: grey['300'],
    margin: theme.spacing.unit,
  },
  textLef: {
    textAlign: 'left',
    color: grey['400'],
    margin: theme.spacing.unit,
  },
  button: {
    float: 'right',
    margin: theme.spacing.unit,
  },
});

const DetailCard = (props) => {
  const { projectDetail, show, classes, closeDetail } = props;
  const { codeUrl, demoUrl, blogUrl, description, name, documentUrl } = projectDetail;
  if (!show) return null;
  return (
    <Card className={classes.overlay}>
      <Card className={classes.overlayDetail}>
        <IconButton className={classes.button} aria-label="Close" onClick={closeDetail}>
          <CloseIcon />
        </IconButton>
        <Typography variant="display3" component="h1" className={classes.textCen}>
          {name}
        </Typography>
        <Typography variant="headline" component="h3" className={classes.textLef}>
          {description}
        </Typography>
        {demoUrl && <Typography variant="headline" component="h3" className={classes.textLef}>
          Demo: {demoUrl}
        </Typography>}
        {codeUrl && <Typography variant="headline" component="h3" className={classes.textLef}>
          Code: {codeUrl}
        </Typography>}
        { blogUrl && <Typography variant="headline" component="h3" className={classes.textLef}>
          Blog: {blogUrl}
        </Typography> }
        { documentUrl && <Typography variant="headline" component="h3" className={classes.textLef}>
          Document: {documentUrl}
        </Typography> }
      </Card>
    </Card>
  );
};

DetailCard.propTypes = {
  projectDetail: PropTypes.object,
  show: PropTypes.bool,
  closeDetail: PropTypes.func,
  classes: PropTypes.object,
};

class ProjectDetails extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    showDetail: true,
  }

  closeDetail = () => {
    this.setState({ showDetail: false });
  }

  render() {
    const { projects } = projectData;
    const { classes, match } = this.props;
    const { showDetail } = this.state;
    const { projectKey } = match.params;
    if (Object.keys(projects).indexOf(projectKey) !== -1) {
      return (
        <DetailCard projectDetail={projects[projectKey]} show={showDetail} closeDetail={this.closeDetail} classes={classes} />
      );
    } else {
      return null;
    }
  }
}

ProjectDetails.propTypes = {
  match: PropTypes.object,
  classes: PropTypes.object,
};

export default withStyles(styles)(ProjectDetails);
