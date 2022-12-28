export interface IJsonData {
  workflowId?: string;
  taskId?: string;
  userId?: string;
  taskName?: string;
  taskDescription?: string;
  version?: string;
  previousTaskId?: string;
  nextTaskRef?: string;
  nodes?: INode[];
}

export interface INode {
  node: ISubNode;
}

export interface ISubNode {
  appearanceIndex: string;
  type: string;
  id: string;
  min?: string;
  max?: string;
  minInstance?: string;
  maxInstance?: string;
  groupLabel?: string;
  minLength?: string;
  maxLength?: string;
  errorLabel?: string;
  placeHolderText?: string;
  childNodes?: INode[];
  label?: string;
  format?: string;
  readOnly?: string;
  closedTag?: string;
  style?:
    | {
        'Bold '?: string;
        'Italic '?: string;
        underline?: string;
        fontSize?: string;
        fontName?: string;
        cssStyle?: string;
      }
    | any;
  data?: {
    value: string;
  };
}
