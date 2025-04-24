import { useState } from "react";

import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';
import "react-image-gallery/styles/css/image-gallery.css";
import "react-photo-album/rows.css"

import { ColumnsPhotoAlbum } from 'react-photo-album';
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import styled from 'styled-components';

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <Wrapper>
      <ColumnsPhotoAlbum
        photos={images}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Thumbnails]}
        thumbnails={{
          border: 0,
          width: 70,
          gap: 5
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px;
`;

export default PhotoGallery;
