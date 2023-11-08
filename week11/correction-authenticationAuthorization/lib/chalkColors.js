import chalk from 'chalk';

export default (color, message) => console.log(chalk[color](message));
