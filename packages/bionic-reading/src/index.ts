import getBionicWordConvertor from './getBionicWordConvertor';
import { Options } from './types';
import conv2IntermediateWord from './conv2IntermediateWord';
import splitMap from './utils/splitMap';
import getOptions from './getOptions';

const getLineMergeChar = ({ markdown }: Options) => (markdown ? '\n' : '<br>');

export const bionicReading = (
  text: string,
  maybeOptions: Partial<Options> = {},
) => {
  if (!text?.length) {
    return '';
  }

  const options = getOptions(maybeOptions);
  const bionicWordConvertor = getBionicWordConvertor(options);
  const lineMergeChar = getLineMergeChar(options);

  const syllableToBionic = (syllable: string) => {
    const intermediate = conv2IntermediateWord(syllable, options.fixationPoint);
    return bionicWordConvertor(intermediate);
  };
  const wordToSyllable = (word: string) =>
    splitMap(word, '-', '-', syllableToBionic);
  const paragraphToWord = (paragraph: string) =>
    splitMap(paragraph, ' ', ' ', wordToSyllable);
  const textToParagraph = (text: string) =>
    splitMap(text, /\r?\n/, lineMergeChar, paragraphToWord);

  const bionicText = textToParagraph(text);
  return bionicText;
};