const express = require('express');
const gitHubRouter = express.Router();
const config = require('config');
const request = require('request');
gitHubRouter.get('/repos', async (req, res) => {
  try {
    const options = {
      uri: `https://api.github.com/orgs/CSE-Association-SRM/repos?per_page=5&client_id=${config.get(
        'githubClientId'
      )}&client_secret=${config.get('githubSecret')}`,
      method: 'GET',
      headers: { 'user-agent': 'node.js' },
    };
    request(options, (error, response, body) => {
      if (error) console.log(error);
      if (response.statusCode !== 200) {
        console.log(response);
        return res
          .status(response.statusCode)
          .json({ msg: 'Unable to Load the repositories' });
      }
      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error');
  }
});

module.exports = gitHubRouter;
