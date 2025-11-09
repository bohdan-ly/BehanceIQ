import { ImageResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

/**
 * Dynamic Icon Generator for Next.js
 * Serves an actual image file from the public folder using ImageResponse
 * This is the default favicon that will be served at /favicon.ico
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons
 */

// Image metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

// Serve actual image file using ImageResponse with embedded base64 image
export default async function Icon() {
  try {
    // Read the image file and convert to base64 data URL
    // This allows us to embed the image directly in ImageResponse
    const filePath = join(process.cwd(), 'public', 'favicon1.png');
    const fileBuffer = await readFile(filePath);
    const base64Image = fileBuffer.toString('base64');
    const dataUrl = `data:image/png;base64,${base64Image}`;

    // Use ImageResponse with an img tag containing the base64 image
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={dataUrl}
            alt="Favicon"
            width={32}
            height={32}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    console.error('Error serving icon from file:', error);
    // Fallback to generated icon if file doesn't exist
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 24,
            background: '#8f00ff',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          B
        </div>
      ),
      {
        ...size,
      }
    );
  }
}
