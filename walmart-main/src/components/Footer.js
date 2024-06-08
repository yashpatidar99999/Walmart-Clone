import React from "react";

const Footer = () => {
  const links = [
    { name: "All Departments", link: "#" },
    { name: "Store Directory", link: "#" },
    { name: "Careers", link: "#" },
    { name: "Our Company", link: "#" },
    { name: "Sell on Walmart.com", link: "#" },
    { name: "Help", link: "#" },
    { name: "Product Recalls", link: "#" },
    { name: "Accessibility", link: "#" },
    { name: "Tax Exempt Program", link: "#" },
    { name: "Get the Walmart App", link: "#" },
    { name: "Sign-up for Email", link: "#" },
    { name: "Safety Data Sheet", link: "#" },
    { name: "Terms of Use", link: "#" },
    { name: "Privacy & Security", link: "#" },
    { name: "California Supply Chain Act", link: "#" },
    { name: "Your Privacy Choices", link: "#" },
    { name: "Notice at Collection", link: "#" },
    { name: "NV Consumer Health Data Privacy Notice", link: "#" },
    { name: "WA Consumer Health Data Privacy Notice", link: "#" },
    { name: "Request My Personal Information", link: "#" },
    { name: "Brand Shop Directory", link: "#" },
    { name: "Pharmacy", link: "#" },
    { name: "Walmart Business", link: "#" },
    { name: "#IYWYK", link: "#" },
    { name: "Delete Account", link: "#" },
  ];
  return (
    <div className="bg-[#004f9a] mt-4 pt-4 pb-8 flex flex-col text-white items-center gap-8">
      <div className="flex items-center justify-center flex-wrap text-[14px] w-[62%] gap-x-4">
        {links.map((link) => (
          <a href={link.link}>{link.name}</a>
        ))}
      </div>
      <p className="text-[12px]">© 2024 Walmart. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
