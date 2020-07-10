import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import Nav from './navigationComponent';
import { fetchMediumBlogs, fetchGithubRepos } from '../redux/ActionCreators';
import { Card } from 'react-bootstrap';

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
          {' _ '}
          {category}
        </Fragment>
      );
    });

  const RenderBlogs = blogs
    .slice(0)
    .reverse()
    .map(blog => {
      const category = blog.categories;
      return (
        <div key={blog.id} className='col-12 col-md-5'>
          <Card className='my-3'>
            <Card.Img src={blog.thumbnail} height='200' width='200' />
            <Card.Body>
              <Card.Title>
                <h5>{blog.title}</h5>
              </Card.Title>
              <Card.Subtitle>-by {blog.author}</Card.Subtitle>
              <br />
              <Card.Subtitle>
                {' '}
                <p>Categories:{renderCategories(category)}</p>
              </Card.Subtitle>
              <Card.Link href={blog.link} target='_blank'>
                <strong>
                  <i class='fab fa-medium'></i>visit this blog
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
        <div className='jumbotron mt-5' style={{ background: 'transparent' }}>
          <div className='row'>
            <div class='col-12 col-md-8 offset-md-1'>
              <h1>Our Projects and Blogs</h1>
            </div>
          </div>
          <div className='row'>
            <div class='col-12 col-md-8 offset-md-1'>
              <h6>
                Here in CSEA, we are developing some awesome projects in Web
                development and Machine Learning domain.We also write some
                mindblowing blogs. Hurry, check them out{' '}
              </h6>
            </div>
          </div>
        </div>
        <hr></hr>

        <div>
          <h3>CSE-Association's Medium Publication</h3>
          <div className='row'>{RenderBlogs}</div>
        </div>

        <div>
          <h3>CSE-Association's Github repositories</h3>
          <div className='row'>{RenderRepos}</div>
        </div>
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
