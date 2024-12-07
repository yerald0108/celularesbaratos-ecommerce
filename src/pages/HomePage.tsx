import { Brands } from "../components/home/Brands";
import { FeatureGrid } from "../components/home/FeatureGrid";
import { ProductGrid } from "../components/home/ProductGrid";
import { ProductGridSkeleton } from "../components/skeleton/ProductGridSkeleton";
import { prepareProducts } from "../helpers";
import { useHomeProducts } from "../hooks";

export const HomePage = () => {

    const { recentProducts, popularProducts, isLoading } = useHomeProducts();

    const preparedRecentProducts = prepareProducts(recentProducts);
    const preparedPopularProducts = prepareProducts(popularProducts)

    return (
        <div>
            <FeatureGrid />

            {
                isLoading ? (
                    <ProductGridSkeleton numberOfProducts={4} />
                ) : (
                    <ProductGrid 
                        title = 'Nuevos Productos'
                        products={preparedRecentProducts}
                    />
                )
            }

            {
                isLoading ? (
                    <ProductGridSkeleton numberOfProducts={4} />
                ) : (
                    <ProductGrid 
                        title = 'Productos Destacados'
                        products={preparedPopularProducts}
                    />
                )
            }

            <Brands />
        </div>
    );
};