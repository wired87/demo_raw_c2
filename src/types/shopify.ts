export interface GrabShopifyProductT {
  searchParams?: {sort?: string}; // "RELEVANCE" | "BEST_SELLING" | "CREATED_AT" | "PRICE" | "";
  params?: { collection: string }; // "bci" | "best" | "";
}
