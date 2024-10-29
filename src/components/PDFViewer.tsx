type Props = { pdf_url: string };

const PDFViewer = ({ pdf_url }: Props) => {
  const encoded_pdf_url = encodeURIComponent(pdf_url);
  return (
    <iframe
      src={`https://docs.google.com/gview?url=${encoded_pdf_url}&embedded=false`}
      style={{ width: "100%", height: "100vh", border: "none" }}
    ></iframe>
  );
};

export default PDFViewer;
