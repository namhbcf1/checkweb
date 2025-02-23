// script.js

// ===== Dữ liệu linh kiện (Placeholder - CẦN THAY THẾ BẰNG DỮ LIỆU THẬT CỦA BẠN) =====
const cpuData = {
    "intel-core-i3-9100f": {
        name: "Intel Core i3-9100F",
        price: 500000,
        image: "images/intel-core-i3-9100f.jpg",
        brand: "Intel",
        warranty: "12 tháng",
        socket: "LGA1151-v2",
    },
    "intel-core-i3-10100f": {
        name: "Intel Core i3-10100F",
        price: 1100000,
        image: "images/intel-core-i3-10100f.jpg",
        brand: "Intel",
        warranty: "12 tháng",
        socket: "LGA1200",
    },
    "intel-core-i3-10105": {
        name: "Intel Core i3-10105",
        price: 1800000,
        image: "images/intel-core-i3-10105.jpg",
        brand: "Intel",
        warranty: "12 tháng",
        socket: "LGA1200",
    },
    "intel-core-i3-10105f": {
        name: "Intel Core i3-10105F",
        price: 1100000,
        image: "images/intel-core-i3-10105f.jpg",
        brand: "Intel",
        warranty: "12 tháng",
        socket: "LGA1200",
    },
    "intel-core-i3-12100F": {
        name: "Intel Core i3-12100F",
        price: 1350000,
        image: "images/intel-core-i3-12100F.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
    },
    "intel-core-i3-13100F": {
        name: "Intel Core i3-13100",
        price: 2100000,
        image: "images/intel-core-i3-13100.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
    },
    "intel-core-i3-14100F": {
        name: "Intel Core i3-13100",
        price: 2300000,
        image: "images/intel-core-i3-13100.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
    },
    "intel-core-i5-3470": {
        name: "Intel Core i5-3470 (Cũ)",
        price: 250000,
        image: "images/intel-core-i5-3470.jpg",
        brand: "Intel (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1155",
    },
    "intel-core-i5-4570": {
        name: "Intel Core i5-4570 (Cũ)",
        price: 400000,
        image: "images/intel-core-i5-4570.jpg",
        brand: "Intel (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1150",
    },
    "intel-core-i5-6500": {
        name: "Intel Core i5-6500 (Cũ)",
        price: 900000,
        image: "images/intel-core-i5-6500.jpg",
        brand: "Intel (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151",
    },
    "intel-core-i5-7400": {
        name: "Intel Core i5-7400 (Cũ)",
        price: 1100000,
        image: "images/intel-core-i5-7400.jpg",
        brand: "Intel (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151",
    },
    "intel-core-i5-8400": {
        name: "Intel Core i5-8400 (Cũ)",
        price: 900000,
        image: "images/intel-core-i5-8400.jpg",
        brand: "Intel (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151-v2",
    },
    "intel-core-i5-9400f": {
        name: "Intel Core i5-9400F",
        price: 1100000,
        image: "images/intel-core-i5-9400f.jpg",
        brand: "Intel",
        warranty: "12 tháng",
        socket: "LGA1151-v2",
    },
    "intel-core-i5-10400f": {
        name: "Intel Core i5-10400F",
        price: 1600000,
        image: "images/intel-core-i5-10400f.jpg",
        brand: "Intel",
        warranty: "12 tháng",
        socket: "LGA1200",
    },
    "intel-core-i5-11400f": {
        name: "Intel Core i5-11400F",
        price: 1700000,
        image: "images/intel-core-i5-11400f.jpg",
        brand: "Intel",
        warranty: "12 tháng",
        socket: "LGA1200",
    },
    "intel-core-i5-12400f": {
        name: "Intel Core i5-12400F",
        price: 2400000,
        image: "images/intel-core-i5-12400f.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
    },
    "intel-core-i5-12600f": {
        name: "Intel Core i5-12600KF",
        price: 3400000,
        image: "images/intel-core-i5-13400f.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
    },
    "intel-core-i5-13400f": {
        name: "Intel Core i5-13400F",
        price: 2800000,
        image: "images/intel-core-i5-13400f.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
    },
    "intel-core-i5-13600kf": {
        name: "Intel Core i5-13600KF",
        price: 4400000,
        image: "images/intel-core-i5-14600kf.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
    },
    "intel-core-i5-14600kf": {
        name: "Intel Core i5-14600KF",
        price: 4600000,
        image: "images/intel-core-i5-14600kf.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
    },
    "intel-core-i7-8700": {
        name: "Intel Core i7-8700 (Cũ)",
        price: 24000000,
        image: "images/intel-core-i7-8700.jpg",
        brand: "Intel (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151-v2",
    },
    "intel-core-i7-9700k": {
        name: "Intel Core i7-9700K (Cũ)",
        price: 2800000,
        image: "images/intel-core-i7-9700k.jpg",
        brand: "Intel (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151-v2",
    },
    "intel-core-i7-10700k": {
        name: "Intel Core i7-9700K (Cũ)",
        price: 4000000,
        image: "images/intel-core-i7-9700k.jpg",
        brand: "Intel (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151-v2",
    },
    "intel-core-i7-10700kF": {
        name: "Intel Core i7-9700K (Cũ)",
        price: 280000,
        image: "images/intel-core-i7-9700k.jpg",
        brand: "Intel (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151-v2",
    },
    "intel-core-i7-12700f": {
        name: "Intel Core i7-12700F",
        price: 8800000,
        image: "images/intel-core-i7-12700f.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
    },
    "intel-core-i7-13700k": {
        name: "Intel Core i7-13700K",
        price: 10500000,
        image: "images/intel-core-i7-13700k.jpg",
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
    },
    "amd-ryzen-5-3600": {
        name: "amd-ryzen-5-3600 (Cũ)",
        price: 1600000,
        image: "images/amd-ryzen-5-3600.jpg",
        brand: "AMD (Cũ)",
        warranty: "1 tháng",
        socket: "AM4",
    },
    "amd-ryzen-5-5500": {
        name: "amd-ryzen-5-5500",
        price: 1900000,
        image: "images/amd-ryzen-5-5500.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM4",
    },
    "amd-ryzen-5-5600": {
        name: "amd-ryzen-5-5600",
        price: 2400000,
        image: "images/5600.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM4",
    },
    "amd-ryzen-5-5600X": {
        name: "amd-ryzen-5-5600X",
        price: 2800000,
        image: "images/5600.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM4",
    },
    "amd-ryzen-5-5600G": {
        name: "amd-ryzen-5-5600G",
        price: 2800000,
        image: "images/5600G.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM4",
    },
    "amd-ryzen-5-7500f": {
        name: "amd-ryzen-5-7500f",
        price: 3800000,
        image: "images/amd-ryzen-5-7500f.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
    },
    "amd-ryzen-5-7600-tray": {
        name: "amd-ryzen-5-7600-tray",
        price: 4500000,
        image: "images/amd-ryzen-5-7600-tray.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
    },
    "amd-ryzen-5-7600x-tray": {
        name: "amd-ryzen-5-7600x-tray",
        price: 4800000,
        image: "images/amd-ryzen-5-7600x-tray.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
    },
    "amd-ryzen-7-3700x": {
        name: "amd-ryzen-7-3700x (Cũ)",
        price: 2500000,
        image: "images/amd-ryzen-7-3700x.jpg",
        brand: "AMD (Cũ)",
        warranty: "1 tháng",
        socket: "AM4",
    },
    "amd-ryzen-7-5700x": {
        name: "amd-ryzen-7-5700x",
        price: 3300000,
        image: "images/amd-ryzen-7-5700x.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM4",
    },
    "amd-ryzen-7-5700x3D": {
        name: "amd-ryzen-7-5700x3D",
        price: 5300000,
        image: "images/amd-ryzen-7-5700x3d.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM4",
    },
    "amd-ryzen-7-5800x": {
        name: "amd-ryzen-7-5800x",
        price: 3800000,
        image: "images/amd-ryzen-7-5800x.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM4",
    },
    "amd-ryzen-7-7700x": {
        name: "amd-ryzen-7-7700x",
        price: 6100000,
        image: "images/amd-ryzen-7-7700x.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
    },
    "amd-ryzen-7-7800x3d-tray": {
        name: "amd-ryzen-7-7800x3d-tray",
        price: 10390000,
        image: "images/amd-ryzen-7-7800x3d-tray.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
    },
    "amd-ryzen-7-7700-tray": {
        name: "amd-ryzen-7-7700-tray",
        price: 6299000,
        image: "images/amd-ryzen-7-7700-tray.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
    },
    "amd-ryzen-9-5900x": {
        name: "amd-ryzen-9-5900x (Cũ)",
        price: 5500000,
        image: "images/amd-ryzen-9-5900x.jpg",
        brand: "AMD (Cũ)",
        warranty: "1 tháng",
        socket: "AM4",
    },
    "amd-ryzen-9-5950x": {
        name: "amd-ryzen-9-5950x (Cũ)",
        price: 7500000,
        image: "images/amd-ryzen-9-5900x.jpg",
        brand: "AMD (Cũ)",
        warranty: "1 tháng",
        socket: "AM4",
    },
    "amd-ryzen-9-7900x": {
        name: "amd-ryzen-9-7900x",
        price: 8300000,
        image: "images/amd-ryzen-9-7900x.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
    },
    "amd-ryzen-9-7950x": {
        name: "amd-ryzen-9-7950x",
        price: 11600000,
        image: "images/amd-ryzen-9-7900x.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
    },
    "amd-ryzen-9-7950x3d": {
        name: "amd-ryzen-9-7950x3d",
        price: 12000000,
        image: "images/amd-ryzen-9-7950x3d.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
    },
    "amd-ryzen-9-7900-tray": {
        name: "amd-ryzen-9-7900-tray",
        price: 9130000,
        image: "images/amd-ryzen-9-7900-tray.jpg",
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
    },
};

