import { IFile } from "./file.types";

export type DeepPartial<T> = {
  [P in keyof T]: DeepPartial<T[P]>;
};

export interface ITranslation {
  common?: Record<string, string>;
  pages: {
    home: {
      hero: Record<string, string | IFile>[];
      products: Record<string, string>;
      blog: Record<string, string>;
    };
  };
  navigation: Record<string, string>;
  btn: Record<string, string>;
  alts: Record<string, string>;
  ariaLabels: Record<string, string>;
  socials: Record<string, Record<string, string>>;
  footer?: Record<string, string | Record<string, Record<string, string>>>;
  footerLinks: Record<string, string | Record<string, string>[]>[];
  contacts: Record<string, string>;
  forms: Record<string, Record<string, string>>;
  validation: Record<string, string>;
  sort: Record<string, string>;
}
