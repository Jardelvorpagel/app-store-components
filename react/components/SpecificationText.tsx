import React, { FunctionComponent } from 'react'

interface Props {
  groupName: string
  specificationName: string
}

const SpecificationText: FunctionComponent<Props> = ({
  groupName = 'App Data',
  specificationName = 'features',
}) => {
  return (
    <div>
      <h1>{groupName}</h1>
      <h2>{specificationName}</h2>
    </div>
  )
}

export default SpecificationText
