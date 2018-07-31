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
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
    display: 'block',
    margin: theme.spacing.unit,
  },
  textLef: {
    textAlign: 'left',
    color: grey['400'],
    margin: theme.spacing.unit,
  },
  closeButton: {
    float: 'right',
    margin: theme.spacing.unit,
  },
  tag: {
    margin: theme.spacing.unit,
  },
});

const DetailCard = (props) => {
  const { projectDetail, show, classes, closeDetail, goToLink } = props;
  const { codeUrl, demoUrl, blogUrl, description, name, documentUrl } = projectDetail;
  const { tags } = projectDetail;
  const tagList = tags.map((tagKey) => {
    const clickTag = goToLink.bind(this, `/tag/${tagKey}`);
    return (
      <Button key={tagKey} variant="contained" color="primary" className={classes.tag} onClick={clickTag}>
        {tagKey}
      </Button>
    );
  });
  if (!show) return null;
  return (
    <Card className={classes.overlay}>
      <Card className={classes.overlayDetail}>
        <IconButton className={classes.closeButton} aria-label="Close" onClick={closeDetail}>
          <CloseIcon />
        </IconButton>
        <Typography variant="display3" component="h1" className={classes.textCen}>
          {name}
        </Typography>
        {tagList}
        <Typography variant="headline" component="h3" className={classes.textLef}>
          {description}
        </Typography>
        {demoUrl && <Typography variant="headline" component="h3" className={classes.textLef}>
          Demo: <a href={`http://${demoUrl}`}>{demoUrl}</a>
        </Typography>}
        {codeUrl && <Typography variant="headline" component="h3" className={classes.textLef}>
          Code: <a href={`http://${codeUrl}`}>{codeUrl}</a>
        </Typography>}
        { blogUrl && <Typography variant="headline" component="h3" className={classes.textLef}>
          Blog: <a href={`http://${blogUrl}`}>{blogUrl}</a>
        </Typography> }
        { documentUrl && <Typography variant="headline" component="h3" className={classes.textLef}>
          Document: <a href={`http://${documentUrl}`}>{documentUrl}</a>
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
  goToLink: PropTypes.func,
};

class ProjectDetails extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    showDetail: true,
  }

  closeDetail = () => {
    this.setState({ showDetail: false });
  }

  goToLink = (link) => {
    const { history } = this.props;
    history.push(link);
  }

  render() {
    const { classes, match, projectData } = this.props;
    if (projectData === null) return null;
    const { projects } = projectData;
    const { showDetail } = this.state;
    const { projectKey } = match.params;
    if (Object.keys(projects).indexOf(projectKey) !== -1) {
      return (
        <DetailCard
          projectDetail={projects[projectKey]}
          show={showDetail}
          closeDetail={this.closeDetail}
          goToLink={this.goToLink}
          classes={classes}
        />
      );
    }
    return null;
  }
}

ProjectDetails.propTypes = {
  match: PropTypes.object,
  classes: PropTypes.object,
  history: PropTypes.object,
  projectData: PropTypes.object,
};

export default withStyles(styles)(ProjectDetails);
