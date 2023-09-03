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

export const dropdownItems: { [key: number]: DropdownItemsData } = {
  2: {
    width: '900px',
    marginLeft: '-106px',
    items: [
      {
        id: 1,
        title: 'PHUN CHÂN MÀY',
        link: '/EyebrowSpray',
        item1: 'Phun mày hiệu ứng bút chì',
        linkItem1: '/PencilEffectTattooSpray',
      },
      {
        id: 2,
        title: 'ĐIÊU KHẮC CHÂN MÀY',
        item1: 'Điêu khắc chân mày Shading',
        item2: 'Điêu khắc chân mày Hairstroke',
        link: '/dieu-khac-chan-may',
        linkItem1: '/',
        linkItem2: '/',
      },
      {
        id: 3,
        title: 'PHUN & CẤY MÔI',
        item1: 'Phun môi Collagen',
        item2: 'Khử thâm môi',
        link: '/phun-cay-moi',
        linkItem1: '/',
        linkItem2: '/',
        
      },
      {
        id: 4,
        title: 'PHUN MÍ',
        item1: 'Phun mí mở tròng',
        item2: 'Phun mí Eyeliner',
        link: '/phun-mi',
        linkItem1: '/',
        linkItem2: '/',
        
      },
    ],
  },
  3: {
    width: '900px',
    marginLeft: '-312px',
    items: [
      {
        id: 1,
        title: 'ĐIỀU TRỊ MỤN',
        item1: 'Lấy nhân mụn chuẩn Y khoa',
        item2: 'Điều trị mụn thịt',
        item3: 'Điều trị mụn lưng',
        link: '/phun-chan-may',
        linkItem1: '/',
        linkItem2: '/',
        linkItem3: '/',
        
      },
      {
        id: 2,
        title: 'ĐIỀU TRỊ NÁM',
        item1: 'Nám chân sâu',
        item2: 'Nám mảng',
        item3: 'Nám hỗn hợp',
        item4: 'Trị nám sau sinh',
        link: '/dieu-khac-chan-may',
        linkItem1: '/',
        linkItem2: '/',
        linkItem3: '/',
        linkItem4: '/',
        
      },
      {
        id: 3,
        title: 'ĐIỀU TRỊ TÀN NHANG',
        item1: 'Đồi mồi',
        item2: 'Tăng sắc tố da',
        link: '/phun-cay-moi',
        linkItem1: '/',
        linkItem2: '/',
        
      },
      {
        id: 4,
        title: 'ĐIỀU TRỊ SẸO',
        item1: 'Điều trị sẹo rỗ',
        item2: 'Điều trị sẹo lồi',
        item3: 'Điều trị sẹo lõm',
        link: '/phun-mi',
        linkItem1: '/',
        linkItem2: '/',
        linkItem3: '/',

      },
      {
        id: 5,
        title: 'ĐIỀU TRỊ DA CHUYÊN SÂU',
        item1: 'Tẩy nốt ruồi',
        item2: 'Se khít lỗ chân lông',
        item3: 'Điều trị viêm nang lông',
        item4: 'Điều trị rạn da',
        link: '/phun-mi',
        linkItem1: '/',
        linkItem2: '/',
        linkItem3: '/',
        linkItem4: '/',
        
      },
    ],
  },
  4: {
    width: '630px',
    marginLeft: '-240px',
    items: [
      {
        id: 7,
        title: 'ẮM TRẮNG TOÀN THÂN',
        item1: 'Luxury Young Body',
        item2: 'Collagen Body',
        link: '/phun-chan-may',
        linkItem1: '/',
        linkItem2: '/',
        
      },
    ],
  },
  5: {
    width: '850px',
    marginLeft: '-370px',
    items: [
      {
        id: 1,
        title: 'TRIỆT LÔNG',
        item1: 'Triệt lông Bikini',
        item2: 'Triệt lông nách',
        item3: 'Triệt lông mặt',
        item4: 'Triệt lông chân',
        item5: 'Triệt ria mép',
        link: '/phun-chan-may',
        linkItem1: '/',
        linkItem2: '/',
        linkItem3: '/',
        linkItem4: '/',
        linkItem5: '/',
        
      },
      {
        id: 2,
        title: '',
        item1: 'Triệt lông toàn thân',
        item2: 'Triệt lông tay',
        item3: 'Triệt râu quai nón',
        item4: 'Triệt lông bụng',
        item5: 'Triệt lông mày',
        link: '/phun-chan-may',
        linkItem1: '/',
        linkItem2: '/',
        linkItem3: '/',
        linkItem4: '/',
        linkItem5: '/',
        
      },
    ],
  },
  6: {
    width: '630px',
    marginLeft: '-240px',
    items: [
      {
        id: 7,
        title: 'GIẢM MỠ TOÀN THÂN',
        item1: 'Giảm mỡ bụng',
        item2: 'Giảm mỡ bắp tay',
        item3: 'Giảm mỡ lưng',
        item4: 'Giảm mỡ bụng dưới',
        item5: 'Giảm mỡ đùi',
        item6: 'Cấy chỉ giảm béo',
        link: '/phun-chan-may',
        linkItem1: '/',
        linkItem2: '/',
        linkItem3: '/',
        linkItem4: '/',
        linkItem5: '/',
        linkItem6: '/',
        
      },
    ],
  },
};
