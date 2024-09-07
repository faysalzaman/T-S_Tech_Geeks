const Header = () => {
  return (
    <header className="shadow z-50 w-full bg-black">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <img
          src="https://res.cloudinary.com/dqph3qip7/image/upload/v1725720858/header_qf9pe9.png"
          alt="Logo"
          className="h-24 md:h-20 lg:h-28 w-auto mr-0 md:mr-2 mb-4 md:mb-0"
        />
      </div>
    </header>
  );
};

export default Header;
