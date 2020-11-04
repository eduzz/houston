import { IImageReaderResult } from './ImageReader';

export async function loadFile(file: File, extensions: string[]): Promise<IImageReaderResult> {
  return new Promise<IImageReaderResult>((resolve, reject) => {
    const regexp = new RegExp(`.(${extensions.join('|')})$`, 'gi');

    if (!regexp.test(file.name)) {
      reject('invalid-extension');
      return;
    }

    const reader = new FileReader();

    reader.onload = (e: any) => resolve(getImageDimensions(e.target.result));
    reader.onerror = err => reject(err);

    reader.readAsDataURL(file);
  });
}

export function calculateRegion(width: number, height: number): { width: number; height: number } {
  const dialogWidth = window.innerWidth - 160;
  const dialogHeight = window.innerHeight - 270;

  if (height <= dialogHeight && width <= dialogWidth) {
    return { width: Math.floor(width), height: Math.floor(height) };
  }

  if (width > dialogWidth) {
    const widthRatio = dialogWidth / width;
    return calculateRegion(dialogWidth, height * widthRatio);
  }

  const heightRatio = dialogHeight / height;
  return calculateRegion(width * heightRatio, dialogHeight);
}

async function getImageDimensions(url: string): Promise<IImageReaderResult> {
  return new Promise<IImageReaderResult>((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve({ url, width: image.width, height: image.height });
    image.onerror = err => reject(err);
    //   Toast.show();
    //   setLoading(false);

    image.src = url;
  });
}
