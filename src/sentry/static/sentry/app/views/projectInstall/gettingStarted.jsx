import PropTypes from 'prop-types';
import React from 'react';

import ProjectContext from '../projects/projectContext';
import ProjectDocsContext from './docsContext';
import ProjectSelector from '../../components/projectHeader/projectSelector';

const GettingStartedBody = React.createClass({
  contextTypes: {
    project: PropTypes.object,
    organization: PropTypes.object
  },

  render() {
    let {project, organization} = this.context;
    return (
      <div className="getting-started">
        <div className="sub-header flex flex-container flex-vertically-centered">
          <div className="p-t-1 p-b-1">
            <ProjectSelector organization={organization} projectId={project.slug} />
          </div>
        </div>
        <div className="container">
          <div className="content">
            <ProjectDocsContext>
              {React.cloneElement(this.props.children, {
                linkPath: (orgId, projectId, platform) =>
                  `/${orgId}/${projectId}/getting-started/${platform}/`
              })}
            </ProjectDocsContext>
          </div>
        </div>
      </div>
    );
  }
});

const GettingStarted = React.createClass({
  render() {
    let {projectId, orgId} = this.props.params;
    return (
      <ProjectContext orgId={orgId} projectId={projectId}>
        <GettingStartedBody>
          {this.props.children}
        </GettingStartedBody>
      </ProjectContext>
    );
  }
});

export default GettingStarted;
