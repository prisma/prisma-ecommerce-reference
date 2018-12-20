/**
 * This file is automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 * 
 * For better typings, you should provide configuration for how to lookup 
 * the types. See the documentation for "typegenAutoConfig"
 */
import * as ctx from "../context"
import * as prisma from "./prisma-client/index"

declare global {
  interface GraphQLNexusGen extends GraphQLNexusGenTypes {}
}

// Maybe Promise
export type MaybePromise<T> = T | PromiseLike<T>;

// Maybe Promise List
export type MaybePromiseList<T> = Array<MaybePromise<T>>;

// Maybe Thunk
export type MaybeThunk<T> = T | (() => T);

// Maybe Thunk, with args
export type MaybeThunkArgs<T, A> = T | ((args?: A) => T);

export type QueryBrandsReturnType = BrandConnection_ReturnType;

export interface QueryBrandsArgs {
  after?: null | string;
  before?: null | string;
  first?: null | number;
  last?: null | number;
  orderBy?: null | BrandOrderByInput;
  skip?: null | number;
  where?: null | BrandWhereInput;
}

export type QueryCollectionReturnType = Collection_ReturnType;

export interface QueryCollectionArgs {
  collectionId: string;
}

export type QueryOptionsReturnType = OptionConnection_ReturnType;

export interface QueryOptionsArgs {
  after?: null | string;
  before?: null | string;
  first?: null | number;
  last?: null | number;
  orderBy?: null | OptionOrderByInput;
  skip?: null | number;
  where?: null | OptionWhereInput;
}

export type QueryProductsReturnType = ProductConnection_ReturnType;

export interface QueryProductsArgs {
  after?: null | string;
  before?: null | string;
  first?: null | number;
  last?: null | number;
  orderBy?: null | ProductOrderByInput;
  skip?: null | number;
  where?: null | ProductWhereInput;
}

export type QueryRootType = {};

export type Query_ReturnType = {};

export type BrandOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC";

export interface BrandWhereInput {
  AND: BrandWhereInput[];
  id?: null | string;
  id_contains?: null | string;
  id_ends_with?: null | string;
  id_gt?: null | string;
  id_gte?: null | string;
  id_in: string[];
  id_lt?: null | string;
  id_lte?: null | string;
  id_not?: null | string;
  id_not_contains?: null | string;
  id_not_ends_with?: null | string;
  id_not_in: string[];
  id_not_starts_with?: null | string;
  id_starts_with?: null | string;
  name?: null | string;
  name_contains?: null | string;
  name_ends_with?: null | string;
  name_gt?: null | string;
  name_gte?: null | string;
  name_in: string[];
  name_lt?: null | string;
  name_lte?: null | string;
  name_not?: null | string;
  name_not_contains?: null | string;
  name_not_ends_with?: null | string;
  name_not_in: string[];
  name_not_starts_with?: null | string;
  name_starts_with?: null | string;
  NOT: BrandWhereInput[];
  OR: BrandWhereInput[];
  products_every?: null | ProductWhereInput;
  products_none?: null | ProductWhereInput;
  products_some?: null | ProductWhereInput;
}

export interface ProductWhereInput {
  AND: ProductWhereInput[];
  attributes_every?: null | AttributeWhereInput;
  attributes_none?: null | AttributeWhereInput;
  attributes_some?: null | AttributeWhereInput;
  brand?: null | BrandWhereInput;
  collections_every?: null | CollectionWhereInput;
  collections_none?: null | CollectionWhereInput;
  collections_some?: null | CollectionWhereInput;
  id?: null | string;
  id_contains?: null | string;
  id_ends_with?: null | string;
  id_gt?: null | string;
  id_gte?: null | string;
  id_in: string[];
  id_lt?: null | string;
  id_lte?: null | string;
  id_not?: null | string;
  id_not_contains?: null | string;
  id_not_ends_with?: null | string;
  id_not_in: string[];
  id_not_starts_with?: null | string;
  id_starts_with?: null | string;
  image?: null | ImageWhereInput;
  name?: null | string;
  name_contains?: null | string;
  name_ends_with?: null | string;
  name_gt?: null | string;
  name_gte?: null | string;
  name_in: string[];
  name_lt?: null | string;
  name_lte?: null | string;
  name_not?: null | string;
  name_not_contains?: null | string;
  name_not_ends_with?: null | string;
  name_not_in: string[];
  name_not_starts_with?: null | string;
  name_starts_with?: null | string;
  NOT: ProductWhereInput[];
  OR: ProductWhereInput[];
  type?: null | ProductTypeWhereInput;
  variants_every?: null | VariantWhereInput;
  variants_none?: null | VariantWhereInput;
  variants_some?: null | VariantWhereInput;
}

