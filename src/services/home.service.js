
import { useQuery } from "@tanstack/react-query";
import httpReq from "./http.service";
class HomeApi {
    // get user
    GetUser = () => {
        const data = useQuery(['getuser'], () => httpReq.get('getuser'), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return data
    }
    // get settings
    GetSettings = () => {
        const data = useQuery(['settings'], () => httpReq.get('settings'), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return data
    }
    // get slider
    GetSlider = () => {
        const data = useQuery(['slider'], () => httpReq.get('slider'), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return data
    }

    // get banner 
    GetBanner = () => {
        const data = useQuery(['getbanner'], () => httpReq.get('getbanner'), {
            refetchOnMount: true,
            refetchOnWindowFocus: true
        })
        return data
    }

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

