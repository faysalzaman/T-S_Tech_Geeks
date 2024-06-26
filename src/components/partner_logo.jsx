// Import your logo images

const PartnerLogos = () => {
  let hpLogo =
    "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/hp.png";
  let lenovoLogo =
    "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/lenovo.png";
  let vmwareLogo =
    "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/vmware.png";
  let dellLogo =
    "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/dell.png";
  let microsoftLogo =
    "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/mircosoft.png";
  let mitelLogo =
    "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/mitel.png";
  let intelLogo =
    "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/intel.png";
  let mikrotikLogo =
    "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/mikrotik.png";
  return (
    <div
      className="container mx-auto py-16 bg-white flex items-center justify-center pl-10 pr-10"
      style={{ minHeight: "75vh" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {[
          hpLogo,
          lenovoLogo,
          vmwareLogo,
          dellLogo,
          microsoftLogo,
          mitelLogo,
          intelLogo,
          mikrotikLogo,
        ].map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-52 w-52 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;
