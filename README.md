Feel free to use my template to create your project

⚡︎ Demo: [basic-build-pack](https://mysecondspace.github.io/basic-build-pack/build)

## Install

All commands are carried out in some command prompt

- `git clone https://github.com/mysecondspace/basic-build-pack.git`
- `cd basic-build-pack`
- `npm install`
- `bower install`

## Deploy

- `cd basic-build-pack`
- `gulp clean` _removes the build folder_
- `gulp`

### Requirements

You must have installed the [Node.js](https://nodejs.org/en) (at least version 12.x) and [Ruby](https://www.ruby-lang.org/en/downloads) couple on your machine and also the [Compass Framework](http://beta.compass-style.org)

- `gem source -a http://rubygems.org`
- `gem install compass`

### Structure

```
|-- source
    |-- data
    |-- fonts
        |-- rubik-bold.ttf
        |-- rubik-light.ttf
        |-- rubik-regular.ttf
    |-- images
        |-- social
            |-- facebook-hover.png
            |-- facebook.png
            |-- github-hover.png
            |-- github.png
            |-- instagram-hover.png
            |-- instagram.png
            |-- linkedin-hover.png
            |-- linkedin.png
            |-- twitter-hover.png
            |-- twitter.png
        |-- social-2x
            |-- facebook-hover.png
            |-- facebook.png
            |-- github-hover.png
            |-- github.png
            |-- instagram-hover.png
            |-- instagram.png
            |-- linkedin-hover.png
            |-- linkedin.png
            |-- twitter-hover.png
            |-- twitter.png
        close-2x.png
        close.png
        favicon.ico
        logo-2x.png
        logo.png
        open-2x.png
        open.png
    |-- scripts
        |-- components
            |-- scripts.js
        |-- main.js
    |-- snippets
        |-- head.html
    |-- styles
        |-- components
            |-- animate.scss
            |-- base.scss
            |-- fonts.scss
            |-- mixins.scss
            |-- normalize.scss
            |-- sprites.scss
        |-- modules
            |-- article.scss
            |-- elements.scss
            |-- footer.scss
            |-- header.scss
            |-- menu.scss
        |-- main.scss
    |-- templates
        |-- article.html
        |-- footer.html
        |-- header.html
        |-- menu.html
index.html
```