export interface AttributeWhereInput {
  AND: AttributeWhereInput[];
  id?: null | string;
  id_contains?: null | string;
  id_ends_with?: null | string;
  id_gt?: null | string;
  id_gte?: null | string;
  id_in: string[];
  id_lt?: null | string;
  id_lte?: null | string;
  id_not?: null | string;
  id_not_contains?: null | string;
  id_not_ends_with?: null | string;
  id_not_in: string[];
  id_not_starts_with?: null | string;
  id_starts_with?: null | string;
  key?: null | string;
  key_contains?: null | string;
  key_ends_with?: null | string;
  key_gt?: null | string;
  key_gte?: null | string;
  key_in: string[];
  key_lt?: null | string;
  key_lte?: null | string;
  key_not?: null | string;
  key_not_contains?: null | string;
  key_not_ends_with?: null | string;
  key_not_in: string[];
  key_not_starts_with?: null | string;
  key_starts_with?: null | string;
  NOT: AttributeWhereInput[];
  OR: AttributeWhereInput[];
  products_every?: null | ProductWhereInput;
  products_none?: null | ProductWhereInput;
  products_some?: null | ProductWhereInput;
  value?: null | string;
  value_contains?: null | string;
  value_ends_with?: null | string;
  value_gt?: null | string;
  value_gte?: null | string;
  value_in: string[];
  value_lt?: null | string;
  value_lte?: null | string;
  value_not?: null | string;
  value_not_contains?: null | string;
  value_not_ends_with?: null | string;
  value_not_in: string[];
  value_not_starts_with?: null | string;
  value_starts_with?: null | string;
}

export interface CollectionWhereInput {
  AND: CollectionWhereInput[];
  id?: null | string;
  id_contains?: null | string;
  id_ends_with?: null | string;
  id_gt?: null | string;
  id_gte?: null | string;
  id_in: string[];
  id_lt?: null | string;
  id_lte?: null | string;
  id_not?: null | string;
  id_not_contains?: null | string;
  id_not_ends_with?: null | string;
  id_not_in: string[];
  id_not_starts_with?: null | string;
  id_starts_with?: null | string;
  name?: null | string;
  name_contains?: null | string;
  name_ends_with?: null | string;
  name_gt?: null | string;
  name_gte?: null | string;
  name_in: string[];
  name_lt?: null | string;
  name_lte?: null | string;
  name_not?: null | string;
  name_not_contains?: null | string;
  name_not_ends_with?: null | string;
  name_not_in: string[];
  name_not_starts_with?: null | string;
  name_starts_with?: null | string;
  NOT: CollectionWhereInput[];
  OR: CollectionWhereInput[];
  products_every?: null | ProductWhereInput;
  products_none?: null | ProductWhereInput;
  products_some?: null | ProductWhereInput;
  rules?: null | CollectionRuleSetWhereInput;
}

export interface CollectionRuleSetWhereInput {
  AND: CollectionRuleSetWhereInput[];
  appliesDisjunctively?: null | boolean;
  appliesDisjunctively_not?: null | boolean;
  NOT: CollectionRuleSetWhereInput[];
  OR: CollectionRuleSetWhereInput[];
  rules_every?: null | CollectionRuleWhereInput;
  rules_none?: null | CollectionRuleWhereInput;
  rules_some?: null | CollectionRuleWhereInput;
}

