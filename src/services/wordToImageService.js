import mergeImages from "merge-images";
import http from "./httpService";

export async function getImageForWord(word) {
  const { data } = await http.get(`/imagewords/?label=${word}`);
  return data.results[0].url;
}

export async function getImageForId(id) {
  const { data } = await http.get(`/imagewords/${id}/`);
  return data;
}

export async function getImagesForWords(words) {
  const { data } = await http.get(`/get_images_for_words/?words=${words}`);

  const completeWords = words.trim().split(",");
  completeWords.pop();

  const imageUrls = [];
  completeWords.forEach((item) => {
    const img = data.find(
      (i) => item.toLowerCase().indexOf(i.label.toLowerCase()) > -1
    );
    imageUrls.push(img.url);
  });
  return imageUrls;
}

export async function getAutoCompleteWords(word) {
  const { data } = await http.get(`/imagewords/?search=${word}`);
  const wordList = [];
  data.results.forEach((item) => {
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

export async function getPageSize() {
  const { data } = await http.get("/imagewords/");
  return data.count;
}

export async function getImagesListForPageNo(pageNo) {
  const { data } = await http.get(`/imagewords/?page=${pageNo}`);
  return data.results;
}

export async function getImagesCount() {
  const { data } = await http.get(`/imagewords/`);
  return data.count;
}

export async function saveImage(data) {
  const img = {
    label: data.word,
    url: data.imageLink,
  };
  if (data.id) {
    const result = await http.put(`/imagewords/${data.id}/`, img);
    return result.data;
  } else {
    const result = await http.post("/imagewords/", img);
    return result.data;
  }
}

export async function deleteImageWithId(id) {
  const result = await http.delete(`/imagewords/${id}/`);
  return result.data;
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
