const { Router } = require('express');
const jwt = require('jsonwebtoken');

module.exports = Router().get('/login', async (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=user&redirect_uri=${process.env.REDIRECT_URI}`
  );
})
.get('/login/callback', async (req, res) => {
  const { code } = req.query;
  const token = await exchangeCodeForToken(code);
  const { login, email } = await getGithubProfile(token);

  let user = await GithubUser.findByUsername(login);

  if (!user)
    user = await GithubUser.insert({
      username: login,
      email,
    });

  const payload = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
    expiresIn: '1 day',
  });