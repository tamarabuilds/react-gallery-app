import { useParams } from "react-router-dom";

// App components
import Photo from "./photos/Photo";
import NotFound from "./NotFound";
import { useEffect } from "react";

const PhotoContainer = ({ data, changeQuery }) => {
  let { urlTerm } = useParams();
  let photos = "";
  changeQuery(urlTerm)
  
  // Checking if provided data is empty or not
  if (data.length > 0) {
    photos = data.map((photo) => {
      return (
        <Photo
          serverId={photo.server}
          id={photo.id}
          secret={photo.secret}
          title={photo.title}
          key={photo.id}
        />
      );
    });
  } else {
    // NotFound component to render if no data is provided
    photos = <NotFound />;
  }
  return (
    <div className="photo-container">
      <h2>{urlTerm}</h2>
      <ul>{photos}</ul>
    </div>
  );
};

export default PhotoContainer;
