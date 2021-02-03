export function truncateText(value: string, crop: number) {
  if (value?.length <= crop) {
    return value;
  }

  return `${value.slice(0, crop)}...`;
}
