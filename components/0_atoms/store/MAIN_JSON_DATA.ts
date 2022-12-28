import { home_depot_json } from '../../../pages/api/json-data';

const MAIN_JSON_DATA = {
  ...home_depot_json,

  // nodes: [
  //   ...MAIN_JSON_DATA.nodes,
  //   JSON.parse(
  //     JSON.stringify(getRepeatedNodes(useSettings.getState().settings.nodeType, useSettings.getState().settings.count)),
  //   ),
  // ],
};

export default MAIN_JSON_DATA;
