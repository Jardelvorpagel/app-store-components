# App Store Components

## Description

App Store Components is a collection of components that are used in the VTEX App Store.

## Table of Contents

- [Usage](#usage)
  - [Styles API](#styles-api)
- [Components Specs](#components-specs)

# Usage

This app uses our store builder with the blocks architecture. To know more about Store Builder [click here.](https://help.vtex.com/en/tutorial/understanding-storebuilder-and-stylesbuilder#structuring-and-configuring-our-store-with-object-object)

To use this app, you need to import in your dependencies on `manifest.json`.

```json
  "dependencies": {
    "vtex.app-store-components": "0.x"
  }
```

Then, you can add one of our app store component blocks into your app theme.

For example, now you can change the behavior of `specification-list` block that is on the app store product page. See an example of how to configure:

```json
"specification-list": {
  "props": {
    "groupName": "App Data",
    "specificationName": "features"
  }
}
```

### Styles API

This app provides some CSS classes as an API for style customization.

To use this CSS API, you must add the `styles` builder and create an app styling CSS file.

1. Add the `styles` builder to your `manifest.json`:

```json
  "builders": {
    "styles": "1.x"
  }
```

2. Create a file called `vtex.app-store-components.css` inside the `styles/css` folder. Add your custom styles:

```css
.listItemContent {
  font-weight: 300;
}
```

## Components Specs

Below we have a README for each component of this project that explains how to use them.
- [SpecificationText](SpeficationText.md)
- [SpecificationList](SpecificationList.md)

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!
