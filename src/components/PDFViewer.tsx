type Props = { pdf_url: string };

const PDFViewer = ({ pdf_url }: Props) => {
  console.log(pdf_url);
  const encoded_pdf_url = encodeURIComponent(pdf_url);

  console.log(encoded_pdf_url);

  return (
    <iframe
      src={`https://docs.google.com/viewer?hl=en&embedded=true&url=${encoded_pdf_url}`}
      style={{ width: "100%", height: "100vh", border: "none" }}
    ></iframe>
  );
};

export default PDFViewer;

// https://docs.google.com/viewer?hl=en&embedded=true&url=https%3A%2F%2Fconverse-ai.s3.us-east-1.amazonaws.com%2Fassig02.docx
// https://converse-ai.s3.us-east-1.amazonaws.com/assig02.docx

// https://docs.google.com/viewerng/viewer?hl=en&url=https://converse-ai.s3.us-east-1.amazonaws/uploads/1730200203188Parking.pdf
// https://docs.google.com/viewer?hl=en&embedded=true&url=https%3A%2F%2Fconverse-ai.s3.us-east-1.amazonaws.com%2Fuploads%2F1730200203188Parking.pdf
// https://docs.google.com/viewer?hl=en&embedded=true&url=https%3A%2F%2Fconverse-ai.s3.us-east-1.amazonaws%2Fuploads%2F1730200203188Parking.pdf
