// Import your logo images
import hpLogo from "../../assets/hp.png";
import lenovoLogo from "../../assets/lenovo.png";
import vmwareLogo from "../../assets/vmware.webp";
import dellLogo from "../../assets/dell.png";
import microsoftLogo from "../../assets/microsoft.png";
import mitelLogo from "../../assets/mitel.png";
import intelLogo from "../../assets/intel.png";
import mikrotikLogo from "../../assets/mikrotik.png";

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
