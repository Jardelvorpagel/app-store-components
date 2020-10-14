import React, { FunctionComponent, useMemo } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import { SliderLayout } from 'vtex.slider-layout'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['appImage'] as const

const sortImages = (
  images: Image[],
  order: 'ASC' | 'DESC',
  orderBy: keyof Image
) => {
  const sortedImages = images.sort((imageA, imageB) =>
    imageA[orderBy].localeCompare(imageB[orderBy])
  )
  const numberOfImages = sortedImages.length
  return order === 'ASC'
    ? sortedImages
    : sortedImages.map((_, index) => sortedImages[numberOfImages - index - 1])
}

interface Props {
  filterPattern: string
  order: 'ASC' | 'DESC'
  orderBy: keyof Image
  sliderLayoutProps: any
}

const AppImagesSlider: FunctionComponent<Props> = ({
  filterPattern = '',
  order = 'ASC',
  orderBy = 'imageId',
  sliderLayoutProps = {},
}) => {
  const handles = useCssHandles(CSS_HANDLES)

  const {
    selectedItem: { images },
  } = useProduct()

  const filteredImages = useMemo(
    () =>
      images.filter(
        ({ imageLabel }) => imageLabel.search(filterPattern) !== -1
      ),
    [images, filterPattern]
  )

  const sortedImages = useMemo(
    () => sortImages(filteredImages, order, orderBy),
    [filteredImages, order, orderBy]
  )

  return (
    <SliderLayout {...sliderLayoutProps}>
      {sortedImages.map(image => (
        <img
          src={image.imageUrl}
          key={image.imageId}
          alt={image.imageText}
          className={`${handles.appImage}`}
        />
      ))}
    </SliderLayout>
  )
}

export default AppImagesSlider
