import PropertyPage from "./PropertyPage";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const BuyPropertyPage = () => {
  const buyProperties = [
    { image: "...", price: "$850,000", beds: 4, baths: 3, size: "2,500 sq ft", address: "123 Maple Street" },
    { image: "...", price: "$620,000", beds: 3, baths: 2, size: "1,800 sq ft", address: "456 Oak Avenue" },
  ];

  return <PropertyPage title="Homes for Sale" properties={buyProperties} />;
};
export default withAuthenticationRequired(BuyPropertyPage, {
  onRedirecting: () => <div>Loading...</div>,
  returnTo: "/buy"
});
