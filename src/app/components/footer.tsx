
const Footer = () => {
  return (
      <div className="bg-black/35 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-[272px] text-white gap-[30px] ml-28">
          
          <div>
            <h5 className="font-[700] text-[16px]  mb-4 ">Company Info</h5>
            <ul className="space-y-2  text-white  text-[14px] font-[700]">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white/45 mb-4">Legal</h5>
            <ul className="space-y-2 text-white text-[14px] font-[700]">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white/45 mb-4">Features</h5>
            <ul className="space-y-2 text-white text-[14px] font-[700]">
              <li><a href="#">Business Marketing</a></li>
              <li><a href="#">User Analytic</a></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Unlimited Support</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white/45 mb-4">Resources</h5>
            <ul className="space-y-2 text- text-[14px] font-[700]">
              <li><a href="#">iOS & Android</a></li>
              <li><a href="#">Watch a Demo</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-[#252B42] mb-4">Get In Touch</h5>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
              />
              <button
                type="submit"
                className="bg-[#23A6F0] text-white px-6 py-2 rounded w-full"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white text-[12px ] mt-2">Lorem imp sum dolor Amit</p>
          </div>
        </div>

        <div className="h-[74px] text-center py-[25px] text-white/50 pl-10">
          Made With Nk,s Collection<p className="text-sm ">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
   
  );
};

export default Footer;
