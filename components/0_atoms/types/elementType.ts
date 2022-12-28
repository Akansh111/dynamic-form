export const MAIN_TYPES = {
  GROUP: 'Group',
  VALUE_NODE: 'valueNode',
  CUSTOM_TAG: 'customTag',
  // CUSTOM_TAG_CLOSED: 'customTagClosed', // future feature
};

export const TAG_NAMES = ['DIV', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

export const TAG_BY_CATEGORY = {
  Group: ['GROUP'],
  INPUT_TYPES: [
    'TEXT',
    'TEXTAREA',
    'RADIO',
    'CHECKBOX',
    // 'SELECT',
    // 'OPTION',
    'SUBMIT',
    'MONTH',
    'WEEK',
    'DATE',
    'TIME',
    'EMAIL',
    'NUMBER',
    'PASSWORD',
    'COLOR',
    'IMAGE',
    'RANGE',
    'SEARCH',
    'DATETIME-LOCAL',
  ],
  Text: ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'LABEL'],
  // List: ['UL', 'OL', 'LI'],
  OTHER_TYPES: ['DIV'],
};

export const ALL_TAGS = [
  ...TAG_BY_CATEGORY.Group,
  ...TAG_BY_CATEGORY.INPUT_TYPES,
  ...TAG_BY_CATEGORY.Text,
  // ...TAG_BY_CATEGORY.List,
  ...TAG_BY_CATEGORY.OTHER_TYPES,
];

const SPECIAL_CUSTOM_TAGS = ['OPTION', 'SELECT'];

export const TAGS = {
  [MAIN_TYPES.GROUP]: [...TAG_BY_CATEGORY.Group],
  [MAIN_TYPES.VALUE_NODE]: [...TAG_BY_CATEGORY.INPUT_TYPES.filter((tag) => !SPECIAL_CUSTOM_TAGS.includes(tag))],
  [MAIN_TYPES.CUSTOM_TAG]: [...TAG_BY_CATEGORY.Text, ...TAG_BY_CATEGORY.OTHER_TYPES, ...SPECIAL_CUSTOM_TAGS],
  // [MAIN_TYPES.CUSTOM_TAG]: [...TAG_BY_CATEGORY.OTHER_TYPES, ...TAG_BY_CATEGORY.Text],
  // [MAIN_TYPES.CUSTOM_TAG_CLOSED]: [...TAG_BY_CATEGORY.List],
};
