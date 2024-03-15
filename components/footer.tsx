const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold">Contact Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center">
          <div>
            <h3 className="font-semibold">Email</h3>
            <p>contact@realestateapp.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Contact Number</h3>
            <p>+123 456 7890</p>
          </div>
          <div>
            <h3 className="font-semibold">Location</h3>
            <p>123 Real Estate Blvd, City, Country</p>
          </div>
          <div>
            <h3 className="font-semibold">About Us</h3>
            <p>Your trusted partner in finding your dream home. With a wide range of properties, we are here to make your real estate dreams a reality.</p>
          </div>
        </div>
        <p className="text-center text-xs text-black">
          &copy; 2024 Real-Estate App of Group 3, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
};

export default Footer;
