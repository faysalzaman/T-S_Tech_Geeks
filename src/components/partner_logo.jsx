// Import your logo images
import hpLogo from "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/hp.png";
import lenovoLogo from "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/lenovo.png";
import vmwareLogo from "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/vmware.png";
import dellLogo from "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/dell.png";
import microsoftLogo from "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/mircosoft.png";
import mitelLogo from "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/mitel.png";
import intelLogo from "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/intel.png";
import mikrotikLogo from "https://res.cloudinary.com/dqph3qip7/image/upload/v1719431537/ts_geeks/mikrotik.png";

const PartnerLogos = () => {
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
