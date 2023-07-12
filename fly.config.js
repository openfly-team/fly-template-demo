module.exports = {
  prompts: [
    {
      type: 'text',
      name: 'projectName',
      message: 'Input project name',
      initial: process.cwd().split('/').reverse()[0]
    },
    {
      type: 'text',
      name: 'description',
      message: 'Input project description'
    }
  ]
}
