import { Link } from "react-router";
import Image from "./Image";

const FeaturedPosts = () => {
    return (
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/* first */}
            <div className="w-full lg:w/12 flex flex-col gap-4">
                <Image src="./featured1.jpeg" />
                <div className="flex items-center gap-4">
                    <h1 className="font-semibold lg:text-lg">01.</h1>
                    <Link className="text-blue-800 lg:text-lg">Web design</Link>
                    <span className="text-gray-500">2 days ago</span>
                </div>
                <Link className="text-xl lg:text-3xl font-semibold lg:font-bold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, numquam.
                </Link>
            </div>

            {/* others */}
            <div className="w-full lg:w/12 flex flex-col gap-4">
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <Image 
                        src="featured2.jpeg"
                        className="rounded-3xl object-cover w-1/3 aspect-video"    
                    />

                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">02.</h1>
                            <Link className="text-blue-800">Web design</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>

                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, nostrum!
                        </Link>
                    </div>
                </div>
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <Image 
                        src="featured3.jpeg"
                        className="rounded-3xl object-cover w-1/3 aspect-video"    
                    />

                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">03.</h1>
                            <Link className="text-blue-800">Web design</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>

                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, nostrum!
                        </Link>
                    </div>
                </div>
                <div className="lg:h-1/3 flex justify-between gap-4">
                    <Image 
                        src="featured4.jpeg"
                        className="rounded-3xl object-cover w-1/3 aspect-video"    
                    />

                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold">04.</h1>
                            <Link className="text-blue-800">Web design</Link>
                            <span className="text-gray-500 text-sm">2 days ago</span>
                        </div>

                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, nostrum!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPosts;
