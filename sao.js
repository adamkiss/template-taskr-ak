const superb = require('superb')
const slug = require('speakingurl')

module.exports = {
  enforceNewFolder: true,
  templateOptions: {
    context: { slug }
  },
  prompts: {
    name: {
      message: 'What is the (unprefixed) name of the plugin?',
      default: ':folderName:'
    },
    description: {
      message: 'How would you describe the plugin?',
      default: `my ${superb()} plugin for Taskr`
    },
    repo: {
      message: "What is your GitHub repository's URL?",
      default(answers) {
        return `https://github.com/adamkiss/taskr-${slug(answers.name)}`;
      }
    }
  },
  data(answers) {
    const slugName = slug(answers.name)
    return add = {
      slugName,
      prefixedName: `taskr-${slugName}`,
      author: 'Adam Kiss',
      email: 'iamadamkiss+npm@gmail.com',
      username: 'adamkiss',
      website: 'https://adamkiss.com/'
    }
  },
  move: {
    'gitignore': '.gitignore',
    'package': 'package.json',
    'readme': 'readme.md',
    'node_modules/**': false,
    '.env': false,
  },
  showTip: true,
  gitInit: true,
  installDependencies: true
}