const mainboardData = {
    "gigabyte-h61m-ds2": {
        name: "Gigabyte H61M-DS2 (LGA1155 - Cũ)",
        price: 400000,
        image: "images/gigabyte-h61m-ds2.jpg",
        brand: "Gigabyte (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1155",
        memoryType: "DDR3",
    },
    "asus-h81m-e": {
        name: "ASUS H81M-E (LGA1150 - Cũ)",
        price: 500000,
        image: "images/asus-h81m-e.jpg",
        brand: "ASUS (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1150",
        memoryType: "DDR3",
    },
    "gigabyte-h110m-ds2": {
        name: "Gigabyte H110M-DS2",
        price: 650000,
        image: "images/gigabyte-h110m-ds2.jpg",
        brand: "Gigabyte (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151",
        memoryType: "DDR4",
    },
    "asus-h310m-e": {
        name: "ASUS H310M-E",
        price: 700000,
        image: "images/asus-h310m-e.jpg",
        brand: "ASUS (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151-v2",
        memoryType: "DDR4",
    },
    "gigabyte-h410m-h-v2": {
        name: "Gigabyte H410M H V2",
        price: 800000,
        image: "images/gigabyte-h410m-h-v2.jpg",
        brand: "Gigabyte (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1200",
        memoryType: "DDR4",
    },
    "asus-prime-h510m-e": {
        name: "ASUS Prime H510M-E",
        price: 900000,
        image: "images/asus-prime-h510m-e.jpg",
        brand: "ASUS (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1200",
        memoryType: "DDR4",
    },
    "asus-prime-h610m-k-DDR4": {
        name: "ASUS PRIME H610M-K D4",
        price: 1600000,
        image: "images/asus-prime-h610m-k-DDR4.jpg",
        brand: "ASUS",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        buss: "3200",
    },
    "gigabyte-h610m-h-ddr4": {
        name: "GIGABYTE H610M H DDR4",
        price: 1790000,
        image: "images/gigabyte-h610m-h-ddr4.jpg",
        brand: "GIGABYTE",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        buss: "3200",
    },
    "msi-pro-h610m-b-ddr4": {
        name: "MSI PRO H610M-B DDR4",
        price: 1790000,
        image: "images/msi-pro-h610m-b-ddr4.jpg",
        brand: "MSI",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        buss: "3200",
    },
    "hnz-h610m-k-ddr4": {
        name: "Huananzhi H610M-K DDR4",
        price: 1350000,
        image: "images/hnz-h610m-k-ddr4.jpg",
        brand: "HNZ",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        buss: "3200",
    },
    "asus-b85m-g": {
        name: "ASUS B85M-G (LGA1150 - Cũ)",
        price: 500000,
        image: "images/asus-b85m-g.jpg",
        brand: "ASUS (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1150",
        memoryType: "DDR3",
    },
    "gigabyte-b150m-d3h": {
        name: "Gigabyte B150M-D3H",
        price: 6000000,
        image: "images/gigabyte-b150m-d3h.jpg",
        brand: "Gigabyte (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151",
        memoryType: "DDR4",
    },
    "asus-prime-b250m-a": {
        name: "ASUS Prime B250M-A",
        price: 7000000,
        image: "images/asus-prime-b250m-a.jpg",
        brand: "ASUS (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151",
        memoryType: "DDR4",
    },
    "gigabyte-b360m-d3h": {
        name: "Gigabyte B360M D3H",
        price: 1500000,
        image: "images/gigabyte-b360m-d3h.jpg",
        brand: "Gigabyte (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151-v2",
        memoryType: "DDR4",
    },
    "asus-prime-b365m-a": {
        name: "ASUS Prime B365M-A",
        price: 11000000,
        image: "images/asus-prime-b365m-a.jpg",
        brand: "ASUS (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1151-v2",
        memoryType: "DDR4",
    },
    "gigabyte-b460m-ds3h-ac": {
        name: "Gigabyte B460M DS3H AC",
        price: 1900000,
        image: "images/gigabyte-b460m-ds3h-ac.jpg",
        brand: "Gigabyte (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1200",
        memoryType: "DDR4",
    },
    "asus-prime-b560m-a": {
        name: "ASUS Prime B560M-A",
        price: 1700000,
        image: "images/asus-prime-b560m-a.jpg",
        brand: "ASUS (Cũ)",
        warranty: "1 tháng",
        socket: "LGA1200",
        memoryType: "DDR4",
    },
    "main-huananzhi-b760m-DDR4-den": {
        name: "Main Huananzhi B760M-DDR4 (Màu đen)",
        price: 1800000,
        image: "images/main-huananzhi-b760m-DDR4-den.jpg",
        brand: "Huananzhi",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        buss: "3200",
    },
    "mainboard-gigabyte-b760m-d-ddr4": {
        name: "Mainboard Gigabyte B760M D DDR4",
        price: 2390000,
        image: "images/mainboard-gigabyte-b760m-d-ddr4.jpg",
        brand: "Gigabyte",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        buss: "3200",
    },
    "mainboard-msi-pro-b760m-e-ddr4": {
        name: "Mainboard MSI PRO B760M-E DDR4",
        price: 2450000,
        image: "images/mainboard-msi-pro-b760m-e-ddr4.jpg",
        brand: "MSI",
        warranty: "36 tháng",
        socket: "B760",
        memoryType: "DDR4",
        buss: "3200",
    },
    "mainboard-asus-prime-b760m-k-ddr4": {
        name: "Mainboard Asus PRIME B760M-K DDR4",
        price: 2490000,
        image: "images/mainboard-asus-prime-b760m-k-ddr4.jpg",
        brand: "Asus",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        buss: "3200",
    },
    "mainboard-gigabyte-b760m-h-ddr4": {
        name: "Mainboard Gigabyte B760M H DDR4",
        price: 2699000,
        image: "images/mainboard-gigabyte-b760m-h-ddr4.jpg",
        brand: "Gigabyte",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        buss: "3200",
    },
    "mainboard-asrock-b760m-pro-rs-DDR4-wifi": {
        name: "Mainboard ASRock B760M Pro RS/DDR4 WIFI",
        price: 2990000,
        image: "images/mainboard-asrock-b760m-pro-rs-DDR4-wifi.jpg",
        brand: "ASRock",
        warranty: "36 tháng",
        socket: "LGA1700",
        memoryType: "DDR4",
        buss: "3200",
    },
    "gigabyte-b450m-ds3h": {
        name: "Gigabyte B450M DS3H V2 (AM4)",
        price: 1400000,
        image: "images/gigabyte-b450m-ds3h-v2.jpg",
        brand: "Gigabyte",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
    },
    "asrock-b450m-hdv": {
        name: "ASRock B450M-HDV (AM4)",
        price: 1400000,
        image: "images/asrock-b450m-hdv.jpg",
        brand: "ASRock",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
    },
    "jginyue-b450m-ti": {
        name: "JGinyue B450M-TI (AM4)",
        price: 1390000,
        image: "images/jginyue-b450m-ti.jpg",
        brand: "JGinyue",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
    },
    "gigabyte-b550m-aorus-elite": {
        name: "Gigabyte B550M AORUS ELITE (AM4)",
        price: 2550000,
        image: "images/gigabyte-b550m-aorus-elite.jpg",
        brand: "Gigabyte",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
    },
    "asrock-b550m-wifi": {
        name: "ASRock B550M WIFI (AM4)",
        price: 2399000,
        image: "images/asrock-b550m-wifi.jpg",
        brand: "ASRock",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
        buss: "3200",
    },
    "asrock-b550m-se": {
        name: "ASRock B550M SE (AM4)",
        price: 2299000,
        image: "images/asrock-b550m-se.jpg",
        brand: "ASRock",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
        buss: "3200",
    },
    "asrock-b550m-pro4": {
        name: "ASRock B550M PRO4 (AM4)",
        price: 2499000,
        image: "images/asrock-b550m-pro4.jpg",
        brand: "ASRock",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
        buss: "3200",
    },
    "gigabyte-b550m-gaming-wifi": {
        name: "Gigabyte B550M GAMING WIFI (AM4)",
        price: 2699000,
        image: "images/gigabyte-b550m-gaming-wifi.jpg",
        brand: "Gigabyte",
        warranty: "36 tháng",
        socket: "AM4",
        memoryType: "DDR4",
        buss: "3200",
    },
    "jginyue-b650m-d": {
        name: "DDR5 - MAINBOARD JGINYUE B650M-D (AM5)",
        price: 1900000,
        image: "images/jginyue-b650m-d.jpg",
        brand: "JGINYUE",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        buss: "6400",
    },
    "jginyue-b650m-pro": {
        name: "DDR5 - MAINBOARD JGINYUE B650M PRO (AM5)",
        price: 2100000,
        image: "images/jginyue-b650m-pro.jpg",
        brand: "JGinyue",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        buss: "5200",
    },
    "asrock-b650m-hdv-m2": {
        name: "DDR5 - MAINBOARD ASRock B650M-HDV/M.2 (AM5)",
        price: 2790000,
        image: "images/asrock-b650m-hdv-m2.jpg",
        brand: "ASRock",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        buss: "5600",
    },
    "msi-pro-b650m-p": {
        name: "DDR5 - MAINBOARD MSI PRO B650M-P (AM5)",
        price: 2990000,
        image: "images/msi-pro-b650m-p.jpg",
        brand: "MSI",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        buss: "5600",
    },
    "asus-tuf-gaming-b650m-e": {
        name: "DDR5 - MAINBOARD ASUS TUF GAMING B650M-E (AM5)",
        price: 3390000,
        image: "images/asus-tuf-gaming-b650m-e.jpg",
        brand: "ASUS",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        buss: "5600",
    },
    "gigabyte-b650m-gaming-plus-wifi": {
        name: "DDR5 - MAINBOARD GIGABYTE B650M GAMING PLUS WIFI (AM5)",
        price: 3290000,
        image: "images/gigabyte-b650m-gaming-plus-wifi.jpg",
        brand: "Gigabyte",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        buss: "5600",
    },
    "asus-tuf-gaming-b650m-e-wifi": {
        name: "DDR5 - MAINBOARD ASUS TUF GAMING B650M-E WIFI (AM5)",
        price: 3790000,
        image: "images/asus-tuf-gaming-b650m-e-wifi.jpg",
        brand: "ASUS",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        buss: "5600",
    },
    "msi-b650m-gaming-plus-wifi": {
        name: "DDR5 - MAINBOARD MSI B650M GAMING PLUS WIFI (AM5)",
        price: 3890000,
        image: "images/msi-b650m-gaming-plus-wifi.jpg",
        brand: "MSI",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        buss: "5600",
    },
    "gigabyte-b650m-aorus-elite": {
        name: "DDR5 - MAINBOARD GIGABYTE B650M AORUS ELITE (AM5)",
        price: 4290000,
        image: "images/gigabyte-b650m-aorus-elite.jpg",
        brand: "Gigabyte",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        buss: "5600",
    },
    "msi-pro-b650m-a-wifi": {
        name: "DDR5 - MAINBOARD MSI PRO B650M-A WIFI (AM5)",
        price: 4490000,
        image: "images/msi-pro-b650m-a-wifi.jpg",
        brand: "MSI",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        buss: "5600",
    },
    "asus-tuf-gaming-x670e-plus-wifi": {
        name: "DDR5 - MAINBOARD ASUS TUF GAMING X670E-PLUS WIFI (AM5)",
        price: 4490000,
        image: "images/asus-tuf-gaming-x670e-plus-wifi.jpg",
        brand: "ASUS",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        buss: "5600",
    },
    "asrock-x870-pro-rs-wifi": {
        name: "DDR5 - MAINBOARD ASRock X870 PRO RS WiFi (AM5)",
        price: 6890000,
        image: "images/asrock-x870-pro-rs-wifi.jpg",
        brand: "ASRock",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        buss: "5600",
    },
    "asus-rog-strix-x670e-a-gaming-wifi": {
        name: "DDR5 - MAINBOARD ASUS ROG STRIX X670E-A GAMING WIFI (AM5)",
        price: 10890000,
        image: "images/asus-rog-strix-x670e-a-gaming-wifi.jpg",
        brand: "ASUS",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        buss: "5600",
    },
    "asus-rog-strix-x670e-f-gaming-wifi": {
        name: "DDR5 - MAINBOARD ASUS ROG STRIX X670E-F GAMING WIFI (AM5)",
        price: 10990000,
        image: "images/asus-rog-strix-x670e-f-gaming-wifi.jpg",
        brand: "ASUS",
        warranty: "36 tháng",
        socket: "AM5",
        memoryType: "DDR5",
        buss: "5600",
    },
};

