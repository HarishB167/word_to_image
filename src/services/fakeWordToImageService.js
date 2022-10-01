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

export async function getImageForWord(word) {
  const image = images.find((item) => item.label == word);
  return image.url;
}

export async function getImageForId(id) {
  return images.find((img) => img.id === parseInt(id));
}

export async function getImagesForWords(wordList) {
  const imageUrls = [];
  wordList.forEach((item) => {
    const img = images.find((i) => item.includes(i.label));
    imageUrls.push(img.url);
  });
  return imageUrls;
}

export async function getAutoCompleteWords(word) {
  const wordList = [];

  images.forEach((item) => {
    if (
      item.label.toLowerCase().indexOf(word.toLowerCase()) !== -1 &&
      wordList.length < 10
    )
      wordList.push(item.label);
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

export async function getImagesListForPageNo(pageNo, pageSize) {
  return images.slice(
    (pageNo - 1) * pageSize,
    (pageNo - 1) * pageSize + pageSize
  );
}

export async function getImagesCount() {
  return images.length;
}

export async function saveImage(data) {
  if (data.id) {
    const img = images.find((item) => item.id === data.id);
    img.label = data.word;
    img.url = data.imageLink;
    return img;
  } else {
    const newImage = { label: data.word, url: data.imageLink };
    newImage.id = new Date().getTime();
    images.push(newImage);
    return newImage;
  }
}

export async function deleteImageWithId(id) {
  let imageInDb = images.find((img) => img.id === id);
  images.splice(images.indexOf(imageInDb), 1);
  return imageInDb;
}

export default {
  getImageForWord,
  getImageForId,
  getImagesForWords,
  getAutoCompleteWords,
  getMergedImageUrl,
  getImagesListForPageNo,
  getImagesCount,
  saveImage,
};
