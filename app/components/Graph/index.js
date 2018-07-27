/**
*
* Graph
*
*/

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import vis from 'vis';
import 'vis/dist/vis-network.min.css';
import projectData from './projectsAllData.json';

const imageImport = require.context('images/react-rocks-all/', false, /\.(png|jpe?g|svg)$/);
const imageList = imageImport.keys().reduce((list, key) => {
  const updateList = list;
  const keyName = key.replace('./', '').replace(/\.(png|jpe?g|svg)/, '');
  updateList[keyName] = imageImport(key);
  return updateList;
}, {});

const HoverLayout = (props) => {
  const { type, name, image } = props;
  return (
    <div>
      <div> {type}: {name} </div>
      { image && <img src={image} alt={name} style={{ width: 100, height: 100 }} /> }
    </div>
  );
};

HoverLayout.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};

class Graph extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    version: this.props.match.path,
    existProjectIds: {},
    network: null,
    nodes: null,
    edges: null,
    allTagNodes: [],
    selectedTagNodes: [],
    selectedProjectNodes: [],
    createdEdgeIds: [],
    noOfProjects: {},
    moreProjectNodes: [],
    moreProjectEdges: [],
    moreTagNode: {},
  }

  componentDidMount() {
    this.draw();
  }

  shuffleArray(array) {
    const updateArray = array;
    for (let i = updateArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [updateArray[i], updateArray[j]] = [updateArray[j], updateArray[i]];
    }
  }

  // Create and shuffle the tag nodes
  createTagNodes() {
    const { tags } = projectData;
    const tagNodesArray = Object.keys(tags).map((key) => {
      const curTag = tags[key].tag;
      // TODO: May update tag name for node label
      const curTagName = tags[key].tag;
      let nodeFontSize = 1;
      const nameLength = curTagName.length;
      if (nameLength <= 5) {
        nodeFontSize = 50;
      } else if (nameLength > 5 && nameLength <= 6) {
        nodeFontSize = 30;
      } else if (nameLength > 6 && nameLength <= 7) {
        nodeFontSize = 20;
      } else if (nameLength > 7 && nameLength <= 9) {
        nodeFontSize = 10;
      } else if (nameLength >= 10) {
        nodeFontSize = 1;
      }
      const hoverLayout = ReactDOMServer.renderToStaticMarkup(<HoverLayout type="Tag" name={curTagName} />);
      return {
        id: `Tag_${curTag}`,
        group: 'tags',
        tagId: key,
        tagKey: curTag,
        shape: 'circle',
        label: curTagName,
        title: hoverLayout,
        x: 0,
        y: 0,
        fixed: {
          // x: true,
          // y: true,
        },
        scaling: {
          label: {
            min: nodeFontSize,
          },
        },
      };
    });
    this.shuffleArray(tagNodesArray);
    return tagNodesArray;
  }

  // Pick the 'max' nodes and shuffled tag nodes list
  pickTagNodes(max = 7) {
    const { allTagNodes, selectedTagNodes } = this.state;
    const currNo = selectedTagNodes.length;
    return allTagNodes.slice(currNo, currNo + max);
  }

  // Create and pick project nodes for picked tag nodes
  createProjectNodes(tagNodes, max = 7) {
    const { tags, projects } = projectData;
    const { existProjectIds, noOfProjects } = this.state;
    const relatedProjectNodes = tagNodes.reduce((projectList, tagNode) => {
      const updateProjectList = projectList;
      const tagProjectList = tags[tagNode.tagId].project;
      const { tagKey } = tagNode;

      const currProjectNo = (tagKey in noOfProjects) ? noOfProjects[tagKey] : 0;
      noOfProjects[tagKey] = Math.min(tagProjectList.length, currProjectNo + max);
      if (tagProjectList.length > noOfProjects[tagKey]) {
        this.createMoreProjectNode(tagKey);
      } else {
        this.removeMoreProjectNode(tagKey);
      }
      // Only get the first 'max' projects
      tagProjectList.slice(currProjectNo, noOfProjects[tagKey]).forEach((projectId) => {
        if (!updateProjectList.exist[projectId]) {
          const image = imageList[projectId];
          const name = projects[projectId].name;
          const hoverLayout = ReactDOMServer.renderToStaticMarkup(<HoverLayout type="Project" name={name} image={image} />);
          updateProjectList.list.push(
            {
              id: `Project_${projectId}`,
              group: 'project',
              shape: 'image',
              image,
              projectKey: projectId,
              label: name,
              title: hoverLayout,
              // x: 300,
              // y: 300,
              fixed: {
                // x: true,
                // y: true,
              },
            }
          );
        }
        updateProjectList.exist[projectId] = true;
      });
      return updateProjectList;
    }, { exist: existProjectIds, list: [] });
    return relatedProjectNodes.list;
  }

  // Create 'More Tags' node
  createMoreTagNode() {
    return {
      id: 'More_Tags',
      group: 'moreNode',
      shape: 'circle',
      label: 'More Tags',
      x: 1000,
      y: 0,
      fixed: {
        x: true,
        y: true,
      },
      scaling: {
        label: {
          min: 20,
        },
      },
    };
  }

  // Create 'More Projects' node
  createMoreProjectNode(tagKey) {
    let { moreProjectNodes, moreProjectEdges } = this.state;
    const { nodes, edges } = this.state;
    const nodeList = moreProjectNodes.map((data) => data.tagKey);
    if (nodeList.indexOf(tagKey) > -1) {
      return null;
    }
    const newNode = {
      id: `More_Projects_Tag_${tagKey}`,
      group: 'moreNode',
      shape: 'circle',
      tagKey,
      label: 'More Projects',
      scaling: {
        label: {
          min: 1,
        },
      },
    };
    const newEdge = { id: `MoreProjects_${tagKey}`, from: `More_Projects_Tag_${tagKey}`, to: `Tag_${tagKey}` };
    if (nodes) nodes.add(newNode);
    if (edges) edges.add(newEdge);
    moreProjectNodes = [...moreProjectNodes, newNode];
    moreProjectEdges = [...moreProjectEdges, newEdge];
    this.state.moreProjectNodes = moreProjectNodes;
    this.state.moreProjectEdges = moreProjectEdges;
    return { newNode, newEdge };
  }

  removeMoreProjectNode(tagKey) {
    const { nodes } = this.state;
    if (nodes) nodes.remove(`More_Projects_Tag_${tagKey}`);
  }

  // Create edges for selected nodes
  createEdges(tagNodes, projectNodes = []) {
    const { existProjectIds, selectedTagNodes } = this.state;
    let { createdEdgeIds } = this.state;
    const { tags, projects } = projectData;
    const existProjectList = Object.keys(existProjectIds);

    const edgeIdFromTag = tagNodes.reduce((edgeList, tag) => {
      const { tagId, tagKey } = tag;
      // Only add edge for selected projects
      const tagProjectList = tags[tagId].project.filter((value) => existProjectList.indexOf(value) !== -1);
      return edgeList.concat(
        tagProjectList.reduce((list, projectKey) => list.concat([`Project_${projectKey}_Tag_${tagKey}`]), [])
      );
    }, []);

    const existTagList = selectedTagNodes.map((data) => data.tagKey);
    const edgeIdFromProject = projectNodes.reduce((edgeList, project) => {
      const { projectKey } = project;
      const projectTagList = projects[projectKey].tags.filter((value) => existTagList.indexOf(value) !== -1);
      return edgeList.concat(
        projectTagList.reduce((list, tagKey) => list.concat([`Project_${projectKey}_Tag_${tagKey}`]), [])
      );
    }, []);
    const mergedIdList = [...new Set([...edgeIdFromTag, ...edgeIdFromProject])];
    // Get all non-exist edges
    const newAddEdgeIds = mergedIdList.filter((id) => createdEdgeIds.indexOf(id) === -1);
    createdEdgeIds = [...createdEdgeIds, ...newAddEdgeIds];
    this.state.createdEdgeIds = createdEdgeIds;
    // Generate edge from id
    return newAddEdgeIds.map((edgeId) => {
      const projectId = edgeId.replace(/_Tag_.*$/g, '');
      const tagId = edgeId.replace(/^Project_.*_Tag_/g, 'Tag_');
      return { id: edgeId, from: projectId, to: tagId };
    });
  }

  addMoreProjectNodes(nodeId) {
    const { nodes, edges, selectedTagNodes } = this.state;
    let { selectedProjectNodes } = this.state;
    const projectNodeId = nodeId.replace('More_Projects_', '');

    let targetTagNode = {};
    selectedTagNodes.every((data) => {
      if (data.id === projectNodeId) {
        targetTagNode = data;
        return false;
      }
      return true;
    });
    const newSelectedProjectNodes = this.createProjectNodes([targetTagNode], 2);
    selectedProjectNodes = [...selectedProjectNodes, ...newSelectedProjectNodes];
    this.state.selectedProjectNodes = selectedProjectNodes;
    nodes.add(newSelectedProjectNodes);

    // Create edges
    const edgesArray = this.createEdges([targetTagNode], newSelectedProjectNodes);
    edges.add(edgesArray);
  }

  graphOnClick = (params) => {
    const { nodes, edges } = this.state;
    let { selectedTagNodes, selectedProjectNodes } = this.state;
    const { nodes: selectedNodes } = params;
    // Add tag nodes if 'More Tags' is selected
    if (selectedNodes.length === 1 && selectedNodes[0] === 'More_Tags') {
      const newTagNodesData = this.pickTagNodes(2);
      const newTagNodes = newTagNodesData;
      selectedTagNodes = [...selectedTagNodes, ...newTagNodes];
      this.state.selectedTagNodes = selectedTagNodes;
      nodes.add(newTagNodes);

      const newSelectedProjectNodes = this.createProjectNodes(newTagNodes);
      selectedProjectNodes = [...selectedProjectNodes, ...newSelectedProjectNodes];
      this.state.selectedProjectNodes = selectedProjectNodes;
      nodes.add(newSelectedProjectNodes);
      // Create edges
      const edgesArray = this.createEdges(newTagNodes, newSelectedProjectNodes);
      edges.add(edgesArray);
    }
    // Handle click for 'More Project' Node
    if (selectedNodes.length === 1 && selectedNodes[0].match(/^More_Projects/)) {
      this.addMoreProjectNodes(selectedNodes[0]);
    }
    if (selectedNodes.length === 1 && selectedNodes[0].match(/^Tag_/)) {
      this.createNodesEdges('tag', selectedNodes[0].replace(/^Tag_/, ''));
    }
  }

  swapTagNode(nodeId, newIndex) {
    const { allTagNodes } = this.state;
    let oldIndex = 0;
    for (let i = 0; i < allTagNodes.length; i += 1) {
      if (allTagNodes[i].id === nodeId) {
        oldIndex = i;
        break;
      }
    }
    [allTagNodes[newIndex], allTagNodes[oldIndex]] = [allTagNodes[oldIndex], allTagNodes[newIndex]];
    this.state.allTagNodes = allTagNodes;
  }

  showTagNode(nodeId) {
    this.swapTagNode(nodeId, 0);
  }

  createNodesEdges(type = null, target = null) {
    let { moreTagNode, selectedTagNodes, selectedProjectNodes } = this.state;
    let { nodes, edges } = this.state;
    let showTag = 7;
    let showProject = 7;
    if (target !== null && type !== null) {
      if (type === 'tag') {
        this.showTagNode(`Tag_${target}`);
        showTag = 1;
        showProject = 20;
      }
    }
    // Pick tag nodes
    // Reset selectedTagNodes, moreProjectNodes, moreProjectEdges, etc...
    this.state.existProjectIds = {};
    this.state.selectedTagNodes = [];
    this.state.selectedProjectNodes = [];
    this.state.createdEdgeIds = [];
    this.state.noOfProjects = {};
    this.state.moreTagNode = {};
    this.state.moreProjectNodes = [];
    this.state.moreProjectEdges = [];
    if (nodes) nodes.clear();
    if (edges) edges.clear();

    selectedTagNodes = [...this.pickTagNodes(showTag)];
    this.state.selectedTagNodes = selectedTagNodes;

    selectedProjectNodes = [...this.createProjectNodes(selectedTagNodes, showProject)];
    this.state.selectedProjectNodes = selectedProjectNodes;
    moreTagNode = this.createMoreTagNode();
    this.state.moreTagNode = moreTagNode;

    let nodesArray = [...selectedProjectNodes, ...selectedTagNodes, moreTagNode];
    if (!nodes) nodesArray = [...nodesArray, ...this.state.moreProjectNodes];
    // Create edges
    let edgesArray = [...this.createEdges(selectedTagNodes, selectedProjectNodes)];
    if (!edges) edgesArray = [...edgesArray, ...this.state.moreProjectEdges];

    if (nodes) {
      nodes.add(nodesArray);
    } else {
      nodes = new vis.DataSet(nodesArray);
    }
    if (edges) {
      edges.add(edgesArray);
    } else {
      edges = new vis.DataSet(edgesArray);
    }
    return { nodes, edges };
  }

  graphStabilized() {
    const { network, selectedTagNodes, selectedProjectNodes, moreTagNode } = this.state;
    const allTagNodesId = [...selectedTagNodes, ...selectedProjectNodes, moreTagNode].map((data) => data.id);
    network.fit({
      nodes: allTagNodesId,
      animation: true,
    });
  }

  openCluster(params) {
    const { network } = this.state;
    if (params.nodes.length === 1) {
      if (network.isCluster(params.nodes[0]) === true) {
        network.openCluster(params.nodes[0]);
      }
    }
  }

  draw() {
    // Graph styles
    const graphOptions = {
      autoResize: true,
      nodes: {
        color: {
          border: '#406897',
        },
        shapeProperties: {
          useBorderWithImage: true,
          interpolation: false,
        },
      },
      groups: {
        tag: {
          borderWidth: 1,
          font: {
            color: '#111111',
            size: 50,
          },
          value: 0,
          scaling: {
            label: {
              enabled: true,
            },
          },
        },
        project: {
          borderWidth: 1,
          size: 30,
          font: {
            color: '#111111',
          },
        },
        moreNode: {
          color: {
            background: 'red',
            hover: 'red',
            highlight: 'green',
          },
          borderWidth: 1,
          font: {
            color: 'white',
            size: 50,
          },
          value: 0,
          scaling: {
            label: {
              enabled: true,
            },
          },
        },
      },
      edges: {
        width: 3,
        // arrows: 'to',
        // physics: false,
        color: {
          color: 'white',
          hover: 'white',
          highlight: 'red',
        },
      },
      layout: {
        improvedLayout: false,
        // hierarchical: {
        //   enabled: true,
        // },
      },
      physics: {
        enabled: true,
        stabilization: false,
      },
      interaction: {
        hover: true,
      },
    };

    // Graph data
    // Create nodes and tag nodes are added later to make sure they are on top
    let { network, nodes, edges } = this.state;
    this.state.allTagNodes = this.createTagNodes();

    const nodesEdges = this.createNodesEdges();
    nodes = nodesEdges.nodes;
    edges = nodesEdges.edges;
    this.state.nodes = nodes;
    this.state.edges = edges;

    const data = {
      nodes,
      edges,
    };
    const container = document.getElementById('projectGraph');

    network = new vis.Network(container, data, graphOptions);
    this.state.network = network;

    network.on('click', this.graphOnClick.bind(this));
    network.on('stabilized', this.graphStabilized.bind(this));
    // Open cluster if the node is cluster
    network.on('selectNode', this.openCluster.bind(this));
  }

  render() {
    return (
      <div id="projectGraph" style={{ width: '100%', height: 500, backgroundColor: 'grey' }}>
        Error!!!!!!!!!!!!!!!!!!!
      </div>
    );
  }
}

Graph.propTypes = {
  match: PropTypes.object,
};

export default Graph;