const vgaData = {
    "gtx-1050ti-4gb-gddr5-colorful-like-new": {
        name: "1050Ti 4GB GDDR5 ASUS/GIGA/MSI",
        price: 1590000,
        image: "images/1050ti-4gb.jpg",
        brand: "COLORFUL",
        warranty: "3 tháng",
    },
    "gtx-1060-3gb-gddr5-msi-gaming-cu": {
        name: "1060 3GB GDDR5 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 1800000,
        image: "images/1060-3gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
    },
    "gtx-1060-6gb-gddr5-msi-gaming-cu": {
        name: "1060 6GB GDDR5 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 2100000,
        image: "images/1060-6gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
    },
    "gtx-1070-8gb-gddr5-msi-gaming-cu-99": {
        name: "1070 8GB GDDR5 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 2800000,
        image: "images/1070-8gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
    },
    "gtx-1070ti-8gb-gddr5-msi-gaming-cu-like-new": {
        name: "1070Ti 8GB GDDR5 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 3000000,
        image: "images/1070ti-8gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
    },
    "gtx-1660-super-6gb-gddr6-gigabyte-gaming-cu-99": {
        name: "1660 Super 6GB GDDR6 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 2900000,
        image: "images/1660-super-6gb-gigabyte.jpg",
        brand: "GIGABYTE",
        warranty: "3 tháng",
    },
    "-rtx-2060-6gb-gddr6-msi-gaming-cu-99": {
        name: "RTX 2060 6GB GDDR6 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 3400000,
        image: "images/rtx-2060-6gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
    },
    "rtx-2070-super-8gb-gddr6-msi-gaming-cu-99": {
        name: "RTX 2070 Super 8GB GDDR6 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 4500000,
        image: "images/rtx-2070-super-8gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
    },
    "rtx-3070-8gb-gddr6-msi-gaming-cu-99": {
        name: "RTX 3070 8GB GDDR6 /GIGA/MSI/ASUS GAMING (Cũ)",
        price: 5900000,
        image: "images/rtx-3070-8gb-msi.jpg",
        brand: "msi",
        warranty: "3 tháng",
    },
    "rtx-3070ti-8gb-gddr6x-asus-rog-cu-99": {
        name: "RTX 3070Ti 8GB GDDR6X /GIGA/MSI/ASUS (Cũ)",
        price: 7500000,
        image: "images/rtx-3070ti-8gb-asus.jpg",
        brand: "ASUS",
        warranty: "3 tháng",
    },
    "colorful--rtx-2060-super-8gb": {
        name: "RTX 2060 Super 8GB GDDR/GIGA/MSI/ASUS GAMING (Cũ)",
        price: 3900000,
        image: "images/colorful--rtx-2060-super-8gb.jpg",
        brand: "Colorful",
        warranty: "3 tháng",
    },
    "asl-rtx-3050-6gb": {
        name: "ASL RTX 3050 6GB GDDR6 (NEW)",
        price: 4250000,
        image: "images/asl-rtx-3050-6gb.jpg",
        brand: "ASL",
        warranty: "36 tháng",
    },
    "pny-rtx-3050-6gb-verto": {
        name: "PNY RTX 3050 6GB VERTO™ Dual Fan (NEW)",
        price: 4350000,
        image: "images/pny-rtx-3050-6gb-verto.jpg",
        brand: "PNY",
        warranty: "36 tháng",
    },
    "gigabyte-rtx-3060-gaming-oc-12gb": {
        name: "Gigabyte RTX 3060 GAMING OC 12GB (NEW)",
        price: 7290000,
        image: "images/gigabyte-rtx-3060-gaming-oc-12gb.jpg",
        brand: "Gigabyte",
        warranty: "36 tháng",
    },
    "inno3d-rtx-3060-twin-x2-12gb": {
        name: "Inno3D RTX 3060 TWIN X2 12GB GDDR6 (NEW)",
        price: 7250000,
        image: "images/inno3d-rtx-3060-twin-x2-12gb.jpg",
        brand: "Inno3D",
        warranty: "36 tháng",
    },
    "colorful-igame-rtx-3060-ultra-w-oc-12g-v": {
        name: "Colorful iGame RTX 3060 Ultra W OC 12G-V (NEW)",
        price: 7990000,
        image: "images/colorful-igame-rtx-3060-ultra-w-oc-12g-v.jpg",
        brand: "Colorful",
        warranty: "36 tháng",
    },
    "msi-rtx-4060-ti-16gb-amp": {
        name: "msi RTX 4060 TI 16GB AMP GDDR6 (NEW)",
        price: 10750000,
        image: "images/msi-rtx-4060-ti-16gb-amp.jpg",
        brand: "msi",
        warranty: "36 tháng",
    },
    "asus-dual-rtx-4060-oc-8gb": {
        name: "ASUS DUAL RTX 4060 OC 8GB GDDR6 (NEW)",
        price: 7250000,
        image: "images/asus-dual-rtx-4060-oc-8gb.jpg",
        brand: "ASUS",
        warranty: "36 tháng",
    },
    "msi-rtx-4070-ti-super-16g-ventus-3x-oc": {
        name: "MSI RTX 4070 TI SUPER 16G VENTUS 3X OC (NEW)",
        price: 22150000,
        image: "images/msi-rtx-4070-ti-super-16g-ventus-3x-oc.jpg",
        brand: "MSI",
        warranty: "36 tháng",
    },
    "inno3d-rtx-4070-ti-super-x3-oc-16gb": {
        name: "Inno3D RTX 4070 Ti SUPER X3 OC 16GB (NEW)",
        price: 21400000,
        image: "images/inno3d-rtx-4070-ti-super-x3-oc-16gb.jpg",
        brand: "Inno3D",
        warranty: "36 tháng",
    },
    "msi-rtx-5080-16g-ventus-3x-oc-plus": {
        name: "MSI RTX 5080 16G VENTUS 3X OC PLUS (NEW)",
        price: 38900000,
        image: "images/msi-rtx-5080-16g-ventus-3x-oc-plus.jpg",
        brand: "MSI",
        warranty: "36 tháng",
    },
};

