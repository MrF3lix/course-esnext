# Setup a new Project

1. Create a new folder `mkdir edu_esnext` and move there `cd edu_esnext`
2. Initiate NPM `npm init -y`. Creates a `package.json` file.
3. Install necessary packages `npm install --save-dev webpack`
4. Install CLI tools for webpack `npm install webpack-cli --global`
5. Create a `webpack.config.js` file and add the following

```JavaScript
const path = require('path');

module.exports = {
    mode: 'development',
    entry: { app: './src/index.js' },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    }
};
```

7. Create `./src/index.js` file
8. Create `./public/index.html` and add the output script to it. 

```HTML
    <script src="app.js"></script>
```

9. Run `npx webpack` to trigger the webpack build
10. Start developing!