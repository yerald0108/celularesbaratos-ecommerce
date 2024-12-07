import { useQueries } from "@tanstack/react-query";
import { getRandomProducts, getRecentProducts } from "../../actions";


export const useHomeProducts = () => {
    const results = useQueries({
        queries: [
            {
                queryKey: ['recentProducts'],
                queryFn: getRecentProducts,
            },
            {
                queryKey: ['popularProducts'],
                queryFn: getRandomProducts,
            },
        ],
    });

    const [ recentProductsResults, popularProductResult] = results;

    const isLoading = recentProductsResults.isLoading || popularProductResult.isLoading;
    const isError = recentProductsResults.isError || popularProductResult.isError;

    return {
        recentProducts: recentProductsResults.data || [],
        popularProducts : popularProductResult.data || [],
        isLoading,
        isError,
    };
};