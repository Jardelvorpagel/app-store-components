## Description

`AppImagesSlider` is an App Store Component that displays the product images using [SliderLayout](https://github.com/vtex-apps/slider-layout).

## Table of Contents
- [Usage](#usage)
  - [Configuration](#configuration)
  - [Styles API](#styles-api)

## Usage
You should follow the usage instruction in the main [README](/README.md#usage).

### Configuration

| Prop name           | Type     | Description                                                                 | Default value |
| ------------------- | -------- | --------------------------------------------------------------------------- | ------------- |
| `filterPattern`     | `string` | Filters images by substring pattern.                                        | `''`          |
| `order`             | `Enum`   | Controls the order in which the images are displayed. The possibles values are `ASC` and `DESC` . | `ASC` |
| `orderBy`           | `Enum`   |  Order by a specific image prop. The possible values are `imageId`, `cachedId`, `imageLabel`, `imageTag`,  `imageText` and `imageUrl`.                        | `imageId`         |
| `sliderLayoutProps`     | `Object` |    [SliderLayout](https://github.com/vtex-apps/slider-layout) props.                                  | `{}`          |

### Styles API
You should follow the Styles API instruction in the main [README](/README.md#styles-api).

#### CSS Namespaces
For now this component does not have any css namespaces.
