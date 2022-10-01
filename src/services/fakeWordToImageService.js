import mergeImages from "merge-images";

const images = [
  {
    id: 1,
    label: "Total",
    url: "https://picsum.photos/seed/gqMy/200/200",
  },
  {
    id: 2,
    label: "core",
    url: "https://picsum.photos/seed/tCLe/200/200",
  },
  {
    id: 3,
    label: "task-force",
    url: "https://picsum.photos/seed/QucL/200/200",
  },
  {
    id: 4,
    label: "neural-net",
    url: "https://picsum.photos/seed/yNVX/200/200",
  },
  {
    id: 5,
    label: "Ergonomic",
    url: "https://picsum.photos/seed/pTTW/200/200",
  },
  {
    id: 6,
    label: "hierarchy",
    url: "https://picsum.photos/seed/SJLh/200/200",
  },
  {
    id: 7,
    label: "software",
    url: "https://picsum.photos/seed/VXMk/200/200",
  },
  {
    id: 8,
    label: "Ameliorated",
    url: "https://picsum.photos/seed/iTXe/200/200",
  },
  {
    id: 9,
    label: "asymmetric",
    url: "https://picsum.photos/seed/kfKV/200/200",
  },
  {
    id: 10,
    label: "Enhanced",
    url: "https://picsum.photos/seed/ODdy/200/200",
  },
  {
    id: 11,
    label: "Triple-buffered",
    url: "https://picsum.photos/seed/kqOV/200/200",
  },
  {
    id: 12,
    label: "Business-focused",
    url: "https://picsum.photos/seed/ePoX/200/200",
  },
  {
    id: 13,
    label: "neural-net",
    url: "https://picsum.photos/seed/SuEl/200/200",
  },
  {
    id: 14,
    label: "solution",
    url: "https://picsum.photos/seed/yMYO/200/200",
  },
  {
    id: 15,
    label: "pricing structure",
    url: "https://picsum.photos/seed/StLO/200/200",
  },
  {
    id: 16,
    label: "logistical",
    url: "https://picsum.photos/seed/SDkg/200/200",
  },
  {
    id: 17,
    label: "attitude",
    url: "https://picsum.photos/seed/EQPS/200/200",
  },
  {
    id: 18,
    label: "Future-proofed",
    url: "https://picsum.photos/seed/FelW/200/200",
  },
  {
    id: 19,
    label: "intermediate",
    url: "https://picsum.photos/seed/nycp/200/200",
  },
  {
    id: 20,
    label: "Ergonomic",
    url: "https://picsum.photos/seed/jyIk/200/200",
  },
  {
    id: 21,
    label: "Quality-focused",
    url: "https://picsum.photos/seed/gPZg/200/200",
  },
  {
    id: 22,
    label: "empowering",
    url: "https://picsum.photos/seed/tsMT/200/200",
  },
  {
    id: 23,
    label: "support",
    url: "https://picsum.photos/seed/bXrv/200/200",
  },
  {
    id: 24,
    label: "logistical",
    url: "https://picsum.photos/seed/iubb/200/200",
  },
  {
    id: 25,
    label: "Horizontal",
    url: "https://picsum.photos/seed/OSfR/200/200",
  },
  {
    id: 26,
    label: "Optimized",
    url: "https://picsum.photos/seed/OCEB/200/200",
  },
  {
    id: 27,
    label: "intangible",
    url: "https://picsum.photos/seed/sMVw/200/200",
  },
  {
    id: 28,
    label: "Organic",
    url: "https://picsum.photos/seed/EZVk/200/200",
  },
  {
    id: 29,
    label: "interface",
    url: "https://picsum.photos/seed/pKkB/200/200",
  },
  {
    id: 30,
    label: "mobile",
    url: "https://picsum.photos/seed/xFYy/200/200",
  },
  {
    id: 31,
    label: "real-time",
    url: "https://picsum.photos/seed/Hoji/200/200",
  },
  {
    id: 32,
    label: "alliance",
    url: "https://picsum.photos/seed/zmHY/200/200",
  },
  {
    id: 33,
    label: "installation",
    url: "https://picsum.photos/seed/Xsjs/200/200",
  },
  {
    id: 34,
    label: "24/7",
    url: "https://picsum.photos/seed/AcGr/200/200",
  },
  {
    id: 35,
    label: "Right-sized",
    url: "https://picsum.photos/seed/QpbJ/200/200",
  },
  {
    id: 36,
    label: "neural-net",
    url: "https://picsum.photos/seed/AyRq/200/200",
  },
  {
    id: 37,
    label: "Profound",
    url: "https://picsum.photos/seed/wWtY/200/200",
  },
  {
    id: 38,
    label: "composite",
    url: "https://picsum.photos/seed/ZjVZ/200/200",
  },
  {
    id: 39,
    label: "demand-driven",
    url: "https://picsum.photos/seed/BKBL/200/200",
  },
  {
    id: 40,
    label: "impactful",
    url: "https://picsum.photos/seed/AQZq/200/200",
  },
  {
    id: 41,
    label: "leverage",
    url: "https://picsum.photos/seed/tJaV/200/200",
  },
  {
    id: 42,
    label: "impactful",
    url: "https://picsum.photos/seed/vaZo/200/200",
  },
  {
    id: 43,
    label: "concept",
    url: "https://picsum.photos/seed/peDf/200/200",
  },
  {
    id: 44,
    label: "Mandatory",
    url: "https://picsum.photos/seed/qPTN/200/200",
  },
  {
    id: 45,
    label: "access",
    url: "https://picsum.photos/seed/ImqR/200/200",
  },
  {
    id: 46,
    label: "Extended",
    url: "https://picsum.photos/seed/Bvdw/200/200",
  },
  {
    id: 47,
    label: "Digitized",
    url: "https://picsum.photos/seed/STLc/200/200",
  },
  {
    id: 48,
    label: "client-driven",
    url: "https://picsum.photos/seed/lTHH/200/200",
  },
  {
    id: 49,
    label: "Ameliorated",
    url: "https://picsum.photos/seed/DEYA/200/200",
  },
  {
    id: 50,
    label: "Profound",
    url: "https://picsum.photos/seed/FaNM/200/200",
  },
  {
    id: 51,
    label: "Compatible",
    url: "https://picsum.photos/seed/uixw/200/200",
  },
  {
    id: 52,
    label: "Face to face",
    url: "https://picsum.photos/seed/HzGO/200/200",
  },
  {
    id: 53,
    label: "Operative",
    url: "https://picsum.photos/seed/ykKx/200/200",
  },
  {
    id: 54,
    label: "Persevering",
    url: "https://picsum.photos/seed/qGMP/200/200",
  },
  {
    id: 55,
    label: "collaboration",
    url: "https://picsum.photos/seed/LShZ/200/200",
  },
  {
    id: 56,
    label: "reciprocal",
    url: "https://picsum.photos/seed/rVKZ/200/200",
  },
  {
    id: 57,
    label: "Graphical User Interface",
    url: "https://picsum.photos/seed/VFXr/200/200",
  },
  {
    id: 58,
    label: "Reactive",
    url: "https://picsum.photos/seed/mHSJ/200/200",
  },
  {
    id: 59,
    label: "architecture",
    url: "https://picsum.photos/seed/Gftz/200/200",
  },
  {
    id: 60,
    label: "hardware",
    url: "https://picsum.photos/seed/fzMH/200/200",
  },
  {
    id: 61,
    label: "definition",
    url: "https://picsum.photos/seed/opBc/200/200",
  },
  {
    id: 62,
    label: "Expanded",
    url: "https://picsum.photos/seed/XNkg/200/200",
  },
  {
    id: 63,
    label: "maximized",
    url: "https://picsum.photos/seed/cojt/200/200",
  },
  {
    id: 64,
    label: "Face to face",
    url: "https://picsum.photos/seed/DLtb/200/200",
  },
  {
    id: 65,
    label: "Self-enabling",
    url: "https://picsum.photos/seed/RQjR/200/200",
  },
  {
    id: 66,
    label: "background",
    url: "https://picsum.photos/seed/hrIU/200/200",
  },
  {
    id: 67,
    label: "Automated",
    url: "https://picsum.photos/seed/DDPX/200/200",
  },
  {
    id: 68,
    label: "user-facing",
    url: "https://picsum.photos/seed/xUcq/200/200",
  },
  {
    id: 69,
    label: "De-engineered",
    url: "https://picsum.photos/seed/gaac/200/200",
  },
  {
    id: 70,
    label: "Graphical User Interface",
    url: "https://picsum.photos/seed/GGlQ/200/200",
  },
  {
    id: 71,
    label: "user-facing",
    url: "https://picsum.photos/seed/winQ/200/200",
  },
  {
    id: 72,
    label: "asynchronous",
    url: "https://picsum.photos/seed/SGXu/200/200",
  },
  {
    id: 73,
    label: "Pre-emptive",
    url: "https://picsum.photos/seed/iUhQ/200/200",
  },
  {
    id: 74,
    label: "impactful",
    url: "https://picsum.photos/seed/tfhG/200/200",
  },
  {
    id: 75,
    label: "client-server",
    url: "https://picsum.photos/seed/MikY/200/200",
  },
  {
    id: 76,
    label: "Universal",
    url: "https://picsum.photos/seed/oCle/200/200",
  },
  {
    id: 77,
    label: "directional",
    url: "https://picsum.photos/seed/zSHI/200/200",
  },
  {
    id: 78,
    label: "mobile",
    url: "https://picsum.photos/seed/NOUb/200/200",
  },
  {
    id: 79,
    label: "internet solution",
    url: "https://picsum.photos/seed/qtGS/200/200",
  },
  {
    id: 80,
    label: "stable",
    url: "https://picsum.photos/seed/UvIC/200/200",
  },
  {
    id: 81,
    label: "bi-directional",
    url: "https://picsum.photos/seed/IpFm/200/200",
  },
  {
    id: 82,
    label: "uniform",
    url: "https://picsum.photos/seed/IgqT/200/200",
  },
  {
    id: 83,
    label: "extranet",
    url: "https://picsum.photos/seed/yzlL/200/200",
  },
  {
    id: 84,
    label: "Persevering",
    url: "https://picsum.photos/seed/NwsL/200/200",
  },
  {
    id: 85,
    label: "directional",
    url: "https://picsum.photos/seed/UQxm/200/200",
  },
  {
    id: 86,
    label: "Mandatory",
    url: "https://picsum.photos/seed/jDjl/200/200",
  },
  {
    id: 87,
    label: "Managed",
    url: "https://picsum.photos/seed/Rpno/200/200",
  },
  {
    id: 88,
    label: "help-desk",
    url: "https://picsum.photos/seed/tcFu/200/200",
  },
  {
    id: 89,
    label: "Switchable",
    url: "https://picsum.photos/seed/PXxy/200/200",
  },
  {
    id: 90,
    label: "Function-based",
    url: "https://picsum.photos/seed/CbQI/200/200",
  },
  {
    id: 91,
    label: "Cross-group",
    url: "https://picsum.photos/seed/UHdG/200/200",
  },
  {
    id: 92,
    label: "infrastructure",
    url: "https://picsum.photos/seed/XoBI/200/200",
  },
  {
    id: 93,
    label: "Down-sized",
    url: "https://picsum.photos/seed/GTsb/200/200",
  },
  {
    id: 94,
    label: "asynchronous",
    url: "https://picsum.photos/seed/LwXa/200/200",
  },
  {
    id: 95,
    label: "standardization",
    url: "https://picsum.photos/seed/lHGV/200/200",
  },
  {
    id: 96,
    label: "Intuitive",
    url: "https://picsum.photos/seed/jazO/200/200",
  },
  {
    id: 97,
    label: "ability",
    url: "https://picsum.photos/seed/PbXU/200/200",
  },
  {
    id: 98,
    label: "leverage",
    url: "https://picsum.photos/seed/TexG/200/200",
  },
  {
    id: 99,
    label: "hierarchy",
    url: "https://picsum.photos/seed/NYsh/200/200",
  },
  {
    id: 100,
    label: "secondary",
    url: "https://picsum.photos/seed/LHlJ/200/200",
  },
];

