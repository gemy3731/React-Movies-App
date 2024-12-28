import { TfiFaceSad } from "react-icons/tfi";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-[-50px]  text-gray-400 text-[22px] h-[90vh]">
      <TfiFaceSad  className="text-[80px] "/>
      <p>404</p>
      <p>Page not found</p>
      <p>The page you are looking for doesn't exist or an other error occured.</p>
    </div>
  );
}
