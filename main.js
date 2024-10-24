async function readFileContent(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error('لم يتم العثور على الملف');
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