export interface CollectionRuleWhereInput {
  AND: CollectionRuleWhereInput[];
  field?: null | CollectionRuleField;
  field_in: CollectionRuleField[];
  field_not?: null | CollectionRuleField;
  field_not_in: CollectionRuleField[];
  NOT: CollectionRuleWhereInput[];
  OR: CollectionRuleWhereInput[];
  relation?: null | CollectionRuleRelation;
  relation_in: CollectionRuleRelation[];
  relation_not?: null | CollectionRuleRelation;
  relation_not_in: CollectionRuleRelation[];
  value?: null | string;
  value_contains?: null | string;
  value_ends_with?: null | string;
  value_gt?: null | string;
  value_gte?: null | string;
  value_in: string[];
  value_lt?: null | string;
  value_lte?: null | string;
  value_not?: null | string;
  value_not_contains?: null | string;
  value_not_ends_with?: null | string;
  value_not_in: string[];
  value_not_starts_with?: null | string;
  value_starts_with?: null | string;
}

export type CollectionRuleField = "PRICE" | "TITLE" | "TYPE";

export type CollectionRuleRelation = "CONTAINS" | "ENDS_WITH" | "EQUALS" | "GREATER_THAN" | "LESS_THAN" | "NOT_CONTAINS" | "NOT_EQUALS" | "STARTS_WITH";

export interface ImageWhereInput {
  AND: ImageWhereInput[];
  id?: null | string;
  id_contains?: null | string;
  id_ends_with?: null | string;
  id_gt?: null | string;
  id_gte?: null | string;
  id_in: string[];
  id_lt?: null | string;
  id_lte?: null | string;
  id_not?: null | string;
  id_not_contains?: null | string;
  id_not_ends_with?: null | string;
  id_not_in: string[];
  id_not_starts_with?: null | string;
  id_starts_with?: null | string;
  NOT: ImageWhereInput[];
  OR: ImageWhereInput[];
  url?: null | string;
  url_contains?: null | string;
  url_ends_with?: null | string;
  url_gt?: null | string;
  url_gte?: null | string;
  url_in: string[];
  url_lt?: null | string;
  url_lte?: null | string;
  url_not?: null | string;
  url_not_contains?: null | string;
  url_not_ends_with?: null | string;
  url_not_in: string[];
  url_not_starts_with?: null | string;
  url_starts_with?: null | string;
}

export interface ProductTypeWhereInput {
  AND: ProductTypeWhereInput[];
  id?: null | string;
  id_contains?: null | string;
  id_ends_with?: null | string;
  id_gt?: null | string;
  id_gte?: null | string;
  id_in: string[];
  id_lt?: null | string;
  id_lte?: null | string;
  id_not?: null | string;
  id_not_contains?: null | string;
  id_not_ends_with?: null | string;
  id_not_in: string[];
  id_not_starts_with?: null | string;
  id_starts_with?: null | string;
  name?: null | string;
  name_contains?: null | string;
  name_ends_with?: null | string;
  name_gt?: null | string;
  name_gte?: null | string;
  name_in: string[];
  name_lt?: null | string;
  name_lte?: null | string;
  name_not?: null | string;
  name_not_contains?: null | string;
  name_not_ends_with?: null | string;
  name_not_in: string[];
  name_not_starts_with?: null | string;
  name_starts_with?: null | string;
  NOT: ProductTypeWhereInput[];
  OR: ProductTypeWhereInput[];
}

export interface VariantWhereInput {
  AND: VariantWhereInput[];
  availableForSale?: null | boolean;
  availableForSale_not?: null | boolean;
  id?: null | string;
  id_contains?: null | string;
  id_ends_with?: null | string;
  id_gt?: null | string;
  id_gte?: null | string;
  id_in: string[];
  id_lt?: null | string;
  id_lte?: null | string;
  id_not?: null | string;
  id_not_contains?: null | string;
  id_not_ends_with?: null | string;
  id_not_in: string[];
  id_not_starts_with?: null | string;
  id_starts_with?: null | string;
  image?: null | ImageWhereInput;
  NOT: VariantWhereInput[];
  optionValues_every?: null | OptionValueWhereInput;
  optionValues_none?: null | OptionValueWhereInput;
  optionValues_some?: null | OptionValueWhereInput;
  OR: VariantWhereInput[];
  price?: null | number;
  price_gt?: null | number;
  price_gte?: null | number;
  price_in: number[];
  price_lt?: null | number;
  price_lte?: null | number;
  price_not?: null | number;
  price_not_in: number[];
  sku?: null | string;
  sku_contains?: null | string;
  sku_ends_with?: null | string;
  sku_gt?: null | string;
  sku_gte?: null | string;
  sku_in: string[];
  sku_lt?: null | string;
  sku_lte?: null | string;
  sku_not?: null | string;
  sku_not_contains?: null | string;
  sku_not_ends_with?: null | string;
  sku_not_in: string[];
  sku_not_starts_with?: null | string;
  sku_starts_with?: null | string;
}

