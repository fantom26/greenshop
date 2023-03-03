export interface IFile {
  _id: string;
  url: string;
  meta: {
    name: string;
    type: "image" | "video";
    alt?: string;
    title?: string;
  };
}
