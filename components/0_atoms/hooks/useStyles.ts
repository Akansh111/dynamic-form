import { useMemo } from 'react';
import { ISubNode } from '../types/dataType';

export default function useStyles({ node }: { node: ISubNode }) {
  const { styleClassNames, styleInString } = useMemo(() => {
    let styleClassNames = '';

    let styleInString = '';
    Object.entries(node?.style || {}).map((key) => {
      const k1 = key[0].toLocaleLowerCase();
      const k2 = key[1].toLocaleLowerCase();

      if (k1 === 'Bold '.toLocaleLowerCase() && k2 === 'true') {
        styleClassNames += ' font-bold ';
      } else if (k1 === 'Italic '.toLocaleLowerCase() && k2 === 'true') {
        styleClassNames += ' italic ';
      } else if (k1 === 'underline'.toLocaleLowerCase() && k2 === 'true') {
        styleClassNames += ' underline ';
      } else {
        styleInString += `${key[0]}: ${key[1]};`;
      }
    });
    styleInString = styleInString.replaceAll('fontSize', 'font-size');
    styleInString = styleInString.replaceAll('fontName', 'font-family');
    styleInString = styleInString.replaceAll('Times New Roman', '"Times New Roman", Times, serif');

    return {
      styleClassNames,
      styleInString,
    };
  }, [node]);

  return {
    styleClassNames,
    styleInString,
  };
}
