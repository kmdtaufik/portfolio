import { buttonVariants } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function Admin() {
  return (
    <div className="mt-3 ">
      <div className="flex items-center justify-between mx-auto">
        <p className="text-lg font-bold">Project list</p>
        <Link
          href="/admin/create"
          className={buttonVariants({
            variant: "default",
          })}
        >
          <PlusIcon className="size-5 mr-2" />
          Add New Project
        </Link>
      </div>
    </div>
  );
}
