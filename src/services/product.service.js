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
    GetCatProduct = (slug, page) => {
        const data = useQuery(['getcatproduct', slug], () => httpReq.get(`getcatproduct?slug=${slug}&page=${page}`), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return { data, ...data }
    }

    // subcategory wise product
    GetSubCatProduct = (slug, page) => {
        const data = useQuery(['getsubcatproduct', slug], () => httpReq.get(`getsubcatproduct?slug=${slug}&page=${page}`), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return { data, ...data }
    }
    // create unic id 
     makeid = (length) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

}

const Product = new ProductApi();

export default Product;

