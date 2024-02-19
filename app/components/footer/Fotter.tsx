import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Fotter() {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base mb-2 font-bold">Shop Categories</h3>
            <Link href={"#"}>Phones</Link>
            <Link href={"#"}>Laptops</Link>
            <Link href={"#"}>Desktops</Link>
            <Link href={"#"}>Watches</Link>
            <Link href={"#"}>Tvs</Link>
            <Link href={"#"}>Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base mb-2 font-bold">Customer Service</h3>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Shipping Policy</Link>
            <Link href={"#"}>Returns & Exchanges</Link>
            <Link href={"#"}>Watches</Link>
            <Link href={"#"}>FAQs</Link>
          </FooterList>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base mb-2 font-bold">About Us</h3>
            <p className="mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              itaque sit vel magni facere perferendis possimus, veniam
              consectetur? Adipisci, fuga.
            </p>
            <p>
              &copy; {new Date().getFullYear()} e-Shop. All rights researved
            </p>
          </div>
          <FooterList>
            <h3 className="text-base mb-2 font-bold">Follow Us</h3>
            <div className="flex gap-2">
              <Link href={"#"}>
                <FaFacebook size={24} />
              </Link>
              <Link href={"#"}>
                <FaInstagram size={24} />
              </Link>
              <Link href={"#"}>
                <FaTwitter size={24} />
              </Link>
              <Link href={"#"}>
                <FaYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
}
