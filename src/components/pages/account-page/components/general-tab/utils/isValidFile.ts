export const isValidFile = (file: File) => {
  const allowedExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
  const fileExtension = file.name
    .slice(file.name.lastIndexOf('.') + 1)
    .toLowerCase();
  return allowedExtensions.includes(`.${fileExtension}`);
};
