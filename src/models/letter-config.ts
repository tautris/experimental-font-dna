export interface SvgLetterConfig {
  letter: string;
  viewBox: string;
  paths: string[];
  mutationType: "mutagen" | "trisomy" | "monosomy" | "point";
  mutationPaths: {
    path: string;
    isStroke?: boolean;
  }[];
}
