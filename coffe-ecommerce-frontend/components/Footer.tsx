import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFooter = [
  {
    id: 1,
    name: "Sobre Nosotros",
    lik: "#",
  },
  {
    id: 2,
    name: "Productos",
    lik: "#",
  },
  {
    id: 3,
    name: "Privacidad",
    lik: "#",
  },
];

export function Footer() {
  return (
    <footer className="mt-4">
      <div className="w-full lg:w-10/12 mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h2 className="text-lg font-normal sm:font-medium hover:cursor-pointer hover:scale-90 hover:text-amber-700 transition-all duration-150 w-4/12 h-fit">
            <Link href={"/"}>
              Coffe-
              <span className="font-medium sm:font-semibold">Commerce</span>
            </Link>
          </h2>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-300">
            {dataFooter.map((data) => (
              <li key={data.id}>
                <Link href={data.lik} className="hover:underline me-4 md:me-6">
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator className=" my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span
          className="w-full flex flex-col gap-1 sm:items-center
        sm:flex-row sm:justify-center text-gray-500 dark:text-gray-300"
        >
          {" "}
          <strong>
            {" "}
            &copy; 2024{" "}
            <Link href={"https://innovateproweb.com/"}>
              {" "}
              - INNOVATEProweb -{" "}
            </Link>{" "}
          </strong>
          <p className="flex flex-nowrap">Todos los derechos reservados </p>
        </span>
      </div>
    </footer>
  );
}
