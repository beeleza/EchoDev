import { Link } from "react-router";

const Homepage = () => {
    return (
        <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <span>•</span>
                <span className="text-blue-800">Blogs & articles</span>
            </div>

            <div className="flex items-center justify-between">
                <div className="">
                    <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
                        Welcome to EchoDev
                    </h1>

                    <p className="mt-8 text-md md:text-xl ">
                        If you're passionate about technology, programming, you've come to
                        the right place!
                    </p>

                    <div className="mt-8">
                        <Link to="/write" className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                            <button>Write now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
