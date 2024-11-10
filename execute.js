const uploadFileForFineTuning = async () => {
  const apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your actual API key
  const filePath = "data.jsonl"; // Replace with the actual path to your file

  // Creating a FormData object to hold the file and purpose parameters
  const formData = new FormData();
  formData.append("purpose", "fine-tune");
  formData.append("file", new File(["@mydata.jsonl"], "mydata.jsonl"));

  try {
    const response = await fetch("https://api.openai.com/v1/files", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log("File uploaded successfully:", result);
  } catch (error) {
    console.error("Failed to upload file:", error);
  }
};

uploadFileForFineTuning();