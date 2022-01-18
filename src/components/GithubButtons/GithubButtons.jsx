import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/GordonTse0922/GDSC-sample-profolio/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork GordonTse0922/GDSC-sample-profolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/GordonTse0922/GDSC-sample-profolio"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star GordonTse0922/GDSC-sample-profolio on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
