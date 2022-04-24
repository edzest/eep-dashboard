import { FileConverter } from './file-converter';

describe('FileConverter', () => {
  const mockMcqQuestionCsvData = () => {
    return '"1","What is the capital of India?","New Delhi","Patna","Mumbai","Agartala"\n'
         + '"2","Who is the current Prime Minister of India?","Narendra Modi","Rahul Gandhi","Nitin Gadkari","Jayshankar Prasad"\n'
         + '"3","What is the national animal of India?","Tiger","Cheetah","Elephant","Cow"';

  }
  const getFileList = (blobTxt: string) => {
    const blob = new Blob([blobTxt], { type: "text/csv" });
    const file = <File>blob;
    const fileList: FileList = {
      0: file,
      length: 1,
      item: (index: number) => file
    };
    return fileList;
  };

  it('should create an instance', () => {
    expect(new FileConverter()).toBeTruthy();
  });
});
