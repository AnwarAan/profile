import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { header } from "../constant";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <nav id="home" className="flex justify-between fixed top-0 px-10 w-screen h-20 items-center z-10">
      <div>
        <a href="#home" className="text-3xl">
          MCA
        </a>
      </div>
      <div>
        <div className="hamburger">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button>
                <RxHamburgerMenu size={30} />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="bg-slate-100">
                {header.map((item, i) => (
                  <DropdownMenu.Item key={i}>
                    <a className="mx-2 text-xl text-left" key={i} href={item.path}>
                      {item.text}
                    </a>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
        <div className="bun">
          {header.map((item, i) => (
            <a className="mx-2 text-xl" key={i} href={item.path}>
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
