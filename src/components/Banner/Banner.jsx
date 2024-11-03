
const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-2xl mb-16 mt-10 ">
            <div className="hero-content mt-10 flex-col  gap-10 lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co.com/YDncK8n/books.webp"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>

                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;