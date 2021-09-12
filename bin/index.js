#!/usr/bin/env node

const { program } = require('commander');
const shell = require('shelljs');
const version = require('../package.json').version

program.version(version,'-v, --version')

program
    .command('create <filename>')
    .description('创建一个文件')
    .action( async (filename) => {
      shell.exec(`git clone git@github.com:wuhaohao1234/react-whole-cli.git ${filename ? filename : ''}`)
    })
program.parse(process.argv);