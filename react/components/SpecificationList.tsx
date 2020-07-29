import React, { FunctionComponent, useMemo } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import { useCssHandles } from 'vtex.css-handles'

import { getSpecification } from '../utils'

const CSS_HANDLES = [
  'listContainer',
  'listItemContainer',
  'listItemContent',
] as const

const Icon = () => (
  <svg
    width="18"
    height="13"
    viewBox="0 0 18 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.8345 1.12836C17.0397 1.31309 17.0564 1.62923 16.8716 1.83449L7.87165 11.8345C7.77898 11.9375 7.64774 11.9974 7.50924 11.9999C7.37074 12.0025 7.23738 11.9475 7.14097 11.848L1.14097 5.65751C0.948779 5.45923 0.953725 5.14268 1.15201 4.95049C1.3503 4.75831 1.66685 4.76325 1.85903 4.96154L7.48646 10.7676L16.1284 1.16552C16.3131 0.960267 16.6292 0.943628 16.8345 1.12836Z"
      fill="#6FCF97"
      stroke="#3F3F40"
      strokeLinecap="round"
    />
  </svg>
)

const parseSpecification = (speficication?: Specification): string[] => {
  if (!speficication) {
    return []
  }
  const [value] = speficication.values

  return value ? JSON.parse(value) : []
}

interface Props {
  groupName: string
  specificationName: string
}

const SpecificationList: FunctionComponent<Props> = ({
  groupName = 'App Data',
  specificationName = 'features',
}) => {
  const { product } = useProduct()

  const handles = useCssHandles(CSS_HANDLES)

  const specification = useMemo(
    () =>
      getSpecification(
        groupName,
        specificationName,
        product?.specificationGroups
      ),
    [groupName, specificationName, product]
  )

  const parsedSpecifications = useMemo(
    () => parseSpecification(specification),
    [specification]
  )

  return (
    <ul className={`${handles.listContainer} list pl0 mt0 mb0`}>
      {parsedSpecifications.map((parsedSpecification, index) => (
        <li
          key={index}
          className={`${handles.listItemContainer} ${
            index !== 0 ? 'mt4' : ''
          } flex items-center`}
        >
          <Icon />
          <span className={`${handles.listItemContent} ml5 f5 c-muted-1`}>
            {parsedSpecification}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default SpecificationList
