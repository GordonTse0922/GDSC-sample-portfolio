# GDSC sample site

## Install nvm (Version Manager for Node & NPM)
### Windows
To install nvm you can install trough a MSI installer which can be downloaded in the link below.

### MacOS & Linux
To install nvm you can run one of the following commands in terminal 
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

You can verify it's installed sucessfully by running the following command:
```sh
command -v nvm
```
It should print out "nvm" in your terminal if it was isntalled correctly. If not, **close all of your terminal windows and reopen**, or run the following command if you know which kind of terminal you are using:

*bash*: `source ~/.bashrc`

*zsh*: `source ~/.zshrc`

*ksh*: `. ~/.profile`

## Install Node and NPM
After installing nvmm you may now download Node.

### MacOS
```shell
nvm install --lts
```

### Enable Yarn (M1 Mac only)
```shell
corepack enable
```

## Install and build the project

### MacOS (Intel)
```shell
#Get the source code
git clone https://github.com/GordonTse0922/GDSC_sample_portfolio
#Go to source directory
cd GDSC_sample_portfolio
# Install dependencies
npm install
```
### MacOS (M1)
```shell
#Get the source code
git clone https://github.com/GordonTse0922/GDSC_sample_portfolio
#Go to source directory
cd GDSC_sample_portfolio
# Install dependencies
yarn install
```
## Deploy to GitHub Pages
To deploy the site to Gihub Pages, you need to install a dependency:
```sh
npm install gh-pages
```
After that you have to edit "package.json" in your project and add the "deploy" command required to deploy
![Package.json](https://user-images.githubusercontent.com/69568504/150546565-e528766d-2133-4548-afc9-743296728bf8.png)

Also, if you are using GatsbyJS, you have to edit the "gatsby-config.js" to add a path for deploy. where the path is your repo name.

![Gatsby-config.js](https://user-images.githubusercontent.com/69568504/150546906-dfab4342-0ab2-4f18-b400-9b2090051050.png)

To Deploy, run the following command:
```sh
npm run deploy
```

After that, go to your github repository page and click "settings"

![Click settings](https://user-images.githubusercontent.com/69568504/150547421-610fc78d-fc66-4b89-8407-b0063a3d040e.png)

Click "Pages" in the side bar

![Click Pages](https://user-images.githubusercontent.com/69568504/150547561-9e1bca55-f2df-4d94-b4a6-6d73666a8540.png)

Change the branch from "main" to "gh-pages" and save

![Change Building Branch](https://user-images.githubusercontent.com/69568504/150547721-d6a4707b-0c62-4182-92f4-9daf73928815.png)

Wait for a moment for the deployment and you could accesss the link to see your site now!

![Check your site](https://user-images.githubusercontent.com/69568504/150547910-0c2734dd-512c-406d-93ce-978b472bb925.png)
