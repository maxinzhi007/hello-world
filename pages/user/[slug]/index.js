import Single from "@/components/Single";
import { singleUser } from "@/src/data";

export default function user() {
    return (
        <div className="user ml-5 w-full h-full">
        <Single {...singleUser} />
        </div>
    )
};
