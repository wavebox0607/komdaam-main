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

    // category wise product
    GetCatProduct = (slug) => {
        const data = useQuery(['getcatproduct', slug], () => httpReq.get(`getcatproduct?slug=${slug}`), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return { data, ...data }
    }

    // subcategory wise product
    GetSubCatProduct = (slug) => {
        const data = useQuery(['getsubcatproduct', slug], () => httpReq.get(`getsubcatproduct?slug=${slug}`), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return { data, ...data }
    }

}

const Product = new ProductApi();

export default Product;

