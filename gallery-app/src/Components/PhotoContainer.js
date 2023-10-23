import Photo from "./photos/Photo";
import NotFound from "./NotFound";

const PhotoContainer = ({ data }) => {
  let photos = data.map((photo) => {
    return <Photo imgSrc={photo.img_src} key={photo.id} />;
  });
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
        {/* <NotFound /> */}
      </ul>
    </div>
  );
};

export default PhotoContainer;
