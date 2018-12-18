// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js

const config = {
  key: process.env.TRELLO_KEY || '502ec3543cb5e557eb49a41cf286f97a',
  token:
    process.env.TRELLO_TOKEN ||
    'd0c4cab0e270cc6db457a404543af177d69b89526f9a209c091a181bc66546f3'
}

// export `createClient` to use it in page components
export const trelloApiCall = url =>
  `https://api.trello.com/1/${url}key=${config.key}&token=${config.token}`
