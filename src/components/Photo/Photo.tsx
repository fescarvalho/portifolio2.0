import "../Photo/Photo.css";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader";
import { useEffect, useState } from "react";

interface PhotoProps {
  avatar?: string;
}

const Photo = (props: PhotoProps) => {
  const [avatar, setAvartar] = useState();
  const url = "https://api.github.com/users/fescarvalho";

  useEffect(() => {
    axios.get(url).then((res) => setAvartar(res.data.avatar_url));
  }, []);

  return (
    <>
      {avatar ? (
        <div className="photo">
          <img src={avatar} />
        </div>
      ) : (
        <FadeLoader color="#0dc1e0" height={15} margin={10} speedMultiplier={1} width={6} />
      )}
    </>
  );
};

export default Photo;