export interface OptionValueWhereInput {
  AND: OptionValueWhereInput[];
  id?: null | string;
  id_contains?: null | string;
  id_ends_with?: null | string;
  id_gt?: null | string;
  id_gte?: null | string;
  id_in: string[];
  id_lt?: null | string;
  id_lte?: null | string;
  id_not?: null | string;
  id_not_contains?: null | string;
  id_not_ends_with?: null | string;
  id_not_in: string[];
  id_not_starts_with?: null | string;
  id_starts_with?: null | string;
  name?: null | string;
  name_contains?: null | string;
  name_ends_with?: null | string;
  name_gt?: null | string;
  name_gte?: null | string;
  name_in: string[];
  name_lt?: null | string;
  name_lte?: null | string;
  name_not?: null | string;
  name_not_contains?: null | string;
  name_not_ends_with?: null | string;
  name_not_in: string[];
  name_not_starts_with?: null | string;
  name_starts_with?: null | string;
  NOT: OptionValueWhereInput[];
  option?: null | OptionWhereInput;
  OR: OptionValueWhereInput[];
}

export interface OptionWhereInput {
  AND: OptionWhereInput[];
  id?: null | string;
  id_contains?: null | string;
  id_ends_with?: null | string;
  id_gt?: null | string;
  id_gte?: null | string;
  id_in: string[];
  id_lt?: null | string;
  id_lte?: null | string;
  id_not?: null | string;
  id_not_contains?: null | string;
  id_not_ends_with?: null | string;
  id_not_in: string[];
  id_not_starts_with?: null | string;
  id_starts_with?: null | string;
  name?: null | string;
  name_contains?: null | string;
  name_ends_with?: null | string;
  name_gt?: null | string;
  name_gte?: null | string;
  name_in: string[];
  name_lt?: null | string;
  name_lte?: null | string;
  name_not?: null | string;
  name_not_contains?: null | string;
  name_not_ends_with?: null | string;
  name_not_in: string[];
  name_not_starts_with?: null | string;
  name_starts_with?: null | string;
  NOT: OptionWhereInput[];
  OR: OptionWhereInput[];
  values_every?: null | OptionValueWhereInput;
  values_none?: null | OptionValueWhereInput;
  values_some?: null | OptionValueWhereInput;
}

export type BrandConnectionEdgesReturnType = MaybePromiseList<BrandEdge_ReturnType>;

export type BrandConnectionPageInfoReturnType = PageInfo_ReturnType;

export type BrandConnectionRootType = prisma.BrandConnection;

export type BrandConnection_ReturnType = prisma.BrandConnection

export type BrandEdgeCursorReturnType = string;

export type BrandEdgeNodeReturnType = Brand_ReturnType;

export type BrandEdgeRootType = prisma.BrandEdge;

export type BrandEdge_ReturnType = prisma.BrandEdge

export type BrandIdReturnType = string;

export type BrandNameReturnType = string;

export type BrandProductsReturnType = MaybePromiseList<Product_ReturnType>;

export interface BrandProductsArgs {
  after?: null | string;
  before?: null | string;
  first?: null | number;
  last?: null | number;
  orderBy?: null | ProductOrderByInput;
  skip?: null | number;
  where?: null | ProductWhereInput;
}

export type BrandRootType = prisma.Brand;

export type Brand_ReturnType = prisma.Brand

export type ProductOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC";

export type ProductBrandReturnType = Brand_ReturnType;

export type ProductIdReturnType = string;

export type ProductNameReturnType = string;

export type ProductOptionsReturnType = MaybePromiseList<Option_ReturnType>;

