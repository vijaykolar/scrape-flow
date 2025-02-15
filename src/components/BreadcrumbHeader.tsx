"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbItem,
  BreadcrumbSeparator,
  // BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { MobileSidebar } from "./Sidebar";
import { Fragment } from "react";

export const BreadcrumbHeader = () => {
  const pathName = usePathname();
  const paths = pathName === "/" ? [""] : pathName?.split("/");

  return (
    <div className="flex flex-start items-center">
      <MobileSidebar />
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => (
            <Fragment key={index}>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink asChild>
                  <Link className="capitalize" href={path === "" ? "/" : path}>
                    {path === "" ? "home" : path}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < paths.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
