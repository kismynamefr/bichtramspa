'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiX, FiChevronDown } from 'react-icons/fi';
import { dropdownItems } from '~/Data/DataDropdown';
import Logo from '~/assets/Footer/logo.png'


interface MenuMobileProps {
  onClose: () => void;
}

interface NavItem {
  id: number;
  title: string;
  link: string;
  dropdownItems?: DropdownItemsData;
}

interface DropdownItemsData {
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
    link: '/triet-long',
    dropdownItems: dropdownItems[5],
  },
  {
    id: 6,
    title: 'GIẢM MỠ TOÀN THÂN',
    link: '/giam-mo-toan-than',
    dropdownItems: dropdownItems[6],
  },
];

const MenuMobile: React.FC<MenuMobileProps> = ({ onClose }) => {
  const [selectedDropdownId, setSelectedDropdownId] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const menuWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownClick = (id: number) => {
    if (selectedDropdownId === id) {
      setSelectedDropdownId(null);
    } else {
      setSelectedDropdownId(id);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuWrapperRef.current && !menuWrapperRef.current.contains(event.target as Node)) {
        onClose();
        setIsSidebarOpen(false);
      }
    };

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    });

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      menuItems.forEach((item) => {
        item.removeEventListener('click', (event) => {
          event.stopPropagation();
        });
      });
    };
  }, [onClose, isSidebarOpen]);

  const sidebarClass = isSidebarOpen ? 'sidebar-open' : 'sidebar-closed';

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-z overflow-hidden z-[110] ${sidebarClass}`}
        onClick={onClose} 
        style={{ transition: 'opacity 0.3s ease-out' }}
      >
        <div className="flex justify-end mb-6 py-3 px-5 relative z-[120]" >
          <button onClick={onClose} className="text-2xl text-white">
            <FiX />
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-4/5 h-screen bg-menu-mobi opacity-100 sidebar overflow-y-auto z-[120] ${sidebarClass}`}
        ref={menuWrapperRef}
      >
        <div className="flex justify-center w-full pt-2">
          <Image src={Logo} alt='Logo' className='w-[90px]'/>
        </div>
        {navItems.map((navItem) => (
          <div key={navItem.id} className={`border-t-[1px] !border-t-borderMenuMb border-0 p-4`} onClick={() => handleDropdownClick(navItem.id)}>
            <Link href={navItem.link}>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold">{navItem.title}</h3>
                {navItem.dropdownItems && (
                  <button>
                    <FiChevronDown
                      className={`h-4 w-4 transition-transform ${
                        selectedDropdownId === navItem.id ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>
            </Link>
            {selectedDropdownId === navItem.id && (
              <ul className="mt-1">
                {navItem.dropdownItems?.items.map((dropdownItem) => (
                  <li key={dropdownItem.id} className="mb-3">
                    <Link className="border-0 border-l-2 pl-6 py-[5px] font-bold text-base !border-l-titleListMb" href={dropdownItem.link}>
                      {dropdownItem.title}<br />
                    </Link>
                    <span className='pl-8 font-medium cursor-pointer'>{dropdownItem.item1}<br /></span>
                    <span className='pl-8 font-medium cursor-pointer'>{dropdownItem.item2 && <>{dropdownItem.item2}<br /></>}</span>
                    <span className='pl-8 font-medium cursor-pointer'>{dropdownItem.item3 && <>{dropdownItem.item3}<br /></>}</span>
                    <span className='pl-8 font-medium cursor-pointer'>{dropdownItem.item4 && <>{dropdownItem.item4}<br /></>}</span>
                    <span className='pl-8 font-medium cursor-pointer'>{dropdownItem.item5 && <>{dropdownItem.item5}<br /></>}</span>
                    <span className='pl-8 font-medium cursor-pointer'>{dropdownItem.item6 && <>{dropdownItem.item6}<br /></>}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuMobile;