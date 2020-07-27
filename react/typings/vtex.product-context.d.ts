interface Specification {
  originalName: string
  name: string
  values: [string]
}

interface SpecificationGroup {
  originalName: string
  name: string
  specifications: Specification[]
}

interface Product {
  specificationGroups?: SpecificationGroup[]
}

declare module 'vtex.product-context/useProduct' {
  const useProduct: () => ProductContext
  export default useProduct

  interface ProductContext {
    product: Product | undefined
  }
}
