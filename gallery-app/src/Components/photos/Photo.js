const Photo = ({serverId, id, secret, title}) => {

    return (
        <li>
          <img src={`https://live.staticflickr.com/${serverId}/${id}_${secret}.jpg`} alt={`${title}`} />
        </li>
    );
};

export default Photo;
