type ImageLink = {
  thumbnail: string;
}
type IRetailPrice = {
  amount: number
}
export type IBooks = {
  book: {
    id: string;
    volumeInfo: {
      imageLinks ?: ImageLink
      title: string;
      ratingsCount: number;
      publisher: string;
      pageCount: number;
      description: string;
    },
    saleInfo: {
      saleability: string;
      retailPrice: IRetailPrice;
      buyLink: string;
    }
  }
}
