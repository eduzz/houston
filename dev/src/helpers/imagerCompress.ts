export default function imageCompress(imageBase64: string, width: number, height: number) {
  return new Promise<string>(async resolve => {
    const img = new Image();
    await freeRender();

    img.onload = async () => {
      const canvas = document.createElement('canvas');
      await freeRender();

      const context = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;

      const insideCanvas = document.createElement('canvas');
      await freeRender();

      const insideContext = insideCanvas.getContext('2d');
      insideCanvas.width = width;
      insideCanvas.height = height;

      insideContext.drawImage(img, 0, 0, insideCanvas.width, insideCanvas.height);
      await freeRender();

      context.drawImage(insideCanvas, 0, 0, insideCanvas.width, insideCanvas.height, 0, 0, canvas.width, canvas.height);
      await freeRender();

      resolve(canvas.toDataURL());
    };

    img.src = imageBase64;
  });
}

async function freeRender() {
  await new Promise(resolve => setTimeout(() => resolve(), 300));
}
