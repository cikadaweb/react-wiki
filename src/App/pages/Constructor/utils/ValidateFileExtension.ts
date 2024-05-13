export const validateFilenameExtension = (filename: string): string => {
  let filenameParts = filename.split(".");
  if (filenameParts.includes("xml")) {
    return filename;
  }
  return filename + ".xml";
};