const ramData = {
    // DDR5 RAM
    "ram-corsair-vengeance-16gb-ddr5-5200": {
        name: "RAM Corsair Vengeance Black Heatspreader 16GB (Bus 5200)",
        price: 1200000,
        brand: "Corsair",
        type: "DDR5",
        speed: "5200MHz",
        size: "16GB",
        warranty: "36 tháng",
        image: "images/ram-corsair-vengeance-16gb-ddr5-5200.jpg"
    },
    "ram-tridentz-16gb-ddr5-6000": {
        name: "RAM TridentZ 16GB DDR5 (Bus 6000) ",
        price: 1500000,
        brand: "TridentZ",
        type: "DDR5",
        speed: "6000MHz",
        size: "16GB",
        warranty: "36 tháng",
        image: "images/ram-tridentz-16gb-ddr5-6000.jpg"
    },
    "ram-tridentz-32gb-ddr5-6000": {
        name: "RAM TridentZ 16GB DDR5 (Bus 6000) ",
        price: 2900000,
        brand: "TridentZ",
        type: "DDR5",
        speed: "6000MHz",
        size: "32GB",
        warranty: "36 tháng",
        image: "images/ram-tridentz-32gb-ddr5-6000.jpg"
    },
    "ram-adata-xpg-32gb-ddr5-6000": {
        name: "RAM Adata XPG 32GB DDR5 (Bus 6000)",
        price: 2450000,
        brand: "Adata",
        type: "DDR5",
        speed: "6000MHz",
        size: "32GB",
        warranty: "36 tháng",
        image: "images/ram-adata-xpg-32gb-ddr5-6000.jpg"
    },

    // DDR4 RAM
    "sstc-ddr4-3200mhz-16gb": {
        name: "RAM SSTC 16GB DDR4 3200MHz",
        price: 700000,
        image: "images/sstc-ddr4-3200mhz-16gb.jpg",
        brand: "SSTC",
        warranty: "36 tháng",
        type: "DDR4",
        speed: "3200MHz"
    },

    "ram-corsair-vengeance-16gb-ddr4-3200": {
        name: "RAM Corsair Vengeance LPX 16GB DDR4 (Bus 3200)",
        price: 900000,
        brand: "Corsair",
        type: "DDR4",
        speed: "3200MHz",
        size: "16GB",
        warranty: "36 tháng",
        image: "images/ram-corsair-vengeance-16gb-ddr4-3200.jpg"
    },
    "ram-kingston-hyperx-16gb-ddr4-3200": {
        name: "RAM Kingston HyperX Fury 16GB DDR4 (Bus 3200)",
        price: 950000,
        brand: "Kingston",
        type: "DDR4",
        speed: "3200MHz",
        size: "16GB",
        warranty: "36 tháng",
        image: "images/ram-kingston-hyperx-16gb-ddr4-3200.jpg"
    },
    "ram-adata-xpg-16gb-ddr4-3200": {
        name: "RAM Adata XPG 16GB DDR4 (Bus 3200)",
        price: 880000,
        brand: "Adata",
        type: "DDR4",
        speed: "3200MHz",
        size: "16GB",
        warranty: "36 tháng",
        image: "images/ram-adata-xpg-16gb-ddr4-3200.jpg"
    },
    "ram-tridentz-16gb-ddr4-3600": {
        name: "RAM G.Skill TridentZ 16GB DDR4 (Bus 3600)",
        price: 1100000,
        brand: "G.Skill",
        type: "DDR4",
        speed: "3600MHz",
        size: "16GB",
        warranty: "36 tháng",
        image: "images/ram-tridentz-16gb-ddr4-3600.jpg"
    },
};
const ssdData = {
    "sstc-oceanic-whitetip-256gb": {
        name: "SSD SSTC Oceanic Whitetip NVMe M.2 MAX-III 256GB",
        price: 599000,
        image: "images/sstc-oceanic-whitetip-256gb.jpg",
        brand: "SSTC",
        warranty: "36 tháng",
    },
    "sstc-oceanic-whitetip-512gb": {
        name: "SSD SSTC Oceanic Whitetip NVMe M.2 MAX-III 512GB",
        price: 899000,
        image: "images/sstc-oceanic-whitetip-512gb.jpg",
        brand: "SSTC",
        warranty: "36 tháng",
    },
    "samsung-990-evoplus-1tb": {
        name: "SSD Samsung 990 EVO PLUS 1TB M.2 NVMe PCIe Gen4.0 x4",
        price: 2230000,
        image: "images/samsung-990-evoplus-1tb.jpg",
        brand: "Samsung",
        warranty: "36 tháng",
    },
    "kingston-nv3-500gb": {
        name: "SSD Kingston NV3 500GB PCIe 4.0 x4 M.2 NVMe",
        price: 1289000,
        image: "images/kingston-nv3-500gb.jpg",
        brand: "Kingston",
        warranty: "36 tháng",
    },
    "samsung-980-500gb": {
        name: "SSD Samsung 980 500GB M.2 NVMe PCIe Gen 3.0 x4",
        price: 1479000,
        image: "images/samsung-980-500gb.jpg",
        brand: "Samsung",
        warranty: "36 tháng",
    },
    "kingston-nv3-1tb": {
        name: "SSD Kingston NV3 1TB PCIe 4.0 x4 M.2 NVMe",
        price: 1829000,
        image: "images/kingston-nv3-1tb.jpg",
        brand: "Kingston",
        warranty: "36 tháng",
    },
    "samsung-980-1tb": {
        name: "SSD Samsung 980 1TB M.2 NVMe PCIe Gen4.0 x4",
        price: 2000000,
        image: "images/samsung-980-1tb.jpg",
        brand: "Samsung",
        warranty: "36 tháng",
    },
    "samsung-pm9a1-512gb": {
        name: "SSD Gen 4 Samsung PM9A1 NVMe 512GB OEM 980 Pro",
        price: 1450000,
        image: "images/samsung-pm9a1-512gb.jpg",
        brand: "Samsung",
        warranty: "36 tháng",
    },
    "kingston-nv2-500gb": {
        name: "SSD Kingston NV2 500GB PCIe Gen4",
        price: 895000,
        image: "images/kingston-nv2-500gb.jpg",
        brand: "Kingston",
        warranty: "36 tháng",
    }
};


