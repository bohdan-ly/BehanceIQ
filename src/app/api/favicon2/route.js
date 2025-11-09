import { readFile } from 'fs/promises';
import { join } from 'path';

/**
 * API Route for Second Favicon
 * Serves an actual image file from the public folder
 * 
 * This route serves favicon2.png at /api/favicon2
 */

export async function GET() {
  try {
    // Read the image file from the public folder
    const filePath = join(process.cwd(), 'public', 'favicon2.png');
    const fileBuffer = await readFile(filePath);

    // Return the image with proper headers
    return new Response(fileBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Error serving favicon2:', error);
    // Return a 404 if file doesn't exist
    return new Response('Favicon not found', { status: 404 });
  }
}
