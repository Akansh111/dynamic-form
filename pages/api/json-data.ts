// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IJsonData } from '../../components/types/dataType';

export default function handler(req: NextApiRequest, res: NextApiResponse<IJsonData>) {
  res.status(200).json({
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
  });
}
