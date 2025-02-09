import QueryBuilder from "../../builder/QueryBuilder";
import { TProductsCreate } from "./products.interfatch";
import { Products } from "./products.model";
import { ProductsSearchAbleFields } from "./prosucts.constant";

const createProductsFromDB = async (data: TProductsCreate) => {
    const resualt = await Products.create(data);
    return resualt;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
    const allProducts = new QueryBuilder(
        Products.find().populate('category'),
        query
    )
        .filter()
        .sort()
        .paginate()
        .fields()
        .search(ProductsSearchAbleFields);

    const resualt = await allProducts.modelQuery;
    const meta = await allProducts.countTotal();
    return { resualt,meta };
};

const deletedProductFromDB = async (id: string) => {
    const resualt = await Products.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return resualt;
};

const getSingleProductFromDB = async (id: string) => {
    const resualt = await Products.findById(id).populate('category');
    return resualt;
};

const updateProductFromDB = async (id: string, data: TProductsCreate) => {
    const resualt = await Products.findByIdAndUpdate(id, data, { new: true });
    return resualt;
};

export const ProductsService = {
    createProductsFromDB,
    getAllProductsFromDB,
    deletedProductFromDB,
    getSingleProductFromDB,
    updateProductFromDB
};