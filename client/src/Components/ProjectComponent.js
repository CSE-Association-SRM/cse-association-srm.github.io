import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import Nav from './navigationComponent';
import { fetchMediumBlogs, fetchGithubRepos } from '../redux/ActionCreators';
import { Card, Badge } from 'react-bootstrap';
import '../css/project.css';
import Footer from './footerComponent';

const ProjectComponent = ({
  medium: { loading, errMess, blogs },
  github: { repos },
  fetchMediumBlogs,
  fetchGithubRepos,
}) => {
  useEffect(() => {
    fetchMediumBlogs();
    fetchGithubRepos();
  }, []);

  const renderCategories = category =>
    category.map(category => {
      return (
        <Fragment>
          {'  '}
          <Badge
            color='primary'
            style={{ backgroundColor: '#ff7f50', color: 'white' }}
          >
            {category}
          </Badge>
        </Fragment>
      );
    });

  const RenderBlogs = blogs
    .slice(0)
    .reverse()
    .map(blog => {
      const category = blog.categories;
      return (
        <div key={blog.id} className='col-sm-4' style={{ marginLeft: '0%' }}>
          <Card
            className='my-3'
            width='400'
            style={{
              marginLeft: '10%',
              boxShadow: ' 0px 2px 20px 8px #f1f2f6',
            }}
          >
            <Card.Img src={blog.thumbnail} height='200' width='100' />
            <Card.Body style={{ boxShadow: ' 0px 2px 20px 8px #f1f2f6' }}>
              <Card.Title style={{ width: '100%' }}>
                <h5>{blog.title}</h5>
              </Card.Title>
              <Card.Subtitle>{blog.author}</Card.Subtitle>
              <br />
              <Card.Subtitle> {renderCategories(category)}</Card.Subtitle>
              <Card.Link href={blog.link} target='_blank'>
                <strong>
                  <br />
                  <i class='fab fa-medium fa-2x'></i>
                </strong>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      );
    });

  const RenderRepos = repos.map(repo => {
    return (
      <Fragment>
        <div className='mt-4'>
          <div className='col-12 media'>
            <div className='media-body'>{repo.full_name}</div>
          </div>
        </div>
      </Fragment>
    );
  });

  if (loading) {
    return (
      <div className='col-12 load align-item-center'>
        <span className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary'></span>
        <p>Loading . . .</p>
      </div>
    );
  } else {
    return (
      <Fragment>
        <Nav />
        <div class='intro mt-5'>
          <div className='row'>
            <div class='col-12'>
              <h1 class='page_title' style={{ textAlign: 'center' }}>
                <span style={{ color: 'blue' }}>P</span>rojects ||{' '}
                <span style={{ color: 'blue' }}>B</span>logs
              </h1>
            </div>
          </div>
          <div className='row'>
            <div class='col-12'>
              <h6 class='page_desc'>
                CSEA works towards working on projects that involve the latest
                technology and concepts{' '}
              </h6>
            </div>
          </div>
        </div>

        <div>
          <h3>CSE-Association's Medium Publication</h3>
          <div className='row'>{RenderBlogs}</div>
        </div>
        <Footer />
      </Fragment>
    );
  }
};

ProjectComponent.propTypes = {
  medium: PropTypes.object.isRequired,
  fetchGithubRepos: PropTypes.func.isRequired,
  fetchMediumBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  medium: state.medium,
  github: state.github,
});

export default connect(mapStateToProps, { fetchMediumBlogs, fetchGithubRepos })(
  ProjectComponent
);