const psuData = {
    "vsp-elite-dt660-650w": {
        name: "Nguồn VSP Elite DT660 650W",
        price: 750000,
        image: "images/vsp-elite-dt660-650w.jpg",
        brand: "VSP",
        warranty: "36 tháng",
    },
    "vsp-vgp750brn-80plus-bronze-750w": {
        name: "Nguồn VSP VGP750BRN 80Plus Bronze 750W",
        price: 1100000,
        image: "images/vsp-vgp750brn-80plus-bronze-750w.jpg",
        brand: "VSP",
        warranty: "36 tháng",
    },
    "nguon-corsair-cv750": {
        name: "Nguồn Máy Tính Corsair CV750 - 750W 80 Plus",
        price: 1690000,
        image: "images/nguon-corsair-cv750.jpg",
        brand: "Corsair",
        warranty: "36 tháng",
    },
    "nguon-thermalright-tg-1000": {
        name: "Nguồn Máy Tính Thermalright TG-1000 1000W ATX 3.0 (80 Plus Gold)",
        price: 2400000,
        image: "images/nguon-thermalright-tg-1000.jpg",
        brand: "Thermalright",
        warranty: "36 tháng",
    },
    "nguon-corsair-rm850e": {
        name: "Nguồn Máy Tính Corsair RM850e ATX 3.0 850W (80 Plus Gold)",
        price: 1800000,
        image: "images/nguon-corsair-rm850e.jpg",
        brand: "Corsair",
        warranty: "36 tháng",
    },
    "nguon-centaur-750w-80-plus": {
        name: "Nguồn Centaur 750W 80 Plus",
        price: 899000,
        image: "images/nguon-centaur-750w-80-plus.jpg",
        brand: "Khác",
        warranty: "36 tháng",
    }
};

const caseData = {
    "xigmatek-nyx-air-3f": {
        name: "Xigmatek NYX AIR 3F",
        price: 600000,
        image: "images/xigmatek-nyx-air-3f.jpg",
        brand: "Xigmatek",
        warranty: "12 tháng",
    },
    "xigmatek-cubi-m-black": {
        name: "Xigmatek Cubi M Black",
        price: 799000,
        image: "images/xigmatek-cubi-m-black.jpg",
        brand: "Xigmatek",
        warranty: "12 tháng",
    },
    "xigmatek-cubi-m-nano-m-atx-black": {
        name: "Xigmatek Cubi M Nano M-ATX Black",
        price: 600000,
        image: "images/xigmatek-cubi-m-nano-m-atx-black.jpg",
        brand: "Xigmatek",
        warranty: "12 tháng",
    },
    "xigmatek-gemini-m-no-fan": {
        name: "Xigmatek Gemini M No Fan",
        price: 500000,
        image: "images/xigmatek-gemini-m-no-fan.jpg",
        brand: "Xigmatek",
        warranty: "12 tháng",
    },
    "kenoo-esport-mk400": {
        name: "Vỏ Case Máy Tính KENOO ESPORT MK400 (MATX, Case Bể Cá, Kính Cong)",
        price: 699000,
        image: "images/kenoo-esport-mk400.jpg",
        brand: "KENOO",
        warranty: "12 tháng",
    },
    "gaming-start-ga3": {
        name: "Vỏ Case 2 Mặt Kính Cường Lực Gaming Start GA3",
        price: 360000,
        image: "images/gaming-start-ga3fg.jpg",
        brand: "Gaming Start",
        warranty: "12 tháng",
    },
    "gaming-start-ga": {
        name: "Vỏ Case Gaming Start GA",
        price: 300000,
        image: "images/gaming-start-ga3f.jpg",
        brand: "Gaming Start",
        warranty: "12 tháng",
    }
};

