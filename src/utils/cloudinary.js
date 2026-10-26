export const uploadToCloudinary = async (base64Image) => {
  const formData = new FormData();
  formData.append("file", base64Image);
  formData.append("upload_preset", "amarise_preset");

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dunuhxwbw/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "Cloudinary upload failed");
  }
  return data.secure_url;
};
