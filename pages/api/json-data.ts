// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IJsonData, INode } from '../../components/0_atoms/types/dataType';
import chiefImg from './chief.png';

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

export const camelCaseAttributes = {
  node: {
    appearanceIndex: '1',
    id: '9zx87cv98z7xc9v879',
    type: 'valueNode',
    label: 'Watch My Attributes',

    attributes: 'true', // this will allow the compiler to convert the attributes to the node

    minLength: '3',
    maxLength: '100',
    placeHolderText: 'Enter Flat/apartment number',
    readOnly: 'false',

    color: 'false',
    dir: 'false',
    draggable: 'false',
    inputMode: 'true',
    spellCheck: 'false',
    tabIndex: 'false',
    title: 'false',
    translate: 'false',
    role: 'false',
    pattern: 'false',
    step: 'false',
    list: 'false',

    ariaAtomic: 'false',
    ariaBusy: 'false',
    ariaLive: 'false',
    ariaRelevant: 'false',
    ariaDropeffect: 'false',
    ariaFlowto: 'false',
    ariaLabel: 'Enter Flat/apartment number',
    ariaLabelledBy: 'Enter Flat/apartment number',
    ariaDescribedBy: 'Enter Flat/apartment number',
    ariaHidden: 'false',
    ariaInvalid: 'false',
    ariaRequired: 'false',
    ariaChecked: 'false',
    ariaExpanded: 'false',
    ariaLevel: 'false',
    ariaMultiSelectable: 'false',
    ariaMultiLine: 'false',
    ariaAutoComplete: 'false',
    ariaHasPopup: 'false',
    ariaOrientation: 'false',
    ariaGrabbed: 'false',
    ariaActiveDescendant: 'false',
    autoCapitalize: 'false',
    autoCorrect: 'false',
    autoSave: 'false',

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
};

export const normalAttributes = {
  // Converting the above cameCaseAttributes variable to normally used html attributes
  node: {
    appearanceIndex: '1',

    id: '9zx87cv98z7xc9v879',
    type: 'valueNode',
    label: 'Watch My Attributes',

    attributes: 'false', // this will allow the compiler to convert the attributes to the node

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
      value: '',
    },

    color: 'false',
    dir: 'false',
    draggable: 'false',
    'input-mode': 'true',
    'spell-check': 'false',
    'tab-index': 'false',
    title: 'false',
    translate: 'false',
    role: 'false',
    pattern: 'false',
    step: 'false',
    list: 'false',

    // The below attributes are converted from camelCaseAttributes
    'aria-atomic': 'false',
    'aria-busy': 'false',
    'aria-live': 'false',
    'aria-relevant': 'false',
    'aria-dropeffect': 'false',
    'aria-flowto': 'false',
    'aria-label': 'Enter Flat/apartment number',
    'aria-labelledby': 'Enter Flat/apartment number',
    'aria-describedby': 'Enter Flat/apartment number',
    'aria-hidden': 'false',
    'aria-invalid': 'false',
    'aria-required': 'false',
    'aria-checked': 'false',
    'aria-expanded': 'false',
    'aria-level': 'false',
    'aria-multiselectable': 'false',
    'aria-multiline': 'false',
    'aria-autocomplete': 'false',
    'aria-haspopup': 'false',
    'aria-orientation': 'false',
    'aria-grabbed': 'false',
    'aria-activedescendant': 'false',
    autocapitalize: 'false',
    autocomplete: 'false',
    autosave: 'false',
  },
};

