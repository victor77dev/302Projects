/**
*
* Paper
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const styles = {
  card: {
    minWidth: 275,
    margin: theme.spacing.unit,
  },
  actions: {
    display: 'flex',
  },
  button: {
    margin: theme.spacing.unit,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
};

// Card Content in ReLinks
const ReLinksCardContent = (props) => {
  const { paperData } = props;
  const paragraphStyle = 'body1';
  if (paperData.arxiv.length !== 0) {
    // Create CardContent for arXiv data (Info, Link to arXiv, Link to PDF)
    const cardInfo = <Typography variant={paragraphStyle}>Information from arXiv.</Typography>;
    const paperLink = paperData.arxiv[0].link;
    const cardLink = paperLink ? <Typography variant={paragraphStyle}>Link: <a href={paperLink} target="_blank">{paperLink}</a></Typography> : '';
    const paperPdf = paperData.arxiv[0].pdf;
    const cardPdf = paperPdf ? <Typography variant={paragraphStyle}>Pdf: <a href={paperPdf} target="_blank">{paperPdf}</a></Typography> : '';
    return (
      <CardContent>
        {cardInfo}
        {cardLink}
        {cardPdf}
      </CardContent>
    );
  } else if (paperData.ref.length !== 0) {
    // Create CardContent for reference data (Info)
    return (
      <CardContent>
        <Typography variant={paragraphStyle}>Information from reference.</Typography>
      </CardContent>
    );
  }
  return null;
};

ReLinksCardContent.propTypes = {
  paperData: PropTypes.object,
};

/* eslint-disable no-underscore-dangle */
// Card Actions in ReLinks
const ReLinksCardActions = (props) => {
  const checkPaperOnClick = (id) => {
    console.log('Check ReLinks Click');
    console.log(id);
  };

  const addPaperOnClick = (id) => {
    console.log('Add ReLinks Click');
    console.log(id);
  };

  const { paperData, classes } = props;
  const variant = 'contained';
  const paperId = paperData._id;
  const buttonList = [];
  // Create Button to go to Paper Links in ReLinks
  buttonList.push({
    id: `Check_${paperId}`,
    text: 'Check ReLinks',
    func: checkPaperOnClick.bind(this, paperId),
  });
  if (paperData.arxiv.length === 0 && paperData.ref.length !== 0) {
    // Create Button to add paper in ReLinks
    buttonList.push({
      id: `Add_${paperId}`,
      text: 'Add in ReLinks',
      func: addPaperOnClick.bind(this, paperId),
    });
  }
  return (
    <MuiThemeProvider theme={theme}>
      <CardActions className={classes.actions} disableActionSpacing>
        {buttonList.map((button) => {
          const { text, func, id } = button;
          if (!button.func) {
            return (
              <Button
                key={id}
                size="small"
                color="primary"
                className={classes.button}
                variant={variant}
              >
                {text}
              </Button>
            );
          }
          return (
            <Button
              key={id}
              size="small"
              color="primary"
              className={classes.button}
              variant={variant}
              onClick={func}
            >
              {text}
            </Button>
          );
        })
      }
      </CardActions>
    </MuiThemeProvider>
  );
};

ReLinksCardActions.propTypes = {
  paperData: PropTypes.object,
  classes: PropTypes.object,
};

/* eslint-disable react/no-multi-comp */
// Create Summary in Collapse CardContent for arXiv data
class ReLinksCardContentExt extends React.PureComponent {
  state = { expanded: false };
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { paperData, classes } = this.props;
    if (paperData.arxiv.length === 0 || !(paperData.arxiv[0].summary)) {
      return null;
    }
    const { summary } = paperData.arxiv[0];
    return (
      <div>
        <CardActions>
          <Typography paragraph variant="title">
            Summary
          </Typography>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show Summary"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              {summary}
            </Typography>
            <Typography variant="caption" gutterBottom align="right">
              from arXiv.org
            </Typography>
          </CardContent>
        </Collapse>
      </div>
    );
  }
}

ReLinksCardContentExt.propTypes = {
  paperData: PropTypes.object,
  classes: PropTypes.object,
};

class Paper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // Get authors name from arxiv data; if not exists, find in ref data
  getAuthors = (paperData) => {
    if (paperData.arxiv.length !== 0) {
      return paperData.arxiv[0].author.reduce((string, author) => string === '' ? author : `${string}, ${author}`, '');
    } else if (paperData.ref.length !== 0) {
      return paperData.ref[0].authors.reduce((string, author) => string === '' ? author : `${string}, ${author}`, '');
    }
    return 'No Authors data in ReLinks.';
  }

  render() {
    const { classes, paperData } = this.props;
    const { title } = paperData;
    const authors = this.getAuthors(paperData);
    console.log(paperData);
    return (
      <Card className={classes.card}>
        <CardHeader
          title={title}
          subheader={authors}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <ReLinksCardContent paperData={paperData} />
        <ReLinksCardContentExt paperData={paperData} classes={classes} />
        <ReLinksCardActions paperData={paperData} classes={classes} />
      </Card>
    );
  }
}

Paper.propTypes = {
  paperData: PropTypes.object,
  classes: PropTypes.object,
};

export default withStyles(styles)(Paper);
