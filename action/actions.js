export default async function FormVAlidation(prevState, formData) {
  const formObj = Object.fromEntries(formData);

  const errors = {
    title: !formObj.title && "Başlık alanı boş olamaz.",
    content: !formObj.content && "İçerik alanı boş olamaz.",
    categoryId: !formObj.categoryId && "Kategori  alanı boş olamaz.",
    roadmap: !formObj.roadmap && "roadmap alanı boş olamaz.",
  };

  const filteredErrors = Object.fromEntries(
    Object.entries(errors).filter(([_, v]) => v)
  );

  // console.log("errors :>> ", filteredErrors);

  if (Object.keys(filteredErrors).length > 0) {
    return { error: filteredErrors };
  }
}
