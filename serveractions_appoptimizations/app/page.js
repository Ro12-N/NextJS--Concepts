import UserForm from "@/components/user-form";
import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";

export default function Home() {
  return (
     <div>
       <UserForm />
     </div>
  );
}