export type ProductTypeReturnType = null | ProductType_ReturnType;

export type ProductVariantsReturnType = MaybePromiseList<Variant_ReturnType>;

export interface ProductVariantsArgs {
  after?: null | string;
  before?: null | string;
  first?: null | number;
  last?: null | number;
  orderBy?: null | VariantOrderByInput;
  skip?: null | number;
  where?: null | VariantWhereInput;
}

export type ProductRootType = prisma.Product;

export type Product_ReturnType = prisma.Product

export type OptionIdReturnType = string;

export type OptionNameReturnType = string;

export type OptionValuesReturnType = MaybePromiseList<OptionValue_ReturnType>;

export interface OptionValuesArgs {
  after?: null | string;
  before?: null | string;
  first?: null | number;
  last?: null | number;
  orderBy?: null | OptionValueOrderByInput;
  skip?: null | number;
  where?: null | OptionValueWhereInput;
}

export type OptionRootType = prisma.Option;

export type Option_ReturnType = prisma.Option

export type OptionValueOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC";

export type OptionValueIdReturnType = string;

export type OptionValueNameReturnType = string;

export type OptionValueOptionReturnType = Option_ReturnType;

export type OptionValueRootType = prisma.OptionValue;

export type OptionValue_ReturnType = prisma.OptionValue

export type ProductTypeIdReturnType = string;

export type ProductTypeNameReturnType = string;

export type ProductTypeRootType = prisma.ProductType;

export type ProductType_ReturnType = prisma.ProductType

export type VariantOrderByInput = "availableForSale_ASC" | "availableForSale_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "price_ASC" | "price_DESC" | "sku_ASC" | "sku_DESC" | "updatedAt_ASC" | "updatedAt_DESC";

export type VariantAvailableForSaleReturnType = null | boolean;

export type VariantIdReturnType = string;

export type VariantImageReturnType = null | Image_ReturnType;

export type VariantOptionValuesReturnType = MaybePromiseList<OptionValue_ReturnType>;

export interface VariantOptionValuesArgs {
  after?: null | string;
  before?: null | string;
  first?: null | number;
  last?: null | number;
  orderBy?: null | OptionValueOrderByInput;
  skip?: null | number;
  where?: null | OptionValueWhereInput;
}

export type VariantPriceReturnType = number;

export type VariantSkuReturnType = null | string;

export type VariantRootType = prisma.Variant;

export type Variant_ReturnType = prisma.Variant

export type ImageIdReturnType = string;

export type ImageUrlReturnType = string;

export type ImageRootType = prisma.Image;

export type Image_ReturnType = prisma.Image

export type PageInfoEndCursorReturnType = null | string;

export type PageInfoHasNextPageReturnType = boolean;

export type PageInfoHasPreviousPageReturnType = boolean;

export type PageInfoStartCursorReturnType = null | string;

export type PageInfoRootType = prisma.PageInfo;

export type PageInfo_ReturnType = prisma.PageInfo

export type CollectionAttributesReturnType = MaybePromiseList<Attribute_ReturnType>;

export type CollectionBrandsReturnType = MaybePromiseList<Brand_ReturnType>;

export type CollectionIdReturnType = string;

export type CollectionNameReturnType = string;

export type CollectionOptionsReturnType = MaybePromiseList<Option_ReturnType>;

export type CollectionProductsReturnType = MaybePromiseList<Product_ReturnType>;

export type CollectionRootType = prisma.Collection;

export type Collection_ReturnType = prisma.Collection

export type AttributeIdReturnType = string;

export type AttributeKeyReturnType = string;

export type AttributeProductsReturnType = MaybePromiseList<Product_ReturnType>;

export interface AttributeProductsArgs {
  after?: null | string;
  before?: null | string;
  first?: null | number;
  last?: null | number;
  orderBy?: null | ProductOrderByInput;
  skip?: null | number;
  where?: null | ProductWhereInput;
}

export type AttributeValueReturnType = string;

export type AttributeRootType = prisma.Attribute;

export type Attribute_ReturnType = prisma.Attribute

export type OptionOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC";

export type OptionConnectionEdgesReturnType = MaybePromiseList<OptionEdge_ReturnType>;

