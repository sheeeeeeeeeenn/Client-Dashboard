import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";



export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("f0111d3a-5c3e-4d34-9282-97bf079237f4"); // billboard api

  return (
    <>
      
      <Container>
        <div className="fixed top-4 right-4 z-50">
         
        </div>
        <div className="space-y-10 pb-10">
          <Billboard
            data={billboard}
          />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Properties & Listing" items={products} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
