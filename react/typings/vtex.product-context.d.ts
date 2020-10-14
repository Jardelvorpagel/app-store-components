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

interface Image {
  cachedId: string
  imageId: string
  imageLabel: string
  imageTag: string
  imageText: string
  imageUrl: string
}

declare module 'vtex.product-context/useProduct' {
  const useProduct: () => ProductContext
  export default useProduct

  interface ProductContext {
    product: Product | undefined
    selectedItem: { images: Image[] }
  }
}