const cpuCoolerData = {
    "jonsbo-cr-1000-rgb": {
        name: "Jonsbo CR-1000 RGB",
        price: 330000,
        image: "images/jonsbo-cr-1000-rgb.jpg",
        brand: "Jonsbo",
        warranty: "12 tháng",
    },
    "ct-air-01": {
        name: "CT-Air 01",
        price: 290000,
        image: "images/ct-air-01.jpg",
        brand: "Cooler Master",
        warranty: "12 tháng",
    },
    "thermalright-frost-spirit-140": {
        name: "Thermalright Frost Spirit 140",
        price: 1100000,
        image: "images/thermalright-frost-spirit-140.jpg",
        brand: "Thermalright",
        warranty: "12 tháng",
    },
    "thermalright-peerless-assassin-120-se-argb": {
        name: "Thermalright Peerless Assassin 120 SE ARGB",
        price: 740000,
        image: "images/thermalright-peerless-assassin-120-se-argb.jpg",
        brand: "Thermalright",
        warranty: "12 tháng",
    },
    "thermalright-aqua-elite-360-argb-black": {
        name: "Thermalright Aqua Elite 360 ARGB Black",
        price: 1400000,
        image: "images/thermalright-aqua-elite-360-argb-black.jpg",
        brand: "Thermalright",
        warranty: "12 tháng",
    },
    "thermalright-frozen-warframe-360-se-white-argb": {
        name: "Thermalright Frozen Warframe 360 SE White ARGB",
        price: 2100000,
        image: "images/thermalright-frozen-warframe-360-se-white-argb.jpg",
        brand: "Thermalright",
        warranty: "12 tháng",
    },
    "thermalright-frozen-warframe-360-se-black-argb": {
        name: "Thermalright Frozen Warframe 360 SE Black ARGB",
        price: 2050000,
        image: "images/thermalright-frozen-warframe-360-se-white-argb.jpg",
        brand: "Thermalright",
        warranty: "12 tháng",
    },
    "thermalright-frozen-warframe-240-se-white-argb": {
        name: "Thermalright Frozen Warframe 240 SE White ARGB",
        price: 1600000,
        image: "images/thermalright-frozen-warframe-240-se-white-argb.jpg",
        brand: "Thermalright",
        warranty: "12 tháng",
    },
    "thermalright-frozen-warframe-240-se-black-argb": {
        name: "Thermalright Frozen Warframe 240 SE Black ARGB",
        price: 1550000,
        image: "images/thermalright-frozen-warframe-240-se-black-argb.jpg",
        brand: "Thermalright",
        warranty: "12 tháng",
    }
};

const hddData = {
    "wd-blue-500gb": {
        name: "Ổ cứng HDD Western Digital Blue 500GB 3.5\" 7200RPM 16MB",
        price: 260000,
        image: "images/wd-blue-500gb.jpg",
        brand: "Western Digital",
        warranty: "6 tháng",
    },
    "wd-blue-1000gb": {
        name: "Ổ cứng HDD Western Digital Blue 1000GB 3.5\" 7200RPM 16MB",
        price: 600000,
        image: "images/wd-blue-1000gb.jpg",
        brand: "Western Digital",
        warranty: "6 tháng",
    },
    "wd-blue-2000gb": {
        name: "Ổ cứng HDD Western Digital Blue 2000GB 3.5\" 7200RPM 16MB",
        price: 1000000,
        image: "images/wd-blue-2000gb.jpg",
        brand: "Western Digital",
        warranty: "6 tháng",
    },
    "wd-blue-1tb": {
        name: "Ổ cứng HDD WD Blue 1TB 3.5 inch, 7200RPM, SATA, 64MB Cache",
        price: 1330000,
        image: "images/wd-blue-1tb.jpg",
        brand: "Western Digital",
        warranty: "24 tháng",
    },
    "seagate-skyhawk-4tb": {
        name: "Ổ cứng HDD Seagate SkyHawk 4TB 3.5 inch, 5400RPM, SATA, 256MB Cache",
        price: 2650000,
        image: "images/seagate-skyhawk-4tb.jpg",
        brand: "Seagate",
        warranty: "24 tháng",
    },
    "wd-blue-2tb": {
        name: "Ổ cứng HDD WD Blue 2TB 3.5 inch, 7200RPM, SATA, 256MB Cache",
        price: 1590000,
        image: "images/wd-blue-2tb.jpg",
        brand: "Western Digital",
        warranty: "24 tháng",
    }
};

const monitorData = {
    "duan-ip25f180": {
        name: "Màn hình DUAN IP25F180 25 inch IPS 180Hz 1ms",
        price: 2200000,
        image: "images/duan-ip25f180.jpg",
        brand: "DUAN",
        warranty: "24 tháng",
    },
    "duan-da272qp": {
        name: "Màn hình DUAN 27 inch 2K 100Hz DA272QP IPS",
        price: 3200000,
        image: "images/duan-da272qp.jpg",
        brand: "DUAN",
        warranty: "24 tháng",
    },
    "duan-dt-ip2409s": {
        name: "Màn hình DUAN DT-IP2409S 23.8 inch IPS Full HD 100Hz 1ms",
        price: 1600000,
        image: "images/duan-dt-ip2409s.jpg",
        brand: "DUAN",
        warranty: "24 tháng",
    },
    "duan-ip278s": {
        name: "Màn hình DUAN IP278S 27 inch 180Hz IPS 1ms",
        price: 2900000,
        image: "images/duan-ip278s.jpg",
        brand: "DUAN",
        warranty: "24 tháng",
    },
    "duan-dt-v2218s": {
        name: "Màn hình DUAN 22 inch DT-V2218S 100Hz 1ms VA FHD",
        price: 1400000,
        image: "images/duan-dt-v2218s.jpg",
        brand: "DUAN",
        warranty: "24 tháng",
    },
    "dell-ultrasharp-u2424h": {
        name: "Màn hình Dell UltraSharp U2424H 23.8 inch FHD IPS 120Hz 5ms",
        price: 5500000,
        image: "images/dell-ultrasharp-u2424h.jpg",
        brand: "Dell",
        warranty: "36 tháng",
    },
    "dell-s2725h": {
        name: "Màn hình Dell S2725H 27 inch FHD IPS 100Hz 4ms loa",
        price: 4300000,
        image: "images/dell-s2725h.jpg",
        brand: "Dell",
        warranty: "36 tháng",
    },
    "asus-proart-pa248qv": {
        name: "Màn hình ASUS ProArt PA248QV 24 inch WUXGA IPS 75Hz 5ms",
        price: 4700000,
        image: "images/asus-proart-pa248qv.jpg",
        brand: "ASUS",
        warranty: "36 tháng",
    },
    "samsung-odyssey-g4-ls25bg400eexxv": {
        name: "Màn hình Gaming Samsung Odyssey G4 LS25BG400EEXXV 25 inch FHD IPS 240Hz",
        price: 4500000,
        image: "images/samsung-odyssey-g4-ls25bg400eexxv.jpg",
        brand: "Samsung",
        warranty: "24 tháng",
    },
    "lg-ultragear-27gs75q-b": {
        name: "Màn hình Gaming LG UltraGear 27GS75Q-B 27 inch IPS 2K 200Hz 1ms",
        price: 6500000,
        image: "images/lg-ultragear-27gs75q-b.jpg",
        brand: "LG",
        warranty: "24 tháng",
    },
    "lg-ultragear-24gs50f-b": {
        name: "Màn hình LG UltraGear 24GS50F-B Gaming 23.7 inch VA FHD 180Hz 1ms",
        price: 2500000,
        image: "images/lg-ultragear-24gs50f-b.jpg",
        brand: "LG",
        warranty: "24 tháng",
    }
};
document.getElementById('cpu-type').addEventListener('change', function () {
    const selectedCpuType = this.value; // Lấy giá trị được chọn (Intel hoặc AMD)
    const cpuSelect = document.getElementById('cpu'); // Dropdown chọn CPU

    // Xóa tất cả các tùy chọn hiện tại
    cpuSelect.innerHTML = '<option value="" disabled selected>Chọn CPU</option>';

    // Thêm các tùy chọn CPU tương ứng
    if (selectedCpuType === "Intel") {
        cpuSelect.innerHTML += `
            <option value="intel-core-i3-9100f">Intel Core i3-9100F</option>
<option value="intel-core-i3-10100f">Intel Core i3-10100F</option>
<option value="intel-core-i3-10105">Intel Core i3-10105</option>
<option value="intel-core-i3-10105f">Intel Core i3-10105F</option>
<option value="intel-core-i3-12100F">Intel Core i3-12100F</option>
<option value="intel-core-i3-13100F">Intel Core i3-13100</option>
<option value="intel-core-i3-14100F">Intel Core i3-13100</option>
<option value="intel-core-i5-3470">Intel Core i5-3470 (Cũ)</option>
<option value="intel-core-i5-4570">Intel Core i5-4570 (Cũ)</option>
<option value="intel-core-i5-6500">Intel Core i5-6500 (Cũ)</option>
<option value="intel-core-i5-7400">Intel Core i5-7400 (Cũ)</option>
<option value="intel-core-i5-8400">Intel Core i5-8400 (Cũ)</option>
<option value="intel-core-i5-9400f">Intel Core i5-9400F</option>
<option value="intel-core-i5-10400f">Intel Core i5-10400F</option>
<option value="intel-core-i5-11400f">Intel Core i5-11400F</option>
<option value="intel-core-i5-12400f">Intel Core i5-12400F</option>
<option value="intel-core-i5-12600f">Intel Core i5-12600KF</option>
<option value="intel-core-i5-13400f">Intel Core i5-13400F</option>
<option value="intel-core-i5-13600kf">Intel Core i5-13600KF</option>
<option value="intel-core-i5-14600kf">Intel Core i5-14600KF</option>
<option value="intel-core-i7-8700">Intel Core i7-8700 (Cũ)</option>
<option value="intel-core-i7-9700k">Intel Core i7-9700K (Cũ)</option>
<option value="intel-core-i7-10700k">Intel Core i7-10700K (Cũ)</option>
<option value="intel-core-i7-10700kF">Intel Core i7-10700KF (Cũ)</option>
<option value="intel-core-i7-12700f">Intel Core i7-12700F</option>
<option value="intel-core-i7-13700k">Intel Core i7-13700K</option>

        `;
    } else if (selectedCpuType === "Amd") {
        cpuSelect.innerHTML += `
            <option value="amd-ryzen-5-3600">AMD Ryzen 5 3600 (Cũ)</option>
<option value="amd-ryzen-5-5500">AMD Ryzen 5 5500</option>
<option value="amd-ryzen-5-5600">AMD Ryzen 5 5600</option>
<option value="amd-ryzen-5-5600X">AMD Ryzen 5 5600X</option>
<option value="amd-ryzen-5-5600G">AMD Ryzen 5 5600G</option>
<option value="amd-ryzen-5-7500f">AMD Ryzen 5 7500F</option>
<option value="amd-ryzen-5-7600-tray">AMD Ryzen 5 7600 (Tray)</option>
<option value="amd-ryzen-5-7600x-tray">AMD Ryzen 5 7600X (Tray)</option>
<option value="amd-ryzen-7-3700x">AMD Ryzen 7 3700X (Cũ)</option>
<option value="amd-ryzen-7-5700x">AMD Ryzen 7 5700X</option>
<option value="amd-ryzen-7-5700x3D">AMD Ryzen 7 5700X3D</option>
<option value="amd-ryzen-7-5800x">AMD Ryzen 7 5800X</option>
<option value="amd-ryzen-7-7700x">AMD Ryzen 7 7700X</option>
<option value="amd-ryzen-7-7800x3d-tray">AMD Ryzen 7 7800X3D (Tray)</option>
<option value="amd-ryzen-7-7700-tray">AMD Ryzen 7 7700 (Tray)</option>
<option value="amd-ryzen-9-5900x">AMD Ryzen 9 5900X (Cũ)</option>
<option value="amd-ryzen-9-5950x">AMD Ryzen 9 5950X (Cũ)</option>
<option value="amd-ryzen-9-7900x">AMD Ryzen 9 7900X</option>
<option value="amd-ryzen-9-7950x">AMD Ryzen 9 7950X</option>
<option value="amd-ryzen-9-7950x3d">AMD Ryzen 9 7950X3D</option>
<option value="amd-ryzen-9-7900-tray">AMD Ryzen 9 7900 (Tray)</option>
        `;
    }
});


