const Header = () => {
  return (
    <header className="shadow z-50 w-full bg-white">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <img
          src="https://res.cloudinary.com/dqph3qip7/image/upload/v1719431556/ts_geeks/logo.png"
          alt="Logo"
          className="h-16 md:h-12 lg:h-20 w-auto mr-0 md:mr-2 mb-4 md:mb-0"
        />
      </div>
    </header>
  );
};

export default Header;
