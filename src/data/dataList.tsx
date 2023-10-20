interface NavItem {
  title: string;
  link: string;
  children?: NavItemChildren[] | undefined;
}

interface NavItemChildren {
  section: string;
  link: string;
}

export const navItems: NavItem[] = [
  {
    title: "Thông Tin Trò Chơi",
    link: "#",
    children: [
      {
        section: "Điệp Viên",
        link: "#",
      },
      {
        section: "Bản Đồ",
        link: "#",
      },
      {
        section: "Kho Vũ Khí",
        link: "#",
      },
    ],
  },
  {
    title: "Truyền Thông",
    link: "#",
  },
  {
    title: "Tin Tức",
    link: "#",
  },
  {
    title: "Bảng Xếp Hạng",
    link: "#",
  },
  {
    title: "Hỗ Trợ",
    link: "#",
    children: [
      {
        section: "Thông Số",
        link: "#",
      },
      {
        section: "Hỗ Trợ",
        link: "#",
      },
      {
        section: "Quy Chuẩn Cộng Đồng",
        link: "#",
      },
    ],
  },
  {
    title: "Mạng Xã Hội",
    link: "#",
    children: [
      {
        section: "Facebook",
        link: "#",
      },
      {
        section: "Youtube",
        link: "#",
      },
      {
        section: "Tiktok",
        link: "#",
      },
    ],
  },
  {
    title: "Góc Newbie",
    link: "#",
  },
  {
    title: "Sự Kiện",
    link: "#",
  },
  {
    title: "Thêm",
    link: "#",
  },
];

// ------------------------------------

export interface Award {
  title: string;
  votingLink: string;
  img: string;
  nominees: Nominee[];
}

export interface Nominee {
  name: string;
  img: string;
}

export const awards: Award[] = [
  {
    title: "SKIN FINISHER YÊU THÍCH NHẤT",
    votingLink: "#",
    img: "../img/cardBg--valorant.png",
    nominees: [
      {
        name: "GIAO ƯỚC 781-A",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "VŨ TRỤ SƠ KHAI",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "CHAMPION 2022",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "ION 2.0",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "GAIA BÁO THÙ",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "CƯỠNG ĐOẠT",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "CHRONOVOID",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "RGX 11Z PRO 2.0",
        img: "../img/cardBg--valorant.png",
      },
      ],
  },
  {
    title: "AGENT YÊU THÍCH NHẤT",
    votingLink: "#",
    img: "../img/cardBg--valorant.png",
    nominees: [
      {
        name: "Jett",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Skye",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Astra",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Chamber",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Fade",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Brimestone",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Sage",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Viper",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Reyna",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Breach",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Raze",
        img: "../img/cardBg--valorant.png",
      },      
      {
        name: "Yoru",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Kay/o",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Neon",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Harbor",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Phoenix",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Sova",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Cypher",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Killjoy",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Omen",
        img: "../img/cardBg--valorant.png",
      },
    ]
  },
  {
    title: "MAP YÊU THÍCH NHẤT",
    votingLink: "#",
    img: "../img/cardBg--valorant.png",
    nominees: [
      {
        name: "Fracture",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Split",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Breeze",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Bind",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Pearl",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Haven",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Icebox",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Ascent",
        img: "../img/cardBg--valorant.png",
      },
    ]
  },
  {
    title: "TUYỂN THỦ ESPORT ẤN TƯỢNG NHẤT",
    votingLink: "#",
    img: "../img/cardBg--valorant.png",
    nominees: [
      {
        name: "Yesican",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Nizzy",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Suka",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Redneval",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Nhatthong2k",
        img: "../img/cardBg--valorant.png",
      },
    ]
  },
  {
    title: "ĐỘI TUYỂN ESPORTS ẤN TƯỢNG NHẤT",
    votingLink: "#",
    img: "../img/cardBg--valorant.png",
    nominees: [
      {
        name: "Fancy United Esports",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "TTT",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "Big Baam",
        img: "../img/cardBg--valorant.png",
      },
    ]
  },
  {
    title: "CASTER ẤN TƯỢNG NHẤT",
    votingLink: "#",
    img: "../img/cardBg--valorant.png",
    nominees: [
      {
        name: "Heng",
        img: "../img/cardBg--valorant.png",
      },      
      {
        name: "Lynx",
        img: "../img/cardBg--valorant.png",
      },      
      {
        name: "Duy Đức",
        img: "../img/cardBg--valorant.png",
      },      
      {
        name: "Trọng Linh",
        img: "../img/cardBg--valorant.png",
      },
    ]
  },
  {
    title: "HOẠT ĐỘNG BẠN YÊU THÍCH",
    votingLink: "#",
    img: "../img/cardBg--valorant.png",
    nominees: [
      {
        name: "VALORANT CAMPUS",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "CHUNG KẾT UEC",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "PREDATOR FEST",
        img: "../img/cardBg--valorant.png",
      },
      {
        name: "TIKTOK CHALLENGE",
        img: "../img/cardBg--valorant.png",
      },
    ]
  },
  {
    title: "CONTENT CREATOR ẤN TƯỢNG NHẤT",
    votingLink: "#",
    img: "../img/cardBg--valorant.png",
    nominees: [
      {
        name: "SANGTRAAN",
        img: "../img/cardBg--valorant.png",
      },       {
        name: "THEANH96",
        img: "../img/cardBg--valorant.png",
      },       {
        name: "DAMIT2K",
        img: "../img/cardBg--valorant.png",
      },       {
        name: "TRICKSY",
        img: "../img/cardBg--valorant.png",
      },       {
        name: "REMIND",
        img: "../img/cardBg--valorant.png",
      },       {
        name: "LEOPARD",
        img: "../img/cardBg--valorant.png",
      },       {
        name: "OZYMO",
        img: "../img/cardBg--valorant.png",
      },       {
        name: "OCLEOP",
        img: "../img/cardBg--valorant.png",
      }, 
    ]
  }
]