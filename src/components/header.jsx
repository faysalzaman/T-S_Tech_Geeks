const Header = () => {
  return (
    <header className="shadow z-50 w-full bg-black">
      <div className="container mx-auto px-4 py-2 md:py-3 flex items-center justify-between object-cover">
        <img
          src="https://res.cloudinary.com/dqph3qip7/image/upload/v1725720858/header_qf9pe9.png"
          alt="Logo"
          className="h-16 md:h-20 lg:h-24 w-auto object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