export type OptionConnectionPageInfoReturnType = PageInfo_ReturnType;

export type OptionConnectionRootType = prisma.OptionConnection;

export type OptionConnection_ReturnType = prisma.OptionConnection

export type OptionEdgeCursorReturnType = string;

export type OptionEdgeNodeReturnType = Option_ReturnType;

export type OptionEdgeRootType = prisma.OptionEdge;

export type OptionEdge_ReturnType = prisma.OptionEdge

export type ProductConnectionEdgesReturnType = MaybePromiseList<ProductEdge_ReturnType>;

export type ProductConnectionPageInfoReturnType = PageInfo_ReturnType;

export type ProductConnectionRootType = prisma.ProductConnection;

export type ProductConnection_ReturnType = prisma.ProductConnection

export type ProductEdgeCursorReturnType = string;

export type ProductEdgeNodeReturnType = Product_ReturnType;

export type ProductEdgeRootType = prisma.ProductEdge;

export type ProductEdge_ReturnType = prisma.ProductEdge

export type MutationCollectionAddProductsReturnType = Collection_ReturnType;

export interface MutationCollectionAddProductsArgs {
  collectionId: string;
  productIds: string[];
}

export type MutationCollectionRemoveProductsReturnType = Collection_ReturnType;

export interface MutationCollectionRemoveProductsArgs {
  collectionId: string;
  productIds: string[];
}

export type MutationProductCreateReturnType = Product_ReturnType;

export interface MutationProductCreateArgs {
  data: CreateProductInput;
}

export type MutationProductUpdateReturnType = Product_ReturnType;

export interface MutationProductUpdateArgs {
  data: UpdateProductInput;
}

export type MutationRootType = {};

export type Mutation_ReturnType = {};

export interface CreateProductInput {
  attributesIds: UniqueInput[];
  brand: UniqueInput;
  name: string;
  variants: CreateVariantInput[];
}

export interface UniqueInput {
  id: string;
}

export interface CreateVariantInput {
  availableForSale: boolean;
  optionsValueIds: UniqueInput[];
  price: number;
}

export interface UpdateProductInput {
  attributesIds: UniqueInput[];
  brand: UniqueInput;
  id: string;
  name: string;
  variants: UpdateVariantInput[];
}

export interface UpdateVariantInput {
  availableForSale: boolean;
  id: string;
  optionsValueIds: UniqueInput[];
  price: number;
}

export type CollectionRuleFieldReturnType = CollectionRuleField;

export type CollectionRuleRelationReturnType = CollectionRuleRelation;

export type CollectionRuleValueReturnType = string;

export type CollectionRuleRootType = prisma.CollectionRule;

export type CollectionRule_ReturnType = prisma.CollectionRule

export type CollectionRuleOrderByInput = "createdAt_ASC" | "createdAt_DESC" | "field_ASC" | "field_DESC" | "id_ASC" | "id_DESC" | "relation_ASC" | "relation_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "value_ASC" | "value_DESC";

export type CollectionRuleSetAppliesDisjunctivelyReturnType = boolean;

export type CollectionRuleSetRulesReturnType = MaybePromiseList<CollectionRule_ReturnType>;

export interface CollectionRuleSetRulesArgs {
  after?: null | string;
  before?: null | string;
  first?: null | number;
  last?: null | number;
  orderBy?: null | CollectionRuleOrderByInput;
  skip?: null | number;
  where?: null | CollectionRuleWhereInput;
}

export type CollectionRuleSetRootType = prisma.CollectionRuleSet;

export type CollectionRuleSet_ReturnType = prisma.CollectionRuleSet

export interface GraphQLNexusGenArgTypes {
  Query: {
    brands: QueryBrandsArgs;
    collection: QueryCollectionArgs;
    options: QueryOptionsArgs;
    products: QueryProductsArgs;
  };
  Brand: {
    products: BrandProductsArgs;
  };
  Product: {
    variants: ProductVariantsArgs;
  };
  Option: {
    values: OptionValuesArgs;
  };
  Variant: {
    optionValues: VariantOptionValuesArgs;
  };
  Attribute: {
    products: AttributeProductsArgs;
  };
  Mutation: {
    collectionAddProducts: MutationCollectionAddProductsArgs;
    collectionRemoveProducts: MutationCollectionRemoveProductsArgs;
    productCreate: MutationProductCreateArgs;
    productUpdate: MutationProductUpdateArgs;
  };
  CollectionRuleSet: {
    rules: CollectionRuleSetRulesArgs;
  };
}

