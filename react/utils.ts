export const getSpecification = (
  groupName: string,
  specificationName: string,
  specificationGroups?: SpecificationGroup[]
) => {
  const group = specificationGroups?.find(
    specificationGroup => specificationGroup.originalName === groupName
  )
  const specificationTarget = group?.specifications.find(
    specification => specification.originalName === specificationName
  )
  return specificationTarget
}