// Khai báo biến toàn cục
let isAutoSelecting = false;

// Giả sử các dữ liệu components đã được định nghĩa đầy đủ
const components = {
    cpu: cpuData,
    mainboard: mainboardData,
    vga: vgaData,
    ram: ramData,
    ssd: ssdData,
    psu: psuData,
    case: caseData,
    'cpu-cooler': cpuCoolerData,
    hdd: hddData,
    monitor: monitorData
};

// Cấu hình global
const intelBudgetConfigs = {
    '2m-3m': {
        cpu: "intel-core-i3-9100f",
        mainboard: "asus-h310m-e",
        vga: "gtx-1060-6gb-gddr5-msi-gaming-cu",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-650w"
    },
    '3m-4m': {
        cpu: "intel-core-i5-9400f",
        mainboard: "asus-prime-b365m-a",
        vga: "gtx-1660-super-6gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-650w"
    },
    '4m-5m': {
        cpu: "intel-core-i5-10400f",
        mainboard: "gigabyte-h410m-h-v2",
        vga: "rtx-2060-6gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-650w"
    },
    '5m-6m': {
        cpu: "intel-core-i5-11400f",
        mainboard: "asus-prime-h510m-e",
        vga: "rtx-3060-12gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-650w"
    },
    '6m-7m': {
        cpu: "intel-core-i5-11600k",
        mainboard: "asus-prime-h610m-k-DDR4",
        vga: "rtx-3060-ti-8gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-650w"
    },
    '7m-8m': {
        cpu: "intel-core-i7-11700f",
        mainboard: "gigabyte-h610m-h-ddr4",
        vga: "rtx-3070-8gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-650w"
    },
    '8m-9m': {
        cpu: "intel-core-i7-11700k",
        mainboard: "msi-pro-h610m-b-ddr4",
        vga: "rtx-3070-ti-8gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-650w"
    },
    '9m-10m': {
        cpu: "intel-core-i7-12700f",
        mainboard: "hnz-h610m-k-ddr4",
        vga: "rtx-3080-10gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-650w"
    },
    '10m-11m': {
        cpu: "intel-core-i7-12700k",
        mainboard: "mainboard-gigabyte-b760m-d-ddr4",
        vga: "rtx-3080-ti-12gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-650w"
    },
    '11m-12m': {
        cpu: "intel-core-i9-12900f",
        mainboard: "mainboard-msi-pro-b760m-e-ddr4",
        vga: "rtx-3090-24gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-650w"
    },
    '12m-13m': {
        cpu: "intel-core-i9-12900k",
        mainboard: "mainboard-asus-prime-b760m-k-ddr4",
        vga: "rtx-3090-ti-24gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-650w"
    },
    '13m-14m': {
        cpu: "intel-core-i9-13900f",
        mainboard: "mainboard-gigabyte-b760m-h-ddr4",
        vga: "rtx-4090-24gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-650w"
    },
    '14m-15m': {
        cpu: "intel-core-i9-13900k",
        mainboard: "mainboard-asrock-b760m-pro-rs-DDR4-wifi",
        vga: "rtx-4090-ti-24gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-650w"
    }
};

