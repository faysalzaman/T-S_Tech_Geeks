/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-500 text-white rounded-full">
        <i className={`fas ${icon} text-2xl`}></i>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
