import { IFile } from "./file.types";

export interface IArticle {
  _id: number;
  createdAt: string;
  poster: IFile;
  minutesForReading: string;
  title: string;
  desc: string;
}
