import Link from "next/link";
import { HoverMenu, HoverMenuItem } from "./ui/hover-menu";

export default function Home() {
  return (
    <div className="m-5">
      <div className="bg-blue-500">
        <HoverMenu>
          <HoverMenuItem itemKey="1" title="About">
            <Link className="block hover:text-blue-700" href="/about">
              About
            </Link>
            <Link className="block hover:text-blue-700" href="/company">
              Company
            </Link>
            <Link className="block hover:text-blue-700" href="/access">
              Access
            </Link>
          </HoverMenuItem>
          <HoverMenuItem itemKey="2" title="Product">
            <Link className="block hover:text-blue-700" href="/service">
              Service
            </Link>
            <Link className="block hover:text-blue-700" href="/products">
              Products
            </Link>
            <Link className="block hover:text-blue-700" href="/technology">
              Technology
            </Link>
          </HoverMenuItem>
        </HoverMenu>
      </div>
    </div>
  );
}
