var ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    user: {
      name: 'Open Terms Archive Bot',
    },
    branch: 'gh-pages',
    message: '[skip ci] Auto-commit from master branch',
    dotfiles: true, // Keep .nojekyll
  },
  function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  }
);
