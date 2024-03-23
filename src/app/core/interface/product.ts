export interface Product {
  imageCover: string,
  ratingsQuantity: number,
  title: string,
  category: Category,
  price: number,
  _id: string,
  description?: string,
  images?:string []
}

interface Category {
  name: string
}
