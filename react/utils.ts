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

export function getCookieByName(name: string) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  return parts.length === 2 ? parts.pop()?.split(';').shift() : null
}

export function deleteCookieByName(name: string) {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}
