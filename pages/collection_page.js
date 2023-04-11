import { useRouter } from "next/router";

const Collection = ({searchParams}) => {
    const router = useRouter();

    const handleDiscount = () => {
        console.log("Discount /Collections")
        router.push('/discount_page')
}
// console.log("SearchParams",searchParams.id)
  return (
    <div>
      <div>
        <h4>Collection page</h4>
      </div>
      <div>
              <p>Create new Collection</p>
              <input type="string" />
              
          </div>
          <div>
              <button onClick={handleDiscount}>Add Discount</button>
          </div>
    </div>
  );
};
export default Collection;
