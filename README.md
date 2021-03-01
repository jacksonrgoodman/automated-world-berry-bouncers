# Automating the World

Your task in this group project is to use your newfound skills of automation, and rebuild your travel brochure site using objects, arrays, components, modules, CSS selectors, Flexbox, semantic HTML, and data providers.

Each city, each landmark, and each famous citizen must be represented in application state as objects. This means that you will need multiple separate data providers, list components, and HTML representation components for each page.

A suggestion is to create multiple sub-directories under `scripts`. If, for example, your team chose Turkey, Morocco, Tanzania, and Indonesia, you would have the following main modules.

> **Note:** Do not make any properties on your resources that involve presentation - like class names, or HTML tags. Only the properties of the resource should be on each object.

```sh
mkdir scripts/turkey
mkdir scripts/morocco
mkdir scripts/tanzania
mkdir scripts/indonesia

touch scripts/indonesia/main.js
touch scripts/turkey/main.js
touch scripts/morocco/main.js
touch scripts/tanzania/main.js
```

To organize your files even more, you could create three sub-directories in each of the city directories.

```sh
mkdir scripts/morocco/cities
touch scripts/morocco/cities/CityData.js

mkdir scripts/morocco/landmarks
touch scripts/morocco/landmarks/LandmarkData.js

mkdir scripts/morocco/celebrities
touch scripts/morocco/celebrities/CelebritiesData.js
```
## Setup

1. Everyone clone the repository with `git clone {connection string}`
1. Everyone immediately create their first feature branch with `git checkout -b {initials-feature}`


## Review of Requirements from Hello World

Components.

1. Navigation with links to each page. There should be a visual clue for the active page.
1. A header that includes an appealing image. It could be a city or landmark in that country.
1. The header should also include a headline with the name of the country.
1. A list of cities that you would like to visit in the country.
1. A list of landmarks that you would like to visit in the country.
1. A list of famous citizens. You can pick your favorites.
1. A footer with copyright information.

## Requirements

1. You must use semantic HTML tags
1. You must use CSS imports
1. You must use good CSS naming conventions, prefereably the BEM format
1. You must use Flexbox
1. You have one of your teammates approve a pull request before your branch is merged into `main`.
1. You must do all work on a feature branch, never on `main`.
1. Validate your HTML. Use a tool: [Validator](https://validator.w3.org/)

## User Experience

1. Your team must decide on a consistent experience across all pages. Fonts, color scheme, layout, and structure.
![Hello World Layout](./hello-world-wireframe.png)

## Stretch Goal
1. Using [Sharethrough](https://headlines.sharethrough.com/), analyze your headline with the country name. Make adjustments to the copy to make it more engaging.
