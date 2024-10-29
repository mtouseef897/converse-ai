type Props = { pdf_url: string };

const PDFViewer = ({ pdf_url }: Props) => {
  return (
    <iframe
      src={`https://docs.google.com/gview?url=${pdf_url}&embedded=true`}
      style={{ width: '100%', height: '100vh', border: 'none' }}
    ></iframe>
  );
};

export default PDFViewer;
