import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data= response.json();
    return data?.products
}

const response = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
        const response = fetchProducts;
        return response;
    },
});

export default response;
