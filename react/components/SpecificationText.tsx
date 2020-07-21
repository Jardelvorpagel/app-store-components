import React, { FunctionComponent } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import { useCssHandles } from 'vtex.css-handles'

import { getSpecification } from '../utils'

const CSS_HANDLES = ['paragraphContainer', 'paragraph'] as const

interface Props {
  groupName: string
  specificationName: string
}

const SpecificationText: FunctionComponent<Props> = ({
  groupName = 'App Data',
  specificationName = 'overview',
}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const { product } = useProduct()

  const specification = getSpecification(
    groupName,
    specificationName,
    product?.specificationGroups
  )
  const value = specification?.values[0] ?? ''
  const paragraphs = value.split(/\\n/)
  return (
    <div className={`${handles.paragraphContainer}`}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`${handles.paragraph} mb0 c-muted-1 ${
            index === 0 ? 'mt0' : ''
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export default SpecificationText