export interface GraphQLNexusGenRootTypes {
  Query: QueryRootType;
  BrandConnection: BrandConnectionRootType;
  BrandEdge: BrandEdgeRootType;
  Brand: BrandRootType;
  Product: ProductRootType;
  Option: OptionRootType;
  OptionValue: OptionValueRootType;
  ProductType: ProductTypeRootType;
  Variant: VariantRootType;
  Image: ImageRootType;
  PageInfo: PageInfoRootType;
  Collection: CollectionRootType;
  Attribute: AttributeRootType;
  OptionConnection: OptionConnectionRootType;
  OptionEdge: OptionEdgeRootType;
  ProductConnection: ProductConnectionRootType;
  ProductEdge: ProductEdgeRootType;
  Mutation: MutationRootType;
  CollectionRule: CollectionRuleRootType;
  CollectionRuleSet: CollectionRuleSetRootType;
}

export interface GraphQLNexusGenReturnTypes {
  Query: {
    brands: QueryBrandsReturnType;
    collection: QueryCollectionReturnType;
    options: QueryOptionsReturnType;
    products: QueryProductsReturnType;
  };
  BrandConnection: {
    edges: BrandConnectionEdgesReturnType;
    pageInfo: BrandConnectionPageInfoReturnType;
  };
  BrandEdge: {
    cursor: BrandEdgeCursorReturnType;
    node: BrandEdgeNodeReturnType;
  };
  Brand: {
    id: BrandIdReturnType;
    name: BrandNameReturnType;
    products: BrandProductsReturnType;
  };
  Product: {
    brand: ProductBrandReturnType;
    id: ProductIdReturnType;
    name: ProductNameReturnType;
    options: ProductOptionsReturnType;
    type: ProductTypeReturnType;
    variants: ProductVariantsReturnType;
  };
  Option: {
    id: OptionIdReturnType;
    name: OptionNameReturnType;
    values: OptionValuesReturnType;
  };
  OptionValue: {
    id: OptionValueIdReturnType;
    name: OptionValueNameReturnType;
    option: OptionValueOptionReturnType;
  };
  ProductType: {
    id: ProductTypeIdReturnType;
    name: ProductTypeNameReturnType;
  };
  Variant: {
    availableForSale: VariantAvailableForSaleReturnType;
    id: VariantIdReturnType;
    image: VariantImageReturnType;
    optionValues: VariantOptionValuesReturnType;
    price: VariantPriceReturnType;
    sku: VariantSkuReturnType;
  };
  Image: {
    id: ImageIdReturnType;
    url: ImageUrlReturnType;
  };
  PageInfo: {
    endCursor: PageInfoEndCursorReturnType;
    hasNextPage: PageInfoHasNextPageReturnType;
    hasPreviousPage: PageInfoHasPreviousPageReturnType;
    startCursor: PageInfoStartCursorReturnType;
  };
  Collection: {
    attributes: CollectionAttributesReturnType;
    brands: CollectionBrandsReturnType;
    id: CollectionIdReturnType;
    name: CollectionNameReturnType;
    options: CollectionOptionsReturnType;
    products: CollectionProductsReturnType;
  };
  Attribute: {
    id: AttributeIdReturnType;
    key: AttributeKeyReturnType;
    products: AttributeProductsReturnType;
    value: AttributeValueReturnType;
  };
  OptionConnection: {
    edges: OptionConnectionEdgesReturnType;
    pageInfo: OptionConnectionPageInfoReturnType;
  };
  OptionEdge: {
    cursor: OptionEdgeCursorReturnType;
    node: OptionEdgeNodeReturnType;
  };
  ProductConnection: {
    edges: ProductConnectionEdgesReturnType;
    pageInfo: ProductConnectionPageInfoReturnType;
  };
  ProductEdge: {
    cursor: ProductEdgeCursorReturnType;
    node: ProductEdgeNodeReturnType;
  };
  Mutation: {
    collectionAddProducts: MutationCollectionAddProductsReturnType;
    collectionRemoveProducts: MutationCollectionRemoveProductsReturnType;
    productCreate: MutationProductCreateReturnType;
    productUpdate: MutationProductUpdateReturnType;
  };
  CollectionRule: {
    field: CollectionRuleFieldReturnType;
    relation: CollectionRuleRelationReturnType;
    value: CollectionRuleValueReturnType;
  };
  CollectionRuleSet: {
    appliesDisjunctively: CollectionRuleSetAppliesDisjunctivelyReturnType;
    rules: CollectionRuleSetRulesReturnType;
  };
}

