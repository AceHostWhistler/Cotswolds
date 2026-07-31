export type GalleryImage = {
  src: string;
  alt: string;
};

const studio = (filename: string): GalleryImage => ({
  src: `/photos/originals/homepage/${filename}`,
  alt: `The Reel Room studio — ${filename.replace(/^DSC|\.jpg$/g, '').replace(/-/g, ' ')}`,
});

const elle = (filename: string): GalleryImage => ({
  src: `/photos/gallery/elle-wedding/${filename}`,
  alt: 'Private event at The Reel Room — Elle Wedding',
});

/** Curated gallery — studio and event photos interleaved for visual variety */
export const galleryImages: GalleryImage[] = [
  studio('DSC03125-Enhanced-NR.jpg'),
  elle('2elleweddingsreelroomjohnbello-026.jpg'),
  studio('DSC03081-Enhanced-NR.jpg'),
  elle('1elleweddingsreelroomjohnbello-033.jpg'),
  studio('DSC03217-Enhanced-NR.jpg'),
  elle('2elleweddingsreelroomjohnbello-029.jpg'),
  studio('DSC03060-Enhanced-NR.jpg'),
  elle('1elleweddingsreelroomjohnbello-028.jpg'),
  studio('DSC03101-Enhanced-NR.jpg'),
  elle('2elleweddingsreelroomjohnbello-016.jpg'),
  studio('DSC03222-Enhanced-NR.jpg'),
  elle('1elleweddingsreelroomjohnbello-024.jpg'),
  studio('DSC03106-Enhanced-NR.jpg'),
  elle('2elleweddingsreelroomjohnbello-010.jpg'),
  studio('DSC03070-Enhanced-NR.jpg'),
  elle('1elleweddingsreelroomjohnbello-021.jpg'),
  studio('DSC03138-Enhanced-NR.jpg'),
  elle('2elleweddingsreelroomjohnbello-008.jpg'),
  studio('DSC03223-Enhanced-NR.jpg'),
  elle('1elleweddingsreelroomjohnbello-013.jpg'),
  studio('DSC03078-Enhanced-NR.jpg'),
  elle('2elleweddingsreelroomjohnbello-002.jpg'),
  studio('DSC03166-Enhanced-NR.jpg'),
  elle('2elleweddingsreelroomjohnbello-001.jpg'),
  studio('DSC03110-Enhanced-NR.jpg'),
  elle('2elleweddingsreelroomjohnbello-007.jpg'),
  studio('DSC03192-Enhanced-NR-Edit.jpg'),
  elle('2elleweddingsreelroomjohnbello-006.jpg'),
  studio('DSC03092-Enhanced-NR.jpg'),
  studio('DSC03159-Enhanced-NR.jpg'),
  studio('DSC03061-Enhanced-NR.jpg'),
  studio('DSC03172-Enhanced-NR.jpg'),
  studio('DSC03086-Enhanced-NR.jpg'),
  studio('DSC03199-Enhanced-NR.jpg'),
  studio('DSC03063-Enhanced-NR.jpg'),
  studio('DSC03113-Enhanced-NR.jpg'),
  studio('DSC03095-Enhanced-NR.jpg'),
  studio('DSC03127-Enhanced-NR.jpg'),
  studio('DSC03167-Enhanced-NR.jpg'),
  studio('DSC03064-Enhanced-NR.jpg'),
  studio('DSC03131-Enhanced-NR.jpg'),
  studio('DSC03096-Enhanced-NR.jpg'),
  studio('DSC03073-Enhanced-NR.jpg'),
  studio('DSC03104-Enhanced-NR.jpg'),
  studio('DSC03088-Enhanced-NR.jpg'),
  studio('DSC03097-Enhanced-NR.jpg'),
  studio('DSC03066-Enhanced-NR.jpg'),
  studio('DSC03102-Enhanced-NR.jpg'),
  studio('DSC03099-Enhanced-NR.jpg'),
];