export const getRepeatedNodes = (node: INode, count: number) => {
  const result = {
    node: {
      appearanceIndex: '4',
      type: 'Group',
      id: '6z5xc46v4zx65cv465z4xcv',
      minInstance: '1',
      maxInstance: '3',
      groupLabel: 'Value Nodes with many attributes',
      childNodes: [...Array(parseInt(count)).fill(node)],
    },
  };
  console.log(result, count, node);
  return result;
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
    // {
    //   node: {
    //     type: 'customTag-div',
    //     id: 'customID-1',
    //     style: {
    //       'background-color': '#f5f5f5',
    //       'border-radius': '1rem',
    //       border: '1px solid #e0e0e0',
    //       margin: '0px auto',
    //       padding: '10px 20px',
    //       color: '#a293cb',
    //       width: '300px',
    //       display: 'flex',
    //       'flex-direction': 'column',
    //     },
    //     childNodes: [
    //       {
    //         node: {
    //           type: 'customTag-h3',
    //           id: 'customID-2',
    //           style: {
    //             color: '#7b57e2',
    //             margin: '0px !important',
    //             'text-align': 'center',
    //           },
    //           data: {
    //             value: 'Contractors',
    //           },
    //         },
    //       },
    //       {
    //         node: {
    //           type: 'customTag-h4',
    //           id: 'customID-3',
    //           style: {
    //             color: '#a5a5a5',
    //             margin: '0px !important',
    //             'text-align': 'center',
    //           },
    //           data: {
    //             value: 'Commercial & Residential',
    //           },
    //         },
    //       },
    //       {
    //         node: {
    //           type: 'customTag-img',
    //           id: 'customID-4',
    //           style: {
    //             color: '#a5a5a5',
    //             margin: '1rem auto !important',
    //             'text-align': 'center',
    //           },
    //           closedTag: 'true',
    //           src: chiefImg.src,
    //           data: {
    //             value: '',
    //           },
    //         },
    //       },
    //       {
    //         node: {
    //           type: 'customTag-h3',
    //           id: 'customID-5',
    //           style: {
    //             color: '#303039',
    //             margin: '0px !important',
    //             'text-align': 'center',
    //           },
    //           data: {
    //             value: 'Service. Projects',
    //           },
    //         },
    //       },
    //       {
    //         node: {
    //           type: 'customTag-div',
    //           id: 'customID-6',
    //           style: {
    //             margin: '0px !important',
    //             padding: '10px 20px',
    //             display: 'flex',
    //             'flex-wrap': 'wrap',
    //             gap: '8px',
    //           },
    //           childNodes: [
    //             {
    //               node: {
    //                 type: 'customTag-span',
    //                 id: 'customID-7',
    //                 style: {
    //                   'background-color': '#c6eac0',
    //                   color: '#303039',
    //                   'border-radius': '1rem',
    //                   padding: '0px 10px 2px 10px',
    //                   'font-weight': '600',
    //                   'font-size': '12px !important',
    //                 },
    //                 data: {
    //                   value: 'Electrician',
    //                 },
    //               },
    //             },
    //             {
    //               node: {
    //                 type: 'customTag-span',
    //                 id: 'customID-8',
    //                 style: {
    //                   'background-color': '#c6eac0',
    //                   color: '#303039',
    //                   'border-radius': '1rem',
    //                   padding: '0px 10px 2px 10px',
    //                   'font-weight': '600',
    //                   'font-size': '12px !important',
    //                 },
    //                 data: {
    //                   value: 'Plumber',
    //                 },
    //               },
    //             },
    //             {
    //               node: {
    //                 type: 'customTag-span',
    //                 id: 'customID-9',
    //                 style: {
    //                   'background-color': '#c6eac0',
    //                   color: '#303039',
    //                   'border-radius': '1rem',
    //                   padding: '0px 10px 2px 10px',
    //                   'font-weight': '600',
    //                   'font-size': '12px !important',
    //                 },
    //                 data: {
    //                   value: 'HVAC',
    //                 },
    //               },
    //             },
    //             {
    //               node: {
    //                 type: 'customTag-span',
    //                 id: 'customID-10',
    //                 style: {
    //                   'background-color': '#c6eac0',
    //                   color: '#303039',
    //                   'border-radius': '1rem',
    //                   padding: '0px 10px 2px 10px',
    //                   'font-weight': '600',
    //                   'font-size': '12px !important',
    //                 },
    //                 data: {
    //                   value: 'Carpenter',
    //                 },
    //               },
    //             },
    //             {
    //               node: {
    //                 type: 'customTag-span',
    //                 id: 'customID-11',
    //                 style: {
    //                   'background-color': '#c6eac0',
    //                   color: '#303039',
    //                   'border-radius': '1rem',
    //                   padding: '0px 10px 2px 10px',
    //                   'font-weight': '600',
    //                   'font-size': '12px !important',
    //                 },
    //                 data: {
    //                   value: 'Conncrete',
    //                 },
    //               },
    //             },
    //             {
    //               node: {
    //                 type: 'customTag-span',
    //                 id: 'customID-12',
    //                 style: {
    //                   'background-color': '#c6eac0',
    //                   color: '#303039',
    //                   'border-radius': '1rem',
    //                   padding: '0px 10px 2px 10px',
    //                   'font-weight': '600',
    //                   'font-size': '12px !important',
    //                 },
    //                 data: {
    //                   value: 'Builder',
    //                 },
    //               },
    //             },
    //           ],
    //         },
    //       },
    //       {
    //         node: {
    //           type: 'customTag-button',
    //           id: 'customID-13',
    //           style: {
    //             'text-decoration': 'underline',
    //             color: '#7b43fb',
    //             margin: '0px auto !important',
    //             'font-weight': '600',
    //             'font-size': '12px !important',
    //           },
    //           data: {
    //             value: 'View all',
    //           },
    //         },
    //       },
    //       {
    //         node: {
    //           type: 'customTag-button',
    //           id: 'customID-14',
    //           style: {
    //             'background-color': '#7b43fb',
    //             color: '#fff',
    //             width: '70%',
    //             'border-radius': '0.25rem',
    //             'font-weight': '600',
    //             'font-size': '16px !important',
    //             margin: '1rem auto !important',
    //             padding: '0.5rem 0rem !important',
    //           },
    //           data: {
    //             value: 'Search Contractors',
    //           },
    //         },
    //       },
    //       {
    //         node: {
    //           type: 'customTag-button',
    //           id: 'customID-14',
    //           style: {
    //             color: '#7b43fb',
    //             margin: '0px auto !important',
    //             'font-weight': '600',
    //             'font-size': '12px !important',
    //           },
    //           data: {
    //             value: 'Join as a Contractor',
    //           },
    //         },
    //       },
    //     ],
    //   },
    // },
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
              type: 'valueNode',
              label: 'Enter your Name (min 3 and max 30 characters only)',
              placeHolderText: 'e.g. Akansh Goel',
              minLength: '3',
              maxLength: '30',
              errorLabel: 'Please enter a valid name',
              readOnly: 'false',
              required: 'true',
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
              id: 'q87ewr98qw7er987q9we',
              type: 'Date',
              label: 'Date of Birth (min 1980-01-01 and max 2002-01-01)',
              format: 'dd-mm-yyyy',
              readOnly: 'false',
              required: 'true',
              min: '1980-01-01',
              max: '2002-01-01',
              errorLabel: 'Please enter a valid date',
              style: {
                'Bold ': 'false',
                'Italic ': 'false',
                fontSize: '14',
                fontName: 'Times New Roman',
                cssStyle: 'None',
              },
              data: {
                value: '1950-01-01',
              },
            },
          },
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
              required: 'true',
              errorLabel: 'Please enter a valid number',
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
              id: 'submitButton1label',
              type: 'customTag-label',
              label: '',
              placeHolderText: '',
              readOnly: 'false',
              htmlFor: 'submitButton1',
              style: {
                fontName: 'Times New Roman',
              },
              data: {
                value: 'Click below Button (or me) to see validation',
              },
            },
          },
          {
            node: {
              appearanceIndex: '2',
              id: 'submitButton1',
              type: 'submit',
              label: '',
              placeHolderText: '',
              readOnly: 'false',
              style: {
                'background-color': '#d97700',
                color: '#ffffff',
                margin: '0.5rem auto',
                padding: '2px 8px',
                'font-size': '1.2rem',
                'border-radius': '8px',
                cursor: 'pointer',
              },
              data: {
                value: 'Submit Button',
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
              type: 'customTag-button',
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
