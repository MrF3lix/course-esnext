# Navigation

## Setup

1. Go to the folder `./assignments/2_navigation/`
2. Run `npm install` in this folder
3. Run `npm run start`
4. Open `http://localhost:8080` in the browser

If an error occures during the installation, try to install webpack-cli globally with `npm install -g webpack-cli`.

## Todo

Create a class that handles the opening/closing of the navigation.

1. Create a new class called `Navigation` in the `/src` folder.
2. Initiate this class within the `index.js` file.
3. Add a click eventlistener to the `#navigation--toggle` element.
    - On click of that element the navigation should either be opened or closed.
    - You can add the class `.navigation--open` to the `#navigation` element to let the navigation appear.
4. Replace the text "Navigation" in the `#navigation--toggle` element with an icon.
    - In the `icons.js` file there are two functions that return icons.
5. Add the navigation items from the `Navigation` class to the `#navigation` element.
    - Check the `Map` chapture in the [Feature](../Features.md#map) documentation to see how to loop an array
    