import { projectId, dataset } from '../env'

export function fileUrl(ref: string) {
  // Example ref: file-5a3c14be2d6d2f3c2d6d2f3c2d6d2f3c2d6d2f3c-mp4
  const [_file, id, extension] = ref.split('-');
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`;
}
