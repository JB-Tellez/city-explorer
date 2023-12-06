/* eslint-disable react/prop-types */
import Image from 'react-bootstrap/Image';

function Map(props) {
  return (
    <Image src={props.img_url} alt={props.city} title={props.city} rounded fluid />
  );
}

export default Map;
