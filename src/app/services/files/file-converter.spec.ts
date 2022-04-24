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

  fit('should return a McqQuestion json when given a file list', () => {
    const files: FileList = getFileList(mockMcqQuestionCsvData());
    let file = files.item(0);
    let reader: FileReader = new FileReader();
    reader.readAsText(<Blob>file);
    reader.onload = (e) => {
      let data: string = reader.result as string;
      console.log(`data is \n${data}`);
    }
  });
});
