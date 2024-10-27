export default async function FormVAlidation(prevState, formData) {
  const formObj = Object.fromEntries(formData);

  const errors = {
    title: !formObj.title && "Sokak alanı boş olamaz.",
    content: !formObj.content && "Şehir alanı boş olamaz.",
    categoryId: !formObj.categoryId && "Posta kodu alanı boş olamaz.",
    roadmap: !formObj.roadmap && "roadmap alanı boş olamaz.",
  };
}
