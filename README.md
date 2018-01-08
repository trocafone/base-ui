# Base-UI - Styles repository for Trocafone.

## Description

This is a repository that will hold all base UI styles and components for all Trocafone and Trocafone-related web applications.

## Prequisites

This appication uses yarn and webpack for asset management.
You must have nodejs installed. Yarn requires Node 6 or higher, we recommend 8 or higher. To use it:


Clone the repository into your projects folder.
```git clone https://github.com/trocafone/base-ui.git```
```cd base-ui```

Install yarn.
On linux:
```sudo apt-get update && sudo apt-get install yarn```
On MacOS (add `--without-node` if you're using nvm and don't want to reinstall node):
```brew install yarn```

Install yarn dependencies:
```yarn install```

To compile all the assets into a `dist` folder, run
```yarn build```

To serve the compiled assets into a local server, run
```yarn dev```