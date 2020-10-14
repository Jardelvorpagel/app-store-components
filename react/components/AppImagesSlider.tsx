import React, { FunctionComponent, useMemo } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import { SliderLayout } from 'vtex.slider-layout'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['appImage'] as const

type SortingOrder = 'ASC' | 'DESC'

const sortImages = (
  images: Image[],
  order: SortingOrder,
  orderBy: keyof Image
) => {
  const compareFunction =
    order === 'ASC'
      ? (imageA: Image, imageB: Image) =>
          imageA[orderBy].localeCompare(imageB[orderBy])
      : (imageA: Image, imageB: Image) =>
          imageB[orderBy].localeCompare(imageA[orderBy])

  return images.sort(compareFunction)
}

interface Props {
  filterPattern?: string
  order?: SortingOrder
  orderBy?: keyof Image
  sliderLayoutProps?: any
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
