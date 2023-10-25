const Photo = ({serverId, id, secret, title}) => {

  // Follows the url construction from flickr: https://www.flickr.com/services/api/misc.urls.html
    return (
        <li>
          <img src={`https://live.staticflickr.com/${serverId}/${id}_${secret}.jpg`} alt={`${title}`} />
        </li>
    );
};

export default Photo;
