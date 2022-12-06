// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IJsonData } from '../../components/0_atoms/types/dataType';

export const oldJSON = {
  workflowId: '7561491',
  taskId: '3604477',
  userId: '5505194',
  taskName: 'Enter personal Information',
  taskDescription: 'Please enter your personal information to register',
  version: '1.0',
  previousTaskId: '1982165',
  nextTaskRef: '4511525',
  nodes: [
    {
      node: {
        appearanceIndex: '1',
        type: 'Group',
        id: '9413156',
        minInstance: '1',
        maxInstance: '1',
        groupLabel: 'Please Enter your name',
        childNodes: [
          {
            node: {
              appearanceIndex: '2',
              id: '5074390',
              type: 'valueNode',
              label: 'First Name',
              minLength: '3',
              maxLength: '30',
              placeHolderText: 'Enter First name here',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: '5074390',
              type: 'valueNode',
              label: 'First Name',
              minLength: '3',
              maxLength: '30',
              placeHolderText: 'Enter First name here',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: '5074390',
              type: 'valueNode',
              label: 'First Name',
              minLength: '3',
              maxLength: '30',
              placeHolderText: 'Enter First name here',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
        ],
      },
    },
    {
      node: {
        appearanceIndex: '2',
        id: '5074390',
        type: 'Date',
        label: 'Date of Birth',
        format: 'dd-mm-yyyy',
        readOnly: 'false',
        style: {
          'Bold ': 'false',
          'Italic ': 'false',
          fontSize: '14',
          fontName: 'Times New Roman',
          cssStyle: 'None',
        },
        data: {
          value: ' ',
        },
      },
    },
    {
      node: {
        appearanceIndex: '3',
        type: 'Group',
        id: '9190541',
        minInstance: '1',
        maxInstance: '3',
        groupLabel: 'Please Enter your Primary Address',
        childNodes: [
          {
            node: {
              appearanceIndex: '1',
              id: '5074390',
              type: 'valueNode',
              label: 'Address Line1',
              minLength: '3',
              maxLength: '100',
              placeHolderText: 'Enter Flat/apartment number',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: '5074390',
              type: 'valueNode',
              label: 'Line2',
              minLength: '3',
              maxLength: '100',
              placeHolderText: 'Area address',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '3',
              id: '5074390',
              type: 'valueNode',
              label: 'City',
              minLength: '3',
              maxLength: '30',
              placeHolderText: 'Enter City Name',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '4',
              id: '5074390',
              type: 'valueNode',
              label: 'Zip',
              minLength: '5',
              maxLength: '5',
              placeHolderText: 'Zip',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
        ],
      },
    },
    {
      node: {
        appearanceIndex: '3',
        type: 'Group',
        id: '5190541',
        minInstance: '1',
        maxInstance: '3',
        groupLabel: 'Please Enter your Office Address',
        childNodes: [
          {
            node: {
              appearanceIndex: '1',
              id: '5074390',
              type: 'valueNode',
              label: 'Address Line1',
              minLength: '3',
              maxLength: '100',
              placeHolderText: 'Enter Flat/apartment number',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: '5074390',
              type: 'valueNode',
              label: 'Line2',
              minLength: '3',
              maxLength: '100',
              placeHolderText: 'Area address',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '3',
              id: '5074390',
              type: 'valueNode',
              label: 'City',
              minLength: '3',
              maxLength: '30',
              placeHolderText: 'Enter City Name',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '4',
              id: '5074390',
              type: 'valueNode',
              label: 'Zip',
              minLength: '5',
              maxLength: '5',
              placeHolderText: 'Zip',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
        ],
      },
    },
  ],
};

export const newJSON = {
  workflowId: '7561491',
  taskId: '3604477',
  userId: '5505194',
  taskName: 'Enter personal Information',
  taskDescription: 'Please enter your personal information to register',
  version: '1.0',
  previousTaskId: '1982165',
  nextTaskRef: '4511525',
  nodes: [
    {
      node: {
        appearanceIndex: '1',
        type: 'Group',
        id: '987987987979798798',
        minInstance: '1',
        maxInstance: '1',
        groupLabel: 'Please Enter your name',
        childNodes: [
          {
            node: {
              appearanceIndex: '2',
              id: '6a65sfd465a4sd',
              type: 'Number',
              label: 'Enter Number from 1 to 10 (this range only works on form submit)',
              min: '1',
              max: '10',
              placeHolderText: 'Number Please',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '1',
              type: 'Group',
              id: 'a8s4df64asd6f5',
              minInstance: '1',
              maxInstance: '1',
              groupLabel: 'Please Enter your name',
              childNodes: [
                {
                  node: {
                    appearanceIndex: '2',
                    id: '654asd6f54a65sd4f65',
                    type: 'Number',
                    label: 'Enter Number from 1 to 10 (this range only works on form submit)',
                    min: '1',
                    max: '10',
                    placeHolderText: 'Number Please',
                    readOnly: 'false',
                    style: {
                      'Bold ': 'false',
                      'Italic ': 'false',
                      underline: 'false',
                      fontSize: '14',
                      fontName: 'Times New Roman',
                      cssStyle: 'None',
                    },
                    data: {
                      value: ' ',
                    },
                  },
                },
                {
                  node: {
                    appearanceIndex: '2',
                    id: 'aasd6f54a6s5d4f65a4',
                    type: 'button',
                    label: 'This button does nothing',
                    readOnly: 'false',
                    style: {
                      'Bold ': 'false',
                      'Italic ': 'false',
                      underline: 'false',
                      fontSize: '14',
                      fontName: 'Times New Roman',
                      cssStyle: 'None',
                    },
                    data: {
                      value: 'Click me',
                    },
                  },
                },
                {
                  node: {
                    appearanceIndex: '2',
                    id: 's78',
                    type: 'radio',
                    label: 'This radio ',
                    readOnly: 'false',
                    style: {
                      'Bold ': 'false',
                      'Italic ': 'false',
                      underline: 'false',
                      fontSize: '14',
                      fontName: 'Times New Roman',
                      cssStyle: 'None',
                    },
                    data: {
                      value: '',
                    },
                  },
                },
                {
                  node: {
                    appearanceIndex: '2',
                    id: 'as4d6',
                    type: 'select',
                    label: '',
                    readOnly: 'false',
                    style: {
                      fontSize: '14',
                      fontName: 'Times New Roman',
                      cssStyle: 'None',
                    },
                    childNodes: [
                      {
                        node: {
                          appearanceIndex: '2',
                          id: 's712eqwda8',
                          type: 'optgroup',
                          label: 'Option Group',
                          readOnly: 'false',
                          style: {
                            fontSize: '14',
                            fontName: 'Times New Roman',
                            cssStyle: 'None',
                          },

                          data: {
                            value: 'option 1',
                          },

                          childNodes: [
                            {
                              node: {
                                appearanceIndex: '2',
                                id: 's712eqwda8',
                                type: 'option',
                                label: '',
                                readOnly: 'false',
                                style: {
                                  fontSize: '14',
                                  fontName: 'Times New Roman',
                                  cssStyle: 'None',
                                },

                                data: {
                                  value: 'option 1',
                                },
                              },
                            },
                            {
                              node: {
                                appearanceIndex: '2',
                                id: '12eadsdfa',
                                type: 'option',
                                label: '',
                                readOnly: 'false',
                                style: {
                                  fontSize: '14',
                                  fontName: 'Times New Roman',
                                  cssStyle: 'None',
                                },

                                data: {
                                  value: 'option 2',
                                },
                              },
                            },
                          ],
                        },
                      },
                      {
                        node: {
                          appearanceIndex: '2',
                          id: '12eadsdfa',
                          type: 'option',
                          label: '',
                          readOnly: 'false',
                          style: {
                            fontSize: '14',
                            fontName: 'Times New Roman',
                            cssStyle: 'None',
                          },

                          data: {
                            value: 'option 2',
                          },
                        },
                      },
                    ],
                    data: {
                      value: 'select',
                    },
                  },
                },
                {
                  node: {
                    appearanceIndex: '2',
                    id: 'a654sdf68a4sd98f7',
                    type: 'checkbox',
                    label: 'This button does nothing',
                    readOnly: 'false',
                    style: {
                      'Bold ': 'false',
                      'Italic ': 'false',
                      underline: 'false',
                      fontSize: '14',
                      fontName: 'Times New Roman',
                      cssStyle: 'None',
                    },
                    data: {
                      value: 'Click me',
                    },
                  },
                },
                {
                  node: {
                    appearanceIndex: '2',
                    id: '9as87df98a7sd9f8789',
                    type: 'valueNode',
                    label: 'First Name',
                    minLength: '3',
                    maxLength: '30',
                    placeHolderText: 'Enter First name here',
                    readOnly: 'false',
                    style: {
                      'Bold ': 'false',
                      'Italic ': 'false',
                      underline: 'false',
                      fontSize: '14',
                      fontName: 'Times New Roman',
                      cssStyle: 'None',
                    },
                    data: {
                      value: ' ',
                    },
                  },
                },
                {
                  node: {
                    appearanceIndex: '2',
                    id: 'a98sd7f98a7sd9f879aaa',
                    type: 'valueNode',
                    label: 'First Name',
                    minLength: '3',
                    maxLength: '30',
                    placeHolderText: 'Enter First name here',
                    readOnly: 'false',
                    style: {
                      'Bold ': 'false',
                      'Italic ': 'false',
                      underline: 'false',
                      fontSize: '14',
                      fontName: 'Times New Roman',
                      cssStyle: 'None',
                    },
                    data: {
                      value: ' ',
                    },
                  },
                },
                {
                  node: {
                    appearanceIndex: '2',
                    id: 'asd7f98as7df987a9sd8f',
                    type: 'valueNode',
                    label: 'First Name',
                    minLength: '3',
                    maxLength: '30',
                    placeHolderText: 'Enter First name here',
                    readOnly: 'false',
                    style: {
                      'Bold ': 'false',
                      'Italic ': 'false',
                      underline: 'false',
                      fontSize: '14',
                      fontName: 'Times New Roman',
                      cssStyle: 'None',
                    },
                    data: {
                      value: ' ',
                    },
                  },
                },
              ],
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: 'asdsdafasd',
              type: 'customTag-h1',
              label: 'asdfasdf',
              readOnly: 'false',
              style: {
                'background-color': '#d97706',
                color: '#ffffff',
                margin: '0.5rem auto',
                padding: '2px 8px',
                'font-size': '1.2rem',
                'border-radius': '8px',
                cursor: 'pointer',
              },
              data: {
                value: 'Pure Button Tag',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: 'asdsdafasd',
              type: 'customTag-label',
              label: 'asdfasdf',
              readOnly: 'false',
              style: {
                margin: '0.5rem auto',
                padding: '2px 8px',
                'font-size': '1.2rem',
                'border-radius': '8px',
                cursor: 'pointer',
              },
              data: {
                value: 'This is a label field and below is input button',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: '9a8sdf8asdf8asd68f4a68',
              type: 'button',
              label: '',
              readOnly: 'false',
              style: {
                'background-color': '#14b8a6',
                color: 'white',
                margin: '0.5rem auto',
                padding: '2px 8px',
                'font-size': '1.2rem',
                'border-radius': '8px',
                cursor: 'pointer',
              },
              data: {
                value: 'Button',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: 'a4sdf654as6df54a98sd4f8sad',
              type: 'textarea',
              label: '',
              placeHolderText: 'Lets Start the journey',
              readOnly: 'false',
              style: {
                width: '100%',
                height: '150px',
                padding: '12px 20px',
                'box-sizing': 'border-box',
                border: '2px solid #ccc',
                'border-radius': '4px',
                'background-color': '#f8f8f8',
                'font-size': '16px',
                resize: 'none',
              },
              data: {
                value: '',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: '8g98g98hgf98hjf9g84h',
              type: 'checkbox',
              label: 'This button does nothing with no css',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: 'Click me',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: '798h7fg98h7c98vbc',
              type: 'valueNode',
              label: 'First Name',
              minLength: '3',
              maxLength: '30',
              placeHolderText: 'Enter First name here',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: '321vb3cx21bv3x21c3v1b2',
              type: 'valueNode',
              label: 'First Name',
              minLength: '3',
              maxLength: '30',
              placeHolderText: 'Enter First name here',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: 'xc7v98b7x9c8v7b98a7e',
              type: 'valueNode',
              label: 'First Name',
              minLength: '3',
              maxLength: '30',
              placeHolderText: 'Enter First name here',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
        ],
      },
    },
    {
      node: {
        appearanceIndex: '2',
        id: 'q87ewr98qw7er987q9we',
        type: 'Date',
        label: 'Date of Birth',
        format: 'dd-mm-yyyy',
        readOnly: 'false',
        style: {
          'Bold ': 'false',
          'Italic ': 'false',
          fontSize: '14',
          fontName: 'Times New Roman',
          cssStyle: 'None',
        },
        data: {
          value: ' ',
        },
      },
    },
    {
      node: {
        appearanceIndex: '3',
        type: 'Group',
        id: 'x98cv79bx7cv9b87xc9v87b9xv',
        minInstance: '1',
        maxInstance: '3',
        groupLabel: 'Please Enter your Primary Address',
        childNodes: [
          {
            node: {
              appearanceIndex: '1',
              id: '7987f9g87ah7a98eh7fd98d',
              type: 'valueNode',
              label: 'Address Line1',
              minLength: '3',
              maxLength: '100',
              placeHolderText: 'Enter Flat/apartment number',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: 'q9w8e7r98q7wer987q9w8er79',
              type: 'valueNode',
              label: 'Line2',
              minLength: '3',
              maxLength: '100',
              placeHolderText: 'Area address',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '3',
              id: 'z3xc1v32z1x3cv213zx2cv1321',
              type: 'valueNode',
              label: 'City',
              minLength: '3',
              maxLength: '30',
              placeHolderText: 'Enter City Name',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '4',
              id: 'a54sdf65a4ds65f4a65sdf465a4sdf',
              type: 'valueNode',
              label: 'Zip',
              minLength: '5',
              maxLength: '5',
              placeHolderText: 'Zip',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
        ],
      },
    },

    {
      node: {
        appearanceIndex: '1',
        type: 'fieldset',
        id: 'a8s4df64aasdfsd6f5',
        minInstance: '1',
        maxInstance: '1',
        groupLabel: 'field Set',
        childNodes: [
          {
            node: {
              appearanceIndex: '2',
              id: '9as87df98asdfa7sd9f8789',
              type: 'valueNode',
              label: 'First Name',
              minLength: '3',
              maxLength: '30',
              placeHolderText: 'Enter First name here',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: 'a98sd7f98a7sd9asdff879aaa',
              type: 'valueNode',
              label: 'First Name',
              minLength: '3',
              maxLength: '30',
              placeHolderText: 'Enter First name here',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
        ],
      },
    },
    {
      node: {
        appearanceIndex: '3',
        type: 'Group',
        id: '6z5xc46v4zx65cv465z4xcv',
        minInstance: '1',
        maxInstance: '3',
        groupLabel: 'Please Enter your Office Address',
        childNodes: [
          {
            node: {
              appearanceIndex: '1',
              id: '9zx87cv98z7xc9v879',
              type: 'valueNode',
              label: 'Address Line1',
              minLength: '3',
              maxLength: '100',
              placeHolderText: 'Enter Flat/apartment number',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: 'hj64kl65hj46kl54654',
              type: 'valueNode',
              label: 'Line2',
              minLength: '3',
              maxLength: '100',
              placeHolderText: 'Area address',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '3',
              id: 'xcv987w9879wh7s987f98',
              type: 'valueNode',
              label: 'City',
              minLength: '3',
              maxLength: '30',
              placeHolderText: 'Enter City Name',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
          {
            node: {
              appearanceIndex: '4',
              id: '654zx6c5v46z5v49q87w987q',
              type: 'valueNode',
              label: 'Zip',
              minLength: '5',
              maxLength: '5',
              placeHolderText: 'Zip',
              readOnly: 'false',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                underline: 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: ' ',
              },
            },
          },
        ],
      },
    },
  ],
};
export default function handler(req: NextApiRequest, res: NextApiResponse<IJsonData>) {
  res.status(200).json(newJSON);
}
