import { useState } from "react";
import { Container, VStack, Heading, Text, Input, Button, Progress, useToast, Box, Textarea, IconButton } from "@chakra-ui/react";
import { FaFileUpload, FaDownload } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [convertedText, setConvertedText] = useState("");
  const toast = useToast();

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a Lao PDF file to convert.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    setProgress(30);

    // Simulate OCR processing and conversion
    setTimeout(() => {
      setProgress(60);
      // Simulate extracted text
      setConvertedText("ນີ້ແມ່ນຂໍ້ຄວາມທີ່ໄດ້ຖອນອອກຈາກ PDF");
      setProgress(100);
      setLoading(false);
      toast({
        title: "Conversion Successful",
        description: "The Lao PDF has been converted to editable text.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }, 2000);
  };

  const downloadDocx = () => {
    const blob = new Blob([convertedText], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "converted.docx";
    link.click();
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          Lao PDF to Word Converter
        </Heading>
        <Text>Upload your Lao PDF files and convert them into editable Word documents.</Text>

        <Box w="full">
          <Input type="file" accept=".pdf" onChange={handleFileChange} p={1} />
          <IconButton icon={<FaFileUpload />} onClick={handleUpload} isLoading={loading} colorScheme="blue" aria-label="Upload PDF" m={2} />
        </Box>

        {loading && <Progress hasStripe value={progress} w="full" />}

        {convertedText && (
          <>
            <Textarea value={convertedText} isReadOnly h="200px" />
            <Button leftIcon={<FaDownload />} colorScheme="green" onClick={downloadDocx}>
              Download as .docx
            </Button>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
