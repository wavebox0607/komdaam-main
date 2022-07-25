import { useQuery } from "@tanstack/react-query";
import httpReq from "./http.service";
class ProductApi {
    GetAll = () => {
        const data = useQuery(['allproduct'], () => httpReq.get('allproduct'), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return data
    }
    GetSingle = (slug) => {
        const data = useQuery(['productDetails', slug], () => httpReq.get(`product-details?slug=${slug}`), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return { data, ...data }
    }

}

const Product = new ProductApi();

export default Product;

