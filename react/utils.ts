export const getSpecification = (
  groupName: string,
  specificationName: string,
  specificationGroups?: SpecificationGroup[]
) => {
  const group = specificationGroups?.find(
    specificationGroup => specificationGroup.name === groupName
  )
  const specificationTarget = group?.specifications.find(
    specification => specification.name === specificationName
  )
  return specificationTarget
}
