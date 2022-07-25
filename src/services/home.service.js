import { useQuery } from "@tanstack/react-query";
import httpReq from "./http.service";
class HomeApi {
    // get slider
    GetSlider = () => {
        const data = useQuery(['slider'], () => httpReq.get('slider'), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return data
    }

    // get banner
    GetBanner = () => useQuery(['getbanner'], () => httpReq.get('getbanner'), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })

    // get category & subcategory
    GetCategory = () => {
        const data = useQuery(['allcategory'], () => httpReq.get('allcategory'), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return data
    }

}

const HomePage = new HomeApi();

export default HomePage;

