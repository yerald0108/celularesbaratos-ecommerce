import { Brands } from "../components/home/Brands";
import { FeatureGrid } from "../components/home/FeatureGrid";
import { ProductGrid } from "../components/home/ProductGrid";
import { popularCelulares, recentCelulares } from "../data/initialData";
import { prepareProducts } from "../helpers";
import { useProducts } from "../hooks";

export const HomePage = () => {

    const { products, isLoading } = useProducts();

    const preparedRecentProducts = prepareProducts(recentCelulares);
    const preparedPopularProducts = prepareProducts(popularCelulares)

    return (
        <div>
            <FeatureGrid />

            <ProductGrid 
                title = 'Nuevos Productos'
                products={preparedRecentProducts}
            />
            <ProductGrid 
                title = 'Productos Destacados'
                products={preparedPopularProducts}
            />

            <Brands />
        </div>
    );
};