import { Link } from "react-router";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image component */}
      <div className="md:hidden xl:block xl:w1/3">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="800" />
      </div>

      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
          tempore.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written byu</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam
          dicta, labore illum obcaecati ad molestias! Perspiciatis doloribus
          enim ullam, reiciendis nemo aliquam est aliquid.
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">Read More</Link>
      </div>
    </div>
  );
};

export default PostListItem;
