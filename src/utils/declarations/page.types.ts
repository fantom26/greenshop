import { IBreadcrumb } from "./breadcrumb.types";

export interface IPage {
  title?: string;
  description?: string;
  breadcrumb?: string;
  noIndex?: boolean;
  seo?: string;
}

export interface PageProps {
  meta: IPage;
  breadcrumbs: IBreadcrumb[];
}
