import { FiSearch } from "react-icons/fi";
import { Link } from "react-router";

const MainCategories = () => {
    return (
        <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
            <div className="flex-1 flex items-center justify-between flex-wrap">
                <Link
                    to="/posts"
                    className="bg-blue-800 text-white rounded-xl px-4 py-2"
                >
                    All posts
                </Link>
                <Link
                    to="/posts?cat=web-design"
                    className="hover:bg-blue-50 rounded-xl px-4 py-2"
                >
                    Web design
                </Link>
                <Link
                    to="/posts?cat=development"
                    className="hover:bg-blue-50 rounded-xl px-4 py-2"
                >
                    Development
                </Link>
                <Link
                    to="/posts?cat=database"
                    className="hover:bg-blue-50 rounded-xl px-4 py-2"
                >
                    Database
                </Link>
                <Link
                    to="/posts?cat=search-engines"
                    className="hover:bg-blue-50 rounded-xl px-4 py-2"
                >
                    Search engines
                </Link>
                <Link
                    to="/posts?cat=javascript"
                    className="hover:bg-blue-50 rounded-xl px-4 py-2"
                >
                    Javascript
                </Link>
            </div>

            <span className="text-xl font-medium">|</span>

            <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
                {/* search icon */}
                <FiSearch />
                <input type="text" placeholder="search a post..." className="bg-transparent focus:outline-none" />
            </div>
        </div>
    );
};

export default MainCategories;