export interface GraphQLNexusGenTypes {
  argTypes: GraphQLNexusGenArgTypes;
  backingTypes: GraphQLNexusGenRootTypes;
  returnTypes: GraphQLNexusGenReturnTypes;
  context: ctx.Context;
  enums: {
    BrandOrderByInput: BrandOrderByInput;
    CollectionRuleField: CollectionRuleField;
    CollectionRuleRelation: CollectionRuleRelation;
    ProductOrderByInput: ProductOrderByInput;
    OptionValueOrderByInput: OptionValueOrderByInput;
    VariantOrderByInput: VariantOrderByInput;
    OptionOrderByInput: OptionOrderByInput;
    CollectionRuleOrderByInput: CollectionRuleOrderByInput;
  };
  objects: {
    Query: QueryRootType;
    BrandConnection: BrandConnectionRootType;
    BrandEdge: BrandEdgeRootType;
    Brand: BrandRootType;
    Product: ProductRootType;
    Option: OptionRootType;
    OptionValue: OptionValueRootType;
    ProductType: ProductTypeRootType;
    Variant: VariantRootType;
    Image: ImageRootType;
    PageInfo: PageInfoRootType;
    Collection: CollectionRootType;
    Attribute: AttributeRootType;
    OptionConnection: OptionConnectionRootType;
    OptionEdge: OptionEdgeRootType;
    ProductConnection: ProductConnectionRootType;
    ProductEdge: ProductEdgeRootType;
    Mutation: MutationRootType;
    CollectionRule: CollectionRuleRootType;
    CollectionRuleSet: CollectionRuleSetRootType;
  };
  interfaces: {};
  unions: {};
  scalars: {
    String: any;
    Int: any;
    ID: any;
    Boolean: any;
  };
  inputObjects: {
    BrandWhereInput: BrandWhereInput;
    ProductWhereInput: ProductWhereInput;
    AttributeWhereInput: AttributeWhereInput;
    CollectionWhereInput: CollectionWhereInput;
    CollectionRuleSetWhereInput: CollectionRuleSetWhereInput;
    CollectionRuleWhereInput: CollectionRuleWhereInput;
    ImageWhereInput: ImageWhereInput;
    ProductTypeWhereInput: ProductTypeWhereInput;
    VariantWhereInput: VariantWhereInput;
    OptionValueWhereInput: OptionValueWhereInput;
    OptionWhereInput: OptionWhereInput;
    CreateProductInput: CreateProductInput;
    UniqueInput: UniqueInput;
    CreateVariantInput: CreateVariantInput;
    UpdateProductInput: UpdateProductInput;
    UpdateVariantInput: UpdateVariantInput;
  };
  allInputTypes: 
    | Extract<keyof GraphQLNexusGenTypes['inputObjects'], string>
    | Extract<keyof GraphQLNexusGenTypes['enums'], string>
    | Extract<keyof GraphQLNexusGenTypes['scalars'], string>;
  allOutputTypes: 
    | Extract<keyof GraphQLNexusGenTypes['objects'], string>
    | Extract<keyof GraphQLNexusGenTypes['enums'], string>
    | Extract<keyof GraphQLNexusGenTypes['unions'], string>
    | Extract<keyof GraphQLNexusGenTypes['interfaces'], string>
    | Extract<keyof GraphQLNexusGenTypes['scalars'], string>;
}

export type Gen = GraphQLNexusGenTypes;