const words = [
  {
    id: 1,
    word: "Multi-lateral",
    image_id: 50,
  },
  {
    id: 2,
    word: "discrete",
    image_id: 75,
  },
  {
    id: 3,
    word: "success",
    image_id: 37,
  },
  {
    id: 4,
    word: "stable",
    image_id: 74,
  },
  {
    id: 5,
    word: "pricing structure",
    image_id: 89,
  },
  {
    id: 6,
    word: "neutral",
    image_id: 28,
  },
  {
    id: 7,
    word: "Versatile",
    image_id: 42,
  },
  {
    id: 8,
    word: "Exclusive",
    image_id: 81,
  },
  {
    id: 9,
    word: "secured line",
    image_id: 97,
  },
  {
    id: 10,
    word: "multimedia",
    image_id: 33,
  },
  {
    id: 11,
    word: "incremental",
    image_id: 53,
  },
  {
    id: 12,
    word: "Switchable",
    image_id: 74,
  },
  {
    id: 13,
    word: "Advanced",
    image_id: 72,
  },
  {
    id: 14,
    word: "dedicated",
    image_id: 45,
  },
  {
    id: 15,
    word: "contextually-based",
    image_id: 17,
  },
  {
    id: 16,
    word: "budgetary management",
    image_id: 64,
  },
  {
    id: 17,
    word: "Ergonomic",
    image_id: 42,
  },
  {
    id: 18,
    word: "Team-oriented",
    image_id: 86,
  },
  {
    id: 19,
    word: "attitude-oriented",
    image_id: 37,
  },
  {
    id: 20,
    word: "next generation",
    image_id: 16,
  },
  {
    id: 21,
    word: "Organized",
    image_id: 34,
  },
  {
    id: 22,
    word: "Quality-focused",
    image_id: 51,
  },
  {
    id: 23,
    word: "data-warehouse",
    image_id: 84,
  },
  {
    id: 24,
    word: "secondary",
    image_id: 23,
  },
  {
    id: 25,
    word: "Expanded",
    image_id: 1,
  },
  {
    id: 26,
    word: "knowledge user",
    image_id: 75,
  },
  {
    id: 27,
    word: "help-desk",
    image_id: 3,
  },
  {
    id: 28,
    word: "Up-sized",
    image_id: 63,
  },
  {
    id: 29,
    word: "Object-based",
    image_id: 75,
  },
  {
    id: 30,
    word: "protocol",
    image_id: 8,
  },
  {
    id: 31,
    word: "methodology",
    image_id: 18,
  },
  {
    id: 32,
    word: "fresh-thinking",
    image_id: 51,
  },
  {
    id: 33,
    word: "standardization",
    image_id: 13,
  },
  {
    id: 34,
    word: "interactive",
    image_id: 92,
  },
  {
    id: 35,
    word: "synergy",
    image_id: 55,
  },
  {
    id: 36,
    word: "disintermediate",
    image_id: 23,
  },
  {
    id: 37,
    word: "Mandatory",
    image_id: 53,
  },
  {
    id: 38,
    word: "systematic",
    image_id: 14,
  },
  {
    id: 39,
    word: "Fundamental",
    image_id: 8,
  },
  {
    id: 40,
    word: "content-based",
    image_id: 52,
  },
  {
    id: 41,
    word: "Synchronised",
    image_id: 6,
  },
  {
    id: 42,
    word: "logistical",
    image_id: 97,
  },
  {
    id: 43,
    word: "responsive",
    image_id: 22,
  },
  {
    id: 44,
    word: "Graphical User Interface",
    image_id: 73,
  },
  {
    id: 45,
    word: "flexibility",
    image_id: 98,
  },
  {
    id: 46,
    word: "success",
    image_id: 91,
  },
  {
    id: 47,
    word: "Self-enabling",
    image_id: 48,
  },
  {
    id: 48,
    word: "Face to face",
    image_id: 52,
  },
  {
    id: 49,
    word: "Enhanced",
    image_id: 68,
  },
  {
    id: 50,
    word: "heuristic",
    image_id: 4,
  },
  {
    id: 51,
    word: "methodology",
    image_id: 29,
  },
  {
    id: 52,
    word: "Fully-configurable",
    image_id: 71,
  },
  {
    id: 53,
    word: "stable",
    image_id: 8,
  },
  {
    id: 54,
    word: "Customizable",
    image_id: 48,
  },
  {
    id: 55,
    word: "holistic",
    image_id: 92,
  },
  {
    id: 56,
    word: "Customer-focused",
    image_id: 17,
  },
  {
    id: 57,
    word: "Virtual",
    image_id: 13,
  },
  {
    id: 58,
    word: "coherent",
    image_id: 21,
  },
  {
    id: 59,
    word: "Team-oriented",
    image_id: 70,
  },
  {
    id: 60,
    word: "alliance",
    image_id: 88,
  },
  {
    id: 61,
    word: "Decentralized",
    image_id: 33,
  },
  {
    id: 62,
    word: "Realigned",
    image_id: 1,
  },
  {
    id: 63,
    word: "Business-focused",
    image_id: 52,
  },
  {
    id: 64,
    word: "data-warehouse",
    image_id: 52,
  },
  {
    id: 65,
    word: "Ameliorated",
    image_id: 57,
  },
  {
    id: 66,
    word: "6th generation",
    image_id: 10,
  },
  {
    id: 67,
    word: "Pre-emptive",
    image_id: 25,
  },
  {
    id: 68,
    word: "motivating",
    image_id: 66,
  },
  {
    id: 69,
    word: "local area network",
    image_id: 43,
  },
  {
    id: 70,
    word: "full-range",
    image_id: 68,
  },
  {
    id: 71,
    word: "Synergized",
    image_id: 50,
  },
  {
    id: 72,
    word: "Organic",
    image_id: 1,
  },
  {
    id: 73,
    word: "Fully-configurable",
    image_id: 25,
  },
  {
    id: 74,
    word: "modular",
    image_id: 45,
  },
  {
    id: 75,
    word: "Persistent",
    image_id: 89,
  },
  {
    id: 76,
    word: "info-mediaries",
    image_id: 54,
  },
  {
    id: 77,
    word: "array",
    image_id: 88,
  },
  {
    id: 78,
    word: "Pre-emptive",
    image_id: 15,
  },
  {
    id: 79,
    word: "secured line",
    image_id: 30,
  },
  {
    id: 80,
    word: "extranet",
    image_id: 62,
  },
  {
    id: 81,
    word: "eco-centric",
    image_id: 86,
  },
  {
    id: 82,
    word: "adapter",
    image_id: 87,
  },
  {
    id: 83,
    word: "definition",
    image_id: 28,
  },
  {
    id: 84,
    word: "analyzer",
    image_id: 56,
  },
  {
    id: 85,
    word: "holistic",
    image_id: 11,
  },
  {
    id: 86,
    word: "actuating",
    image_id: 11,
  },
  {
    id: 87,
    word: "Quality-focused",
    image_id: 65,
  },
  {
    id: 88,
    word: "Function-based",
    image_id: 93,
  },
  {
    id: 89,
    word: "Cross-group",
    image_id: 97,
  },
  {
    id: 90,
    word: "high-level",
    image_id: 74,
  },
  {
    id: 91,
    word: "Extended",
    image_id: 18,
  },
  {
    id: 92,
    word: "Expanded",
    image_id: 33,
  },
  {
    id: 93,
    word: "emulation",
    image_id: 39,
  },
  {
    id: 94,
    word: "Advanced",
    image_id: 100,
  },
  {
    id: 95,
    word: "Face to face",
    image_id: 99,
  },
  {
    id: 96,
    word: "Optional",
    image_id: 18,
  },
  {
    id: 97,
    word: "mission-critical",
    image_id: 17,
  },
  {
    id: 98,
    word: "Configurable",
    image_id: 34,
  },
  {
    id: 99,
    word: "value-added",
    image_id: 19,
  },
  {
    id: 100,
    word: "Inverse",
    image_id: 3,
  },
];

