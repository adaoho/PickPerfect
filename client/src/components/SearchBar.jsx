const SearchBar = () => {
  return (
    <>
      <section className="flex h-24 w-[100dvw] bg-white shadow-lg items-center justify-center">
        {/* The Box Search */}
        <div className="w-full flex justify-center items-center flex-row">
          {/*  */}
          <form
            className="flex justify-between items-center space-x-12 rounded-xl p-4 border h-16 focus:outline-none focus:outline-2 focus:outline-pp-100"
            onSubmit={""}
          >
            <p className="border-r-2 text-base font-medium pr-4 -mr-8">
              Find Fruit
            </p>
            <input
              type="text"
              className="border-gray-100 text-base text-gray-400 active focus:outline-none w-[400px]"
              placeholder="type fruit name ..."
              value={""}
              name="name"
              onChange={""}
            />
            <button className="right-2" type="submit">
              <i className="fa-solid fa-magnifying-glass bg-pp-50 text-white rounded-full p-2"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
