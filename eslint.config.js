import jie from '@djie/eslint-config'

export default jie(
  {
    rules: {},
  },
  {
    ignores: [
      'public',
      'src/notes/javascript.md',
      'src/develop/vim/playground.md',
    ],
  },
)