export async function getImageForWord(word) {
  const w = words.find((item) => item.word === word);
  return getImageUrl(w.image_id);
}

export async function getImagesForWords(wordList) {
  const imageUrls = [];
  wordList.forEach((item) => {
    const w = words.find((i) => item.includes(i.word));
    if (w) {
      const imgUrl = getImageUrl(w.image_id);
      if (imgUrl) imageUrls.push(imgUrl);
    }
  });
  return imageUrls;
}

function getImageUrl(id) {
  const image = images.find((item) => item.id == id);
  return image.url;
}

export async function getAutoCompleteWords(word) {
  const wordList = [];

  words.forEach((item) => {
    if (
      item.word.toLowerCase().indexOf(word.toLowerCase()) !== -1 &&
      wordList.length < 10
    )
      wordList.push(item.word);
  });
  return wordList;
}

export async function getMergedImageUrl(imageUrls) {
  const imgData = [];
  imageUrls.forEach((imgUrl, idx) => {
    imgData.push({ src: imgUrl, x: idx * 200, y: 0 });
  });
  const result = await mergeImages(imgData, {
    crossOrigin: "anonymous",
    width: 200 * imgData.length,
    height: 200,
  });

  return result;
}

export async function saveImage(word, imageLink) {
  const imgId = images.length + 1;
  images.push({ id: imgId, label: word, url: imageLink });
  words.push({ id: words.length + 1, word: word, image_id: imgId });
}

export default {
  getImageForWord,
  getImagesForWords,
  getAutoCompleteWords,
  getMergedImageUrl,
  saveImage,
};
