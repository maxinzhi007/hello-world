import Single from "@/components/Single";
import { singleProduct } from "@/src/data";

export default function product() {
    return (
        <div className="product">
        <Single {...singleProduct} />
        </div>
    )
};