const amdBudgetConfigs = {
    '2m-3m': {
        cpu: "amd-ryzen-3-3200g",
        mainboard: "gigabyte-b450m-ds3h",
        vga: "gtx-1050-ti-4gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-450w"
    },
    '3m-4m': {
        cpu: "amd-ryzen-5-3400g",
        mainboard: "asrock-b450m-hdv",
        vga: "gtx-1650-4gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-450w"
    },
    '4m-5m': {
        cpu: "amd-ryzen-5-3600",
        mainboard: "jginyue-b450m-ti",
        vga: "gtx-1660-super-6gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-450w"
    },
    '5m-6m': {
        cpu: "amd-ryzen-5-5600x",
        mainboard: "gigabyte-b550m-aorus-elite",
        vga: "rtx-3060-12gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-450w"
    },
    '6m-7m': {
        cpu: "amd-ryzen-5-5600x",
        mainboard: "asrock-b550m-wifi",
        vga: "rtx-3060-ti-8gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-450w"
    },
    '7m-8m': {
        cpu: "amd-ryzen-7-5800x",
        mainboard: "asrock-b550m-pro4",
        vga: "rtx-3070-8gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-450w"
    },
    '8m-9m': {
        cpu: "amd-ryzen-7-5800x",
        mainboard: "gigabyte-b550m-gaming-wifi",
        vga: "rtx-3070-ti-8gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-450w"
    },
    '9m-10m': {
        cpu: "amd-ryzen-7-5800x3d",
        mainboard: "jginyue-b650m-d",
        vga: "rtx-3080-10gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-450w"
    },
    '10m-11m': {
        cpu: "amd-ryzen-9-5900x",
        mainboard: "jginyue-b650m-pro",
        vga: "rtx-3080-ti-12gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-450w"
    },
    '11m-12m': {
        cpu: "amd-ryzen-9-5950x",
        mainboard: "asrock-b650m-hdv-m2",
        vga: "rtx-3090-24gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-450w"
    },
    '12m-13m': {
        cpu: "amd-ryzen-9-5950x",
        mainboard: "msi-pro-b650m-p",
        vga: "rtx-3090-ti-24gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-450w"
    },
    '13m-14m': {
        cpu: "amd-ryzen-9-7950x",
        mainboard: "asus-tuf-gaming-b650m-e",
        vga: "rtx-4090-24gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-450w"
    },
    '14m-15m': {
        cpu: "amd-ryzen-9-7950x3d",
        mainboard: "gigabyte-b650m-gaming-plus-wifi",
        vga: "rtx-4090-ti-24gb",
        ram: "sstc-ddr4-3200mhz-16gb",
        ssd: "sstc-oceanic-whitetip-256gb",
        case: "gaming-start-ga",
        'cpu-cooler': "jonsbo-cr-1000-rgb",
        psu: "vsp-elite-dt660-450w"
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // Khai báo các phần tử DOM
    const componentSelects = {
        cpu: document.getElementById('cpu'),
        mainboard: document.getElementById('mainboard'),
        // ... các phần tử khác
        vga: document.getElementById('vga'),
        ram: document.getElementById('ram'),
        ssd: document.getElementById('ssd'),
        psu: document.getElementById('psu'),
        case: document.getElementById('case'),
        'cpu-cooler': document.getElementById('cpu-cooler'),
        hdd: document.getElementById('hdd'),
        monitor: document.getElementById('monitor')
    };
    Object.entries(componentSelects).forEach(([name, element]) => {
        if (!element) {
            console.error(`Không tìm thấy phần tử #${name}`);
        }
    });

    // Các phần tử hiển thị
    const totalPriceDisplay = document.getElementById('total-price');
    const selectedComponentsList = document.getElementById('selected-components-list');
    const summaryModal = document.getElementById('summary-modal');
    const modalSummaryContent = document.getElementById('modal-summary');
    const modalTotalPriceDisplay = document.getElementById('modal-total-price');
    const imagePreviewContainer = document.getElementById('image-preview-container');
    const calculateButton = document.getElementById('calculate-button');

    // Thêm CSS
    const style = document.createElement('style');
    style.textContent = `
        .component-card {
            border: 1px solid #ddd;
            padding: 15px;
            margin: 10px 0;
            display: flex;
            align-items: center;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .component-image {
            max-width: 100px;
            margin-right: 20px;
            object-fit: contain;
        }
        #total-price {
            background: #f8f9fa;
            padding: 15px;
            margin-top: 20px;
            border-radius: 8px;
        }
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
        }
        .modal-content {
            background: white;
            padding: 20px;
            width: 90%;
            max-width: 800px;
            margin: 50px auto;
            border-radius: 10px;
        }
    `;
    document.head.appendChild(style);

    function updateSelectedComponents() {
        selectedComponentsList.innerHTML = '';
        let total = 0;

        // Tính toán tổng giá và tạo card
        for (const [type, select] of Object.entries(componentSelects)) {
            const value = select.value;
            if (value && components[type]?.[value]) {
                const component = components[type][value];
                total += component.price;

                const card = document.createElement('div');
                card.className = 'component-card';
                card.innerHTML = `
                    ${component.image ? `<img src="${component.image}" class="component-image" alt="${component.name}">` : ''}
                    <div class="component-info">
                        <h3>${component.name}</h3>
                        <p>Giá: ${component.price.toLocaleString()} VNĐ</p>
                        ${component.socket ? `<p>Socket: ${component.socket}</p>` : ''}
                        ${component.memoryType ? `<p>Loại RAM: ${component.memoryType}</p>` : ''}
                    </div>
                `;
                selectedComponentsList.appendChild(card);
            }
        }

        // Cập nhật tổng giá - FIX CHÍNH
        const priceElement = totalPriceDisplay.querySelector('p');
        if (priceElement) {
            priceElement.textContent = `${total.toLocaleString()} VNĐ`;
        } else {
            console.error('Không tìm thấy phần tử hiển thị giá');
        }
        
        return total;
    }

    function calculateTotalPriceAndSummary() {
        if (!modalSummaryContent || !modalTotalPriceDisplay || !imagePreviewContainer) {
            console.error("Missing modal elements");
            return;
        }
    
        const total = updateSelectedComponents();
    
        // Xử lý danh sách component
        modalSummaryContent.innerHTML = Object.entries(componentSelects)
            .filter(([_, select]) => select?.value)
            .map(([type, select]) => {
                const component = components[type]?.[select.value];
                return component 
                    ? `<li><strong>${type.toUpperCase()}:</strong> ${component.name} - ${component.price.toLocaleString()} VNĐ</li>`
                    : '<li>Thành phần không hợp lệ</li>';
            }).join('');
    
        // Xử lý tổng giá
        modalTotalPriceDisplay.textContent = `Tổng cộng: ${total.toLocaleString()} VNĐ`;
    
        // Xử lý hình ảnh
        imagePreviewContainer.innerHTML = Object.values(componentSelects)
            .filter(select => select?.value)
            .map(select => {
                const component = components[select.id]?.[select.value];
                return component?.image 
                    ? `<img src="${component.image}" style="max-width: 100px; margin: 5px;" alt="${component.name}">`
                    : '';
            }).join('');
    }

    function autoSelectConfig() {
        isAutoSelecting = true;

        const selectedBudget = document.getElementById('budget-range').value;
        const selectedGame = document.getElementById('game-genre').value;
        const selectedCpuType = document.getElementById('cpu-type').value;

        if (selectedGame === 'valorant') {
            const budgetConfigs = selectedCpuType === "Intel" ? intelBudgetConfigs : amdBudgetConfigs;
            const config = budgetConfigs[selectedBudget];

            if (config) {
                Object.entries(config).forEach(([type, value]) => {
                    const select = componentSelects[type];
                    if (select && components[type]?.[value]) {
                        select.value = value;
                    } else {
                        console.warn(`Thành phần "${value}" không tồn tại trong ${type}`);
                    }
                });
            }
        }

        isAutoSelecting = false;
        calculateTotalPriceAndSummary();
    }

    function populateDropdowns() {
        Object.entries(componentSelects).forEach(([type, select]) => {
            select.innerHTML = '<option value="" disabled selected>Chọn ' + type + '</option>';
            if (components[type]) {
                Object.entries(components[type]).forEach(([key, component]) => {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = component.name;
                    select.appendChild(option);
                });
            }
        });
    }

    // Event Listeners
    document.getElementById('game-genre').addEventListener('change', autoSelectConfig);
    document.getElementById('budget-range').addEventListener('change', autoSelectConfig);
    document.getElementById('cpu-type').addEventListener('change', autoSelectConfig);

    calculateButton.addEventListener('click', () => {
        summaryModal.style.display = "block";
    });

    document.querySelector('.close-modal').addEventListener('click', () => {
        summaryModal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === summaryModal) {
            summaryModal.style.display = "none";
        }
    });

    // Khởi tạo
    populateDropdowns();
    updateSelectedComponents();

    Object.values(componentSelects).forEach(select => {
        select.addEventListener('change', () => {
            if (!isAutoSelecting) calculateTotalPriceAndSummary();
        });
    });
});