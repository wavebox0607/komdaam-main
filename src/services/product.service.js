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

}

const Product = new ProductApi();

export default Product;

