import "../Photo/Photo.css";
import axios from "axios";
import { useEffect, useState } from "react";

interface PhotoProps {
  avatar: string;
}

const Photo = (props: PhotoProps) => {
  const [avatar, setAvartar] = useState();
  const url = "https://api.github.com/users/fescarvalho";

  useEffect(() => {
    axios.get(url).then((res) => setAvartar(res.data.avatar_url));
  }, []);

  return (
    <div className="photo">
      <img src={avatar} />
    </div>
  );
};

export default Photo;
