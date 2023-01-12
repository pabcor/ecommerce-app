import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export type BreadcrumbProps = {
  routes: BreadcrumbRouteProps[];
};

export type BreadcrumbRouteProps = {
  name: string;
  href: string;
};

export default function Breadcrumb({ routes }: BreadcrumbProps) {
  return (
    <div className="bg-gray-200/30 border-b">
      <ol className="flex py-4 container">
        {routes.map((route, index) => {
          return (
            <li className="flex items-center" key={index}>
              <Link href={route.href}>{route.name}</Link>
              {index + 1 !== routes.length && (
                <ChevronRightIcon className="mx-2 mt-0.5 w-4 h-4" />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
