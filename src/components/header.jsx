const Header = () => {
  return (
    <header className="shadow fixed z-50 w-full bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img
          src="https://res.cloudinary.com/dqph3qip7/image/upload/v1719431556/ts_geeks/logo.png"
          alt="Logo"
          className="h-16 w-fit mr-2"
        />
      </div>
    </header>
  );
};

export default Header;
