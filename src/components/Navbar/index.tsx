"use client"
import { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { dropdownItems } from '~/Data/DataDropdown';
import Image from 'next/image';
import Link from 'next/link';
import Hot from '~/assets/Header/hot.png';

interface NavItem {
  id: number;
  title: string;
  link: string;
  dropdownItems?: DropdownItemsData;
}

interface DropdownItemsData {
  width: string;
  marginLeft: string;
  items: DropdownItem[];
}

interface DropdownItem {
  id: number;
  title: string;
  item1: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
  item6?: string;
  link: string;
  linkItem1: string; 
  linkItem2?: string; 
  linkItem3?: string;
  linkItem4?: string;
  linkItem5?: string;
  linkItem6?: string;
}

const navItems: NavItem[] = [
  {
    id: 1,
    title: 'GIỚI THIỆU',
    link: '/',
  },
  {
    id: 2,
    title: 'PHUN XĂM THẨM MỸ',
    link: '/SprayCosmeticTattooing',
    dropdownItems: dropdownItems[2],
  },
  {
    id: 3,
    title: 'ĐIỀU TRỊ DA',
    link: '/SkinTreatment',
    dropdownItems: dropdownItems[3],
  },
  {
    id: 4,
    title: 'TẮM TRẮNG',
    link: '/WhiteBath',
    dropdownItems: dropdownItems[4],
  },
  {
    id: 5,
    title: 'TRIỆT LÔNG',
    link: '/Waxxing',
    dropdownItems: dropdownItems[5],
  },
  {
    id: 6,
    title: 'GIẢM MỠ TOÀN THÂN',
    link: '/ReduceBodyFat',
    dropdownItems: dropdownItems[6],
  },
];


const NavbarComponents: React.FC = () => {
  const [selectedDropdownId, setSelectedDropdownId] = useState<number | null>(null);

  const handleDropdownEnter = (id: number) => {
    setSelectedDropdownId(id);
  };

  const handleDropdownLeave = () => {
    setSelectedDropdownId(null);
  };
  
  const renderDropdownItem = (dropdownItem: DropdownItem, index: number) => {
    const fieldName = `item${index}` as keyof DropdownItem;
    const linkItemFieldName = `linkItem${index}` as keyof DropdownItem;
    const linkItemValue = dropdownItem[linkItemFieldName];

    if (linkItemValue) {
      return (
        <p className="flex justify-between mb-4 border border-b-black">
          <Link className="text-mainSpaColor hover:text-black" href={linkItemValue.toString()}>
            {dropdownItem[fieldName]}
          </Link>
          <FiChevronRight />
        </p>
      );
    }

    return null;
  };
  const renderDropdownItems = (items: DropdownItem[]) => {
    return items.map((dropdownItem) => (
      <div
        key={dropdownItem.id}
        className={`item-container ${dropdownItem.id === 7 ? 'w-full' : 'w-2/6'}`}
      >
        <Link href={dropdownItem.link} className="text-mainSpaColor text-lg font-bold flex gap-2 items-center">
          {dropdownItem.title}
          <span><Image className="hot" src={Hot} alt="Hot" /></span>
        </Link>
        {renderDropdownItem(dropdownItem, 1)}
        {renderDropdownItem(dropdownItem, 2)}
        {renderDropdownItem(dropdownItem, 3)}
        {renderDropdownItem(dropdownItem, 4)}
        {renderDropdownItem(dropdownItem, 5)}
        {renderDropdownItem(dropdownItem, 6)}
      </div>
    ));
  };

  return (
    <nav className="bg-white p-4 hidden sm:block">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className={`relative text-black font-medium text-base tracking-wide`}
                  onMouseEnter={() => handleDropdownEnter(item.id)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.dropdownItems ? (
                    <div className="group">
                      <Link href={item.link} className="text-gray-900 link-navbar">
                        <button className={`text-gray-900 cursor-pointer link-navbar`}>
                          {item.title}
                          <FiChevronDown
                            className={`inline-block ml-1 h-4 w-4 transition-transform ${
                              selectedDropdownId === item.id ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                      </Link>
                      {selectedDropdownId === item.id && (
                        <>
                          <div className="absolute h-4 w-full z-20"></div>
                          <div
                            className="absolute dropdown-menu z-10 mt-4"
                            style={{
                              width: item.dropdownItems?.width,
                              marginLeft: item.dropdownItems?.marginLeft,
                            }}
                          >
                            <div className="flex gap-2 w-full flex-wrap">
                              {renderDropdownItems(item.dropdownItems.items)}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <Link href={item.link} className="text-gray-900 link-navbar">
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponents;
