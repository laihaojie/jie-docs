import jie from '@djie/eslint-config'

export default jie(
  {
    rules: {
      'ts/no-unsafe-function-type': 'off',
    },
  },
  {
    ignores: [
      'public',
      'src/notes/javascript.md',
      'src/develop/vim/playground.md',
    ],
  },
)
