import Link from "next/link";
import Image from "next/image";
import infraPreview from "../../public/dataloaf-infra.png";
import dashboardPreview from "../../public/dataloaf-dashboard.png";
export default function DataLoafPreview(): JSX.Element {
  return (
    <section
      id="dataloaf"
      className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-zinc-900"
    >
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
              DataLoaf
            </h2>
            <p className="mx-auto max-w-[900px] pb-6 pt-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Recently, I worked on developing DataLoaf. An open source, self
              hosted product analytics tool for developers that deploys to AWS.
            </p>
          </div>
          <Image
            alt="DataLoaf Dashboard"
            className="mx-auto overflow-hidden rounded-xl object-cover object-center"
            height="675"
            src={dashboardPreview}
            width="1200"
          />
          <p className="text-md text-gray-500 dark:text-gray-400">
            DataLoaf allows you to search through a variety of aggregations and
            filter against completely custom attributes for each event and user.
          </p>
          <Image
            alt="DataLoaf Infrastructure"
            className="mx-auto overflow-hidden rounded-xl object-cover object-center"
            height="675"
            src={infraPreview}
            width="1200"
          />

          <Link
            className="mt-6 inline-flex h-10 w-fit items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-loaf  dark:text-gray-900  dark:hover:bg-opacity-80 dark:focus-visible:ring-gray-300"
            href="https://data-loaf.com/docs/category/case-study"
            target="_blank"
          >
            Read the Case Study
          </Link>
        </div>
      </div>
    </section>
  );
}
