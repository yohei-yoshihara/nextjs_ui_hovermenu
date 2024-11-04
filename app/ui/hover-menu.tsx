"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
  useRef,
} from "react";

type Key = string | null;

interface HoverMenuContextType {
  active: Key;
  setActive: Dispatch<SetStateAction<Key>>;
}

const HoverMenuContext = createContext<HoverMenuContextType>({
  active: null,
  setActive: () => {},
});

export function HoverMenu({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<Key>(null);

  return (
    <HoverMenuContext.Provider value={{ active: active, setActive: setActive }}>
      {children}
    </HoverMenuContext.Provider>
  );
}

export function HoverMenuItem({
  children,
  title,
  itemKey,
}: {
  children: ReactNode;
  title: ReactNode;
  itemKey: string;
}) {
  const toggleActive = () => {
    setActive((prev) => {
      if (prev === itemKey) {
        return null;
      } else {
        return itemKey;
      }
    });
  };

  const handleMouseEnter = () => {
    setActive(itemKey);
  };

  const handleMouseLeave = () => {
    setActive(null);
  };

  const { active, setActive } = useContext(HoverMenuContext);
  const isOpen = itemKey === active;
  const contentsRef = useRef(null);
  const triggerRef = useRef(null);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <button
        ref={triggerRef}
        onClick={toggleActive}
        className="bg-blue-500 text-white p-2 cursor-pointer rounded-md">
        {title}
      </button>
      {isOpen && (
        <div
          ref={contentsRef}
          className="absolute top-full left-full -translate-x-1/2  bg-white border-[1px] border-solid border-gray-300 shadow-md rounded-md p-4 z-10 whitespace-nowrap">
          {children}
        </div>
      )}
    </div>
  );
}
