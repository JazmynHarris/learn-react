import { AvatarProps } from "@/types/avatar";
import { Avatar } from '../components/profile_props';
import { GalleryProps } from "@/types/gallery";

function Profile({ scientist, size = 100 }: GalleryProps) {
  return (
      <section className="profile">
        <h2>{scientist.name}</h2>
        <Avatar
          person={{ name: scientist.name, imageId: scientist.imageId }}
          size={size} />
        <ul>
          <li>
            <b>Profession: </b>
            {scientist.profession}
          </li>
          <li>
            <b>Awards: {scientist.awards.length}</b>
            ({scientist.awards})
          </li>
          <li>
            <b>Discovered: </b>
            {scientist.discovery}
          </li>
        </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        scientist={{ name: "Maria Skłodowska-Curie", imageId: "szV5sdG", profession: "physicist and chemist", awards: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal", discovery: "polonium (element)" }} size={70} />
      
      <Profile
        scientist={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2", profession: "geochemist", awards: "Miyake Prize for geochemistry, Tanaka Prize", discovery: "a method for measuring carbon dioxide in seawater" }} size={70} />
    </div>
  );
}
